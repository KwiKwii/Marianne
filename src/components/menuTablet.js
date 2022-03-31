import {Link} from "react-router-dom";
import {useState} from "react";
import Women from "./women";
import ChildrenTablet from "./childrenTablet";

const MenuTablet = () => {

    const [women, setWomen] = useState(false);
    const [children, setChildren] = useState(false);

    return (
        <>
            <Link to="/" className="link-logo">
                <div className="header_logo"/>
            </Link>
            <div className="header-tablet">
                <div className="header-login">
                    <Link to="/login"><h1>Zaloguj się</h1></Link>
                    <Link to="/register"><h1>Zarejestruj się</h1></Link>
                </div>
                <div className="search-tablet">
                    <input type="text" name="search" id="search" className="search_tablet"
                           placeholder="Szukaj w sklepie..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='menu-tablet'>
                    {women ? <p className='active' onClick={() => setWomen(false)}>Kobiety</p> : <p onClick={() => {
                        setWomen(true);
                        setChildren(false);
                    }}>Kobiety</p>}
                    {children ? <p className='active' onClick={() => setChildren(false)}>Dzieci</p> :
                        <p onClick={() => {
                            setChildren(true);
                            setWomen(false);
                        }}>Dzieci</p>}
                    <p>O nas</p>
                    <Link to="/basket"><i className="fa-solid fa-basket-shopping"></i></Link>
                </div>
                {women ? <ul className="tablet-ul" onClick={()=>setWomen(false)}><Women/></ul> : null}
                {children ? <ul className="tablet-ul" onClick={()=>setChildren(false)}><ChildrenTablet/></ul> : null}
            </div>
        </>
    )
}

export default MenuTablet;


