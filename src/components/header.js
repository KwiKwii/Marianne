import {useState} from "react";
import {Link} from "react-router-dom";
import Menu from "./menu";
import Serach from "./serach";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const scroll = () => {
        window.scroll(0,0);
    }
    return (
        <>
            <div className="header">
                <i className="fa-solid fa-bars" onClick={() => {
                    setToggleMenu(!toggleMenu);
                    setToggleSearch(false);
                    scroll();
                }}></i>
                <i className="fa-solid fa-magnifying-glass" onClick={() => {
                    setToggleSearch(!toggleSearch);
                    setToggleMenu(false);
                    scroll();
                }}></i>
                <Link to="/login" onClick={() => setToggleMenu(false)}><i className="fa-solid fa-user"></i></Link>
                <Link to="/basket" onClick={() => setToggleMenu(false)}><i className="fa-solid fa-basket-shopping"></i></Link>
            </div>
            {toggleSearch ? <Serach/> : null}
            {toggleMenu ? <Menu/> : null}
        </>
    )
}

export default Header;