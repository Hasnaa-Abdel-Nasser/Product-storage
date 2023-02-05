import React from "react";
import "./summary.css";
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'

export default function Summary() {
  const summary = [
    {
      image: icon1,
      text: "Added",
      num : window.localStorage.getItem("add")??0
    },
    {
      image: icon2,
      text: "Updated",
      num : window.localStorage.getItem("update")??0
    },
    {
      image: icon3,
      text: "Deleted",
      num: window.localStorage.getItem("deleted")??0
    },
  ];
  return (
    <div className="summary">
      <p className="header">SUMMARY</p>
      <div className="components">
        {summary.map((data, index) => {
          return (
            <div className="container" key={index}>
              <div className="image">
                <img src = {data.image} alt="images"/>
              </div>
              <div className="container-data">
                <p className="header">{data.text}</p>
                <p className="count" id={`${data.text}`}>{`${data.num}`} Product</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
