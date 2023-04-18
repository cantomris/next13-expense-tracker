import Navigation from '@/components/navigation';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { currencyFormatter } from '@/lib/utils';
import ExpenseCategoryItem from '@/components/ExpenseCategoryItem';
import { useState } from "react";
import Modal from '@/components/Modal';
import Head from 'next/head'

ChartJs.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
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
export default function Home() {

  const [showAddExpensesModal, setShowAddExpensesModal] = useState(false);
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title> Expense Tracker App</title>
        <meta name="description" content="A Dockerized NextJS app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Add Expense Modal } */}
      <Modal show={showAddExpensesModal} onClose={setShowAddExpensesModal}>
        
      </Modal>
      {/* Add Income Modal } */}
      <Modal show={showAddIncomeModal} onClose={setShowAddIncomeModal}>
        <form className="input-group" action="">
          <div className='input-group'>
            <label htmlFor="amount">Income Amount</label>
            <input name="amount" type="number" min={0.01} step={0.01} placeholder="Enter income amount" required/>
          </div>

          <div className='input-group'>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" placeholder="Enter income description" required/>
          </div>

          <button type="submit" className='btn btn-primary'>Add entry</button>
        </form>
      </Modal>
        
      <Navigation/>

      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>{currencyFormatter(100000)}</h2>
      </section>

      <section className='flex items-center gap-2 py-3'>
        <button onClick={() => setShowAddExpensesModal(true)} className='btn btn-primary'>+ Expenses</button>
        <button onClick={() => setShowAddIncomeModal(true)} className='btn btn-primary-outline'>+ Income</button>
      </section>

      {/* Expenses */}
      <section className='py-6'>
        <h3 className='text-2xl'>My Expenses</h3>
        <div className='input-group mt-6'>
          {/* Expenses Item */}
          {DUMMY_DATA.map(expense => {
            return (
            <ExpenseCategoryItem
              color={expense.color}
              title={expense.title}
              total={expense.total}/>
          )})}
        </div>
      </section>

      {/* Chart Section */}
      <section className='py-6'>
        <h3 className='text-2xl'>Stats</h3>
        <div className='w-1/2 mx-auto'>
          <Doughnut data={{
            labels: DUMMY_DATA.map(expense => expense.title),
            datasets: [
              {
                label: "Expenses",
                data: DUMMY_DATA.map(expense => expense.total),
                backgroundColor: DUMMY_DATA.map(expense => expense.color),
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
