FROM cypress/included:9.4.1

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.config.json ./cypress.config.json
COPY ./package.json ./package.json

RUN npm test