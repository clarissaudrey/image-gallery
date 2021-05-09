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
5. On a terminal, start the client
6. cd client
7. npm i && npm start
8. On a new terminal, start the server
9. cd server
10. npm i && npm run dev
11. Wait until it gets deployed on the local server (localhost:3000)
