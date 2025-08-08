// src/utils/getImageDimensions.ts
import { join } from "path";
import { imageSize } from "image-size";
import fs from "fs";

export function getImageData(relativePath: string) {
  const fullPath = join(process.cwd(), "public", relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`No se encontró la imagen: ${relativePath}`);
  }
  const imageBuffer = fs.readFileSync(fullPath);
  const dimensions = imageSize(imageBuffer);
  if (!dimensions.width || !dimensions.height) {
    throw new Error(
      `No se pudieron obtener las dimensiones de: ${relativePath}`
    );
  }
  return {
    src: "/" + relativePath,
    width: dimensions.width,
    height: dimensions.height,
  };
}
