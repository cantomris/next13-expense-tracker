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

  const addIncomeItem = (newIncome) => {
    try {
      // incomes.push({
      //   id: newIncome.id,
      //   description: newIncome.description,
      //   amount: newIncome.amount,
      //   createdAt: newIncome.createdAt
      // })

      setIncomes((prevState) => {
        return [
        ...prevState, {
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

  const addExpenseItem = (newExpense) => {

    // Find the selected category and its index.
    const categoryIndex = expenses.findIndex(e => e.categoryId === newExpense.id);
    const category = categoryIndex >= 0 ? expenses[categoryIndex] : null;
  
    // Check if there is the category (Not needed)
    if (!category) {
      console.error(`Category with ID ${newExpense.id} not found`);
      return;
    }
  
    // Create a new category item with existing category and insert the new expense. Calculate total.
    const updatedCategory = {
      ...category,
      total: category.total + newExpense.expenses[categoryIndex].amount,
      expenses: [...category.expenses, newExpense]
    };
  
    const updatedExpenses = [
      // Create a copy of the original array up to the point where the updatedCategory will be inserted.
      ...expenses.slice(0, categoryIndex),
      updatedCategory,
      // Create a copy of the original array after the point where the updatedCategory has been inserted.
      ...expenses.slice(categoryIndex + 1)
    ];
    
    setExpenses(updatedExpenses);
  };
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