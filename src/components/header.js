import React, {useState} from "react";
import Menu from "./menu";
import Serach from "./serach";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    return (
        <>
            {toggleSearch ? <Serach/> : null}
            <div className="header">
                <i className="fa-solid fa-bars" onClick={() => setToggleMenu(!toggleMenu)}></i>
                <i className="fa-solid fa-magnifying-glass" onClick={() => setToggleSearch(!toggleSearch)}></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-basket-shopping"></i>
            </div>
            {toggleMenu ? <Menu/> : null}
            <div className="header_image"/>
        </>
    )
}

export default Header;