// data/products.ts
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
    title: "Custom Uniform Sticker",
    slug: "uniform-sticker-primary",
    priceCents: 1699,
    imageUrl:"images/pic1.png",
  },
  {
    id: "p2",
    title: "Custom Uniform Sticker - 2 pack",
    slug: "instrument-sticker-sax",
    priceCents: 2699,
    imageUrl: "images/ad2.png"
  },
  {
    id: "p3",
    title: "Custom Uniform Sticker - 4 pack",
    slug: "sports-sticker-jumprope",
    priceCents: 4699,
    imageUrl: "images/ad0.png",
  },
];

export function formatAUD(cents: number) {
  return (cents / 100).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
}
