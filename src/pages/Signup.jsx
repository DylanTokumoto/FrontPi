
import SignupForm from "../components/FormSignIn"

import '../styles/Signup.css'

function Signup() {
    return (
        <>
            <div className="signup">
              

                <SignupForm />


               
            </div>
        </>
    )
}

export default Signup





{/* <div className="signup_form">
                    <div className="title"><h1>Criar Conta</h1></div>
                    <div className="user_name">
                        <div className="signup_input_flex">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" />
                        </div>

                        <div className="signup_input_flex"> 
                        <label htmlFor="last_name">Sobrenome</label>
                        <input type="text" name="last_name" id="lastName" />
                        </div>

                    </div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="confirm_password">Repetir a Senha</label>
                    <input type="password" name="confirm_password" id="confirm_password" />

                    <button className="create_account">Criar Conta</button>
                    <p>Já tem uma conta? <a href="">Inicie uma sessão</a></p>
                </div> */}