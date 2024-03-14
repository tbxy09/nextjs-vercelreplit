import { promises as fs } from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import mermaid from 'mermaid';

export async function renderDiagram(diagramType, diagramData) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set up the HTML content with the Mermaid diagram
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
      </head>
      <body>
        <div class="mermaid">
          ${diagramData}
        </div>
      </body>
    </html>
  `;

  await page.setContent(html);

  // Generate the diagram using Mermaid
  await page.evaluate(() => {
    mermaid.initialize({ startOnLoad: true });
  });

  // Wait for the diagram to be rendered
  await page.waitForSelector('svg');

  // Get the SVG element and convert it to PNG
  const svgElement = await page.$('svg');
  const pngBuffer = await svgElement.screenshot({ omitBackground: true });

  // Save the PNG to a file
  const diagramPath = path.join(process.cwd(), 'public', 'diagrams', `${diagramType}.png`);
  await fs.writeFile(diagramPath, pngBuffer);

  await browser.close();

  return `/diagrams/${diagramType}.png`;
}