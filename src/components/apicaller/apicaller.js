// This is where we'll be creating our child component that actually
// does all of our internal API calls which will trigger our backend
// to do our external API call.
// Sounds a bit confusing, but I explain why we do this in the config.js
// file.

// Sorry if you'll have to jump around a bit on this page. Follow the step numbers
// instead of top to bottom and you'll be all good.

// 3.
// 	Set up your basic React component. Import react, component, export the component, etc.
import React, { Component } from "react";

// You can use axios in the front end and the back end to do API calls.

// 4.
//	Install the axios dependency using yarn or npm.

// 5.
//	Import axios.
import axios from "axios";

import "./styles.css";

export default class ApiCaller extends Component {
	// We'll need to set up a constructor because we'll be using state for a couple of things.

	// 6.
	//	Set up your constructor and include a state object with weather and location set to
	//	empty strings.

	// Head down to line ##### for the next step.
	constructor(props) {
		super(props);

		this.state = {
			weather: "",
			location: ""
		};
		this.getApiData = this.getApiData.bind(this);
	}

	/*
		8. 
		We need to create a function that'll set fire an internal API call that then fires our
		external API call. Don't forget to bind your function in your constructor!!!

		Since we want to pass the value of this.state.location into our external API call, we'll need 
		to use a POST request. This is because we need access to req.body.
	 */
	getApiData() {
		axios
			.post("/api/getApiData", { location: this.state.location })
			.then(result => {
				return this.setState({ weather: result.data.daily.summary });
			})
			.catch(error => {
				console.log(error);
			});
		{
			/*
				9.
				We want to return back some data from our API so we'll use .then to do just that.
				We'll then set the state of our weather key in this.state to result.data.daily.summary.
				Then we can display some information to our lovely users. 

				Head down to line 102 for the next step.
			 */
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1 className="redColor">
						{" "}
						INSERT YOUR LATITUDE/LONGITUDE HERE{" "}
					</h1>
					<p>
						{" "}
						We'll pass this data to our backend in the form of
						req.body. We'll then use this data in our Weather API to
						get back a brief summary of the weather today.{" "}
					</p>
				</div>

				{/* 7.
				Let's create an input that we'll be able to put our latitude and longitude into.
				We'll use the onChange event handler to set our state to the value of the input
				item. 

				Head up to line 45 for the next step.
				 */}
				<input
					onChange={event => {
						this.setState({ location: event.target.value });
					}}
				/>

				{/* 
					10.
					Now we need to create a button that actually fires that function
				*/}

				<button onClick={this.getApiData}> Get Api Data </button>
				{/* 
					11.
					Let's set up an h3 tag that displays this.state.weather. This'll only
					show data once our API gets back some information.

					Great, that should be it! 
					Head down to the bottom of the page.
				*/}
				<h3> {this.state.weather} </h3>
			</div>
		);
	}
}

/*
	Awesome, so we've set up our child component to call an internal API endpoint that'll call the external
	API. 


	Head back to the App.js folder for the next step. 
*/
