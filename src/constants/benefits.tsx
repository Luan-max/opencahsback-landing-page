/* eslint-disable @typescript-eslint/no-explicit-any */
import { X, Check } from 'phosphor-react'
import { ReactElement } from 'react'

export type Benefits = {
  title: string
  icon: ReactElement<any, any>
}

export const BENEFITS: Benefits[] = [
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

export const NO_BENEFITS: Benefits[] = [
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
