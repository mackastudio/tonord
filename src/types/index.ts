export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Card = {
  title: string;
  description: string;
  href?: string;
  image: string;
};

export type NewsItem = {
  title: string;
  href: string;
  image: string;
};

export type Product = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
};

export type Person = {
  name: string;
  role: string;
  bio: string;
};

export type Office = {
  city: string;
  country: string;
  entity: string;
  address: string[];
  phone?: string;
  email?: string;
  note?: string;
};
