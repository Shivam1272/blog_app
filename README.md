# MERN Stack Blog Application
This is a blog application that I created using the MERN stack, which stands for MongoDB, Express, React, and Node.js. The application allows users to create, read, update, and delete blog posts.

# Technologies Used
MongoDB: A NoSQL database used to store blog post data.

Express: A web application framework for Node.js used to create the backend API.

React: A frontend library used to create the user interface.

Node.js: A server-side JavaScript runtime environment used to run the backend API.

# Other technologies used include:
Mongoose: A MongoDB object modeling tool used to create schemas and models for blog post data.

Axios: A Promise-based HTTP client used to make API calls from the frontend to the backend.

# Features
The blog application includes the following features:

Authentication: Users can create an account and login to create, update, and delete their own blog posts.

CRUD Operations: Users can create, read, update, and delete blog posts.

Commenting: Users can add comments to blog posts.


# How to Run the Application
To run the application, follow these steps:

1)Clone the repository to your local machine.

2)Navigate to the root directory of the project and run npm install to install the required dependencies.

3)Create a .env file in the root directory and add the following variables:

makefile
Copy code

MONGODB_URI=<your_mongodb_uri>

JWT_SECRET=<your_jwt_secret>

Replace <your_mongodb_uri> with your MongoDB connection string and <your_jwt_secret> with a secret key for JSON Web Tokens.


Run npm start to start the backend API.
Navigate to the client directory and run npm install to install the required dependencies for the frontend.
Run npm start to start the frontend.
The application should now be running on http://localhost:3000.

# Output
1)Home Page
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96972819/229332538-72568b9a-5087-46f7-8a6b-846cc6a21043.png">
2) Create a Post
<img width="960" alt="image" src="https://user-images.githubusercontent.com/96972819/229332512-ca2f5f60-f241-43e9-9c3f-720bc4cbec91.png">

# Conclusion
This MERN stack blog application demonstrates the power and flexibility of using the MERN stack for full-stack web development. With its robust and scalable architecture, the MERN stack allows developers to create complex web applications with ease.
