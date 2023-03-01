import { FormEvent, useState } from 'react'
import { z } from 'zod'

import { WHATSAPP_BASE_URL } from '@/constants/whatsapp'
import {
  ConvertGenericErrorResponse,
  convertZodToGenericError
} from '@/utils/convert-zod-to-generic-error'

const contactUsFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  company: z.string().min(1, 'Empresa é obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
  averageTicket: z.string().min(1, 'Ticket médio é obrigatório'),
  ask: z.string().optional()
})

type ContactUsFormValues = z.infer<typeof contactUsFormSchema>

function generateMessageText({
  name,
  company,
  email,
  averageTicket,
  ask
}: ContactUsFormValues) {
  return `
  Olá, me chamo ${name}, sou da empresa ${company}, e gostaria de perguntar ${
    ask
      ? ask
      : `sobre os planos para utilização da plataforma
  Opencashback.`
  }\n
  Nosso ticket médio é de ${averageTicket}, e meu e-mail para contato é ${email}.
  `
}

const INITIAL_VALUES = {
  name: '',
  company: '',
  email: '',
  averageTicket: '',
  ask: ''
}

export function useContactUsForm() {
  const [formValues, setFormValues] =
    useState<ContactUsFormValues>(INITIAL_VALUES)
  const [errors, setErrors] =
    useState<ConvertGenericErrorResponse<ContactUsFormValues>>(INITIAL_VALUES)

  const isFormValid = Object.values(errors).every(error => error === '')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = contactUsFormSchema.safeParse(formValues)

    if (!result.success) {
      setErrors(convertZodToGenericError(result.error.issues))
      return
    }

    const MESSAGE_TEXT = generateMessageText(formValues)

    window.open(`${WHATSAPP_BASE_URL}?text=${MESSAGE_TEXT}`, '_blank')?.focus()
  }

  function handleFormChange(field: keyof ContactUsFormValues, value: string) {
    setErrors(prevState => ({ ...prevState, [field]: '' }))
    setFormValues(prevState => ({ ...prevState, [field]: value }))

    const pastValues = { ...formValues, [field]: value }

    const result = contactUsFormSchema.safeParse(pastValues)

    if (!result.success) {
      const validationErrors = convertZodToGenericError<ContactUsFormValues>(
        result.error.issues
      )
      setErrors(prevState => ({
        ...prevState,
        [field]: validationErrors[field] || ''
      }))
    }
  }

  return {
    handleSubmit,
    isFormValid,
    handleFormChange,
    errors
  }
}
