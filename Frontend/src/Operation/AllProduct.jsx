import "./allproduct.css";
import { useState, useEffect } from "react";
import { NewProduct } from "../AddProduct/Add";
import { Edit } from "../EditProduct/edit";
import { Delete } from "../database/endPointe";
import axios from "axios";
import icon1 from '../images/pencil.png'
import icon2 from '../images/delete.png'
export default function Products() {
  const [addProduct, setAddProduct] = useState(false);
  const [data, setData] = useState({
    val: false,
    id: "",
    name: "",
    price: "",
    description: "",
  });
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="full-data">
      <div className="first-line">
        <p style={{ cursor: "pointer" }}></p>
        <button className="add-product" onClick={() => setAddProduct(true)}>
          + New product
        </button>
      </div>
      {loading ? (
        <h3>Loadding</h3>
      ) : errors ? (
        <h3>Found Errors</h3>
      ) : (
        <table>
          <tr>
            <th>
              <div>ID</div>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
          {product.map((product, index) => {
            return (
              <tr key={index}>
                <td className="id">{index + 1}</td>
                <td>{product.name}</td>
                <td>
                  <small>$</small>
                  {product.price}
                </td>
                <td>{product.description}</td>
                <td onClick={() => toUpdate(index)}>
                  <img src={icon1} alt="edit" />
                </td>
                <td onClick={() => Delete(product.id, setProduct)}>
                  <img src={icon2} alt="delete" />
                </td>
              </tr>
            );
          })}
        </table>
      )}

      {addProduct && (
        <NewProduct
          addProduct={addProduct}
          setAddProduct={setAddProduct}
          setProduct={setProduct}
        />
      )}
      {data.val && (
        <Edit data={data} setData={setData} setProduct={setProduct} />
      )}
    </div>
  );
  function toUpdate(index) {
    const { id, name, price, description } = product[index];
    setData({
      val: true,
      id: id,
      name: name,
      price: price,
      description: description,
    });
  }
}
