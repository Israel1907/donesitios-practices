import axios from "axios";
import React, { useState, useEffect } from "react";
import { setCity } from "../accions/index";
import { connect } from "react-redux";
import CardProduct from '../components/productosGrid'
import { useParams } from "react-router";
function Productos(props) {
  var urlPt1 = "https://api.donesitios.com/v1/product/"
  var urlPt2 = "/avalible/all?page=1"
  var id1 = useParams();
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");

  console.log(id1.ids)

  useEffect(() => {
    axios
      .get(urlPt1 + id1.ids + urlPt2)
      .then((res) => {
        setProductos(res.data.data);
        console.log(productos)
      })
      .catch((error) => console.log(error));
  }, [])



  return productos.map((producto) => {
    //TODO CREAR UN COMPONENTE PARA PRESENTAR LAS TIENDAS.
    return (
      <React.Fragment>
        <CardProduct
          id={producto.id}
          name={producto.name}
          descripcion={producto.description}
          coverUrl={producto.cover.url}
        />
      </React.Fragment>
    );
  });
}

const mapStateToProps = (state) => ({
  ciudadId: state.ciudadId,
});

export default connect(mapStateToProps)(Productos)