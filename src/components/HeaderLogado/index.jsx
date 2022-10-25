import Navbar from 'react-bootstrap/Navbar';

import { useEffect, useState } from 'react';

import './style.css'

import { Link } from "react-router-dom";

function HeaderLogado({ nomeUsuario }) {

    const [autenticacao, setAutenticacao] = useState('')

    useEffect(() => {

    }, [autenticacao])

    function logout(){
        localStorage.clear()
        setAutenticacao('logout')
    }
    
    return (
        <>
            <header>
                <Navbar className='navbar'>
                        <Navbar.Brand>
                            <Link to="/">
                                <img
                                    src="/logo.svg"
                                    width="30"
                                    height="30"
                                    className="align-top ml-4"
                                    alt="LOGO"
                                />
                            </Link>
                        </Navbar.Brand>
 

                    <div className="user_autenticado">
                        <div className="user_options">

                        <div className="welcome_text"><p>Olá, {nomeUsuario} </p></div>
                        <button className="logout" onClick={() => {logout()}}> <a href="/">Logout</a> </button>
                        <button className="perfil">{nomeUsuario.substr(0, 1)}</button>
                        
                        </div>
                        
                    </div>
                </Navbar>
            </header>
        </>
    )
}

export default HeaderLogado