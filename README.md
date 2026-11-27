# Boilerplate

A full-stack Turborepo built with Bun, Hono, Vite + React.  
This boilerplage provides reuseable foundation for building modern application without setting up authentication, database, shared utilites, and development tools from scratch.  
Spend less-time to configure your project and focus on building your application now.  
Feel free to clone or fork this repo.

## Table Of Content

- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environtment Variable](#environtment-variable)

## Tech Stack

| Area           | Technology                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Runtime        | [bun](https://bun.sh/)                                                                                                     |
| Backend        | [Hono](https://hono.dev/)                                                                                                  |
| Frontend       | [Vite + React ](https://vite.dev/)                                                                                         |
| UI             | [tailwindcss](https://tailwindcss.com/) + [shadcnUI](https://ui.shadcn.com/)                                               |
| Authentication | [better-auth](https://better-auth.com/)                                                                                    |
| Fetching       | [@tanstack/react-query](https://tanstack.com/query/latest)                                                                 |
| Table          | [@tanstack/react-table](https://tanstack.com/table/latest)                                                                 |
| Form           | [react-hook-form](https://react-hook-form.com/) + [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) |
| Validation     | [zod](https://zod.dev/)                                                                                                    |

## Folder Structure

```
📁 root/                                            #
|-  📁 apps/                                        #
|   |-  📁 backend/                                 #
|   |-  📁 web/                                     #
|-  📁 pkg/                                         # Shared config/utility
|   |-  📁 config/                                  # Shared config
|   |   |-  📄 eslint.ts                            # Shared eslint config
|   |   |-  📄 prettier.ts                          # Shared prettier config
|   |   |-  📄 tsconfig.json                        # Shared tsconfig
|   |   |-  📄 package.json
|-  📄 .env.example                                 # Example of .env
|-  📄 .gitignore
|-  📄 bun.lock
|-  📄 package.json
|-  📄 README.md
|-  📄 turbo.json
```

## Features

## Prerequisites

## Getting Started

## Environtment Variable
