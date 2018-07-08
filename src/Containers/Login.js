import React, { Component } from "react";
import "./Login.css";
import RestConnection from "../Components/Axios/RestConnection";
import Footer from "../Components/Footer";

import Input from "../Components/Input";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      status: null,
      userId: null,
      password: null
    };
  }

  handleUserId = event => {
    this.setState({ userId: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleOnEntered = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    const userId = this.state.userId;
    console.log("Requesting for user " + userId);
    const url = "/findUser/" + userId;
    RestConnection.post(url).then(
      response => {
        console.log(response);

        if (response.data.status === "SUCCESS") {
          this.props.history.push("/home");
        }

        this.setState({
          message: response.data.message,
          status: response.data.status
        });
      },
      error => {
        console.log(error);
        this.setState({ message: error.message });
      }
    );
  };

  render() {
    let showMessage = null;
    if (this.state.message) {
      showMessage = (
        <h4 style={{ textAlign: "center", color: "green" }}>
          {this.state.message}
        </h4>
      );
    }

    return (
      <div>
        <div className="DivStyle">
          <h4>Login to Speech Sense App</h4>

          <Input
            label="User Id:"
            Changed={this.handleUserId}
            value={this.state.userId}
            type="text"
          />
          <Input
            label="Password:"
            Changed={this.handlePassword}
            value={this.state.password}
            entered={this.handleOnEntered}
            type="password"
          />

          <button
            className="ButtonStyle"
            onClick={this.handleSubmit.bind(this)}
          >
            Login!
          </button>

          {showMessage}
        </div>

        <Footer />
      </div>
    );
  }
}

export default LoginPage;
