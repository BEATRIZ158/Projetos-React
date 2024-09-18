import Frase from "./Frase";

function HelloWorld(){
    // Retorna um JSX
    return(
        // div age como um elemento "Wrapper", que encapsula outros componenetes ou elementos.
        <div>
            <Frase/>
            <h1>Meu primeiro Componente!</h1>
            <Frase/>
        </div>
    )
}

export default HelloWorld
