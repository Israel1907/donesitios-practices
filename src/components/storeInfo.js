import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "../styles/app-home.css";
import { Link, useParams } from 'react-router-dom';
import { connect } from "react-redux";


const Storeinfo = ({ ids, names, urlid, coverUrl, volume, logoUrl }) => {


  return (

    <Grid item xs={3} className="card-body" >

      <Link to={"/empresas/" + ids}  >
        <div _ngcontent-pqw-c4="" className="card-img"></div>
        <img
          _ngcontent-pqw-c4=""
          alt="cover store"
          className="card-img-top img-fluid"
          src={coverUrl}
        />
        <h4 _ngcontent-pqw-c4="" className="card-title"></h4>

        <div _ngcontent-pqw-c4="" className="card-block">
          <div _ngcontent-pqw-c4="" className="row">
            <div _ngcontent-pqw-c4="" className="col-9">
              <h4
                _ngcontent-teg-c4=""
                className="card-title store-name store-title-name"
              >
                {names}
              </h4>
            </div>
            <div _ngcontent-pqw-c4="" className="col-3">
              <span _ngcontent-pqw-c4="" className="fill store-name">
                <span _ngcontent-pqw-c4="" className="half">

                </span>
              ★{" "}
              </span>
              <span _ngcontent-pqw-c4="" className="grey">
                4.32{" "}
              </span>
            </div>
          </div>
        </div>

        <div _ngcontent-pqw-c4="" className="col-sm-1"></div>
      </Link>

    </Grid>
  );
};

const mapStateToProps = (state) => ({
  ciudadId: state.ciudadId,
});


export default connect(mapStateToProps)(Storeinfo)
