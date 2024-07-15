import styles from './Rodape.module.scss'

import Image from 'next/image'
import DireitosAutorais from '/public/Rodape.png'

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <Image src={DireitosAutorais}/>
        </footer>
    )
}