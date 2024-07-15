'use client'
import { useRouter } from 'next/navigation'

import Botao from "@/components/BotaoContinuar";
import styles from "./page.module.scss";

import CardOpcao from "@/components/CardOpcao";

export default function Home() {

  const pagamentos = [
    {
      parcela: 1,
      valorParcela: 30500.00,
      cashback: 3,
    },
    {
      parcela: 2,
      valorParcela: 15300.00,
      total: 30600.00
    },
    {
      parcela: 3,
      valorParcela: 10196.66,
      total: 30620.00
    },
    {
      parcela: 4,
      valorParcela: 7725.00,
      total: 30900.00,
      juros: 3
    },
    {
      parcela: 5,
      valorParcela: 6300.00,
      total: 31500
    },
    {
      parcela: 6,
      valorParcela: 5283.33,
      total: 31699.98
    },
    {
      parcela: 7,
      valorParcela: 4542.85,
      total: 31800
    }
  ]
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push('/pagamento')
  }

  return (
    <main className={styles.main}>
      <h1>João, como você quer pagar?</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.bolhaPix}>Pix</div>
        <div className={styles.bolhaPixParcelado}>Pix Parcelado</div>

        {pagamentos.map((pagamento, index) => (
          pagamento.parcela === 1 && (
            <CardOpcao className={styles.primeiraOpcao} key={index} parcela={pagamento.parcela} valorParcela={pagamento.valorParcela} cashback={pagamento.cashback} defaultChecked={true}/>
          )
        ))}

        <section className={styles.secaoParcelas}>
          {pagamentos.map((pagamento, index) => (
            pagamento.parcela >= 2 && (
              <CardOpcao key={index} parcela={pagamento.parcela} valorParcela={pagamento.valorParcela} total={pagamento.total} juros={pagamento.juros}/>
            )
          ))}
        </section>

        <Botao tipo={'submit'}>Pagar</Botao>
      </form>
    </main>
  );
}
