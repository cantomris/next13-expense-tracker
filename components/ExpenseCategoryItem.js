import { useState } from 'react';
import {currencyFormatter} from '@/lib/utils';
import ViewExpenseModal from '@/components/Modals/ViewExpenseModal';

function ExpenseCategoryItem({category}) {
  const [showDetailedExpenseModal, setShowDetailedExpenseModal] = useState(false);

  return (
    <>
      { /* Detailed Expenses Modal */}
      <ViewExpenseModal
        show={showDetailedExpenseModal}
        onClose={setShowDetailedExpenseModal}
        category={category}
      />
      
      <button  onClick={() => {setShowDetailedExpenseModal(true)}}>
        <div className='flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl'>
          <div className='flex items-center gap-2'>
            <div className='w-[25px] h-[25px] rounded-full' style={{backgroundColor: category.color}}/>
            <h4 className='capitalize'>{category.category}</h4>
          </div>
          { category.total && <p>{currencyFormatter(category.total)}</p> }
        </div>
      </button>
    </>
  )
}
export default ExpenseCategoryItem;

