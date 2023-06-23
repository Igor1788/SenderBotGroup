# Base image
FROM node:14

# Create app directory in Docker
WORKDIR /app

# Copy app source code
COPY . .

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies including devDependencies
RUN npm install

# Compile TypeScript to JavaScript
RUN npm run build

# Expose port and start application
EXPOSE 3001
CMD [ "npm", "start" ]
