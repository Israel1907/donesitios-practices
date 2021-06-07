import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import '../styles/empresas.css'

function HeaderProducts (props){
    var id1 = useParams();
    const [stores, setStores] = useState([]);

    useEffect( async() => {
     await axios
          .get("https://api.donesitios.com/v1/store/"+props.ciudadId+"/rating?page=1")
          .then((res) => {
            setStores(res.data.data);
          })
            .catch((error) => console.log(error));
    },[])

    return  stores.map((store) => {
        if (store.id==id1.ids){    
            console.log(store.id)
            return(
                <React.Fragment>
                    <div _ngcontent-smg-c8="" class="card-img-top img-fluid bg-cover height-3000">
                    <img _ngcontent-yau-c5="" className="baner img-fluid store-banner" src={store.cover.url}/>
                    </div>
                    <div _ngcontent-yau-c5="" className="row profile-store">
                        <div _ngcontent-yau-c5="" className="col-2 ">
                            <img _ngcontent-yau-c5="" alt="image logo" className="logo-img" src={store.logo.url}/>
                        </div>
                        <div _ngcontent-yau-c5="" className="col div-title">
                            <div _ngcontent-yau-c5="" className="row">
                                <h4 _ngcontent-yau-c5="" className="white">Dkaviedes</h4>
                                <i _ngcontent-yau-c5="" className="fas red fa-circle fa-2x "></i>
                            </div>
                            <div _ngcontent-yau-c5="" className="row">
                                <ul _ngcontent-yau-c5="" className="no-list-style">
                                    <li _ngcontent-yau-c5="" className="mb-2">
                                        <span _ngcontent-yau-c5="" className=" text-bold-500 subtitles">
                                            <a _ngcontent-yau-c5="">
                                                <i _ngcontent-yau-c5="" className="far fa-eye font-small-3"></i> 417</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>        
                                    )}
    })
}
                                    const mapStateToProps = (state) => ({
                                        ciudadId: state.ciudadId,
                                      });
                                      
export default connect(mapStateToProps)(HeaderProducts)
