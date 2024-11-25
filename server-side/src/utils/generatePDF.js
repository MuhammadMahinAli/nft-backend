import {readFileSync} from "fs";
import puppeteer from "puppeteer";
import handlebars from "handlebars";
//converting image to base64
function base64Image(file) {
  const image = readFileSync(file);
  return new Buffer(image).toString("base64");
}
const src = "data:image/jpeg;base64," + base64Image("certificate/1680251507129.jpeg");
const src1 = "data:image/png;base64," + base64Image("certificate/8624654.png");
//generating pdf
export const generatePDF = async ({name, itemName}) => {
  // Create browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Get HTML content
  const source = readFileSync("certificate/index.html", "utf-8");
  const template = handlebars.compile(source);
  const html = template({name, itemName, src, src1});
  // Set HTML as page content
  await page.setContent(html, {waitUntil: "domcontentloaded"});
  await page.addStyleTag({
    path: "certificate/index.css",
  });
  // Save PDF File
  await page.pdf({path: "certificate/certificate.pdf", format: "a4", printBackground: true});

  // Close browser instance
  await browser.close();
};
