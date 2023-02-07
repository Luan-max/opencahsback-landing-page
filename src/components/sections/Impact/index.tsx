import { UsersThree, Coins, Cardholder, ArrowUUpLeft } from 'phosphor-react'

export function Impact() {
  return (
    <section
      className="
        w-full px-[1.625rem] py-11 md:px-12 md:py-14 lg:px-14 lg:py-16
        xl:px-16 xl:py-20 2xl:px-[7.5rem] 2xl:py-28 grid justify-center gap-7 
        md:grid-cols-4 md:gap-3 bg-neutral-900
      "
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <span className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem]">
            +3.5M
          </span>
          <div className="w-6 lg:w-8 xl:w-9 2xl:w-[2.625rem]">
            <UsersThree size="100%" color="#BDE322" weight="bold" />
          </div>
        </div>

        <span className="mt-1 text-sm lg:text-base text-white opacity-70">
          de consumidores impactados
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <span className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem]">
            +11M
          </span>
          <div className="w-6 lg:w-8 xl:w-9 2xl:w-[2.625rem]">
            <Coins size="100%" color="#BDE322" weight="bold" />
          </div>
        </div>

        <span className="mt-1 text-sm lg:text-base text-white opacity-70">
          em cashback gerado
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <span className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem]">
            +8M
          </span>
          <div className="w-6 lg:w-8 xl:w-9 2xl:w-[2.625rem]">
            <Cardholder size="100%" color="#BDE322" weight="bold" />
          </div>
        </div>

        <span className="mt-1 text-sm lg:text-base text-white opacity-70">
          em cashback consumido
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <span className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem]">
            20%
          </span>
          <div className="w-6 lg:w-8 xl:w-9 2xl:w-[2.625rem]">
            <ArrowUUpLeft size="100%" color="#BDE322" weight="bold" />
          </div>
        </div>

        <span className="mt-1 text-sm lg:text-base text-white opacity-70">
          de clientes retornam em até 30 dias
        </span>
      </div>
    </section>
  )
}
