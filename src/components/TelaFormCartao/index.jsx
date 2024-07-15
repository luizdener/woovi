'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './TelaFormCartao.module.scss'
import Botao from '../BotaoContinuar';

export default function TelaFormCartao(){

    const router = useRouter()
    const [cpf, setCpf] = useState('');
    const [cartao, setCartao] = useState('')

    const handleChange = (e, campo) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (/^\d{0,11}$/.test(value)) {
            campo == 'cpf' && setCpf(value);
            campo == 'numeroCartao' && setCartao(value)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        router.push('/')
    }

    const formatCpf = (cpf) => {
        return cpf
            .replace(/\D/g, '') // Remove tudo que não é dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros 3 dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os segundos 3 dígitos
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um traço antes dos últimos 2 dígitos
    };

    const formatCartao = (cartao) => {
        return cartao
        .replace(/\D/g, '') // Remove tudo que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros 3 dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os segundos 3 dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um traço antes dos últimos 2 dígitos
    }

    return (
        <div className={styles.telaCartao}>
            <h1>João, pague o restante em 1x no cartão</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" name="nome" id="nome" required/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id='cpf' name='cpf' value={formatCpf(cpf)} onChange={(e) => handleChange(e, 'cpf')} maxLength='14' required/> 
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="numeroCartao">Número do cartão</label>
                    <input type="text" id='numeroCartao' name='numeroCartao' value={formatCartao(cartao)} onChange={(e) => handleChange(e, 'numeroCartao')} maxLength='16' required/>
                </div>
 
                <section>
                    <div className={styles.inputContainer}>
                        <label htmlFor="vencimentoCartao">Vencimento</label>
                        <input type="month" id='vencimentoCartao' name='vencimentoCartao' placeholder='mm/aa' required/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id='cvv' name='cvv' required/>
                    </div>
                </section>

                <Botao tipo={'submit'}>Pagar</Botao>

            </form>
        </div>
    )
}