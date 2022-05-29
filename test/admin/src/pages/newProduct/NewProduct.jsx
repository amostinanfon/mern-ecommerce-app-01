import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {


  const [ inputs , setInputs ] = useState({});
  const [ file , setFile ] = useState(null);
  const [ cat , setCat ] = useState([]);

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
    console.log(inputs);
  }

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  }

  const handleClick = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" 
          onChange={e => setFile(e.target.files)[0]}
        />
        </div>
        <div className="addProductItem">
          <label>Titre</label>
          <input
            name="title" 
            type="text" 
            placeholder="Apple Airpods" 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"  
            type="text" 
            placeholder="Description . . ." 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Prix</label>
          <input
            name="price" 
            type="number" 
            placeholder="100" 
            onChange={handleChange} 
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            // name="text" 
            type="text" 
            placeholder="jeans , jupes" 
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>En Stock</label>
          <select 
            name="inStock" 
            onChange={handleChange}
          >
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
        </div>
        <button
          onClick={handleClick} 
          className="addProductButton">Créer</button>
      </form>
    </div>
  );
}
