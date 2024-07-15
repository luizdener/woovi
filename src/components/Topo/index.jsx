'use client'
import { useRouter } from 'next/navigation'

import styles from './Topo.module.scss'

import Image from 'next/image'
import Logo from '/public/Logo.png'
import Link from 'next/link'

export default function Topo(){

    const router = useRouter()


    return (
        <header className={styles.topo}>
            <Link href='/'>
                <Image src={Logo}/>
            </Link>

        </header>
    )
}