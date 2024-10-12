import { BcryptPassword } from "@/application/utils/hashUtils";
import { CreateUserController } from "@/main/controllers/user/createUserController";
import { CreateUserUseCase } from "@/application/useCases/createUseCases";
import { JWTTokenGenerator } from "@/application/utils/authUtils";
import { LoginUserController } from "@/main/controllers/user/loginUserController";
import { LoginUserUseCase } from "@/application/useCases/loginUserUseCase";
import { PrismaAuthUser } from "@/infrastructure/database/prisma/prismaAuthUser";
import { UserFactory } from "@/domain/factories/userFactory";

const bcryptPassword = new BcryptPassword();
const userFactory = new UserFactory(bcryptPassword);
const prismaAuthUser = new PrismaAuthUser();
const jWTTokenGenerator = new JWTTokenGenerator();

// Create
const createUserUseCase = new CreateUserUseCase(userFactory, prismaAuthUser);
const createUserController = new CreateUserController(createUserUseCase);

// Login
const loginUserUseCase = new LoginUserUseCase(
  userFactory,
  jWTTokenGenerator,
  prismaAuthUser,
);
const loginUserController = new LoginUserController(loginUserUseCase);

export { createUserController, loginUserController };
