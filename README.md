```bash
.
├── http
│   └── users.http
├── prisma
│   └── schema.prisma
└── src
    ├── application
    │   ├── interfaces
    │   │   ├── domain
    │   │   │   ├── entities
    │   │   │   │   └── user
    │   │   │   │       └── IauthUser.ts
    │   │   │   └── factories
    │   │   │       └── IuserFactory.ts
    │   │   └── utils
    │   │       ├── passwordHash.ts
    │   │       └── tokenGenerator.ts
    │   ├── services
    │   │   └── createUserSchema.ts
    │   ├── useCases
    │   │   ├── createUseCases.ts
    │   │   └── loginUserUseCase.ts
    │   └── utils
    │       ├── authUtils.ts
    │       └── hashUtils.ts
    ├── domain
    │   ├── entities
    │   │   └── User.ts
    │   └── factories
    │       └── userFactory.ts
    ├── infrastructure
    │   └── database
    │       ├── inMemoryRepository
    │       │   └── inMemoryAuthUserRepository.ts
    │       └── prisma
    │           └── prismaAuthUser.ts
    ├── main
    │   ├── config
    │   │   ├── database
    │   │   │   └── prisma.ts
    │   │   ├── dependencyInjection
    │   │   │   └── userDependencyInjection.ts
    │   │   ├── helpers
    │   │   │   ├── helpers.ts
    │   │   │   ├── protocol
    │   │   │   │   ├── protocols.ts
    │   │   │   │   └── user
    │   │   │   │       └── authUserProtocols.ts
    │   │   │   └── useCases
    │   │   │       └── IuseCases.ts
    │   │   └── logs
    │   │       └── logs.ts
    │   ├── controllers
    │   │   └── user
    │   │       ├── createUserController.ts
    │   │       └── loginUserController.ts
    │   ├── middlewares
    │   │   └── authMiddleware.ts
    │   └── routes
    │       ├── server.ts
    │       └── user
    │           ├── userRoutes.ts
    │           └── userServiceRoutes.ts
    ├── test
    │   └── user
    │       ├── controllers
    │       │   ├── createUserController.spec.ts
    │       │   └── loginUserController.spec.ts
    │       ├── factories
    │       │   └── userFactory.spec.ts
    │       ├── useCases
    │       │   ├── createUseCases.spec.ts
    │       │   └── loginUseCases.spec.ts
    │       └── utils
    │           └── bcryptPassword.spec.ts
    └── types
        └── express.d.ts
```
