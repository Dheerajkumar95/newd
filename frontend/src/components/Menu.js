import {React,useState} from "react";
import { menu } from "../Data";
import {toast,Toaster} from "react-hot-toast";
const Menu = ({ cartItems, setCartItems,count,setcount }) => {
  const addToCart = (index) => {
    const item = menu[index];
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      const updatedCartItems = cartItems.map(cartItem =>cartItem.id === item.id
          ? { ...cartItem, qnty: cartItem.qnty + 1 }  
          : cartItem
      );
      setCartItems(updatedCartItems);  
    } else {
      const newItem = { ...item, qnty: 1 };
      setCartItems([...cartItems, newItem]);  
      toast.success("Added to your cart",{
        autoClose: 500, 
      });
    }
    
  };  
  const addToHeart = (index) => {
    const item = menu[index];
    const itemInCart = count.find((countItem) => countItem.id === item.id);
  
    if (itemInCart) {
      const updatedCount = count.filter((countItem) => countItem.id !== item.id);
      setcount(updatedCount);  
      toast.success("Removed from your Wishlist",{
        autoClose: 500, 
      });
    } else {
      const newItem = { ...item, qnty: 1 };
      setcount([...count, newItem]);   
      toast.success("Added to your Wishlist",{
        autoClose: 500, 
      });
    }
  };
    const [colors, setColors] = useState(menu.map(() => "white"));  
    const Toggle = (index) => {
    const newColors = [...colors];  
      newColors[index] = newColors[index] === "red" ? "white" : "red";  
      setColors(newColors);  
    };
    const handleClick = (index) => {
      Toggle(index);   
      addToHeart(index);   
    };
  return (
    <>
       <Toaster />
      <section className="menu" id="menu">
        <h1 className="heading">
          our<span>menu</span>
        </h1> 
        <div className="box-container">
          {menu.map((item, index) => (
            <div   className="box" key={index * Math.random()}>
              <a 
                onClick={() =>handleClick(index)}
                className="fas fa-heart"
                style={{ color: colors[index], cursor: "pointer"}}  
              ></a>
              <img src={item.img} alt="img"/>
              <h5>{item.Name}</h5>
              <div className="price">
              ₹ {item.Menuprice} <span>{item.spanprice}</span>
              <div>
              <button onClick={() => addToCart(index)} className="btn">Add to cart</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  
  );
};

export default Menu;
 