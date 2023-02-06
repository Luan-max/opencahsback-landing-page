import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

export function Navbar() {
  const navigation = ['Contato', 'Empresas']

  return (
    <div className="bg-neutral-900">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {() => (
            <>
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
            </>
          )}
        </Disclosure>

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
            className="text-neutral-900 font-semibold bg-brand-main hover:bg-brand-main/80 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Fale Conosco
            <Vector />
          </button>
        </div>
      </nav>
    </div>
  )
}

function Vector() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="ml-2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1437 2.24373L1.49375 5.52498C1.39458 5.55209 1.30618 5.60912 1.24058 5.68829C1.17499 5.76746 1.1354 5.86492 1.1272 5.96741C1.119 6.06989 1.1426 6.17241 1.19477 6.261C1.24694 6.34959 1.32515 6.41994 1.41875 6.46248L6.76875 8.99373C6.87355 9.04226 6.95771 9.12643 7.00625 9.23123L9.5375 14.5812C9.58003 14.6748 9.65039 14.753 9.73898 14.8052C9.82757 14.8574 9.93009 14.881 10.0326 14.8728C10.1351 14.8646 10.2325 14.825 10.3117 14.7594C10.3909 14.6938 10.4479 14.6054 10.475 14.5062L13.7562 2.85623C13.7811 2.77122 13.7827 2.68108 13.7607 2.59527C13.7387 2.50945 13.6941 2.43113 13.6315 2.36849C13.5689 2.30586 13.4905 2.26123 13.4047 2.23928C13.3189 2.21733 13.2288 2.21887 13.1437 2.24373Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.93127 9.06874L9.75627 6.24374"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
