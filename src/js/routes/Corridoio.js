import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import design from "../../img/design.png";
import dev from "../../img/dev.png";
import publish from "../../img/publish.png";
import offtopic from "../../img/offtopic.png";
import "../../css/corridoio.css";


const Corridoio = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="py-5 mb-5 min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-6 px-5 py-5">
              <img className="img-fluid" src={design} alt="" height="100%" width="100%"/>

            </div>
            <div className="col-6 px-5 py-5">
              <img className="img-fluid" src={dev} alt="" height="100%" width="100%"/>

            </div>
          </div>
          <div className="row">
            <div className="col-6 px-5 py-5">
              <img className="img-fluid" src={publish} alt="" height="100%" width="100%"/>

            </div>
            <div className="borderss"/>
            <div className="col-6 px-5 py-5">
              <img className="img-fluid" src={offtopic} alt="" height="100%" width="100%"/>

            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Corridoio;
