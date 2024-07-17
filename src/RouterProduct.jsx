import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';


//class
class RouterProduct extends Component {
  //displayname
  static displayName = "Router_Product";

  //constructor
  constructor(props) {
    super(props);
    this.state = {
      // initialize state
    };
    // state
    //bind
  } //end constructor

  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <Main />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
} //end class
//class adını aşagıda gösterme
export default withTranslation()(RouterProduct);
