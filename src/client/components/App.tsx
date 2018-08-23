import * as React from "react";
import * as axios from "axios";

interface IAppState {
  isLoading?: boolean;
  requestString?: string;
  response?: string;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      requestString: ""
    };
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      requestString: e.target && e.target.value ? e.target.value : ""
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the App</h1>
        <form>
          <label htmlFor="main_req">Submit to send a request</label>
          <input
            id="main_req"
            type="text"
            value={this.state.requestString}
            onChange={this.handleInputChange.bind(this)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
