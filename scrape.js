
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.env.SCRAPE_URL || 'https://example.com';
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  const data = await page.evaluate(() => ({
    title: document.title,
    heading: document.querySelector('h1')?.innerText || "No heading",
    content: document.body.innerText.trim()
  }));

  await browser.close();

  fs.writeFileSync("scraped_data.json", JSON.stringify(data, null, 2));
  console.log("Scraping complete!");
})();
