type Options = {
  key: string
  value: string
}

export const AVERAGE_TICKET_OPTIONS: Options[] = [
  {
    key: '1-50',
    value: 'R$ 1,00 - R$ 50,00'
  },
  {
    key: '51-100',
    value: 'R$ 51,00 - R$ 100,00'
  },
  {
    key: '101-200',
    value: 'R$ 101,00 - R$ 200,00'
  },
  {
    key: '201-500',
    value: 'R$ 201,00 - R$ 500,00'
  },
  {
    key: '501-1000',
    value: 'R$ 501,00 - R$ 1.000,00'
  },
  {
    key: '>1000',
    value: '> R$ 1.000,00'
  }
]
