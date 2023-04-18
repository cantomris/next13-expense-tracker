FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY tsconfig.json ./tsconfig.json
COPY next.config.js ./next.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js

COPY pages ./pages
COPY lib ./lib
COPY public ./public
COPY styles ./styles
COPY components ./components

CMD ["npm", "run", "dev"]