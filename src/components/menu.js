import {useState} from "react";
import {Link} from "react-router-dom";
import Adults from "./adults";
import Children from "./children";

const Menu = () => {
    const [toggleAdults, setToggleAdults] = useState(false);
    const [toggleChildren, setToggleChildren] = useState(false);
    const [toggle, setToggle] = useState(true);

    if (toggle) {
        return (
            <div className="menu">
                <ul>
                    <li><Link to="/" onClick={()=>setToggle(false)}>Strona główna</Link></li>
                    <li><Link to="/adults" onClick={()=>setToggle(false)}>Kobiety</Link> <div onClick={()=>setToggle(false)}>{toggleAdults ? <Adults/> : null}</div> <input type="checkbox" id="adults"/> <label
                        htmlFor="adults"> <i className="fa-solid fa-caret-down"
                                             onClick={() => setToggleAdults(!toggleAdults)}></i></label>
                    </li>
                    <li><Link to="/children" onClick={()=>setToggle(false)}>Dzieci</Link> <div onClick={()=>setToggle(false)}>{toggleChildren ? <Children/> : null}</div> <input type="checkbox" id="children"/> <label
                        htmlFor="children"> <i className="fa-solid fa-caret-down"
                                               onClick={() => setToggleChildren(!toggleChildren)}></i></label></li>
                    <li>Nowości</li>
                    <li>Polecane</li>
                    <li>O nas</li>
                </ul>
            </div>
        )
    } else {
        return null;
    }
}

export default Menu;