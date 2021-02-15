import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  //below we have made state
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //Proceed To next Step: this will take us to the next page of the form
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Proceed To Previous Step : this  will take us to the previous page of the form
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle Change : Chanegs made to the state
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;
      default:
        return <h1>Defualt Case</h1>;
    }
  }
}

export default UserForm;
