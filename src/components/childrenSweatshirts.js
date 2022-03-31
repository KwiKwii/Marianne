import Product from "./product";

const ChildrenSweatshirts = () => {
    return (
        <div className="childrenProduct">
            <h1>Bluzy</h1>
            <div className="tabletProduct">
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default ChildrenSweatshirts;