FROM registry.mygit.th-deg.de/ka21180/clustering-mit-docker:rnodejs

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json using a wildcard
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

#Exposing Port 3000
EXPOSE 3000

#run node app.js to start our server
CMD ["npm", "start"]
