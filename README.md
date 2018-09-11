# README

This application goes along with a series of tutorials on using React with an API. Instructions on building this app are at:
https://www.techandstartup.com/tutorials/react-redux-crud-app

This is a React with Redux and React-Router application. 
Initial setup was with create-react-app.
It performs Creat-Read-Update-Delete commands on a database through an API.
The API is a local server-side application running on port 3001.
http://localhost:3001/articles.

To run the application first run the API's server. If using a Rails API:
rails server -p 3001

To Run the React with Redux front end:

npm start 

Or if you have Yarn installed use:

yarn start

The app will launch on port 3000.