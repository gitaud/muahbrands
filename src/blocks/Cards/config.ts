import type { Block } from 'payload'

export const CardsBlock: Block = {
  slug: 'cardsBlock',
  interfaceName: 'CardsBlock',
  fields: [
    {
      name: 'populatedBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection'
        },
        {
          label: 'Individual Selection',
          value: 'selection'
        }
      ]
    },
    {
      name: 'relationTo',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populatedBy === 'collection',
      },
      defaultValue: 'services',
      label: 'Collections to Show',
      options: [
        {
          label: 'Services',
          value: 'services'
        }
      ]
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit'
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['services'],
    },
  ],
  labels: {
    plural: 'Cards',
    singular: 'Card'
  }
}