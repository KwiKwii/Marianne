import {Link} from "react-router-dom";

const ChildrenTablet = () => {
    return (
        <>
            <li><Link to="/children">Produkty</Link></li>
            <li><Link to="/childrendresses">Sukienki</Link></li>
            <li><Link to="/childrenskirts">Spódnice</Link></li>
            <li><Link to="/childrensweatshirts">Bluzy</Link></li>
            <li><Link to="/childrenblouses">Bluzki</Link></li>
        </>
    )
}

export default ChildrenTablet;