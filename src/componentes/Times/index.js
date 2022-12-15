import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) => {

    const css = { backgroundColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderBottomColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    corBackground={props.corSecundaria}
                    aoDeletar={() => {}}
                />)}
            </div>
        </section>
    )
}

export default Times