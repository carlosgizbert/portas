import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta';

// interface typescript pra forçar quais serão as propriedades esperadas na props
interface PortaProps {
  porta: PortaModel
}

export default function Porta(props : PortaProps){

  // extrai objeto porta recebida na props
  const { porta } = props
  
  const selecionada = porta.selecionada ? styles.selecionada : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`} >
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}