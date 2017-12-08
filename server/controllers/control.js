// This is where we will actually be hitting our outside API then serving
// the response to the front end to show your lovely users.

// We'll be using axios to do API calls exactly how you would in the front end
// in React.
// 8.
//	Require axios and set it to a variable axios.
const axios = require("axios");

// Security security security.
// Another bad thing to do is expose your API key to github because there are
// bots that scrape github looking for API keys! For example, there's a guy
// that attended devMountain in Provo and he didn't hide his Amazon Web Services
// key. He got an email one day that there were $160,000 worth of charges to his
// account. He called amazon and got it reversed but the moral of the story is
// HIDE YOUR API KEY!!!

// We are going to create a file named config.js where we will house our API key.
// I created a file in my root server folder named config.js.

// Head over to that file for the next step.

// Did you Follow step 10 in the config.js file? No? GO DO THAT! It's important!

// 11.
//	Let's go ahead and use object deconstructing to get our API key from our config
//  folder.
const { apiKey } = require("./../config");

// In step 7 in the server.js file, we set up an API endpoint that our front end will
// trigger a function in our controller. This function is going to be the function that
// actually hits our external API.
// Let's make that function.

// 12.
//	Let's create a variable that houses the function named getApiData. This function name
// 	has to match the name of the function you defined in step 7 in the server.js file.
//	In this instance, the api call looked like
//	app.post("/api/getApiData", controller.getApiData);
//										   this is the function name.
//

let getApiData = (req, res) => {
	// 13.
	//	The DarkSky API follows this general skeleton:
	//	https://api.darksky.net/forecast/[apiKey]/[latitude],[longitude]
	//	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     ^		^^^^^^^^
	//		^^^^^^^^^^^^^^^^^^	  Step 11         ^^^^
	//		   base API url				Data passed from our input component in react 
	//							through the axios.post('/api/getApiData', {location: req.body.location}      
	//
	//	The data that we'll be passing from our input box in our React Component will be
	//	the req.body.
	//
	//	app.get('/some/apiCall', "the data you are passing is your req.body")
	//	Some examples might be you have a recipe API. You want to pass along your search query
	//	to your api, so you'd include that in your req.body.
	axios
		.get(`https://api.darksky.net/forecast/${apiKey}/${req.body.location}`)
		.then(result => {
			// 14.
			//	After we fire that function, we want to get some data back right? So we'll
			//	return res.json(result.data).
			return res.json(result.data);
		});
};

// 15.
//	So now we need to export that function that way our server knows that it exists!
//	It's as simple as making a module.exports that contains your function names.
module.exports = {
	getApiData
};

// Yay, we did it!!!

// Awesome, so let's recap what we've done.

// We've:
// Set up our basic server.
// Added a proxy that'll allow our front end to talk to the backend.
// Set up a controller that'll house our external API call.
// Saved our API key in a config file that we've then included in our .gitignore file.
// Set up an internal API call that our front end can call that'll trigger a function to call an external API.
// Returned the results of our API call to our front end that we can then display.

// Head over to the App.js in the src folder where our React components live. I'll show you how to set up our front
// end to talk to the backend, then display our API data to the user.
