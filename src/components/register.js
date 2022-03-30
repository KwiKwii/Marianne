const Register = () => {
    return (
            <form className="register-form">
                <h1 className="register">Zarejestruj się</h1>
                <label className="form-email" htmlFor="reg-email">E-mail:</label>
                <input className="email" type="text" name="reg-email" required/>
                <label className="form-password" htmlFor="reg-password">Hasło:</label>
                <input className="password" type="password" name="reg-password" required/>
                <label className="form-password" htmlFor="reg-password-confirm">Powtórz hasło:</label>
                <input className="password" type="password" name="reg-password-confirm" required/>
                <div className="form-btns">
                    <button className="btn-register" type="submit">Zarejestruj się</button>
                </div>
            </form>
    )

}

export default Register;