FROM alpine
WORKDIR /opt/project/
RUN apk --update add nodejs

COPY ./package.json /opt/project/

RUN npm install

COPY ./app /opt/project/app
COPY ./webpack.config.js /opt/project/

EXPOSE 8080

CMD [ "npm", "run", "prod" ]
