import {Link} from "react-router-dom";

const Login = () => {
    return (
        <form className="login-form">
            <h1 className="login">Zaloguj się</h1>
            <label className="form-email" htmlFor="log-email">E-mail:</label>
            <input className="email" type="text" name="log-email" required/>
            <label className="form-password" htmlFor="log-password">Hasło:</label>
            <input className="password" type="password" name="log-password" required/>
            <div className="form-btns">
                <button className="btn-login" type="submit">Zaloguj się</button>
                <Link className="link-register" to="/register">
                    <button className="btn-register">Zarejestruj się</button>
                </Link>
            </div>
        </form>
    )
}

export default Login;