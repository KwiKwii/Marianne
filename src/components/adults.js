import {Link} from "react-router-dom";

const Adults = () => {
    return (
        <ul className="adults">
            <li> <Link to="/adultsdresses">Sukienki</Link></li>
            <li><Link to="/adultsskirts">Spódnice</Link></li>
            <li><Link to="/adultssweatshirts">Bluzy</Link></li>
            <li><Link to="/adultsblouses">Bluzki</Link></li>
        </ul>
    )
}

export default Adults;