FROM node:10-alpine as builder

WORKDIR /code

# 利用镜像缓存 - package.json 未改变就不会重复去安装
COPY package.json /code
COPY yarn.lock /code

RUN yarn config set registry https://registry.npm.taobao.org && yarn

COPY . /code

RUN yarn build

FROM nginx:alpine

COPY --from=builder code/dist/ /usr/share/nginx/html/
