import {Link} from "react-router-dom";

const Women = () => {
    return (
        <>
            <li><Link to="/adults">Produkty</Link></li>
            <li><Link to="/adultsdresses">Sukienki</Link></li>
            <li><Link to="/adultsskirts">Spódnice</Link></li>
            <li><Link to="/adultssweatshirts">Bluzy</Link></li>
            <li><Link to="/adultsblouses">Bluzki</Link></li>
        </>
    )
}

export default Women;