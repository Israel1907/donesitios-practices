import React from "react";
import { Section } from "react-bulma-components";
import "../styles/app-home.css";
import StoreGrid from "../components/storeGrid";
import { Grid } from "@material-ui/core";
import ModalCity from "./ModalCitys";
import { Pagination } from '@material-ui/lab';
import { connect } from "react-redux";
import { setPage } from '../accions/index'
class aHome extends React.Component {
  constructor(props) {
    super(props);
    this.counter = this.props.counter
    this.page1 = this.props.page
    console.log(this.page1)

  }
  id = "";
  setId(props) {
    this.setState({ id: props });
    console.log(this.id);
  }
  hadleSetPage = (event) => {
    this.props.setPage(event.target.outerText)

  }

  render() {
    return (
      <div _ngcontent-pqw-c4="" className="home-body">
        <br _ngcontent-myb-c4=""></br>
        <br _ngcontent-myb-c4=""></br>

        {/*TODO CREAR UN COMPONENTE PARA CADA SECCION */}
        <seccion>
          <div _ngcontent-pqw-c4="" className="row align-items-center h-100">
            <div _ngcontent-pqw-c4="" className="col text-center">
              <a _ngcontent-pqw-c4="" className="logo-2" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/default/logodone.png"
                  width="70"
                />
              </a>
              <p _ngcontent-pqw-c4="" className="font-medium-3 mt-1 store-name">
                D'One donde prefieras
                <ModalCity />
              </p>
            </div>
          </div>

          <div _ngcontent-pqw-c4="" className="row align-items-center">
            <div _ngcontent-pqw-c4="" className="col-sm text-center">
              <h2 _ngcontent-pqw-c4="" className="text-bold-600">
                Lo tenemos todo en
              </h2>
            </div>
          </div>

          <div _ngcontent-pqw-c4="" className="row mb-1">
            <div _ngcontent-pqw-c4="" className="col-md-3 col-sm-1 col-1"></div>
            <div _ngcontent-pqw-c4="" className="col-md-1 col-sm-1 col-1">
              <a _ngcontent-pqw-c4="" className="logo" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/hamburguesa.png"
                  width="70"
                />
              </a>
            </div>
            <div _ngcontent-pqw-c4="" className="col-1">
              <a _ngcontent-pqw-c4="" className="logo logo-out" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/kit-de-primeros-auxilios.png"
                  width="70"
                />
              </a>
            </div>

            <div _ngcontent-pqw-c4="" className="col-1">
              <a _ngcontent-pqw-c4="" className="logo logo-out" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/tarjeta-de-credito.png"
                  width="70"
                />
              </a>
            </div>

            <div _ngcontent-pqw-c4="" className="col-md-1 col-sm-1 col-1">
              <a _ngcontent-pqw-c4="" className="logo" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/taxi.png"
                  width="70"
                />
              </a>
            </div>

            <div _ngcontent-pqw-c4="" className="col-1">
              <a _ngcontent-pqw-c4="" className="logo logo-out" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/mancuerna.png"
                  width="70"
                />
              </a>
            </div>

            <div _ngcontent-pqw-c4="" className="col-md-1 col-sm-1 col-1">
              <a _ngcontent-pqw-c4="" className="logo" href="#/">
                <img
                  _ngcontent-pqw-c4=""
                  height="70"
                  src="../../../../assets/img/icons/regalo.png"
                  width="70"
                />
              </a>
            </div>
          </div>
        </seccion>

        <Section _ngcontent-pqw-c4="" className="indications-shopping">
          <div _ngcontent-pqw-c4="" className="row align-items-center">
            <div _ngcontent-pqw-c4="" className="col-sm-3 col-md-3 col-3"></div>
            <div _ngcontent-pqw-c4="" className="col-sm-2 col-md-2 option-buy ">
              <div _ngcontent-pqw-c4="" className="row align-items-center">
                <div _ngcontent-pqw-c4="" className="col-sm-2 mr-3 p-2">
                  <i
                    _ngcontent-pqw-c4=""
                    className="fas fa-shopping-bag fa-3x icon-home-delivery"
                  ></i>
                </div>
                <div _ngcontent-pqw-c4="" className="col-sm-auto">
                  <div _ngcontent-pqw-c4="" className="row no-edge-bottom">
                    <p _ngcontent-pqw-c4="" className="text-bold-400">
                      {" "}
                      1. Escoge los productos
                    </p>
                  </div>
                  <div _ngcontent-pqw-c4="" className="row">
                    <p _ngcontent-pqw-c4="" className="text-muted font-small-3">
                      {" "}
                      Más de 1000 empresas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div _ngcontent-pqw-c4="" className="col-sm-2 option-buy">
              <div _ngcontent-pqw-c4="" className="row">
                <div _ngcontent-pqw-c4="" className="col-sm-2 mr-3 p-2">
                  <i
                    _ngcontent-pqw-c4=""
                    className="fas fa-wallet fa-3x icon-home-delivery"
                  ></i>
                </div>

                <div _ngcontent-pqw-c4="" className="col-sm-auto">
                  <div _ngcontent-pqw-c4="" className="row no-edge-bottom">
                    <p _ngcontent-pqw-c4="" className="text-bold-400">
                      {" "}
                      2. Haz tu pedido
                    </p>
                  </div>

                  <div _ngcontent-pqw-c4="" className="row">
                    <p _ngcontent-pqw-c4="" className="text-muted font-small-3">
                      Fácil y rápido. Puedes pagar
                    </p>
                  </div>

                  <div _ngcontent-pqw-c4="" className="row">
                    <p _ngcontent-pqw-c4="" className="text-muted font-small-3">
                      {" "}
                      online o en la entrega.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div _ngcontent-pqw-c4="" className="col-sm-3 option-buy">
              <div _ngcontent-pqw-c4="" className="row">
                <div _ngcontent-pqw-c4="" className="col-sm-2 mr-3 p-2">
                  <i
                    _ngcontent-pqw-c4=""
                    className="fas fa-shipping-fast fa-3x icon-home-delivery"
                  ></i>
                </div>

                <div _ngcontent-pqw-c4="" className="col-sm-auto mr-1 m-2">
                  <div _ngcontent-pqw-c4="" className="row no-edge-bottom">
                    <p _ngcontent-pqw-c4="" className="text-bold-400">
                      {" "}
                      3. Recibe tu pedido
                    </p>
                  </div>

                  <div _ngcontent-pqw-c4="" className="row">
                    <p _ngcontent-pqw-c4="" className="text-muted font-small-3">
                      {" "}
                      El pedido en la puerta de tu casa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>



        <Grid container spacin={2} className="Row">
          <StoreGrid />

        </Grid>

        <Pagination defaultPage={1} onChange={(this.hadleSetPage)} count={(((this.props.counter) / 10) + 1).toFixed(0)} variant="outlined" shape="rounded" />

        <br _ngcontent-myb-c4=""></br>
        <br _ngcontent-myb-c4=""></br>
        <br _ngcontent-myb-c4=""></br>

        <Section _ngcontent-myb-c4="" class="logos">
          <div _ngcontent-myb-c4="" class="row logos-row-1">
            <div _ngcontent-myb-c4="" class="col-sm-2 col-xl-1"></div>
            <div _ngcontent-myb-c4="" class="col-sm-10 slider-logos">
              <div _ngcontent-myb-c4="" class="row align-items-md-center">
                <div
                  _ngcontent-myb-c4=""
                  class="col-sm-6 col-md-6 overlap card-img"
                >
                  <img
                    _ngcontent-myb-c4=""
                    alt=""
                    class="img-phone-promo height-600"
                    src="../../../../assets/img/default/appdone.png"
                  />
                </div>
                <div _ngcontent-myb-c4="" class="col-sm-6 col-md-6">
                  <div _ngcontent-myb-c4="" class="row text-right ">
                    <h2
                      _ngcontent-myb-c4=""
                      class="card-title font-large-3 text-bold-600"
                    >
                      <font _ngcontent-myb-c4="" color="071F30">
                        D'OneSitios
                      </font>
                      donde prefieras{" "}
                    </h2>
                  </div>
                  <div _ngcontent-myb-c4="" class="row text-right"></div>
                  <div _ngcontent-myb-c4="" class="row">
                    <a
                      _ngcontent-myb-c4=""
                      class="a-app-store"
                      href="https://apps.apple.com/ec/app/donesitios/id1488842427"
                      target="_blank"
                    >
                      <img
                        _ngcontent-myb-c4=""
                        alt=""
                        class="app-store"
                        src="../../../assets/img/app-play-store/apple.svg"
                      />
                    </a>
                    <a
                      _ngcontent-myb-c4=""
                      class="a-app-play"
                      href="https://play.google.com/store/apps/dev?id=5092779153184012118"
                      target="_blank"
                    >
                      <img
                        _ngcontent-myb-c4=""
                        alt=""
                        class="app-store"
                        src="../../../assets/img/app-play-store/google.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br _ngcontent-myb-c4=""></br>
          <br _ngcontent-myb-c4=""></br>
        </Section>

        <Section _ngcontent-myb-c4="" class="business">
          <div _ngcontent-myb-c4="" class="row">
            <div _ngcontent-myb-c4="" class="col-sm-2"></div>
            <div _ngcontent-myb-c4="" class="col-sm-8">
              <div
                _ngcontent-myb-c4=""
                class="row card-block-business align-items-md-center"
              >
                <div _ngcontent-myb-c4="" class="col-sm-6 col-md-6 ">
                  <div
                    _ngcontent-myb-c4=""
                    class="row text-right justify-content-sm-center "
                  >
                    <h2
                      _ngcontent-myb-c4=""
                      class="card-title font-large-2 white text-bold-600"
                    >
                      <font _ngcontent-myb-c4="" color="FFBE0A">
                        D'One
                      </font>
                      Business{" "}
                    </h2>
                  </div>
                  <div
                    _ngcontent-myb-c4=""
                    class="row text-right white justify-content-sm-center"
                  >
                    <p _ngcontent-myb-c4="" class="font-medium-3 grey">
                      La mejor manera de vender al mundo, entregas a domicilio.{" "}
                    </p>
                  </div>
                  <div
                    _ngcontent-myb-c4=""
                    class="row justify-content-sm-center"
                  >
                    <a
                      _ngcontent-myb-c4=""
                      class="btn btn-raised mr-1 btn-business btn-round btn-lg white"
                      href="https://www.donesitios.com/"
                    >
                      {" "}
                      Empieza{" "}
                    </a>
                  </div>
                </div>
                <div _ngcontent-myb-c4="" class="col-sm-6 col-md-6">
                  <div _ngcontent-myb-c4="" class="row justify-content-md-end">
                    <img
                      _ngcontent-myb-c4=""
                      alt=""
                      class="img-business"
                      src="../../../../assets/img/register/bus2.png"
                    />
                  </div>
                </div>
              </div>
              <div _ngcontent-myb-c4="" class="row grow-with">
                <h3
                  _ngcontent-myb-c4=""
                  class="card-title font-large-2 store-name text-bold-600"
                >
                  {" "}
                  Crecemos junto a ti{" "}
                </h3>
              </div>
              <div
                _ngcontent-myb-c4=""
                class="row text-left work"
                matchheight="card"
              >
                <div _ngcontent-myb-c4="" class="col-lg-4 col-md-4 col-sm-12">
                  <div
                    _ngcontent-myb-c4=""
                    class="card card-inverse card-work text-center"
                  >
                    <div _ngcontent-myb-c4="" class="card-body">
                      <div _ngcontent-myb-c4="" class="card-img overlap">
                        <img
                          _ngcontent-myb-c4=""
                          alt="element 06"
                          class="done-logos"
                          src="../../../../assets/img/app-play-store/play-store-mensajero.png"
                          width="170"
                        />
                      </div>
                      <div _ngcontent-myb-c4="" class="card-block">
                        <h4 _ngcontent-myb-c4="" class="card-title store-name">
                          D'OneCourier
                        </h4>
                        <p _ngcontent-myb-c4="" class="card-text">
                          Flexibilidad de horario, ingresos competitivos a tu
                          medida, oportunidad de cononcer ciudades repartiendo.
                          Inscribete y en menos de 24 horas forma parte de
                          D'OneSitios.
                        </p>
                        <a
                          _ngcontent-myb-c4=""
                          class="btn btn-raised mr-1 btn-work btn-round btn-lg white"
                          href="#/registrar/doners"
                        >
                          {" "}
                          Aplicar{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-myb-c4="" class="col-lg-4 col-md-4 col-sm-12">
                  <div
                    _ngcontent-myb-c4=""
                    class="card card-inverse card-work text-center"
                  >
                    <div _ngcontent-myb-c4="" class="card-body">
                      <div _ngcontent-myb-c4="" class="card-img overlap">
                        <img
                          _ngcontent-myb-c4=""
                          alt="element 03"
                          class="done-logos"
                          src="../../../../assets/img/app-play-store/play-store-tienda.png"
                          width="170"
                        />
                      </div>
                      <div _ngcontent-myb-c4="" class="card-block">
                        <h4 _ngcontent-myb-c4="" class="card-title store-name">
                          D'OneStore
                        </h4>
                        <p _ngcontent-myb-c4="" class="card-text">
                          Impulsa tu negocio formando parte de nosotros y accede
                          a nuestras herramientas y tecnologías. Con nuestra
                          base de clientes, ten la ciudad a tu alcance.
                        </p>
                        <a
                          _ngcontent-myb-c4=""
                          class="btn btn-raised mr-1 btn-work  btn-round btn-lg white"
                          href="https://www.donesitios.com/"
                        >
                          {" "}
                          Aplicar{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-myb-c4="" class="col-lg-4 col-md-4 col-sm-12">
                  <div
                    _ngcontent-myb-c4=""
                    class="card card-inverse card-work text-center"
                  >
                    <div _ngcontent-myb-c4="" class="card-body">
                      <div _ngcontent-myb-c4="" class="card-img overlap">
                        <img
                          _ngcontent-myb-c4=""
                          alt="element 07"
                          class="done-logos"
                          src="../../../../assets/img/app-play-store/play-store.png"
                          width="170"
                        />
                      </div>
                      <div _ngcontent-myb-c4="" class="card-block">
                        <h4 _ngcontent-myb-c4="" class="card-title store-name">
                          D'OneSitios
                        </h4>
                        <p _ngcontent-myb-c4="" class="card-text ">
                          Creeamos una nueva forma de vender aprovechando las
                          nuevas tecnologías, potenciando nuestras empresas
                          afilidas. Esto requiere una gran creatividad, trabajo
                          en equipo y mucho corazón ¿List@ para el desafío?
                        </p>
                        <a
                          _ngcontent-myb-c4=""
                          class="btn btn-raised mr-1 btn-work btn-round btn-lg white"
                          href="#/doners/registrar"
                        >
                          {" "}
                          Aplicar{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div _ngcontent-myb-c4="" class="col-sm-2"></div>
          </div>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  page: state.page
});

const mapDispatchToProps = {
  setPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(aHome);
