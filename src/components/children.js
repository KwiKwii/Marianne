import {Link} from "react-router-dom";

const Children = () => {
    return (
        <ul className="children">
            <li><Link to="/childrendresses">Sukienki</Link></li>
            <li><Link to="/childrenskirts">Spódnice</Link></li>
            <li><Link to="/childrensweatshirts">Bluzy</Link></li>
            <li><Link to="/childrenblouses">Bluzki</Link></li>
        </ul>
    )
}

export default Children;