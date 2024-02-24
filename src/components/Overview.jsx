import React from 'react'
import './overview.css'
import income from '../assets/income.svg';
import balance from '../assets/balance.svg';
import expenses from '../assets/expenses.svg';

const Overview = ({ incomeValue, expensesValue, balanceValue }) => {
  return (
      <div className='over-container'>
        <div className='over'>
          <div className='over_Head'>
              <h3>Overview</h3>
          </div>
          <div className='over_Data-fld'>
            <div className='over_Data'>
              <img src={income} alt="Income" />
              <div className='over_Data_amt'>
                <p className='amt'>${incomeValue}</p>
                <p className='amt-type'>Income</p>
              </div>
            </div>
            <div className='over_Data'>
              <img src={expenses} alt="" />
              <div className='over_Data_amt'>
                <p className='amt'>${expensesValue}
                </p>
                <p className='amt-type'>Expenses</p>
              </div>
            </div>
            <div className='over_Data'>
              <img src={balance} alt="" />
              <div className='over_Data_amt'>
                <p className='amt'>${balanceValue}</p>
                <p className='amt-type'>Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Overview