import Product from "./product";

const Hero = () => {
    return (
        <div className="hero">
            <div className="logo"/>
            <div>
                <h1 className="newProductsTitle">Nowości</h1>
                <div className="newProducts">
                    <Product img='images/sukienka.jpeg' price='99,99'/>
                    <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                </div>
            </div>
            <div>
                <h1 className="featuredTitle">Polecane</h1>
                <div className="featured">
                    <Product img='images/spódnica.jpeg' price='99,99'/>
                    <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                    <Product img='images/bluza.jpeg' price='99,99'/>
                    <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                    <Product img='images/bluzka.jpeg' price='99,99'/>
                    <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
                </div>
            </div>
        </div>
    )
}

export default Hero;