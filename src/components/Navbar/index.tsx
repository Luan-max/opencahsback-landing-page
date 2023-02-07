import Link from 'next/link'
import Image from 'next/image'
import { PaperPlaneTilt } from 'phosphor-react'

import { Button } from '../Button'

export function Navbar() {
  const navigation = ['Contato', 'Empresas']

  return (
    <div className="bg-brand-secondary">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-center w-full lg:w-auto">
          <Link legacyBehavior href="/">
            <a className="flex items-center space-x-2 text-2xl font-medium justify-center">
              <Image
                src="https://admin.opencashback.com.br/static/img/logo-white.b130427d.svg"
                width={200}
                height="200"
                alt={''}
              />
            </a>
          </Link>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link legacyBehavior href="/">
                  <a className="inline-block px-4 py-2 text-sm font-semibold text-white no-underline rounded-md">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-brand-secondary font-semibold bg-brand-main hover:bg-brand-main/80 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Fale Conosco
            <PaperPlaneTilt size={16} weight="bold" className="ml-2" />
          </button>
        </div>
      </nav>
    </div>
  )
}
