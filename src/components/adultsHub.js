import ProductDress from "./productDress";
import ProductBlouse from "./productBlouse";
import ProductSweatshirt from "./productSweatshirt";
import ProductSkirt from "./productSkirt";

const AdultsHub = () => {
    return (
        <div className="adultsHub">
            <h1>Produkty</h1>
            <ProductDress/>
            <ProductSkirt/>
            <ProductSweatshirt/>
            <ProductBlouse/>
            <ProductDress/>
            <ProductSkirt/>
            <ProductSweatshirt/>
            <ProductBlouse/>
            <ProductDress/>
            <ProductSkirt/>
            <ProductSweatshirt/>
            <ProductBlouse/>
        </div>
    )
}

export default AdultsHub;