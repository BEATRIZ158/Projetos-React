// Evento de formulário onSubmit
function Form(){
    //Criando a função cadastrar usuário
    //Formulário envia dados ao backend, o evento é perdido, o evento precisa ficar no Front
    //cria um argumento chamado 'e' de events, evento da submissão, e.preventDefault() para o processamento
    //e imprime a linha de codigo abaixo
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuário")
    }
//Retorna um formulário básico, quando o form for enviado ele vai disparar um evento
    return(
        <div>
            <h1>Meu Cadastro!</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" plaholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form
