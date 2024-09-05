const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,  // Set the width to 1920px
    height: 1080, // Set the height to 1080px
  });
  await page.goto('https://coderootz.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
