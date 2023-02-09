import Image from 'next/image'

import styles from './styles.module.css'
import refund from '@/assets/icons/refund.svg'

import Container from '../../Container'

export function Hero() {
  return (
    <div className={styles.hero}>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 lg:py-36 sm:py-0">
          <div className="max-w-2xl mb-20">
            <h1 className="text-[2.375rem] leading-[3.563rem] font-semibold text-white lg:text-[2.375rem] xl:text-[2.375rem] lg:leading-[3.563rem] xl:leading-[3.563rem]">
              A solução de <a className="text-brand-main">cashback</a> mais{' '}
              <br />
              simples, completa e inteligente.
            </h1>
            <p className="py-5 text-[1.25rem] leading-[1.875rem] font-medium text-white lg:text-[1.25rem] xl:text-[1.25rem] xl:leading-[1.875rem] lg:leading-[1.875rem] opacity-70">
              Desconto é coisa do passado, e recorrência é só o começo <br /> do
              futuro. Estratégias de recompensapara clientes para <br /> todas
              as etapas do funil de vendas.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 mb-14">
          <div className="">
            <Image src={refund} alt="Imagem Cashback" />
          </div>
        </div>
      </Container>
    </div>
  )
}
