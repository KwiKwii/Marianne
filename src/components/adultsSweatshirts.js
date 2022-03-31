import Product from "./product";

const AdultsSweatshirts = () => {
    return (
        <div className="adultsProduct">
            <h1>Bluzy</h1>
            <div className="tabletProduct">
                <Product img='images/bluza.jpeg' price='99,99'/>
                <Product img='images/bluza.jpeg' price='99,99'/>
                <Product img='images/bluza.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default AdultsSweatshirts;