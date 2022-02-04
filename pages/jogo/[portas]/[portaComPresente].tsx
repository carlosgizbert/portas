import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import Porta from '../../../components/Porta';
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo() {
  const router = useRouter()
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const qtdPortas = +router.query.portas
    const portaComPresente = +router.query.portaComPresente
    const qtdPortasValidas =  qtdPortas >= 3 && qtdPortas <= 100
    const temPresenteValido = portaComPresente >= 1 && portaComPresente <= qtdPortas
    setValido(qtdPortasValidas && temPresenteValido)
  }, [portas])

  useEffect(() => {
    const qtdPortas = +router.query.portas
    const portaComPresente = +router.query.portaComPresente
    setPortas(criarPortas(qtdPortas, portaComPresente))
  }, [router?.query])

  const RenderizarPortas = () => {
    return portas.map((porta) => {
      return <Porta 
      key={porta.numero} 
      value={porta} 
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
      />
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
      {valido ? RenderizarPortas() :
      <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.botoes}>
      <Link href="/" passHref>
        <button>Reiniciar jogo</button>
      </Link>
      </div>
    </div>
  )

}