FROM node:18 AS build-env
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM gcr.io/distroless/nodejs:18
COPY --from=build-env /app /app
WORKDIR /app
ENV NODE_ENV="production"
EXPOSE 3000
CMD [ "-r", "module-alias/register", "./dist" ]