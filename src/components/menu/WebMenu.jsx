import React from 'react'
import './webMenu.css'
import home from '../../assets/home.svg'
import approval from '../../assets/approval.svg'
import expenses from '../../assets/expense.svg' 
import payments from '../../assets/payments.svg'
import discount from '../../assets/discount.svg'
import miscel from '../../assets/miscel.svg'
import history from '../../assets/history.svg'
import receipts from '../../assets/receipts.svg'
import customer from '../../assets/customer.svg'
import logout from '../../assets/logout.svg'

const WebMenu = ({ roleType }) => {

    const renderMenuItems = () => {
        switch (roleType) {
          case 'Sales Person':
            return (
              <>
                <li>
                  <a href="/sales/dashboard"><img src={home} alt="" /></a>
                  <a href="/sales/dashboard"><p>Dashboard</p></a>
                </li>
                <li>
                  <a href="/sales/onBoard"><img src={history} alt="" /></a>
                  <a href="/sales/onBoard"><p>Onboarding Form</p></a>
                </li>
                <li>
                  <a href="/sales/history"><img src={approval} alt="" /></a>
                  <a href="/sales/history"><p>History</p></a>
                </li>
              </>
            );
          case 'Manager':
            return (
              <>
                <li>
                  <a href=""><img src={home} alt="" /></a>
                  <a href=""><p>Dashboard</p></a>
                </li>
                <li>
                  <a href=""><img src={receipts} alt="" /></a>
                  <a href=""><p>Receipts</p></a>
                </li>
                <li>
                  <a href=""><img src={expenses} alt="" /></a>
                  <a href=""><p>Expenses</p></a>
                </li>
                <li>
                  <a href=""><img src={history} alt="" /></a>
                  <a href=""><p>SP History</p></a>
                </li>
                <li>
                  <a href=""><img src={history} alt="" /></a>
                  <a href=""><p>CP History</p></a>
                </li>
              </>
            );
          case 'Channel Person':
            return (
              <>
                <li>
                  <a href=""><img src={home} alt="" /></a>
                  <a href=""><p>Dashboard</p></a>
                </li>
                <li>
                  <a href=""><img src={history} alt="" /></a>
                  <a href=""><p>Onboarding Form</p></a>
                </li>
                <li>
                  <a href=""><img src={approval} alt="" /></a>
                  <a href=""><p>History</p></a>
                </li>
              </>
            );
            case 'Super Admin':
                return (
                  <>
                    <li>
                      <a href="/admin/dashboard"><img src={home} alt="" /></a>
                      <a href="/admin/dashboard"><p>Dashboard</p></a>
                    </li>
                    <li>
                      <a href=""><img src={approval} alt="" /></a>
                      <a href=""><p>Approval</p></a>
                    </li>
                    <li>
                      <a href=""><img src={receipts} alt="" /></a>
                      <a href=""><p>Receipts</p></a>
                    </li>
                    <li>
                      <a href=""><img src={payments} alt="" /></a>
                      <a href=""><p>Payments</p></a>
                    </li>
                    <li>
                      <a href=""><img src={home} alt="" /></a>
                      <a href=""><p>Payrolls</p></a>
                    </li>
                    <li>
                      <a href=""><img src={expenses} alt="" /></a>
                      <a href=""><p>Expenses</p></a>
                    </li>
                    <li>
                      <a href=""><img src={home} alt="" /></a>
                      <a href=""><p>Commissions</p></a>
                    </li>
                    <li>
                      <a href=""><img src={customer} alt="" /></a>
                      <a href=""><p>Customer</p></a>
                    </li>
                    <li>
                      <a href=""><img src={discount} alt="" /></a>
                      <a href=""><p>Discount</p></a>
                    </li>
                    <li>
                      <a href=""><img src={miscel} alt="" /></a>
                      <a href=""><p>Miscellaneous</p></a>
                    </li>
                    <li>
                      <a href=""><img src={history} alt="" /></a>
                      <a href=""><p>SP History</p></a>
                    </li>
                    <li>
                      <a href=""><img src={history} alt="" /></a>
                      <a href=""><p>CP History</p></a>
                    </li>
                    <li>
                      <a href=""><img src={miscel} alt="" /></a>
                      <a href=""><p>Lead Generation</p></a>
                    </li>
                  </>
                );
          default:
            return null;
        }
      };

  return (
        <div className='menu'>
            <div className='menu_Sec'>
                <div className='menu_List'>
                    <div className='menu-items'>
                    <ul>
              {renderMenuItems()}
            </ul>
            <ul className='logout'>
              <li>
                <a href=""><img src={logout} alt="" /></a>
                <a href=""><p>Logout</p></a>
              </li>
            </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WebMenu