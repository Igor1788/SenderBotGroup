# Base da imagem do Docker
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i
RUN npm i typescript -g

COPY . .
COPY .env ./

# Porta e script de aplicação
EXPOSE 3001
CMD [ "npm", "start" ]
