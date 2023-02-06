import { StaticImageData } from 'next/image'

import farmLogo from '@/assets/logos/farm.svg'
import electroluxLogo from '@/assets/logos/electrolux.svg'
import reservaLogo from '@/assets/logos/reserva.svg'
import babadotopLogo from '@/assets/logos/babadotop.svg'
import ventureshopLogo from '@/assets/logos/ventureshop.svg'
import tacoLogo from '@/assets/logos/taco.svg'
import ibyteLogo from '@/assets/logos/ibyte.svg'
import indianaLogo from '@/assets/logos/indiana.svg'
import lennyLogo from '@/assets/logos/lenny-niemeyer.svg'
import seliaLogo from '@/assets/logos/selia.svg'

export type Partner = {
  company: string
  logo: StaticImageData
  link: string
}

export const PARTNERS: Partner[] = [
  {
    company: 'Farm',
    logo: farmLogo,
    link: 'https://www.farmrio.com.br'
  },
  {
    company: 'Electrolux',
    logo: electroluxLogo,
    link: 'https://loja.electrolux.com.br'
  },
  {
    company: 'Reserva',
    logo: reservaLogo,
    link: 'https://www.usereserva.com'
  },
  {
    company: 'Babadotop',
    logo: babadotopLogo,
    link: 'https://www.babadotop.com.br'
  },
  {
    company: 'Ventureshop',
    logo: ventureshopLogo,
    link: 'https://www.ventureshop.com.br'
  },
  {
    company: 'Taco',
    logo: tacoLogo,
    link: 'https://www.taco.com.br'
  },
  {
    company: 'Ibyte',
    logo: ibyteLogo,
    link: 'https://www.ibyte.com.br'
  },
  {
    company: 'Farmácia Indiana',
    logo: indianaLogo,
    link: 'https://www.farmaciaindiana.com.br'
  },
  {
    company: 'Lenny Niemeyer',
    logo: lennyLogo,
    link: 'https://www.lennyniemeyer.com.br'
  },
  {
    company: 'Selia',
    logo: seliaLogo,
    link: 'https://www.selia.com.br'
  }
]
