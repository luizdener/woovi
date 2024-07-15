import Destaque from '../Destaque'
import styles from './CardOpcao.module.scss'


export default function CardOpcao({parcela, valorParcela, total, cashback, juros, defaultChecked}){

    return (
        <div className={styles.cardOpcao}>
            <label className={styles.cardLabel}>
                <div>
                    <h1>
                        {parcela}x R$ {valorParcela}
                        <input type="radio" name='paymentOption' value={parcela} defaultChecked={defaultChecked} className={styles.radioInput}/>
                    </h1>

                    {cashback && (
                        <span className={styles.cashback}>Ganhe {cashback}% de Cashback</span>
                    )}

                    {cashback && (
                        <Destaque>R$ {valorParcela * (cashback / 100)} de volta no seu Pix na hora</Destaque>
                    )}

                    {total && (
                        <span>Total: R$ {total}</span>
                    )}

                    {juros && (
                        <Destaque>-{juros}% de juros: Melhor opção de parcelamento</Destaque>
                    )}
                </div>
            </label>
        </div>
    )
}