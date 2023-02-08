import Image from 'next/image'
import React from 'react'
import Container from '../../Container'

import arrow from '@/assets/icons/arrow.svg'
import logo from '@/assets/icons/logo.svg'

import { BenefitsCard } from './BenefitsCard'
import { BENEFITS, NO_BENEFITS } from '@/constants/benefits'

export function Benefits() {
  return (
    <>
      <section className="w-full py-20 flex flex-col items-center justify-center">
        <div className="px-5 sm:px-0 flex flex-col gap-2">
          <h1 className="text-2xl text-center md:text-4xl">
            Esqueça o velho desconto, e venha já para o cashback!
          </h1>
          <span className="text-xs sm:text-sm font-semibold opacity-50 text-center md:text-base">
            Veja as diferenças entre os dois - conheça as vantagens de nossos
            serviços.
          </span>
        </div>
      </section>
      <Container className="flex flex-wrap justify-around">
        <div className="flex items-center justify-center sm:py-0">
          <div className="max-w-2xl mb-20">
            <h1 className="text-4xl font-semibold text-brand-secondary lg:text-4xl xl:text-4xl">
              Desconto
            </h1>
            <span className="text-sm flex mt-1 font-medium leading-normal text-[#000000CC]">
              sem <Image src={logo} alt="Imagem arrow" />
            </span>
            <div className="mt-8">
              {NO_BENEFITS.map((item, index) => (
                <BenefitsCard icon={item.icon} title={item.title} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center max-lg:hidden mr-16">
          <Image src={arrow} alt="Arrow" className="w-[162px]" />
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-2xl mb-20">
            <h1 className="text-4xl font-semibold text-brand-secondary lg:text-4xl xl:text-4xl">
              Cashback
            </h1>
            <span className="text-sm mt-1 flex font-medium leading-normal text-[#000000CC]">
              com <Image src={logo} alt="Imagem arrow" />
            </span>
            <div className="mt-8">
              {BENEFITS.map((item, index) => (
                <BenefitsCard icon={item.icon} title={item.title} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
