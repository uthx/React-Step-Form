import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  goBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm Info" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            ></ListItem>
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            ></ListItem>
            <ListItem primaryText="Email" secondaryText={email}></ListItem>
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            ></ListItem>
            <ListItem primaryText="City" secondaryText={city}></ListItem>
            <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
          </List>

          <br />
          <RaisedButton
            label="Confirm & Submit"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Go Back"
            primary={false}
            style={styles.button}
            onClick={this.goBack}
          />
        </>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default Confirm;
