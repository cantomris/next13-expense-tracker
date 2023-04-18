import Navigation from '@/components/navigation';
import {currencyFormatter} from '@/lib/utils';
import ExpenseCategoryItem from '@/components/ExpenseCategoryItem';
import Head from 'next/head'

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    color: "yellow",
    amount: 500
  },
  {
    id: 2,
    title: "Education",
    color: "green",
    amount: 1000
  },
  {
    id: 3,
    title: "Personal",
    color: "pink",
    amount: 400
  },
  {
    id: 4,
    title: "Food",
    color: "white",
    amount: 1400
  },
]
export default function Home() {
  return (
    <>
      <Head>
        <title> Expense Tracker App</title>
        <meta name="description" content="A Dockerized NextJS app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation/>

      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>{currencyFormatter(100000)}</h2>
      </section>

      <section className='flex items-center gap-2 py-3'>
        <button className='btn btn-primary'>+ Expenses</button>
        <button className='btn btn-primary-outline'>+ Income</button>
      </section>

      {/* Expenses */}
      <section className='py-6'>
        <h3 className='text-2xl'>My Expenses</h3>
        <div className='flex flex-col gap-4 mt-6'>
          {/* Expenses Item */}
          {DUMMY_DATA.map(expense => {
            return (
            <ExpenseCategoryItem
              color={expense.color}
              title={expense.title}
              amount={expense.amount}/>
          )})}
         
        </div>
      </section>
    </>
  )
}
