import './Rodape.css'

function Rodape() {
  return (
    <footer className='footer'>
        <section>
            <ul>
                <li><a href='#'><img src='./imagens/fb.png' alt='ícone facebook' /></a></li>
                <li><a href='#'><img src='./imagens/tw.png' alt='ícone twiter' /></a></li>
                <li><a href='#'><img src='./imagens/ig.png' alt='ícone instagram' /></a></li>
            </ul>
        </section>
        <section>
            <img src='./imagens/logo.png' alt='Logotipo Organo' />
        </section>
        <section>
            <p>Desenvolvido por Guilherme Moura &copy;</p>
        </section>
    </footer>
  )
}

export default Rodape