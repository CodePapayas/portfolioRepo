import React from 'react';

const TopicsPage = () => {
    return (
        <div>
            <h2>Web Dev Concepts and Career Goals</h2>
            <article id="careerGoals">
                <h3>Career Goals</h3>
                <p>Welcome to my portfolio React app! My name is Zach Wilkins-Olson, and I am a System Administrator who is transitioning into a Full Stack Web Developer. I am currently learning the MERN stack and am looking for a job in web development. I am also interested in learning more about DevOps and Cybersecurity.  This app was built using a MERN stack, or MongoDB, Express.js, React, and Node.js, as well as HTML and CSS. This is the culmination of the CS290 class, meant to showcase the skills learned throughout the course. The app itself is a CRUD app: Create, Read, Update, Delete. On the Groceries tab this functionality is demonstrated, and the Topics page covers the major points learned in this course. Thank you for checking out my website!
                </p>
            </article>
            <article id="technologies">
    <h3>Major Technologies Used in This Website</h3>
    <p>
        The following technologies are used in this website <strong>***TO BE EXPANDED***</strong>:
    </p>
    <ul>
        <li><strong>HTML5:</strong> The foundational markup language used to define the structure of the web pages in this React application. React apps like this use JSX, a syntax extension of HTML5, to describe the UI structure within JavaScript.</li>
        <li><strong>CSS:</strong> Used to style an app or website, providing layout, colors, fonts, and overall design to ensure the app is visually appealing and user-friendly. CSS can be applied through traditional stylesheets, CSS modules, or styled-components in React.</li>
        <li><strong>JavaScript:</strong> The primary programming language for developing the React app. It is used to create interactive and dynamic components, manage application state, handle user inputs, and perform logic. JavaScript enables an app or website to respond to user actions and update the UI accordingly.</li>
        <li><strong>Node.js:</strong> A JavaScript runtime that powers the server-side of the React app. Node.js is used to run the backend server, manage requests and responses, and serve the app to users. It allows the use of JavaScript throughout the entire application stack.</li>
        <li><strong>Express.js:</strong> A web framework for Node.js that simplifies the development of the server-side logic for an app. Express is used to handle routing, manage API endpoints, process middleware, and interact with the database, providing data to the front end.</li>
        <li><strong>Asynchronous programming:</strong> Utilized in both the front end and the Node.js backend to manage tasks that take time to complete, such as fetching data from an API or reading from a database. Asynchronous functions and promises ensure that the React app remains responsive by allowing other operations to continue while waiting for the asynchronous task to complete.</li>
        <li><strong>DOM (Document Object Model):</strong> The interface through which a website or app interacts with the web page. Uses a virtual DOM to optimize updates and rendering, ensuring that only the necessary parts of the UI are re-rendered, leading to improved performance and a smoother user experience.</li>
        <li><strong>SPA (Single Page Application):</strong> A web application model used by React to create a fluid and responsive user experience. SPAs load a single HTML page and dynamically update the content as the user interacts with the app, reducing the need for full page reloads and providing faster interactions.</li>
        <li><strong>React:</strong> The core library used to build the user interface of the application. React allows developers to create reusable UI components, manage the application state efficiently, and render dynamic content. It provides the foundation for building an interactive and modern web app.</li>
        <li><strong>Mongoose:</strong> An Object Data Modeling (ODM) library for MongoDB used in the Node.js backend. Mongoose provides a schema-based solution to model application data, making it easier to perform CRUD operations on the MongoDB database and ensure data validation and consistency.</li>
        <li><strong>MongoDB:</strong> A NoSQL database used to store the application's data in a flexible, JSON-like format. MongoDB is particularly suited for handling large volumes of unstructured or semi-structured data, and it integrates well with Node.js and Mongoose to provide a robust backend for the app.</li>
        <li><strong>REST (Representational State Transfer):</strong> An architectural style used to design the API endpoints that the app communicates with. RESTful APIs provide a standardized way to perform CRUD operations over HTTP, allowing the React front end to interact with the backend server to fetch, create, update, and delete data.</li>
        <li><strong>CRUD (Create, Read, Update, Delete):</strong> The four basic operations for managing data in the application. In the context of the React app, CRUD operations are performed through the RESTful API endpoints, enabling users to interact with the data stored in MongoDB by creating new entries, reading existing data, updating records, and deleting entries.</li>
    </ul>
</article>
        </div>
    );
};

export default TopicsPage;
