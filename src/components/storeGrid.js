import axios from "axios";
import React, { useState, useEffect } from "react";
import Storeinfo from "../components/storeInfo";
import { connect } from "react-redux";
import { setCounter } from '../accions/index'
function Stores(props) {
  var url = "https://api.donesitios.com/v1/store/" + props.ciudadId + "/rating?page=" + props.page
  console.log(props.page)
  const [stores, setStores] = useState([]);
  var id1 = "";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setStores(res.data.data);
        props.setCounter(res.data.total)
        console.log(props.counter)
      })
      .catch((error) => console.log(error));
  }, [props.ciudadId, props.page])


  return stores.map((store) => {
    //TODO CREAR UN COMPONENTE PARA PRESENTAR LAS TIENDAS.
    return (
      <React.Fragment>
        {store.store_subsidiaries.map((season) => {
          id1 = season.id;
        })}

        <Storeinfo
          stores
          ids={store.id}
          names={store.name}
          urlid={store.urlid}
          coverUrl={store.cover.url}
          covermedurl={store.cover.medium_thumb.url}
          coverlargurl={store.cover.larg_thumb.url}
          logoUrl={store.logo.url}
          rating={store.rating}
          visit={store.visit}
          id1
        />
      </React.Fragment>
    );
  });
}

const mapStateToProps = (state) => ({
  ciudadId: state.ciudadId,
  page: state.page,
  counter: state.counter
});
const mapDispatchToProps = {
  setCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stores)


