// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  categoryId: number,
  title: string,
  color: string,
  total: number
}
const DATA= {
  "expense_data": [
    {
      categoryId: 1,
      category: "Entertainment",
      color: "yellow",
      total: 1300,
      expenses: [
        {
          id: 1,
          description: "Saturday night cinema",
          createdAt: Date.now(),
          amount: 300
        },
        {
          id: 2,
          description: "Saturday brunch",
          createdAt: Date.now(),
          amount: 400
        },
        {
          id: 2,
          description: "Sunday dinner",
          createdAt: Date.now(),
          amount: 600
        }
      ]
    },
    {
      categoryId: 2,
      category: "Education",
      color: "blue",
      total: 500,
      expenses: [
        {
          id: 1,
          description: "Development Certification",
          createdAt: Date.now(),
          amount: 500
        }
      ]
    },
    {
      categoryId: 3,
      category: "Personal",
      color: "pink",
      total: 2000,
      expenses: [
        {
          id: 1,
          description: "New shaving machine",
          createdAt: Date.now(),
          amount: 2000
        }
      ]
    },
    {
      categoryId: 4,
      category: "Rent and bills",
      color: "white",
      total: 12000,
      expenses: [
        {
          id: 1,
          description: "Monthly rent",
          createdAt: Date.now(),
          amount: 10000
        },
        {
          id: 2,
          description: "Electric bill",
          createdAt: Date.now(),
          amount: 1400
        },
        {
          id: 3,
          description: "Water bill",
          createdAt: Date.now(),
          amount: 300
        },
        {
          id: 4,
          description: "Gas bill",
          createdAt: Date.now(),
          amount: 300
        },

      ]
    },
    {
      categoryId: 5,
      category: "House Supplies",
      color: "green",
      total: 5000,
      expenses: [
        {
          id: 1,
          description: "Weekly food supplies",
          createdAt: Date.now(),
          amount: 2000
        },
        {
          id: 2,
          description: "Weekly food supplies",
          createdAt: Date.now(),
          amount: 2000
        },
        {
          id: 2,
          description: "Utilities",
          createdAt: Date.now(),
          amount: 1000
        }
      ]
    }
  ],
  "income_data" : [
    {
      id: 1,
      amount: 20000,
      description: "Pay check",
      "createdAt": "Wed 05 April 2023"
    },
    {
      "id": 2,
      "amount": 2000,
      "description": "Freelance Job",
      "createdAt": "Mon 10 April 2023"
    },
    {
      "id": 3,
      "amount": 400,
      "description": "John's loan payback",
      "createdAt": "Fri 14 April 2023"
    }
  ]
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(DATA)
}
