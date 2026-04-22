export type Discipline =
  | "musik"
  | "komposition"
  | "ljudkonst"
  | "visuell konst"
  | "performance"
  | "poesi"
  | "annat";

export type Member = {
  id: string;
  name: string;
  role: string;
  disciplines: Discipline[];
  bio: string;
  photoPath: string | null;
  website?: string;
  instagram?: string;
};

export type NavItem = {
  label: string;
  href: string;
};
