import React, {useState} from "react";
import Adults from "./adults";
import Children from "./children";

const Menu = () => {
    const [toggleHidden, setToggleHidden] = useState(false);
    const [toggleHidden1, setToggleHidden1] = useState(false);

    return (
        <div className="menu">
            <ul>
                <li>Kobiety {toggleHidden1 ? <Adults/> : null} <input type="checkbox" id="adults"/> <label
                    htmlFor="adults"> <i className="fa-solid fa-caret-down"
                                         onClick={() => setToggleHidden1(!toggleHidden1)}></i></label>
                </li>
                <li>Dzieci {toggleHidden ? <Children/> : null} <input type="checkbox" id="children"/> <label
                    htmlFor="children"> <i className="fa-solid fa-caret-down"
                                           onClick={() => setToggleHidden(!toggleHidden)}></i></label></li>
                <li>Nowości</li>
                <li>O nas</li>
            </ul>
        </div>
    )
}

export default Menu;