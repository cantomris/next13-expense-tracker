// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const DUMMY_DATA: any = [
  {
    id: 1,
    title: "Entertainment",
    color: "yellow",
    total: 500
  },
  {
    id: 2,
    title: "Education",
    color: "green",
    total: 1000
  },
  {
    id: 3,
    title: "Personal",
    color: "pink",
    total: 400
  },
  {
    id: 4,
    title: "Food",
    color: "white",
    total: 1400
  }
]
type Data = {
  id: number,
  title: string,
  color: string,
  total: number

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ Data: DUMMY_DATA })
}
