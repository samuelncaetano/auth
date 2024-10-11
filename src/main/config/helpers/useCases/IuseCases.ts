import { CreateUserParams } from "@/application/interfaces/domain/entities/user/IauthUser";
import { CreateUserReturn } from "../protocol/user/authUserProtocols";

export interface ICreateUserUseCase {
  execute(params: CreateUserParams): Promise<CreateUserReturn | null>;
}
