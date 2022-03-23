import React, {useState} from "react";
import Menu from "./menu";

const Header = () => {
    const [toggleHidden, setToggleHidden] = useState(false);
    return (
        <>
            <div className="header">
                <i className="fa-solid fa-bars" onClick={() => setToggleHidden(!toggleHidden)}></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-basket-shopping"></i>
            </div>
            {toggleHidden ? <Menu/> : null}
            <div className="header_image"/>
        </>
    )
}

export default Header;