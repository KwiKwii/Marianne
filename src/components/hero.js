import ProductDress from "./productDress";
import ProductSkirt from "./productSkirt";
import ProductSweatshirt from "./productSweatshirt";
import ProductBlouse from "./productBlouse";

const Hero = () => {
    return (
        <div className="hero">
            <div className="header_image"/>
            <div className="newProducts">
                <h1>Nowości</h1>
                <ProductDress/>
            </div>
            <div className="featured">
                <h1>Polecane</h1>
                <ProductSkirt/>
                <ProductSweatshirt/>
                <ProductBlouse/>
            </div>
        </div>
    )
}

export default Hero;