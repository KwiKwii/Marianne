import Product from "./product";

const ChildrenSkirts = () => {
    return (
        <div className="childrenProduct">
            <h1>Spódnice</h1>
            <div className="tabletProduct">
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default ChildrenSkirts;