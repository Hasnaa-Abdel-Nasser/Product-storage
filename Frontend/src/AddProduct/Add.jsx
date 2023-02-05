import React from "react";
import { useState } from "react";
import "./add.css";
import { Post } from "../database/endPointe";
let dialogStyles = {
  width: "40%",
  height: "50%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "white",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
};

let dialogCloseButtonStyles = {
  marginBottom: "5px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end",
};

export const NewProduct = ({ addProduct, setAddProduct, setProduct }) => {
  const [products, setProducts] = useState({
    name: "",
    price: 0,
    desc: "",
  });
  const close = () => {
    setAddProduct(false);
  };
  const checkData = (event) => {
    console.log(event.target.name);
    if (event.target.name === "name") {
      setProducts({
        ...products,
        name: event.target.value,
      });
    } else if (event.target.name === "price") {
      setProducts({
        ...products,
        price: event.target.value,
      });
    } else {
      setProducts({
        ...products,
        desc: event.target.value,
      });
    }
  };
  const AddNew = () => {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    Post(name, price, desc, setProduct);
    close();
  };
  let dialog = (
    <div style={dialogStyles}>
      <button style={dialogCloseButtonStyles} onClick={() => {close()}}>x</button>
      <div style={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "rgb(44, 24, 109)",
          marginBottom: "10px",
        }}>
        <p>Add New Product</p>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => {
              checkData(event);
            }}
          />
          <label>Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(event) => {
              checkData(event);
            }}
          />
          <label>Description</label>
          <textarea
            rows="5"
            cols="40"
            name="desc"
            id="desc"
            onChange={(event) => {
              checkData(event);
            }}
          ></textarea>
        </form>
        <button
          className="add-product"
          onClick={() => {
            AddNew();
          }}
          style={{ position: "absolute", right: "20px", marginTop: "10px" }}
        >
          Add Product
        </button>
      </div>
    </div>
  );

  if (!addProduct) {
    dialog = null;
  }
  return (
    <div
      style={{
        backgroundColor: "#b2b2b280",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <div>{dialog}</div>
    </div>
  );
};
