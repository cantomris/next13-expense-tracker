import { useContext, useRef, useState } from "react";
import Modal from "../Modal";
import { financeContext } from "@/lib/store/financeStore";
import ExpenseCategoryItem from "../ExpenseCategoryItem";

function AddExpenseModal({show, onClose}) {

  const descriptionRef = useRef<HTMLInputElement>("");
  const amountRef = useRef<HTMLInputElement>("");
  const { expenses, addExpenseItem, removeExpenseItem } = useContext(financeContext);

  const [expenseAmount, setExpenseAmount] = useState("")
  const [expenseDescription, setExpenseDescription] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Handler functions
  const addExpenseHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const category = expenses.find(e => e.categoryId == selectedCategory)
    const newExpense = {
      id: category.categoryId,
      expense : {
          id: Math.random().toString(16).slice(2),
          description: expenseDescription,
          createdAt: new Date().toDateString(),
          amount: +expenseAmount,
        }
    }

    try {
      await addExpenseItem(newExpense)
    } catch(error: any) {
      console.log(error.message); 
    }
    console.log(newExpense)
    setExpenseAmount("")
    setExpenseDescription("")
    setSelectedCategory(null),
    onClose()
  }


  const deleteExpenseEntryHandler = async (expenseId) => {
    try{
      await removeExpenseItem(expenseId)
    } catch(error: any) {
      console.log(error.message);
    }
  }

  return (
    <Modal show={show} onClose={onClose}>
        <form onSubmit={addExpenseHandler} className="input-group" action="">
          <div className='input-group'>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" placeholder="Enter expense description" required ref={descriptionRef} value={expenseDescription} onChange={(e) => setExpenseDescription(e.target.value)}/>
          </div>

          <div className='input-group'>
            <label htmlFor="amount">Expense Amount</label>
            <input name="amount" type="number" min={0.01} step={0.01} placeholder="Enter expense amount" required ref={amountRef} value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)}/>
          </div>
        </form>

        <div className='flex flex-col mt-6'>
          <h3 className='text-2xl font-bold'>Select Category</h3>
          <div className="flex flex-row flex-wrap gap-3 mt-6">
          {
            expenseAmount > 0 && (
              expenses.map((category) => {
                return (
                  <button key={category.categoryId} className='' onClick={() => setSelectedCategory(category.categoryId)}>
                    <div className='flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl' style={{boxShadow: category.categoryId == selectedCategory ? "1px 1px 4px" : "none"}}>
                      <div className='flex items-center gap-2'>
                        <div className='w-[25px] h-[25px] rounded-full' style={{backgroundColor: category.color}}/>
                        <h4 className='capitalize'>{category.category}</h4>
                      </div>
                    </div>
                  </button>
                )
              })
            )
          }
          </div>
        </div>
        <div className="flex justify-end">
        {
            expenseAmount > 0 && selectedCategory && (
              <button type="submit" className='btn btn-primary mt-6' onClick={addExpenseHandler}>Add entry</button>
            )
          }
        </div>
      </Modal>
  )
}

export default AddExpenseModal;
