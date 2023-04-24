import { useRef, useEffect, useContext } from "react";
import { currencyFormatter } from "@/lib/utils";
import Modal from "@/components/Modal"

import { financeContext } from "@/lib/store/financeStore";

import { FaRegTrashAlt } from 'react-icons/fa'

function AddIncomeModal({show, onClose}) {

  const descriptionRef = useRef<HTMLInputElement>("");
  const amountRef = useRef<HTMLInputElement>("");
  const { incomes, addIncomeItem, removeIncomeItem } = useContext(financeContext);

  // Handler functions
  const addIncomeHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const newIncome = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      createdAt: new Date().toDateString()
    }

    try {
      await addIncomeItem(newIncome)
      descriptionRef.current.value = "";
      amountRef.current.value = "";

    } catch(error) {
      console.log(error.message);
      
    }

  }

  const deleteIncomeEntryHandler = async (incomeId) => {
    try{
      await removeIncomeItem(incomeId)
    } catch(error) {
      console.log(error.message);
      
    }
  }

  return (
    <Modal show={show} onClose={onClose}>
        <form onSubmit={addIncomeHandler} className="input-group" action="">
          <div className='input-group'>
            <label htmlFor="amount">Income Amount</label>
            <input name="amount" type="number" min={0.01} step={0.01} placeholder="Enter income amount" required ref={amountRef}/>
          </div>

          <div className='input-group'>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" placeholder="Enter income description" required ref={descriptionRef}/>
          </div>

          <button type="submit" className='btn btn-primary'>Add entry</button>
        </form>

        <div className='flex flex-col gap-4 mt-6'>
          <h3 className='text-2xl font-bold'>Income History</h3>
          {
            incomes.map(income => {
              return (
                <div key={income.id} className='flex items-center justify-between'>
                  <div>
                    <p className='font-semibold'>{income.description}</p>
                    <small className='text-xs'>{income.createdAt}</small>
                  </div>
                  <p className='flex items-center gap-2'>{currencyFormatter(income.amount)}
                  <button key={income.id} onClick={() => {deleteIncomeEntryHandler(income.id)}}>
                    <FaRegTrashAlt/>
                  </button>
                  </p>
                </div>
              )
            })
          }
        </div>
      </Modal>
  )

}

export default AddIncomeModal;