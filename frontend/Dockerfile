# FROM node:13
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# ENV APPID={e898492b177f9a28625dc55cfa8a8ddc}


# Copy . . 
# EXPOSE 8000


#CMD ["npm", "index.js"]
FROM node:13
COPY ./  /usr/src/app/
WORKDIR /usr/src/app/src/
RUN npm install
CMD ["npm", "start"]
EXPOSE 8000