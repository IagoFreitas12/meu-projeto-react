// State lift

function Saudacao({nome}){

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}.`
    }

    return (
        <>
            {/* Condicional */}
            {nome && (<p>{gerarSaudacao(nome)}</p>)}
        </>
    )
}

export default Saudacao