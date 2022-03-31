import Product from "./product";

const ChildrenBlouses = () => {
    return (
        <div className="childrenProduct">
            <h1>Bluzki</h1>
            <div className="tabletProduct">
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default ChildrenBlouses;