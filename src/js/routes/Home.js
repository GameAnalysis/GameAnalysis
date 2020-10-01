import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import "../../css/home.css"
import {Waypoint} from "react-waypoint";


const Home = () => {
  const [egg, setEgg] = React.useState(0);
  const eggRef = React.useRef();

  return(
    <React.Fragment>
      <Header/>
      <main>
        <div className="landing">
          <div className="landing-backdrop">
            <div className="container h-100">
              <div className="row h-25 align-items-end align-items-lg-center landing-title">
                <div className="col mt-md-5">
                  <p className="text-center font-weight-light text-center font-half-regular mt-md-5">game analysis</p>
                </div>
              </div>
              <div className="row align-items-center h-25 text-white mt-md-5 landing-description">
                <div className="col-12 col-md-8 mt-md-5">
                  <h1 className="display-4 font-half-regular font-weight-normal mt-md-5">la villa è piena di segreti</h1>
                  <h3 className="font-weight-light tk-clone-rounded-latin">Il primo blog a spiegare tutti gli aspetti della realizzazione dei videogiochi, dalla progettazione, allo sviluppo passando dalla pubblicazione.</h3>
                </div>
                <div className="col text-white mt-3 mt-md-0 d-flex justify-content-lg-start justify-content-center mt-md-5">
                  <Button variant="outline-light" className="tk-clone-rounded-latin mt-md-5 py-3 px-5">Iscriviti ora</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 my-5">
          <h1 className="font-half-regular text-center mt-5">i primi passi</h1>
          <div className="row mt-4">
            <div className="col-6 offset-md-3 col-md-3">
              <div className="card mb-4 shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                     role="img"><title>Titolo</title>
                  <rect width="100%" height="100%" fill="#55595c"/>
                  <text x="50%" y="90%" fill="#eceeef" dy=".3em">Titolo</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis
                    mi ac libero commodo interdum. Donec scelerisque, sapien a molestie congue, enim libero ornare
                    velit, sed suscipit metus leo ac lectus. Sed eget dui velit. Donec sit amet metus massa. Morbi non
                    suscipit eros, sit amet pellentesque eros. Morbi felis arcu, hendrerit nec dapibus nec, commodo quis
                    lectus. Maecenas at gravida tellus. Ut tempor efficitur neque, a accumsan felis rhoncus sed. Quisque
                    auctor tellus id erat viverra, id sagittis nulla laoreet.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    </div>
                    <small className="text-muted">10 minuti</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mb-4 shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                     role="img"><title>Titolo</title>
                  <rect width="100%" height="100%" fill="#55595c"/>
                  <text x="50%" y="90%" fill="#eceeef" dy=".3em">Titolo</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis
                    mi ac libero commodo interdum. Donec scelerisque, sapien a molestie congue, enim libero ornare
                    velit, sed suscipit metus leo ac lectus. Sed eget dui velit. Donec sit amet metus massa. Morbi non
                    suscipit eros, sit amet pellentesque eros. Morbi felis arcu, hendrerit nec dapibus nec, commodo quis
                    lectus. Maecenas at gravida tellus. Ut tempor efficitur neque, a accumsan felis rhoncus sed. Quisque
                    auctor tellus id erat viverra, id sagittis nulla laoreet.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    </div>
                    <small className="text-muted">10 minuti</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 my-5 py-5">
          <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="1941.976" viewBox="20 0 1900 200">
            <defs>
              <style>.b{"{fill:#101010;}"}</style>
            </defs>
            <path className="b" d="M14.508,931.023V219.978H0l14.508-22.351L1941.976,0V219.978h-7.468V931.023Z"/>
          </svg>
          <div className="container-fluid px-0 palette-2">
            <div className="container py-5">
              <div className="row pb-4">
                <h1 className="font-half-regular text-white mx-auto">perché noi</h1>
              </div>
              <div className="row pb-5">
                <div className="col-12 col-sm-4">
                  <div className="card mb-4 text-white border-0 palette-3">
                    <div className="card-body p-1 d-flex flex-column justify-content-center rem-10">
                      <p className="card-text font-half-regular text-center h1">giovani</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 440 191">
                      <defs>
                        <style>.a{"{fill:#3b0412;}"}</style>
                      </defs>
                      <path className="a"
                            d="M964.485,191.947h-442V26.869c32.535.148,65.865.229,98.1.307,120.734.293,245.58.6,362.51,4.371H964.485v160.4Zm-522,0h-441c-.009,0-.845-.463-1.258-24.326C-.153,145.64-.243,98.717,1.485,0,54.983,9.062,120.3,15.545,201.161,19.82c65.692,3.473,142.374,5.538,241.324,6.5V191.946Zm1044.169,0H1044.485V33.9c99.219,4.442,181.2,11.489,250.629,21.543,19.019,2.754,37.348,5.781,54.478,9,17.683,3.319,34.627,6.94,50.364,10.763,16.2,3.936,31.623,8.205,45.828,12.69,14.592,4.607,28.343,9.58,40.87,14.779.7,43.817.66,65.754.506,76.441-.165,11.464-.492,12.784-.506,12.835Z"/>
                      <text className="tk-clone-rounded-latin text-rem-2" x="85" y="105" fill="#eceeef" dy=".3em">Gruppetto di
                        amici
                      </text>
                      <text className="tk-clone-rounded-latin text-rem-2" x="85" y="150" fill="#eceeef" dy=".3em">giovani e
                        motivati!
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="card mb-4 text-white border-0 palette-3">
                    <div className="card-body p-1 d-flex flex-column justify-content-center rem-10">
                      <p className="card-text font-half-regular text-center h1 h-100">appassionati</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="525 0 439 191">
                      <defs>
                        <style>.a{"{fill:#3b0412;}text{font - size: 2rem; font-weight: 100;}"}</style>
                      </defs>
                      <path className="a"
                            d="M964.485,191.947h-442V26.869c32.535.148,65.865.229,98.1.307,120.734.293,245.58.6,362.51,4.371H964.485v160.4Zm-522,0h-441c-.009,0-.845-.463-1.258-24.326C-.153,145.64-.243,98.717,1.485,0,54.983,9.062,120.3,15.545,201.161,19.82c65.692,3.473,142.374,5.538,241.324,6.5V191.946Zm1044.169,0H1044.485V33.9c99.219,4.442,181.2,11.489,250.629,21.543,19.019,2.754,37.348,5.781,54.478,9,17.683,3.319,34.627,6.94,50.364,10.763,16.2,3.936,31.623,8.205,45.828,12.69,14.592,4.607,28.343,9.58,40.87,14.779.7,43.817.66,65.754.506,76.441-.165,11.464-.492,12.784-.506,12.835Z"/>
                      <text className="tk-clone-rounded-latin text-rem-2" x="630" y="105" fill="#eceeef" dy=".3em">Amiamo i
                        giochi,
                      </text>
                      <text className="tk-clone-rounded-latin text-rem-2" x="610" y="150" fill="#eceeef" dy=".3em">soprattutto
                        crearli.
                      </text>
                    </svg>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="card mb-4 text-white border-0 palette-3">
                    <div className="card-body p-1 d-flex flex-column justify-content-center rem-10">
                      <p className="card-text font-half-regular text-center h1">intraprendenti</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1045 0 440 191">
                      <defs>
                        <style>.a{"{fill:#3b0412;}"}</style>
                      </defs>
                      <path className="a"
                            d="M964.485,191.947h-442V26.869c32.535.148,65.865.229,98.1.307,120.734.293,245.58.6,362.51,4.371H964.485v160.4Zm-522,0h-441c-.009,0-.845-.463-1.258-24.326C-.153,145.64-.243,98.717,1.485,0,54.983,9.062,120.3,15.545,201.161,19.82c65.692,3.473,142.374,5.538,241.324,6.5V191.946Zm1044.169,0H1044.485V33.9c99.219,4.442,181.2,11.489,250.629,21.543,19.019,2.754,37.348,5.781,54.478,9,17.683,3.319,34.627,6.94,50.364,10.763,16.2,3.936,31.623,8.205,45.828,12.69,14.592,4.607,28.343,9.58,40.87,14.779.7,43.817.66,65.754.506,76.441-.165,11.464-.492,12.784-.506,12.835Z"/>
                      <text className="tk-clone-rounded-latin text-rem-2" x="1122" y="105" fill="#eceeef" dy=".3em">Abbiamo
                        l'obiettivo
                      </text>
                      <text className="tk-clone-rounded-latin text-rem-2" x="1090" y="150" fill="#eceeef" dy=".3em">di aiutarvi a
                        migliorare.
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 py-5">
          <div className="row pb-3">
            <h1 className="font-half-regular mx-auto">come funziona</h1>
          </div>

          <div className="row pb-3">
            <div className="col-3 col-md-2 my-auto">
              <div className="border border-dark rounded-circle p-3 p-md-4 d-inline-block"
                   >
                <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                     viewBox="0 0 120 100">
                  <defs>
                    <style>.c{"{fill:#bfa77a;}"}</style>
                  </defs>
                  <path className="c"
                        d="M110.063,13.623H80.938c-10.021,0-18.729,7.949-20.917,19.169-2.208-11.22-10.9-19.169-20.917-19.169H10c-5.521,0-10,5.132-10,11.459V83.759c0,6.326,4.479,11.459,10,11.459H28.688c21.292,0,27.646,5.825,30.688,17.9a.64.64,0,0,0,1.25,0c3.063-12.079,9.417-17.9,30.688-17.9H110c5.521,0,10-5.132,10-11.459V25.106C120,18.8,115.563,13.671,110.063,13.623ZM50.417,76.979a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V71.513a.783.783,0,0,1,.729-.836H49.708a.782.782,0,0,1,.729.836v5.467Zm0-14.538a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V56.975a.783.783,0,0,1,.729-.836H49.708a.782.782,0,0,1,.729.836v5.467Zm0-14.538a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V42.437a.783.783,0,0,1,.729-.836H49.708a.782.782,0,0,1,.729.836V47.9Zm54.021,29.052a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V71.489a.783.783,0,0,1,.729-.836h33.417a.782.782,0,0,1,.729.836v5.467Zm0-14.538a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V56.951a.783.783,0,0,1,.729-.836h33.417a.782.782,0,0,1,.729.836v5.467Zm0-14.538a.783.783,0,0,1-.729.836h-33.4a.782.782,0,0,1-.729-.836V42.437a.783.783,0,0,1,.729-.836h33.417a.782.782,0,0,1,.729.836v5.443Z"
                        transform="translate(0 -13.623)"/>
                </svg>
              </div>
            </div>
            <div className="col-9 col-md-10 my-auto">
              <h2 className="font-half-regular">Leggi</h2>
              <p className="lead tk-clone-rounded-latin">Scegli l'argomento che fa per te, approfondisci una sua parte
                con un articolo e studialo, scoprendo nuove cose o consolidando ciò che già sai.</p>
            </div>
          </div>
          <div className="row my-5 py-3">
            <div className="col-9 col-md-10 my-auto text-right">
              <h2 className="font-half-regular">Applica</h2>
              <p className="lead tk-clone-rounded-latin">Applica ciò che impari nei tuoi giochi o nel metodo per
                svilupparli.</p>
            </div>
            <div className="col-3 col-md-2 my-auto text-right">
              <div className="border border-dark rounded-circle p-3 p-md-4 d-inline-block"
                   >
                <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                     viewBox="0 0 117.015 90.883">
                  <defs>
                    <style>.d{"{fill:#595643;stroke:#54513f;stroke-width:5px;}"}</style>
                  </defs>
                  <path className="d" d="M56.25,101.063,30.188,75l-8.875,8.813L56.25,118.75l75-75-8.812-8.812Z"
                        transform="translate(-17.771 -31.403)"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-5 mb-5">
            <div className="col-3 col-md-2 my-auto">
              <div className="border border-dark rounded-circle p-3 p-md-4 d-inline-block"
                   >
                <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                     viewBox="0 0 80 90">
                  <defs>
                    <style>.e{"{fill:#201211;}"}</style>
                  </defs>
                  <path className="e"
                        d="M62.857,56.25A17.239,17.239,0,0,0,52.18,59.923l-18.3-11.259a16.713,16.713,0,0,0,0-7.327l18.3-11.259A17.238,17.238,0,0,0,62.857,33.75,17.011,17.011,0,0,0,80,16.875a17.145,17.145,0,0,0-34.286,0,16.674,16.674,0,0,0,.406,3.663L27.82,31.8a17.239,17.239,0,0,0-10.677-3.673,16.877,16.877,0,1,0,0,33.75A17.239,17.239,0,0,0,27.82,58.2l18.3,11.259a16.674,16.674,0,0,0-.406,3.663A17.145,17.145,0,1,0,62.857,56.25Z"/>
                </svg>
              </div>
            </div>
            <div className="col-9 col-md-10 my-auto">
              <h2 className="font-half-regular">Condividi</h2>
              <p className="lead tk-clone-rounded-latin">Confrontati con gli altri appassionati e sviluppatori di
                videogiochi. Cresci tu, cresciamo tutti.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 mt-5">
          <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 1900 230">
            <defs>
              <style>.f{"{fill:#0d0d0d;}"}</style>
            </defs>
            <path className="f" d="M0,4413.158l1921.6,227.378,8.458,1608.622L3.186,6246.19Z"
                  transform="translate(0.002 -4413.158)"/>
          </svg>
          <div className="container-fluid px-0 py-5 palette-1">
            <div className="container pb-5 mb-5">
              <div className="row pb-4">
                <h1 className="font-half-regular text-white mx-auto">inizia l'avventura</h1>
              </div>
              <div className="row align-items-center text-white">
                <div className="col-12 col-md-6 pb-2">
                  <h3 className="font-weight-light tk-clone-rounded-latin">Iscriviti al Blog per tenerti aggiornato sugli articoli usciti, le novità e i traguardi.</h3>
                </div>
                <div
                  className="col text-white offset-md-2 mt-md-3 d-flex justify-content-lg-start justify-content-center">
                  <Button variant="outline-light" className="tk-clone-rounded-latin mt-md-5 py-3 px-5">Iscriviti ora</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      <div ref={eggRef}/>
      <div style={{height: "1px"}}/>
      <div style={{height: "1px"}}>
        <Waypoint onEnter={() =>  {
          if (egg === -1) return;
          if(egg > 4){
            document.querySelector('#egg').classList.remove('d-none');
            setEgg(-1);
          } else {
            setEgg(egg+1);
            eggRef.current.scrollIntoView(false);
          }

        }}/>
      </div>
      <div className="d-none container" id="egg">
        Easter egg!!!
      </div>
    </React.Fragment>
  )
}

export default Home;
