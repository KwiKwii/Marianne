import {useState} from "react";
import {Link} from "react-router-dom";
import Menu from "./menu";
import Serach from "./serach";
import MenuTablet from "./menuTablet";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const scroll = () => {
        window.scroll(0, 0);
    }
    return (
        <>

            <div className="header">

                <MenuTablet/>

                <i className="fa-solid fa-bars mobile" onClick={() => {
                    setToggleMenu(!toggleMenu);
                    setToggleSearch(false);
                    scroll();
                }}></i>
                <i className="fa-solid fa-magnifying-glass mobile" onClick={() => {
                    setToggleSearch(!toggleSearch);
                    setToggleMenu(false);
                    scroll();
                }}></i>
                <Link to="/login" onClick={() => setToggleMenu(false)}><i
                    className="fa-solid fa-user mobile"></i></Link>
                <Link to="/basket" onClick={() => setToggleMenu(false)}><i
                    className="fa-solid fa-basket-shopping mobile"></i></Link>
            </div>

            {toggleSearch ? <Serach/> : null}

            {toggleMenu ? <Menu/> : null}

        </>
    )
}

export default Header;