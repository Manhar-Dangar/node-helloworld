FROM node:14.15.1-alpine3.10

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./

# copy source code to /app/src folder
COPY . /app/
RUN npm install

CMD ["npm", "start"]

