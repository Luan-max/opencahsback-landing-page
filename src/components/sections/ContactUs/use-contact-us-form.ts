import { ChangeEvent, FormEvent, useState } from 'react'

import { WHATSAPP_BASE_URL } from '@/constants/whatsapp'

import useErrors from '@/hooks/use-errors'
import isEmailValid from '@/utils/is-email-valid'

type MessageTextBody = {
  name: string
  company: string
  email: string
  averageTicket: string
  ask?: string
}

function generateMessageText({
  name,
  company,
  email,
  averageTicket,
  ask
}: MessageTextBody) {
  return `
  Olá, me chamo ${name}, sou da empresa ${company}, e gostaria de perguntar ${
    ask
      ? ask
      : `sobre os planos para utilização da plataforma
  Opencashback.`
  }
  Nosso ticket médio é de ${averageTicket}, e meu e-mail para contato é ${email}.
  `
}

export function useContactUsForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [averageTicket, setAverageTicket] = useState('')
  const [ask, setAsk] = useState('')

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const MESSAGE_TEXT = generateMessageText({
      name,
      company,
      email,
      averageTicket,
      ask
    })

    window.open(`${WHATSAPP_BASE_URL}?text=${MESSAGE_TEXT}`, '_blank')?.focus()
  }

  const isFormValid = !(
    name &&
    company &&
    email &&
    averageTicket &&
    errors.length === 0
  )

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' })
    } else if (!event.target.value) {
      setError({ field: 'email', message: 'E-mail é obrigatório' })
    } else {
      removeError('email')
    }
  }

  function handleCompanyChange(event: ChangeEvent<HTMLInputElement>) {
    setCompany(event.target.value)

    if (!event.target.value) {
      setError({ field: 'company', message: 'Empresa é obrigatório' })
    } else {
      removeError('company')
    }
  }

  function handleAverageTicketChange(event: ChangeEvent<HTMLSelectElement>) {
    setAverageTicket(event.target.value)

    if (!event.target.value) {
      setError({
        field: 'average-ticket',
        message: 'Ticket médio é obrigatório'
      })
    } else {
      removeError('average-ticket')
    }
  }

  function handleAskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setAsk(event.target.value)
  }

  return {
    handleSubmit,
    isFormValid,
    handleNameChange,
    handleEmailChange,
    handleCompanyChange,
    handleAverageTicketChange,
    handleAskChange,
    getErrorMessageByFieldName
  }
}
