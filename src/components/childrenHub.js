import Product from "./product";

const ChildrenHub = () => {
    return (
        <div className="childrenHub">
            <h1>Produkty</h1>
            <div className='tablet-hub'>
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
                <Product img='images/sukienka-dziecko.jpeg' price='99,99'/>
                <Product img='images/spódnica-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluza-dziecko.jpeg' price='99,99'/>
                <Product img='images/bluzka-dziecko.jpeg' price='99,99'/>
            </div>
        </div>
    )
}

export default ChildrenHub;