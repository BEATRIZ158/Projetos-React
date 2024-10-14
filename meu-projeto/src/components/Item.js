import PropTypes from 'prop-types'

function Item({marca = 'Faltou a marca', ano_lancamento = 0}){
    return(
        <>
        <li>
            {marca} - {ano_lancamento}
        </li>
        </>
    )
}
//definindo o tipo de dado esperado
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//define o retorno padrão, caso não seja preenchido
//Item.defaultProps = {
//    marca: 'Faltou a marca',
//    ano_lancamento: 0,
//}

export default Item
