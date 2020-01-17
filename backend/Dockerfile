FROM node:13
COPY ./  /usr/src/app/
WORKDIR /usr/src/app/src/
ENV APPID=${APPID}
RUN npm install
CMD ["npm", "start"]
EXPOSE 9000