import "./Body.css"
import RightPreview from "../rightPreviewSide/right"
import { Component } from "react";
import Leftside from "../leftSide/leftSide";

class Body extends Component {
  state = {
    value: null,
  }
  render() {
    const handleChange = (event) => {
      this.setState({ value: event.target.value });
    }
    return (<div className="body">
      {/* left side */}
      <Leftside val={this.state.value} handleChange={handleChange} />
      {/* left section ends */}
      {/* right area */}
      <RightPreview className="right" Text={this.state.value} />
      {/* right area */}

    </div>

    )
  }
}

export default Body;