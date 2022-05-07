import { useState } from "react"

function Conditional (props){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail (){
        // setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" 
                placeholder="lucas@gmail.com" 
                onChange={(e) => setEmail(e.target.value)}/>
            
                <button type="submit" onClick=
                {enviarEmail}>
                    Cadastrar
                </button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é {userEmail}</p>
                        <button type="button" onClick={limparEmail}>Limpar</button>
                    </div>
                )}

            </form>
        </div>
    )
}

export default Conditional