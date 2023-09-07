const puppeteer = require("puppeteer");

let browser;
(async () => {
  browser = await puppeteer.launch({ headless: "new" });
  let page = await browser.newPage();
  await page.setViewport({ width: 1720, height: 1000 });
  await page.goto("http://localhost:3000/");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  await page.screenshot({
    path: `screenshot.png`,
  });
})().finally(() => {
  if (browser) browser.close();
});
