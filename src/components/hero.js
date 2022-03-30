import ProductDress from "./productDress";
import ProductSkirt from "./productSkirt";
import ProductSweatshirt from "./productSweatshirt";
import ProductBlouse from "./productBlouse";
import ProductDressChild from "./productDressChild";
import ProductSkirtChild from "./productSkirtChild";
import ProductSweatshirtChild from "./productSweatshirtChild";
import ProductBlouseChild from "./productBlouseChild";

const Hero = () => {
    return (
        <div className="hero">
            <div className="header_image"/>
            <div className="newProducts">
                <h1>Nowości</h1>
                <ProductDress/>
                <ProductDressChild/>
            </div>
            <div className="featured">
                <h1>Polecane</h1>
                <ProductSkirt/>
                <ProductSkirtChild/>
                <ProductSweatshirt/>
                <ProductSweatshirtChild/>
                <ProductBlouse/>
                <ProductBlouseChild/>
            </div>
        </div>
    )
}

export default Hero;