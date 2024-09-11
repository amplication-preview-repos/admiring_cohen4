import { ItemCreateNestedManyWithoutUsersInput } from "./ItemCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  items?: ItemCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
