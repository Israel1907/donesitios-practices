import React from "react"
import Ahome from "../components/apphome";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Premium from "../pages/Premium"
import Doner from '../pages/doner'
import reducer from "../reducers/index"
import Empresas from '../pages/empresas'
import DonerRegistro from '../pages/donersRegistro'

const ciudades = {
  ciudadId: "5ec85f3117f71276",
  ciudadName: "Loja",
  counter: 0,
  page: "1"
};


const store = createStore(reducer, ciudades);
class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>


          <Switch>
            <Route exact path="/" ><Navbar /><Ahome /> <Footer /> </Route>
            <Route exact path="/doner"><Navbar /><Doner /><Footer /></Route>
            <Route exact path="/doner/registro"><DonerRegistro /></Route>
            <Route exact path="/premium" component={Premium} />
            <Route exact path={"/empresas/:ids"}><Empresas /></Route>

          </Switch>


        </BrowserRouter>
      </Provider>
    );
  }
}

export default Home;
