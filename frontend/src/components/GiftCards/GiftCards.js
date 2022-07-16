import React from "react";
import "./GiftCards.css";
import productItems from "../back/Data/Data"
import NavBar from '../NavBar/NavBar';



const GiftCards = ({productItems, BuyCardhandling})=> {
  
    return(
        <div className="giftcards">
          <NavBar></NavBar>
            {productItems.map((productItem) => (
                <div className="card1"> 
                <div>
                  <img className="product-image1" src={productItem.image} alt={productItem.name}/>
                </div>
                <div>
                  <h3 className="product-name1">{productItem.name}</h3>
                </div>
                <div>
                  <h3 className="product-price1">${productItem.price}</h3>
                </div>
                <div>
                  <button className="product-add-button1" onClick={()=>BuyCardhandling(productItem)}>Add to Cart</button>
                </div>
              </div>        
        
      ))}
        </div>
    );
}
export default GiftCards;