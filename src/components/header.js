import {useState} from "react";
import {Link} from "react-router-dom";
import Menu from "./menu";
import Serach from "./serach";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    return (
        <>
            <div className="header">
                <i className="fa-solid fa-bars" onClick={() => setToggleMenu(!toggleMenu)}></i>
                <i className="fa-solid fa-magnifying-glass" onClick={() => setToggleSearch(!toggleSearch)}></i>
                <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                <i className="fa-solid fa-basket-shopping"></i>
            </div>
            {toggleSearch ? <Serach/> : null}
            {toggleMenu ? <Menu/> : null}
            <Link to="/">
                <div className="header_image"/>
            </Link>
        </>
    )
}

export default Header;