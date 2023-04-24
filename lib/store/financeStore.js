import { createContext, useState, useEffect } from 'react';

export const financeContext = createContext({
  incomes: [],
  addIncomeItem: async () => {},
  removeIncomeItem: async () => {},
  expenses: [],
  addExpenseItem: async () => [],
  removeExpenseItem: async () => []
});

export default function FinanceContextProvider({ children }) {

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  const addIncomeItem = async (newIncome) => {
    try {
      incomes.push({
        description: newIncome.description,
        createdAt: newIncome.createdAt,
        total: newIncome.amount
      })
  
      setIncomes((prevState) => {
        return [
        ...prevState, {
          id: 7,
          ...newIncome
        }
      ]})
    } catch(error) {
      throw error
    }
  }

  const removeIncomeItem = async (incomeId) => {
    try {
      await setIncomes(prevState => {
        return prevState.filter(income => income.id != incomeId)
      })   
    } catch(error) {
      throw error
    }
  }

  const addExpenseItem = async () => {}
  const removeExpenseItem = async () => {}

  const values={ incomes, addIncomeItem, removeIncomeItem, expenses, addExpenseItem, removeExpenseItem }

  useEffect(() => {
    // setIncomes(data.income_data)

    const getDatabase = async () => {
      // const response = await fetch("http://localhost:3001/income_data") // From JsonServer
      const response = await fetch("http://localhost:3000/api/data")
      const jsonResponse = await response.json()
      // console.log(jsonResponse.income_data);
      // setIncomes(jsonResponse); // From JsonServer
      setIncomes(jsonResponse.income_data);
      setExpenses(jsonResponse.expense_data)
    }

    getDatabase()
  },[])

  return <financeContext.Provider value={ values }>
    { children }
  </financeContext.Provider>
}