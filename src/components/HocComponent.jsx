import { Component } from "react";
import withRouter from "../helpers/withRouter";

class HocComponent extends Component {
  render() {
    console.log(this.props);
    return <h1>HOC COMPONENT: location is {this.props.location.pathname}</h1>;
  }
}

export default withRouter(HocComponent);

// PROVIDE REACT NETFLIX TEMPLATE
