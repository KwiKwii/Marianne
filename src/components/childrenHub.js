import ProductSkirtChild from "./productSkirtChild";
import ProductDressChild from "./productDressChild";
import ProductBlouseChild from "./productBlouseChild";
import ProductSweatshirtChild from "./productSweatshirtChild";

const ChildrenHub = () => {
    return (
        <div className="childrenHub">
            <h1>Produkty</h1>
            <ProductDressChild/>
            <ProductSkirtChild/>
            <ProductSweatshirtChild/>
            <ProductBlouseChild/>
            <ProductDressChild/>
            <ProductSkirtChild/>
            <ProductSweatshirtChild/>
            <ProductBlouseChild/>
            <ProductDressChild/>
            <ProductSkirtChild/>
            <ProductSweatshirtChild/>
            <ProductBlouseChild/>
        </div>
    )
}

export default ChildrenHub;