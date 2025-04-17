import {React,useState} from "react";
import { product } from "../Data";
const Products = () => {
  const [colors, setColors] = useState(product.map(() => "white"));  
  const Toggle = (index) => {
  const newColors = [...colors];  
    newColors[index] = newColors[index] === "red" ? "white" : "red";  
    setColors(newColors);  
  };
   
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="icons">
                <a href="#menu" className="fas fa-shopping-cart"></a>
                <a onClick={() =>Toggle(index)} className="fas fa-heart"
                   style={{ color: colors[index], cursor: "pointer"}} ></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                ₹ {item.Menuprice} <span>{item.spanprice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
