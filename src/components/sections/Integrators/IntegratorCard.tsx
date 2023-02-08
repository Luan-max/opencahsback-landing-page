import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

interface IntegratorCardProps {
  logo: StaticImageData
  link: string
  className: string
}

export function IntegratorCard({ logo, className, link }: IntegratorCardProps) {
  return (
    <div className={className}>
      <div className="">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image src={logo} alt="" className="w-[6.25rem]" />
        </Link>
      </div>
    </div>
  )
}
