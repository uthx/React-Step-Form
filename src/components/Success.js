import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thanks For Your Submission</h1>
          <p>You wont get any Emails regarding this submission.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
