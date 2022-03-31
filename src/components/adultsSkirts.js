import Product from "./product";

const AdultsSkirts = () => {
    return (
        <div className="adultsProduct">
            <h1>Spódnice</h1>
            <div className="tabletProduct">
                <Product img='images/spódnica.jpeg' price='99,99'/>
                <Product img='images/spódnica.jpeg' price='99,99'/>
                <Product img='images/spódnica.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default AdultsSkirts;