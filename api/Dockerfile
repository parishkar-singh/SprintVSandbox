FROM node:14
LABEL authors="parishkar"

ADD package.json /tmp/package.json
RUN rm -rf build
RUN cd /tmp && npm install

ADD ./ /src

RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm build
CMD ["node","build/src/app.js"]
