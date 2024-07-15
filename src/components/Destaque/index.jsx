import { Children } from 'react'
import styles from './Destaque.module.scss'

export default function Destaque({children}){
    return (
        <span className={styles.destaque}>
            {children}
        </span>
    )
}