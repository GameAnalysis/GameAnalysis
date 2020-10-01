import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../../css/libreria.css";
import placeholder from "../../img/placeholder.png";


const Libreria = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="py-5 mb-5 sfondo">
        <div className="container pt-5 pl-5">
          <div className="row">
            <h1 className="font-half-regular titolo">riguardo il progetto</h1>
          </div>
          <div className="row pl-4 pb-5 mb-5">
            <div className="col-12 col-md-9 paragrafo">
              <p className="tk-clone-rounded-latin lead mb-0">Il progetto GameAnalysis nasce con
                l'intento di aiutare le piccole-medie software house che vogliono realizzare i propri videogiochi e che
                non dispongono di un team variegato o specializzato.</p>
              <p className="tk-clone-rounded-latin lead mb-5">Il blog vuole portare contenuti
                altamente qualificati e formativi al fine di permettere ai singoli di avere nozioni sul Design, sullo
                sviluppo e sulla pubblicazione nel mercato dei videogiochi.</p>
              <p className="tk-clone-rounded-latin lead">Il tutto offrendo un'esperienza unica e
                interattiva con l'intero blog.</p>
            </div>
          </div>
          <div className="row pt-5">
            <h1 className="font-half-regular titolo">il team</h1>
          </div>
          <div className="row pt-4 pb-5 mb-5">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">Alessio Romualdo</p>
              <p className="text-center text-white tk-clone-rounded-latin">Fondatore | UX/UI
                Designer</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">Gianmarco Randazzo</p>
              <p className="text-center text-white tk-clone-rounded-latin">Co-fondatore | Full
                Stack Dev</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">Fabio De Mota</p>
              <p className="text-center text-white tk-clone-rounded-latin">Copywriter</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">Giorgio aka Proxy</p>
              <p className="text-center text-white tk-clone-rounded-latin">Digital
                Marketer</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">Lorenzo Diamante</p>
              <p className="text-center text-white tk-clone-rounded-latin">SEO Specialist</p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column">
              <img src={placeholder} alt="" width="150" height="150"
                   className="align-self-center rounded-circle img-fluid"/>
              <p className="text-center text-white mb-0 mt-2 tk-clone-rounded-latin">pixelAZ</p>
              <p className="text-center text-white tk-clone-rounded-latin">Content Creator</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Libreria
