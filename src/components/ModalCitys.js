import React from "react";
import { connect } from "react-redux";
import { setCity } from "../accions/index";
import { setCityName } from "../accions/index";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
} from "reactstrap";

class ModalCity extends React.Component {
  constructor(props) {
    super(props);
    this.cId = this.props.ciudadId
  }
  citys = []
  state = {
    abierto: false,

  };

  hadlesetCity = (event) => {
    const ciudadF = this.citys.find(item => item.id == event.target.value)
    console.log("+++++++", ciudadF)
    this.props.setCity(event.target.value)
    this.props.setCityName(ciudadF.name)
  }

  openModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };


  componentDidMount() {
    axios
      .get("https://api.donesitios.com/v1/city/delivery/all")
      .then((res) => {
        this.citys = res.data.data
        console.log(this.citys)
      })
  }

  render() {
    return (
      <>
        <Button className="" onClick={this.openModal}>
          {this.props.ciudadName}
        </Button>
        <Modal isOpen={this.state.abierto}>
          <ModalHeader>Selecciona y explora la ciudad</ModalHeader>
          <ModalBody>
            <FormGroup>
              <select onChange={(this.hadlesetCity)}>
                <option >Elige una opción</option>
                {this.citys.map((city) => {
                  return <option value={city.id}>{city.name}</option>;
                })}
              </select>
            </FormGroup>
            <Button className="" onClick={this.openModal}>Explorar</Button>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ciudadId: state.ciudadId,
  ciudadName: state.ciudadName
});

const mapDispatchToProps = {
  setCity,
  setCityName
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCity)


