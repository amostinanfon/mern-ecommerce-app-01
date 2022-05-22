import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Produit</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nom</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">OUI</option>
            <option value="no">NoN</option>
          </select>
        </div>
        <button className="addProductButton">Créer</button>
      </form>
    </div>
  );
}
