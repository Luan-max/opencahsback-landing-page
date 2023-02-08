import Image from 'next/image'
import Link from 'next/link'

import { Partner } from '@/constants/partners'

export function PartnerCard({ company, logo, link }: Partner) {
  return (
    <div
      className="
        w-40 h-24 sm:w-60 sm:h-[7.5rem] sm: flex items-center 
        justify-center bg-neutral-100 rounded cursor-pointer transition transform
        ease-in delay-75 grayscale opacity-50 hover:scale-105 hover:grayscale-0
        hover:opacity-100
      "
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image src={logo} alt={`Logo ${company}`} className="w-[7.5rem]" />
      </Link>
    </div>
  )
}
