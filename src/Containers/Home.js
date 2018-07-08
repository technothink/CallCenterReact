import React from "react";
import RightHeader from "../Components/RightHeader";
import Header from "../Components/Header";
import SpeechApp from "../Containers/SpeechApp";
import RestConnection from "../Components/Axios/RestConnection";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  searchHandler = event => {
    console.log("Now going to search transcribe for ");
    if (event.key === "Enter") {
      this.fetchTranscribe(event.target.value);
    }
  };

  fetchTranscribe = value => {
    const url = "/search/" + value;
    RestConnection.post(url).then(response => {
      //console.log(response);
      this.setState({
        response: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <header className="mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed">
          <div className="mdc-toolbar__row">
            <Header Searched={this.searchHandler} />
            <RightHeader />
          </div>
          <SpeechApp responseData={this.state.response} />
        </header>
      </div>
    );
  }
}

export default Home;
