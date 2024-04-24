import "./Product.css";
import Price from "./Price.jsx";


function Product({title, idx}) {
    let oldPrices = ["10000","15000","20000","25000"];
    let newPrises = ["9000","14000","19000","24000"];
    let description = ["nice", "good", "very good", "superb"]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrises[idx]}/>
        </div>
    );
}

export default Product;