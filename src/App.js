import React from "react";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-8xl text-white bg-black">Hello Tiger {name}</h1>
      </>
    );
  }
}

export default hot(App);
