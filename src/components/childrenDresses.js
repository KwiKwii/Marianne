import Product from "./product";

const ChildrenDresses = () => {
    return (
        <div className="childrenProduct">
            <h1>Sukienki</h1>
            <div className="tabletProduct">
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default ChildrenDresses;