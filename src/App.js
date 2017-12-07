// We are going to set up a basic interface that'll allow our React App to talk to our
// backend. Our backend will call our external API which will then send the results
// to our front end. Then we will display that data to our lovely users. 😍😍😍😍

// There is a full walkthrough on how to set up the backend starting in the server.js
// file that is located in the server folder.

// 1.
// Let's go ahead and set up our basic React Component Skeleton.
// This can all be done with create-react-app

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// 2.
//  We need to create a react component that'll be doing all of our
//  API calls.
//  Create a folder named components then within that a folder named
//  apicaller. Then create a file named apicaller.

//  Head over to that apicaller file you just created and we'll build out
//  our react component.

//  Don't continue on until you've completed step 12 in the apicaller.js file!

/*
  13.
    So we've set up our child component that has all of the functionality to call our API. 
    Let's import that Child Component from our components/apicaller folder.
*/

import ApiCaller from "./components/apicaller/apicaller";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* 
        14.
          Add our child component so we can do some stuff/ see some stuff!

          That should be it! Head to the bottom of the page.
      */}
        <ApiCaller />
      </div>
    );
  }
}

export default App;

/* 
  Awesome. If you've followed all of the steps correctly, you should be able to put in your latitude
  and logitude and return back some info!
  Use this as some test data for your latitude/longitude:
    37.8267,-122.4233

  Make sure you've followed all of the steps for the backend portion starting on the server.js file. 


  If you see any typos or errors, let me know and I'll be sure to fix them for future students.
*/
