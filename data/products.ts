// data/products.ts
import Image from "next/image";

export type Product = {
  id: string;
  title: string;
  slug: string;
  priceCents: number;
  imageUrl?: string;
};


export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Custom Uniform Sticker - Primary",
    slug: "uniform-sticker-primary",
    priceCents: 1699,
    imageUrl:"images/pic1.png",
  },
  {
    id: "p2",
    title: "Instrument Sticker - Saxophone",
    slug: "instrument-sticker-sax",
    priceCents: 1299,
    imageUrl: "images/pic1.png"
  },
  {
    id: "p3",
    title: "Sports Sticker - Jump Rope",
    slug: "sports-sticker-jumprope",
    priceCents: 999,
    imageUrl: "images/pic1.png",
  },
];

export function formatAUD(cents: number) {
  return (cents / 100).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
}
