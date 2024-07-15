import Image from 'next/image'
import qr from '/public/qrcode.png'

import styles from './TelaQr.module.scss'
import Botao from '../BotaoContinuar'

export default function TelaQrCode({handleClick}){
    return (
        <div className={styles.telaQr}>
            <h1>João, pague a entrada de R$ 15.300,00 pelo pix</h1>

            <div className={styles.imgContainer}>
                <Image src={qr}/>
            </div>

            <Botao handleClick={handleClick}>Clique para copiar o QR CODE</Botao>
        </div>
    )
}