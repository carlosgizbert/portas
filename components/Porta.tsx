import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta';
import Presente from './Presente';

// interface typescript pra forçar quais serão as propriedades esperadas na props
interface PortaProps {
  value: PortaModel,
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props : PortaProps){

  // extrai porta(objeto) recebida na props
  const porta = props.value
  
  // define css com base na seleção da porta
  const selecionada = porta.selecionada ? styles.selecionada : ''

  // chama função alternarSeleção do objeto porta recebido na props
  const alternarSelecao = (e) => props.onChange(porta.alternarSelecao())
  const abrir = (e) => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  const renderPorta = () => {
    return (
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div 
          className={styles.macaneta}
          onClick={abrir}></div>
        </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada && !porta.aberta ? selecionada : ''}`} >
       {porta.fechada ? 
        renderPorta() : 
        porta.temPresente ? <Presente/> : false 
        }
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}