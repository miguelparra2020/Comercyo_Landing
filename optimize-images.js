import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicImagesDir = './public/images';

async function optimizeImages() {
  try {
    const files = await readdir(publicImagesDir);
    
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const inputPath = join(publicImagesDir, file);
        const outputWebp = join(publicImagesDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        const outputAvif = join(publicImagesDir, file.replace(/\.(png|jpg|jpeg)$/i, '.avif'));
        
        console.log(`Optimizando ${file}...`);
        
        // Generar WebP optimizado
        await sharp(inputPath)
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: 80,
            effort: 6
          })
          .toFile(outputWebp);
        
        // Generar AVIF optimizado (mejor compresión)
        await sharp(inputPath)
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .avif({ 
            quality: 75,
            effort: 6
          })
          .toFile(outputAvif);
        
        console.log(`✓ ${file} optimizado`);
      }
    }
    
    console.log('\n✅ Todas las imágenes optimizadas!');
  } catch (error) {
    console.error('Error optimizando imágenes:', error);
  }
}

optimizeImages();
