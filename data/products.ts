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
    title: "Custom Uniform Sticker - Primary",
    slug: "uniform-sticker-primary",
    priceCents: 1699,
    imageUrl:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&w=1200",
  },
  {
    id: "p2",
    title: "Instrument Sticker - Saxophone",
    slug: "instrument-sticker-sax",
    priceCents: 1299,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&w=1200",
  },
  {
    id: "p3",
    title: "Sports Sticker - Jump Rope",
    slug: "sports-sticker-jumprope",
    priceCents: 999,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&w=1200",
  },
];

export function formatAUD(cents: number) {
  return (cents / 100).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
}
