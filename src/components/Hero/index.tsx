import Image from 'next/image'

import styles from './styles.module.css'
import refund from '@/assets/icons/refund.svg'

import Container from '../Container'

export function Hero() {
  return (
    <div className={styles.hero}>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:py-36 sm:py-0 justify-between">
          <div className="mb-20">
            <h1 className="text-4xl font-semibold text-white lg:text-4xl xl:text-5xl">
              A solução de <a className="text-brand-main">cashback</a> mais{' '}
              <br />
              simples, completa e inteligente.
            </h1>
            <p className="py-5 text-xl font-medium leading-normal text-white lg:text-xl xl:text-2x opacity-70">
              Desconto é coisa do passado, e recorrência é só o começo <br /> do
              futuro. Estratégias de recompensapara clientes para <br /> todas
              as etapas do funil de vendas.
            </p>
          </div>
          <div className="mb-14 mr-14">
            <Image src={refund} alt="Imagem Cashback" />
          </div>
        </div>
      </Container>
    </div>
  )
}
