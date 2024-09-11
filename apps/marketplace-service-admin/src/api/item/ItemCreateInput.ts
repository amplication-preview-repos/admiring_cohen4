import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItemCreateInput = {
  description?: string | null;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
