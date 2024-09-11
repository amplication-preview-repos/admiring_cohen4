import { User } from "../user/User";

export type Item = {
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
