FROM node:18-alpine3.16
WORKDIR /app

COPY package.json pnpm-lock.yaml .
RUN corepack enable
RUN pnpm install

COPY . .
RUN pnpm db:generate
RUN pnpm build

EXPOSE 3000
CMD ["yarn", "start"]
