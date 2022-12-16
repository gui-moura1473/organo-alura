import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57c278'
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e UI',
      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)} />

      {times.map((time, indice) =>
        <Times
          mudarCor={mudarCorDoTime}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}

    </div>
  );
}

export default App;
