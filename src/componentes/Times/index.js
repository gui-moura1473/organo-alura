import Colaborador from '../Colaborador'
import './Times.css'
import hexToRgba from 'hex-to-rgba'

const   Times = ({ time, colaboradores, aoDeletar, mudarCor }) => {

    const css = { backgroundColor: hexToRgba(time.cor, '0.4') }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' />
            <h3 style={{ borderBottomColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} corBackground={time.cor} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Times