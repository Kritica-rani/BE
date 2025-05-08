# 1. Use an official Node.js image as the base image
FROM node:18


# 2. Set the working directory in the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json (to use Docker's cache effectively)
COPY package*.json ./

# 4. Install application dependencies
RUN npm install

# 5. Copy the rest of your application files to the container
COPY . .

# 6. Expose the port that the app will run on (e.g., port 3000)
EXPOSE 3000

# 7. Define the command to run your app (e.g., npm start)
CMD ["npm", "start"]
