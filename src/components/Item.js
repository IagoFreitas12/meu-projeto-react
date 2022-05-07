import PropTypes from 'prop-types'

function Item({marca, piloto, descricao, idade}) {
    return (
        <>  
            <li>{marca}</li>
            <li>{piloto} - {idade}</li>
            <p>{descricao}</p>
        </>
    )
}

Item.propTypes ={
    marca: PropTypes.string.isRequired,
    piloto: PropTypes.string,
    idade: PropTypes.number

}

Item.defaultProps = {
    marca: 'Marca não especificada.',
    idade: 0
}

export default Item