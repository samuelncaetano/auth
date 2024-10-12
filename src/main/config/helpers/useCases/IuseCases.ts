import {
  CreateUserParams,
  LoginUserParams,
} from "@/application/interfaces/domain/entities/user/IauthUser";
import {
  CreateUserReturn,
  LoginUserReturn,
} from "../protocol/user/authUserProtocols";

export interface ICreateUserUseCase {
  execute(params: CreateUserParams): Promise<CreateUserReturn | null>;
}

export interface ILoginUserUseCase {
  execute(params: LoginUserParams): Promise<LoginUserReturn | string>;
}
