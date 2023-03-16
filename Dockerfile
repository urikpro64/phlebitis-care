FROM node:16

WORKDIR /phlebitis-app

COPY package*.json ./

RUN yarn

COPY . .
RUN npx prisma generate
RUN yarn build

EXPOSE 3000

CMD ["yarn", "product"]
