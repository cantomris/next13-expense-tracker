import { useRouter } from 'next/router';

export default function Expense() {
  const router = useRouter()
  const { id } = router.query

  return <h1>Expense {id} </h1>
}