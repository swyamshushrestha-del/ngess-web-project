import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mic, MicOff, Volume2, MessageSquare } from "lucide-react";
import { GoogleGenAI, Modality, LiveServerMessage } from "@google/genai";

export const AITutor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const outputContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

  const toggleTutor = async () => {
    if (isActive) {
      stopTutor();
    } else {
      startTutor();
    }
  };

  const startTutor = async () => {
    setIsConnecting(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      sessionRef.current = await ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-12-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: "You are 'Galaxy AI Tutor', a friendly language practice partner for students at New Galaxy English Secondary School in Pokhara. Help them practice English or Nepali. Be encouraging, patient, and educational. Keep responses concise for real-time conversation.",
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } }
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {}
        },
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsConnecting(false);
            startMic();
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data) {
              const base64Audio = message.serverContent.modelTurn.parts[0].inlineData.data;
              playAudio(base64Audio);
            }
          },
          onclose: () => stopTutor(),
          onerror: (err) => {
            console.error("Live API Error:", err);
            stopTutor();
          }
        }
      });
    } catch (err) {
      console.error("Failed to connect:", err);
      setIsConnecting(false);
    }
  };

  const stopTutor = () => {
    if (!isActive && !isConnecting) return;
    setIsActive(false);
    setIsConnecting(false);
    sessionRef.current?.close();
    sessionRef.current = null;
    stopMic();
  };

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
      sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);

      processorRef.current.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        const pcmData = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
        }
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
        sessionRef.current?.sendRealtimeInput({
          audio: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
        });
      };

      sourceRef.current.connect(processorRef.current);
      processorRef.current.connect(audioContextRef.current.destination);
    } catch (err) {
      console.error("Mic error:", err);
    }
  };

  const stopMic = () => {
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(console.error);
      audioContextRef.current = null;
    }
    if (outputContextRef.current && outputContextRef.current.state !== 'closed') {
      outputContextRef.current.close().catch(console.error);
      outputContextRef.current = null;
    }
  };

  const playAudio = (base64Data: string) => {
    const binary = atob(base64Data);
    const bytes = new Int16Array(binary.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = (binary.charCodeAt(i * 2) & 0xFF) | (binary.charCodeAt(i * 2 + 1) << 8);
    }

    // Reuse a single output AudioContext instead of creating one per chunk
    if (!outputContextRef.current || outputContextRef.current.state === 'closed') {
      outputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const audioCtx = outputContextRef.current;
    const buffer = audioCtx.createBuffer(1, bytes.length, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < bytes.length; i++) {
      channelData[i] = bytes[i] / 32768;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
  };

  return (
    <div
      className="rounded-[3rem] p-8 lg:p-12 text-center relative overflow-hidden"
      style={{
        backgroundColor: "var(--glass-bg-strong)",
        border: "1px solid var(--glass-border-strong)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        color: "var(--text-primary)",
        boxShadow: "0 8px 32px var(--shadow-glass)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}
        />
      </div>

      <div className="relative z-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          style={{
            backgroundColor: "var(--accent-dim)",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
          }}
        >
          <MessageSquare size={14} />
          Galaxy AI Tutor
        </div>
        <div className="mb-8">
          <div
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: isActive ? "var(--accent)" : "var(--glass-bg)",
              boxShadow: isActive ? "0 0 60px var(--accent)" : "none",
              transform: isActive ? "scale(1.1)" : "scale(1)",
            }}
          >
            {isActive ? (
              <Volume2 size={40} className="text-white animate-pulse" />
            ) : (
              <Mic size={40} style={{ color: "var(--text-primary)" }} />
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          {isActive ? "Galaxy AI is Listening..." : "Ready to Practice?"}
        </h3>
        <p className="mb-8 text-sm max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          Improve your English and Nepali fluency with real-time voice conversations.
        </p>

        <button
          onClick={toggleTutor}
          disabled={isConnecting}
          className="w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3"
          style={{
            backgroundColor: isActive ? "rgba(239,68,68,0.8)" : "var(--accent)",
            color: "white",
            cursor: isConnecting ? "not-allowed" : "pointer",
            opacity: isConnecting ? 0.5 : 1,
          }}
        >
          {isConnecting ? "Connecting..." : isActive ? <><MicOff size={20} /> End Session</> : <><Mic size={20} /> Start Conversation</>}
        </button>
      </div>
    </div>
  );
};
