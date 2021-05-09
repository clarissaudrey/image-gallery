# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Requirement

Need to have a Cloudinary account (https://cloudinary.com). It is free to sign up, and after signing up, you will receive Cloud name, API key, and API secret (Important! These will be used later in setup).

# Setup Guidelines

1. git clone https://github.com/clarissaudrey/image-gallery.git
2. Create a .env file inside the /server folder
3. Copy below inside the .env file
   ```JavaScript
   CLOUD_NAME=your_cloud_name
   API_KEY=your_cloud_key
   API_SECRET=your_cloud_secret
   ```
4. Replace the values with the values found on your Cloudinary account.
##### // On a terminal, start the client
5. cd client
6. npm i && npm start
##### // On a new terminal, start the server
7. cd server
8. npm i && npm run dev
9. Wait until it gets deployed on the local server (localhost:3000) and you are good to go!
