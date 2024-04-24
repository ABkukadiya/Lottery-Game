import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display : "flex" ,
        flexWrap : "wrap" ,
        justifyContent : "center" ,
        alignItems : "center",
    }; 

    return (
        <div style={styles}>
        <Product title="Logitech" idx={0} />
        <Product title="apple" idx={1} />
        <Product title="samsung" idx={2} />
        <Product title="oneplus" idx={3} />
        </div>
    );
}

export default ProductTab;