import Product from "./product";

const AdultsBlouses = () => {
    return (
        <div className="adultsProduct">
            <h1>Bluzki</h1>
            <div className="tabletProduct">
                <Product img='images/bluzka.jpeg' price='99,99'/>
                <Product img='images/bluzka.jpeg' price='99,99'/>
                <Product img='images/bluzka.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default AdultsBlouses;