import Image from 'next/image'
import { ArrowArcRight, Check, X } from 'phosphor-react'
import React from 'react'
import Container from '../Container'

import arrow from '@/assets/icons/arrow.svg'
import logo from '@/assets/icons/logo.svg'

export function Benefits(props: any) {
  const noBenefits = [
    {
      title: 'Não captura dados',
      icon: <X size={35} color="#B91C1C" weight="bold" />
    },
    {
      title: 'Deprecia a marca, não recompensa o cliente',
      icon: <X size={35} color="#B91C1C" weight="bold" />
    },
    {
      title: 'Foca no produto/serviço',
      icon: <X size={35} color="#B91C1C" weight="bold" />
    },
    {
      title: 'Encerra um ciclo ao fim de cada venda',
      icon: <X size={35} color="#B91C1C" weight="bold" />
    },
    {
      title: 'Exige a reconquista de um cliente para novas compras',
      icon: <X size={35} color="#B91C1C" weight="bold" />
    }
  ]

  const benefits = [
    {
      title: 'Captura dados harmoniosamente',
      icon: <Check size={35} color="#3E885B" weight="bold" />
    },
    {
      title: 'Valoriza a marca, recompensa o consumidor',
      icon: <Check size={35} color="#3E885B" weight="bold" />
    },
    {
      title: 'Foca no cliente',
      icon: <Check size={35} color="#3E885B" weight="bold" />
    },
    {
      title: 'Inicia um ciclo ao fim de cada venda',
      icon: <Check size={35} color="#3E885B" weight="bold" />
    },
    {
      title: 'Estimula novas compras',
      icon: <Check size={35} color="#3E885B" weight="bold" />
    }
  ]

  const { data } = props

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
      <Container className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center sm:py-0">
          <div className="max-w-2xl mb-20">
            <h1 className="text-4xl font-semibold text-brand-secondary lg:text-4xl xl:text-4xl">
              Desconto
            </h1>
            <span className="text-sm flex mt-1 font-medium leading-normal text-[#000000CC]">
              sem <Image src={logo} alt="Imagem arrow" />
            </span>
            <div className="mt-8">
              {noBenefits.map((item, index) => (
                <div className="flex items-center mt-4 space-x-2" key={index}>
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-base font-medium leading-6 text-[#171717] dark:text-gray-200 opacity-[70%]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center max-lg:hidden">
          <Image src={arrow} alt="Imagem arrow" />
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-2xl mb-20">
            <h1 className="text-4xl font-semibold text-brand-secondary lg:text-4xl xl:text-4xl">
              Opencashback
            </h1>
            <span className="text-sm mt-1 flex font-medium leading-normal text-[#000000CC]">
              com <Image src={logo} alt="Imagem arrow" />
            </span>
            <div className="mt-8">
              {benefits.map((item, index) => (
                <div className="flex items-center mt-3 space-x-2" key={index}>
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-base  font-medium leading-6 text-[#171717] dark:text-gray-200 opacity-[70%]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
