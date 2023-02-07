import styles from './styles.module.css'

import Container from '@/components/Container'

import vtex from '@/assets/logos/vtex.svg'
import Image from 'next/image'

export function Integrators() {
  return (
    <div className="bg-neutral-900">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:py-36 sm:py-0 justify-between">
          <div className="mb-20">
            <h1 className="text-4xl font-semibold text-white lg:text-4xl xl:text-5xl">
              Integramos com as principais <br /> soluções de mercado
            </h1>
            <p className="py-5 text-xl font-medium leading-normal text-white lg:text-xl xl:text-2x opacity-70">
              A nossa plataforma API first foi feita de forma intuitiva <br />
              para facilitar a geração de resultado.
            </p>
          </div>
          <div
            className="
  w-40 h-40 sm:w-40 sm:h-40 sm: flex items-center 
  justify-center bg-neutral-700 rounded cursor-pointer transition transform
  ease-in delay-75  opacity-100 hover:scale-105 hover:grayscale-0
  hover:opacity-100
"
          >
            <div className="items-center px-4 flex flex-wrap max-w-5xl justify-center gap-x-5 gap-y-5">
              <Image src={vtex} alt="" />
            </div>
          </div>
          <div
            className="
  w-40 h-40 sm:w-40 sm:h-40 sm: flex items-center 
  justify-center bg-neutral-700 rounded cursor-pointer transition transform
  ease-in delay-75  opacity-100 hover:scale-105 hover:grayscale-0
  hover:opacity-100
"
          >
            <div className="items-center px-4 flex flex-wrap max-w-5xl justify-center gap-x-5 gap-y-5">
              <Image src={vtex} alt="" />
            </div>
          </div>
          <div
            className="
  w-40 h-40 sm:w-40 sm:h-40 sm: flex items-center 
  justify-center bg-neutral-700 rounded cursor-pointer transition transform
  ease-in delay-75  opacity-100 hover:scale-105 hover:grayscale-0
  hover:opacity-100
"
          >
            <div className="items-center px-4 flex flex-wrap max-w-5xl justify-center gap-x-5 gap-y-5">
              <Image src={vtex} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
