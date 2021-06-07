import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "../styles/app-home.css";

const ProductosGrid = ({ name, descripcion, coverUrl }) => {
  return (
    <Grid item xs={3} className="card-body">
      <div _ngcontent-yau-c6="" className="card">
        <div _ngcontent-yau-c6="" class="card-body">
          <div _ngcontent-yau-c6="" class="card-img">
            <img _ngcontent-yau-c6="" alt="Card image cap" class="card-img-top img-fluid w-75" src={coverUrl} />
          </div>
          <div _ngcontent-yau-c6="" class="card-block">
            <h4 _ngcontent-yau-c6="" class="card-title">{name}</h4>
            <p _ngcontent-yau-c6="" class="card-text">{descripcion}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};
export default ProductosGrid;
