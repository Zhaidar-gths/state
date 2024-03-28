import React from "react";
import productsList from "./Data";



function Cards() {
    return (
        <div className="Card-container">
            {productsList.map(({ id, thumbnail, title, brand, price, description, discountPercentage, rating, stock, images, category }) => (
                <div className="Card-row" key={id}>
                    <div className="card-img">
                        <img src={thumbnail} alt={title} />
                    </div>
                    <h1>{title}</h1>
                    <p>${price}</p>
                    <h2>{brand}</h2>
                    <p>{description}</p>

                </div>
            ))}
        </div>
    );
}

export default Cards;
