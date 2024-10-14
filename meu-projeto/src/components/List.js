import Item from "./Item"

// Fragment
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1943}/>
                <Item marca="Fiat" ano_lancamento={1989}/>
                <Item marca="Renault" ano_lancamento={2004}/>
                <Item></Item>
            </ul>
        </>
    )
}

/*Exporta o componente List como o padrão deste arquivo, o que
permite que ele seja importado e usado em outro lugar
*/

export default List
