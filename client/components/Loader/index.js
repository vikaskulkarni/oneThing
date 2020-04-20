import React, { Component } from "react";
import { FadeLoader } from "react-spinners";

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      position: "fixed",
      top: "50%",
      left: "50%",
      marginTop: "-9em",
    };
    return (
      <div style={style}>
        <FadeLoader
          color={"#930439"}
          loading
          height={45}
          width={7}
          radius={10}
          margin={2}
        />
      </div>
    );
  }
}
export default Loader;
