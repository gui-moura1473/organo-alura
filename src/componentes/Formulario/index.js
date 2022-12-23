import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');
    const id = uuidv4();

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id,
            favorito: false
        })
        

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio="required"
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio="required"
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio="required"
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={ (evento) => {
                evento.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime });
                setNomeTime('');
                setCorTime('#000000');
            }}>
                <h2>Preecha os dados para criar o novo time</h2>
                <Campo
                    obrigatorio="required"
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio="required"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    type='color'
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario