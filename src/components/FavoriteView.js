import "./FavoriteView.css";
import React, {useState, useEffect} from "react";

import { addToFirebase } from "../helpers/firebaseHelpers";

const addFavorite = async (name, description) => {
  addToFirebase({objectToSave: {name, description}}, "MiColeccionDePrueba");
}

const FavoriteView = () => {
 

  return (
    <div>
        <h1>Favorite View</h1>
        <button onClick={() => addFavorite("Favorite Test Unisabana",
         "Description de lo que vamos a guardar" )}>Add Favorite
         </button>
    </div>
  );
};

export default FavoriteView;