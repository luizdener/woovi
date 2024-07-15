import styles from './BotaoContinuar.module.scss'

export default function Botao({tipo, handleClick, children}){

    return (
        <button type={tipo} className={styles.botao} onClick={handleClick}>
            {children}
        </button>
    )
}