import React from "react"
import ProductosInfo from "../components/productosInfo"
import { Grid, Paper } from "@material-ui/core";
import HeaderStore from '../components/headerProduct'
class Empresas extends React.Component {
    render() {
        return (
            <div _ngcontent-yau-c5="" className="row">
                <div _ngcontent-yau-c5="" className="col-md-1"></div>
                <div _ngcontent-smg-c8="" className="col-md-9 col-sm-9">
                    <div _ngcontent-smg-c8="" className="card">
                        <HeaderStore />
                        <div _ngcontent-yau-c5="" className="col-md-9 col-sm-9">
                            <div _ngcontent-yau-c5="" className="card-body">
                                <div _ngcontent-yau-c5="" className="card-block">
                                    <div _ngcontent-yau-c5="" className="row">
                                        <div _ngcontent-yau-c5="" className="col-md-12">
                                            <ngb-tabset _ngcontent-yau-c5="" type="pills">
                                                <ul role="tablist" className="nav nav-pills justify-content-start">
                                                    <li className="nav-item"><a className="nav-link active" href="" role="tab" id="ngb-tab-21" aria-controls="ngb-tab-21-panel" aria-selected="true" aria-disabled="false"> Productos</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="" role="tab" id="ngb-tab-22" aria-selected="false" aria-disabled="false"><b _ngcontent-yau-c5="">Promociones</b></a></li>
                                                    <li className="nav-item"><a className="nav-link disabled" href="" role="tab" id="ngb-tab-23" tabindex="-1" aria-selected="false" aria-disabled="true"> Comentarios</a></li>
                                                </ul>
                                                <Grid container spacin={2} classNameName="producto">
                                                    <ProductosInfo />
                                                </Grid>
                                            </ngb-tabset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-yau-c5="" className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Empresas
