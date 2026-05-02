import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

console.log('\n🔍 REAL VERIFICATION - CURRENT STATE\n');
console.log('═'.repeat(70));

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 15000 });
console.log('✅ Page loaded');

// Take screenshot
await page.screenshot({ path: './actual-navbar.png', fullPage: false });
console.log('📸 Screenshot: actual-navbar.png\n');

// Get exact computed colors
const colors = await page.evaluate(() => {
  const navContainer = document.querySelector('.liquid-nav-container');
  const computedStyle = window.getComputedStyle(navContainer);
  
  return {
    backgroundColor: computedStyle.backgroundColor,
    backdropFilter: computedStyle.backdropFilter,
    border: computedStyle.border,
    borderRadius: computedStyle.borderRadius,
  };
});

console.log('✅ ACTUAL COMPUTED STYLES:');
console.log(`   Background: ${colors.backgroundColor}`);
console.log(`   Backdrop Filter: ${colors.backdropFilter}`);
console.log(`   Border: ${colors.border}`);
console.log(`   Border Radius: ${colors.borderRadius}`);

// Check if beige is present
const isBeige = colors.backgroundColor.includes('253, 253, 245') || 
                colors.backgroundColor.includes('247, 249, 240');

console.log(`\n${isBeige ? '❌ BEIGE STILL PRESENT' : '✅ BEIGE REMOVED'}`);

console.log('\n' + '═'.repeat(70) + '\n');

await browser.close();
