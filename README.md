# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Requirement

Need to have a Cloudinary account (https://cloudinary.com). It is free to sign up, and after signing up, you will receive Cloud name, API key, and API secret (Important! These will be used later in setup).

# Setup Guidelines

1. git clone https://github.com/clarissaudrey/image-gallery.git
2. Create a .env file inside the /server folder
2.1. Copy below inside the .env file
   ```JavaScript
   CLOUD_NAME=your_cloud_name
   API_KEY=your_cloud_key
   API_SECRET=your_cloud_secret
```
2.2 Replace the values with the values found on your Cloudinary account.
3. On a terminal, start the client
3.1. cd client
3.2. npm i && npm start
4. On a new terminal, start the server
4.1. cd server
4.2. npm i && npm run dev
5. Wait until it gets deployed on the local server (localhost:3000)
