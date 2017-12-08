// This is where we will set up our server for the backend.
// You guys were taught to set up your axios API calls in your componentDidMount()
// in React. While this isn't wrong, there are instances that you would want to
// do your API calls in the back end.

// For example, if your API has an API key, you don't want to expose that API key to
// your client. They could grab that API key, start using it then next thing you know
// you have an $800 charge from your API provider because someones made 10,000,00 calls.
// Or, they'll just shut off your access to the API which puts you in a rough spot.

// Moral of the story, if your API has an API key, do the API call in the server, then serve
// the response to the front end.

// 1.
//	We need to add our dependencies IN THE SERVER FOLDER!
//	  yarn init -y
//    yarn add express cors body-parser axios
// 	  or
// 	  npm install --save express cors body-parser axios

// 2.
// 	import your dependencies, invoke your middleware
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

app.use(cors());
app.use(json());

// Since react's local development server runs on port 3000, we will need to use a
// different port for our server to run on.
// 3.
//	Change your port to 3001.

const port = 3001;

// 4.
// You'll have to add the following line to your package.json in your root folder.

// 			proxy: "http://localhost:3001"

// This will be a key:value pair just like any other object.

// This pretty much tells react "Hey, there's going to be some server action happening
// on port 3001. Listen to it".

// If your package.json doesn't have react as a dependency, you are in the wrong package.json.
// If you don't follow this step, your front end won't be able to talk to the backend!!!!!

// Since we will be doing our API calls from the backend, we will need to set up an internal
// API call that will trigger our API call then return the data to our front end.

// 5.
//	Create a folder that will contain your controller. We do this simply for organization
// 	purposes. Modularity is key, though!!!!

//	I created a folder named controllers where I will have my controllers. Then I created
//	a javascript file named control.js.

// 6.
//	Require that controller and set it to a variable so we can use it.
const controller = require("./controllers/control.js");

// 7.
//	We need to set up an internal API that our front end will hit that will then trigger a function
//	in our controller. Step 12 in the control.js file will go over this a bit more.
app.post("/api/getApiData", controller.getApiData);

// Awesome, we are done here and ready to set up our controller.
// Head over to the control.js file for the next instructions.

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
