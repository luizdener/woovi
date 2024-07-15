'use client'
import { useState, useEffect } from 'react'

import styles from './pagamento.module.scss'

import Image from 'next/image'
import Seta from '/public/Vector.png'

import TelaQrCode from '@/components/TelaQrCode'
import TelaFormCartao from '@/components/TelaFormCartao'

export default function Pagamento(){

    const [dataVencimento, setDataVencimento] = useState(null);

    useEffect(() => {
        // Calcula a data de vencimento apenas na primeira renderização
        if (!dataVencimento) {
            const data = new Date();
            const ano = data.getFullYear();
            const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Adiciona zero à esquerda se for menor que 10
            const dia = data.getDate().toString().padStart(2, '0'); // Adiciona zero à esquerda se for menor que 10

            let horaAtual = data.getHours();
            const minutosAtual = data.getMinutes();

            // Adiciona uma hora ao horário atual
            horaAtual = horaAtual + 1;
            const horarioVencimento = `${horaAtual}:${minutosAtual.toString().padStart(2, '0')}`;

            // Formata a data de vencimento
            const dataFormatada = `${dia}/${mes}/${ano} - ${horarioVencimento}`;

            // Define a data de vencimento no estado
            setDataVencimento(dataFormatada);
        }
    }, [dataVencimento]);

    const [estiloProgresso, setEstiloProgresso] = useState('')
    const [progressoCompleto, setProgressoCompleto] = useState('')

    const handleClick = () => {
        setTelaVisivel(<TelaFormCartao/>)
        setEstiloProgresso('ativo')
        setProgressoCompleto('completo')
    }

    const [telaVisivel, setTelaVisivel] = useState(<TelaQrCode handleClick={handleClick}/>)

    return (
        <div className={styles.pagamento}>

            {telaVisivel}

            <section className={styles.informacoesPagamento}>
                <span>Prazo de pagamento:</span>
                <p>{dataVencimento}</p>

                <div className={styles.containerProgresso}>
                    <div className={`${styles['circulo1']} ${styles['ativo']} ${styles[`${progressoCompleto}`]}`}></div>
                    <div className={styles.barra}></div>
                    <div className={`${styles['circulo2']} ${styles[`${estiloProgresso}`]}`}></div>

                    <h2 className={styles.parcela1}>1ª entrada no Pix <span>15.300,00</span></h2>
                    <h2 className={styles.parcela2}>2ª parcela no cartão <span>15.300,00</span></h2>
                </div>

                <div className={styles.cetInfo}>
                    <h2>CET: 0,5% <span>Total: 30.600,00</span></h2>
                </div>

                <div className={styles.comoFunciona}>
                    <h2>Como funciona?</h2>
                    <Image src={Seta}/>
                </div>
            </section>

            <section className={styles.identificador}>
                <span>Identificador:</span>
                <p>2c1b951f356c4680b13ba1c9fc889c47</p>
            </section>
        </div>
    )
}