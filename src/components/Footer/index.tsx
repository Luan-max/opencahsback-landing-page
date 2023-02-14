import lemoneyway from '@/assets/icons/lemoneyway.svg'
import Image from 'next/image'
import { InstagramLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className=" bg-[#262626] md:px-6">
      <div className="py-[2.5rem] px-[2.5rem] md:max-w-xs xl:hidden sm:hidden">
        <Link
          className="flex items-start mb-4"
          href="https://lemoneyway.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={lemoneyway} alt="" />
        </Link>
        <div className="">
          <div className="flex space-x-2 text-white">
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={28} color="#fcfcfc" weight="bold" />
            </Link>
            <Link
              href="https://www.instagram.com/opencashback/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} color="#fcfcfc" weight="bold" />
            </Link>
            <Link
              href="https://www.instagram.com/opencashback/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple size={28} color="#fcfcfc" weight="bold" />
            </Link>
          </div>
        </div>

        <span className="block text-sm text-[#E5E5E5] sm:text-center mt-5">
          © 2023 Opencashback - Todos os direitos reservados.
        </span>
      </div>
      <div className="hidden sm:flex py-[3.5rem] px-[7.5rem] sm:items-center sm:justify-around sm:space-x-9">
        <div className="">
          <div className="flex space-x-2 text-white">
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={28} color="#fcfcfc" weight="bold" />
            </Link>
            <Link
              href="https://www.instagram.com/opencashback/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} color="#fcfcfc" weight="bold" />
            </Link>
            <Link
              href="https://www.instagram.com/opencashback/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple size={28} color="#fcfcfc" weight="bold" />
            </Link>
          </div>
        </div>
        <Link
          href="https://lemoneyway.com/"
          className="flex items-center mb-4 sm:mb-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={lemoneyway} alt="" />
        </Link>

        <span className="block text-sm text-[#E5E5E5] sm:text-center">
          © 2023 Opencashback - Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
