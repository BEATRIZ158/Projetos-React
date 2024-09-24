import Item from "./Item"

/* Definindo um componente funcional, função JSX, retornam elementos React, 
que podem ser reutilizados e montados como partes de uma interface*/

/*
Código com a div pai

function List(){
    return(
        <div>
            <h1>Minha Lista</h1>
            <ul>
               <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    )
}
*/
/*
<h1> Título de nível 1
<ul> Lista não ordenada, cria uma lista de itens
<li> Define um item de lista.
*/

// Fragment
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

/*Exporta o componente List como o padrão deste arquivo, o que
permite que ele seja importado e usado em outro lugar
*/

export default List
