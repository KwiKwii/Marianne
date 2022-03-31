const Product = (props) => {
    return (
        <div className="product">
            <img className="product-img" src={props.img} alt=""/>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
                dignissimos explicabo libero quia quo.</p>
            <p className="product-price">{props.price}zł</p>
            <button className="product-btn">Dodaj do koszyka</button>
        </div>
    )
}

export default Product;