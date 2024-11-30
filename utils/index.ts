import {
  BLUE_LUMINANCE_WEIGHT,
  GREEN_LUMINANCE_WEIGHT,
  LUMINANCE_DIVISOR,
  RED_LUMINANCE_WEIGHT,
} from "./constants";

export const gerRGBfromColor = (color: string): number[] => {
  const [r, g, b] = color
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);
  return [r, g, b];
};
export const rgbToHex = (rgb: number[]) => {
  const [r, g, b] = rgb;
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

export const isHexColor = (color: string): boolean =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

export const getBrightness = (rgb: number[]): number => {
  const [r, g, b] = rgb;
  return (
    (r * RED_LUMINANCE_WEIGHT +
      g * GREEN_LUMINANCE_WEIGHT +
      b * BLUE_LUMINANCE_WEIGHT) /
    LUMINANCE_DIVISOR
  );
};
