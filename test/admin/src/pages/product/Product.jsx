import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";


export default function Product() {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) => 
        state.product.products.find((product) => product._id === productId)
    )


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Produit</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img 
                    src={product.img}
                    alt="" 
                    className="productInfoImg" 
                />
                  <span className="productName">{ product.title }</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">{product._id}:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">ventes:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">en stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nom du produit</label>
                  <input type="text" placeholder={product.title} />
                  <label>Description du produit</label>
                  <input type="text" placeholder={product.title} />
                  <label>Price</label>
                  <input type="text" placeholder={product.price} />
                  <label>En Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
