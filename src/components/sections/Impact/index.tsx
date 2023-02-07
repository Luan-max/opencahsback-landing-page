import { UsersThree, Coins, Cardholder, ArrowUUpLeft } from 'phosphor-react'

import { ImpactCard } from './ImpactCard'

export function Impact() {
  return (
    <section
      className="
        w-full px-[1.625rem] py-11 md:px-12 md:py-14 lg:px-14 lg:py-16
        xl:px-16 xl:py-20 2xl:px-[7.5rem] 2xl:py-28 grid justify-center gap-7 
        md:grid-cols-4 md:gap-3 bg-neutral-900
      "
    >
      <ImpactCard
        title="+3.5M"
        icon={<UsersThree size="100%" color="#BDE322" weight="bold" />}
        description="de consumidores impactados"
      />

      <ImpactCard
        title="+11M"
        icon={<Coins size="100%" color="#BDE322" weight="bold" />}
        description="em cashback gerado"
      />

      <ImpactCard
        title="+8M"
        icon={<Cardholder size="100%" color="#BDE322" weight="bold" />}
        description="em cashback consumido"
      />

      <ImpactCard
        title="20%"
        icon={<ArrowUUpLeft size="100%" color="#BDE322" weight="bold" />}
        description="de clientes retornam em até 30 dias"
      />
    </section>
  )
}
