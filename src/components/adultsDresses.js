import Product from "./product";

const AdultsDresses = () => {
    return (
        <div className="adultsProduct">
            <h1>Sukienki</h1>
            <div className="tabletProduct">
                <Product img='images/sukienka.jpeg' price='99,99'/>
                <Product img='images/sukienka.jpeg' price='99,99'/>
                <Product img='images/sukienka.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default AdultsDresses;