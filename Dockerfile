FROM node:12.18
WORKDIR /app
RUN mkdir client
COPY package*.json ./
COPY /client/package*.json ./client/
RUN npm run install:ci
COPY . .
ENV PORT=8080
ENV NODE_ENV=production
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "start:production"]