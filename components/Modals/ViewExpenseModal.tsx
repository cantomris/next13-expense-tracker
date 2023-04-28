import { useContext, useRef, useState } from "react";
import Modal from "../Modal";
import { financeContext } from "@/lib/store/financeStore";
import { currencyFormatter } from "@/lib/utils";
import { FaRegTrashAlt } from "react-icons/fa";

function ViewExpenseModal({show, onClose, category}) {
  const {removeExpenseItem, deleteCategory } = useContext(financeContext)

  const deleteExpenseItemHandler = async (item) => {
    try {
      const updatedItems = category.expenses.filter((i) => i.id !== item.id)

      const updatedCategody = {
        expenses: [...updatedItems],
        total: category.total - item.amount
      }
      removeExpenseItem(updatedCategody, category.categoryId)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCategoryHandler = async () => {
    deleteCategory(category.categoryId)
  }

  return (
    <Modal show={show} onClose={onClose}>
      <h3 className='text-center'>Detailed {category.category} Expenses</h3>
      <div className='flex flex-col items-start justify-between'>
        <div className="flex content-center justify-between w-[100%] my-4">
          <h3 className="text-2xl">Expense History</h3>
          <button className="btn btn-blue" onClick={deleteCategoryHandler}>Delete All</button>
        </div>
        {
          category.expenses.map(expense => {
            return (
              <div key={expense.id} className="my-2 flex items-start text-start justify-between w-[100%]">
                <small>{expense.createdAt}</small>
                <p>{expense.description}</p>
                <div className="flex">
                  <p className="mx-4">{currencyFormatter(expense.amount)}</p>
                  <button onClick={() => {deleteExpenseItemHandler(expense)}}><FaRegTrashAlt color="red"/></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end">
      </div>
    </Modal>
  )
}

export default ViewExpenseModal;
