import Navigation from '@/components/navigation';
import { useContext, useEffect, useState } from "react";

// Charts
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

// Utils
import { currencyFormatter } from '@/lib/utils';

// Components
import ExpenseCategoryItem from '@/components/ExpenseCategoryItem';
import AddIncomeModal from '@/components/Modals/AddIncomeModal';
import Head from 'next/head'
import AddExpenseModal from '@/components/Modals/AddExpenseModal';
import { financeContext } from '@/lib/store/financeStore';

ChartJs.register(ArcElement, Tooltip, Legend);

export default function Home(/* {data} */) {

  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [balance, setBalance] = useState(0)

  const { categories, incomes } = useContext(financeContext)

  useEffect(() => {
    const newBalance = incomes.reduce((total, income) => {
      return total + income.amount
    }, 0) - categories.reduce((total, expense) => {
      return total + expense.total
    }, 0)
    setBalance(newBalance)
  }, [categories, incomes])

  const onClick = () => {
    alert("Main page category selector activated")
  }

  return (
    <>
      <Head>
        <title> Expense Tracker App</title>
        <meta name="description" content="A Dockerized NextJS app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Add Expense Modal } */}
      <AddExpenseModal show={showAddExpenseModal} onClose={setShowAddExpenseModal}/>

      {/* Add Income Modal } */}
      <AddIncomeModal show={showAddIncomeModal} onClose={setShowAddIncomeModal}/>
        
      <Navigation/>

      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>{currencyFormatter(balance)}</h2>
      </section>

      <section className='flex items-center gap-2 py-3'>
        <button onClick={() => setShowAddExpenseModal(true)} className='btn btn-primary'>+ Expenses</button>
        <button onClick={() => setShowAddIncomeModal(true)} className='btn btn-primary-outline'>+ Income</button>
      </section>

      {/* Expenses List */}
      <section className='py-6'>
        <h3 className='text-2xl'>My Expenses</h3>
        <div className='input-group mt-6'>
          {/* Expenses Item */}
          {categories.map((expense: { categoryId: null | undefined; color: any; category: any; total: any; }) => {
            return (
            <ExpenseCategoryItem
              key={expense.categoryId}
              category={expense}/>
          )})}
        </div>
      </section>

      {/* Chart Section */}
      <section className='py-6'>
        <h3 className='text-2xl'>Stats</h3>
        <div className='w-1/2 mx-auto'>
          <Doughnut data={{
            labels: categories.map((expense: { category: String; }) => expense.category),
            datasets: [
              {
                label: "Expenses",
                data: categories.map((expense: { total: any; }) => expense.total),
                backgroundColor: categories.map((expense: { color: string }) => expense.color),
                borderColor: ["#18181b"],
                borderWidth: 5
              }
            ]
          }} />
        </div>
      </section>
    </>
  )
}

// export async function getServerSideProps() {
//   const req = await fetch('http://localhost:3000/api/data')
//   const data = await req.json();
//   return {
//     props: {data}
//   }
// }