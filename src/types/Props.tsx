export interface CardProps {
  title: string;
  titlecenter?: boolean;
  description?: string;
  imageUrl?: string;
  link?: string;
  size?: "small" | "medium" | "large" | "extralarge" | "full";
}
