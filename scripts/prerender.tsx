import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { TemplateV3 } from '../src/templates/v3/TemplateV3';
import { incheonData } from '../src/templates/v3/data/incheonData';

async function prerender() {
  const distPath = path.resolve(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(indexPath, 'utf-8');

  // Render full V3 Component Tree for Incheon
  const appHtml = renderToString(<TemplateV3 data={incheonData} />);

  // Replace <div id="root">...</div> with the fully rendered HTML
  const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
  if (!rootRegex.test(templateHtml)) {
    console.error('Could not find <div id="root"> in dist/index.html');
    process.exit(1);
  }

  const finalHtml = templateHtml.replace(
    rootRegex,
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, finalHtml, 'utf-8');
  console.log('✅ Successfully prerendered Incheon V3 page into dist/index.html');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});



