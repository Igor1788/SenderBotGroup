# Base da imagem do Docker
FROM node:14

WORKDIR /app

COPY . .


COPY package*.json ./


RUN npm install

# Porta e script de aplicação
EXPOSE 3001
CMD [ "npm", "start" ]
