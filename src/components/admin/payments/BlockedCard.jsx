import React, { useState } from "react";
import './payments.css'
import logo from '../../../assets/logo.svg'
import close from '../../../assets/menuClose.svg'

const BlockedCard = ({projectID, blockedCardDetails, onClose}) => {
    const [formData, setFormData] = useState({ status_type: "Block" });

    const cardData = blockedCardDetails.find(item => item.projectID === projectID);
    console.log(cardData);
    const priceAfterDiscount = cardData.priceOfProperty * (1 - cardData.discount / 100);
    const pendingPayment = priceAfterDiscount; 
    // (cardData.amountPaid + cardData.enterAmount)

    if(!cardData) return null;

    const renderFields = () => {
        const projectType = cardData.projectType;

        const handleRoleChange = (e) => {
            setFormData({ ...formData, status_type: e.target.value });
          };   
  
          switch (projectType) {
            case 'Apartments':
              return (
                <>
                  <div className="sp-data-field">
                    <label htmlFor="dateOfvalidation">Date of Validation</label>
                    <input type="text" id="dateOfvalidation" defaultValue={cardData.dateOfValidation} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonID">Sales Person ID</label>
                    <input type="text" id="salesPersonID" defaultValue={cardData.salesPersonID} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonName">Sales Person Name</label>
                    <input type="text" id="salesPersonName" defaultValue={cardData.salesPersonName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientName">Client Name</label>
                    <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientPhone">Client Phone</label>
                    <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                    <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectType">Project Type</label>
                    <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="towerNumber">Tower Number</label>
                    <input type="text" id="towerNumber" defaultValue={cardData.towerNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="flatNumber">Flat Number</label>
                    <input type="text" id="flatNumber" defaultValue={cardData.flatNumber} readOnly />
                  </div>
                  {/* <div className="sp-data-field">
                    <label htmlFor="priceOfProperty">Price of Property *</label>
                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                  </div> */}
                  <div className="sp-data-field">
                    <label htmlFor="status">Status</label>
                    <select name="" id="status" value={formData.status_type} onChange={handleRoleChange}>
                        <option value="Block">Block</option>
                        <option value="partPayment">Part-Payment</option>
                        <option value="sold">Sold</option>
                        <option value="available">Available</option>
                    </select>
                  </div>
                  {formData.status_type === 'Block' && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="blockedDays">No. of Blocked Days</label>
                                    <input type="number" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="extraBlockedDays">Add Extra Block Days</label>
                                    <input type="number" id="extraBlockedDays" defaultValue={cardData.extraBlockedDays} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="daysLeft">No. of Days Left</label>
                                    <input type="number" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="remark">Remark</label>
                                    <input type="text" id="remark" defaultValue={cardData.remark} />
                                </div>
                            </>
                        )}
                  {/* {cardData.status === 'Block' && (
                    <>
                      <div className="sp-data-field">
                        <label htmlFor="blockedDays">No. of Blocked Days</label>
                        <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                      </div>
                      <div className="sp-data-field">
                        <label htmlFor="daysLeft">No. of Days Left</label>
                        <input type="text" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                      </div>
                    </>
                  )} */}
                  {(formData.status_type === 'partPayment' || formData.status_type === 'sold') && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="priceOfProperty">Price of Property *</label>
                                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="discount">Discount in %</label>
                                    <input type="text" id="discount" defaultValue={cardData.discount} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="priceAfterDiscount">Price After Discount</label>
                                    <input type="text" id="priceAfterDiscount" defaultValue={priceAfterDiscount} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="amountPaid">Amount Paid Till Now</label>
                                    <input type="text" id="amountPaid" defaultValue={cardData.amountPaid} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="enterAmount">Enter Amount *</label>
                                    <input type="number" id="enterAmount" />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="pendingPayment">Pending Payment</label>
                                    <input type="text" id="pendingPayment" defaultValue={pendingPayment} readOnly />
                                </div>
                            </>
                        )}
                </>
              );
            case 'Villas':
              return (
                <>
                  <div className="sp-data-field">
                    <label htmlFor="dateOfvalidation">Date of Validation</label>
                    <input type="text" id="dateOfvalidation" defaultValue={cardData.dateOfValidation} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonID">Sales Person ID</label>
                    <input type="text" id="salesPersonID" defaultValue={cardData.salesPersonID} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonName">Sales Person Name</label>
                    <input type="text" id="salesPersonName" defaultValue={cardData.salesPersonName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientName">Client Name</label>
                    <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientPhone">Client Phone</label>
                    <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                    <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectType">Project Type</label>
                    <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="villaNumber">Villa Number</label>
                    <input type="text" id="villaNumber" defaultValue={cardData.villaNumber} readOnly />
                  </div>
                  {/* <div className="sp-data-field">
                    <label htmlFor="priceOfProperty">Price of Property *</label>
                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                  </div> */}
                  <div className="sp-data-field">
                    <label htmlFor="status">Status</label>
                    <select name="" id="status" value={formData.status_type} onChange={handleRoleChange}>
                        <option value="Block">Block</option>
                        <option value="partPayment">Part-Payment</option>
                        <option value="sold">Sold</option>
                        <option value="available">Available</option>
                    </select>
                  </div>
                  {formData.status_type === 'Block' && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="blockedDays">No. of Blocked Days</label>
                                    <input type="number" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="extraBlockedDays">Add Extra Block Days</label>
                                    <input type="number" id="extraBlockedDays" defaultValue={cardData.extraBlockedDays} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="daysLeft">No. of Days Left</label>
                                    <input type="number" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="remark">Remark</label>
                                    <input type="text" id="remark" defaultValue={cardData.remark} />
                                </div>
                            </>
                        )}
                  {/* {cardData.status === 'Block' && (
                    <>
                      <div className="sp-data-field">
                        <label htmlFor="blockedDays">No. of Blocked Days</label>
                        <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                      </div>
                      <div className="sp-data-field">
                        <label htmlFor="daysLeft">No. of Days Left</label>
                        <input type="text" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                      </div>
                    </>
                  )} */}
                  {(formData.status_type === 'partPayment' || formData.status_type === 'sold') && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="priceOfProperty">Price of Property *</label>
                                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="discount">Discount in %</label>
                                    <input type="text" id="discount" defaultValue={cardData.discount} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="priceAfterDiscount">Price After Discount</label>
                                    <input type="text" id="priceAfterDiscount" defaultValue={priceAfterDiscount} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="amountPaid">Amount Paid Till Now</label>
                                    <input type="text" id="amountPaid" defaultValue={cardData.amountPaid} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="enterAmount">Enter Amount *</label>
                                    <input type="number" id="enterAmount" />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="pendingPayment">Pending Payment</label>
                                    <input type="text" id="pendingPayment" defaultValue={pendingPayment} readOnly />
                                </div>
                            </>
                        )}
                  {/* Render fields for Villas type */}
                </>
              );
            case 'Plots':
              return (
                <>
                  <div className="sp-data-field">
                    <label htmlFor="dateOfvalidation">Date of Validation</label>
                    <input type="text" id="dateOfvalidation" defaultValue={cardData.dateOfValidation} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonID">Sales Person ID</label>
                    <input type="text" id="salesPersonID" defaultValue={cardData.salesPersonID} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonName">Sales Person Name</label>
                    <input type="text" id="salesPersonName" defaultValue={cardData.salesPersonName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientName">Client Name</label>
                    <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientPhone">Client Phone</label>
                    <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                    <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectType">Project Type</label>
                    <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="plotNumber">Plot Number</label>
                    <input type="text" id="plotNumber" defaultValue={cardData.plotNumber} readOnly />
                  </div>
                  {/* <div className="sp-data-field">
                    <label htmlFor="priceOfProperty">Price of Property *</label>
                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                  </div> */}
                  <div className="sp-data-field">
                    <label htmlFor="status">Status</label>
                    <select name="" id="status" value={formData.status_type} onChange={handleRoleChange}>
                        <option value="Block">Block</option>
                        <option value="partPayment">Part-Payment</option>
                        <option value="sold">Sold</option>
                        <option value="available">Available</option>
                    </select>
                  </div>
                  {formData.status_type === 'Block' && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="blockedDays">No. of Blocked Days</label>
                                    <input type="number" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="extraBlockedDays">Add Extra Block Days</label>
                                    <input type="number" id="extraBlockedDays" defaultValue={cardData.extraBlockedDays} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="daysLeft">No. of Days Left</label>
                                    <input type="number" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="remark">Remark</label>
                                    <input type="text" id="remark" defaultValue={cardData.remark} />
                                </div>
                            </>
                        )}
                  {/* {cardData.status === 'Block' && (
                    <>
                      <div className="sp-data-field">
                        <label htmlFor="blockedDays">No. of Blocked Days</label>
                        <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                      </div>
                      <div className="sp-data-field">
                        <label htmlFor="daysLeft">No. of Days Left</label>
                        <input type="text" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                      </div>
                    </>
                  )} */}
                  {(formData.status_type === 'partPayment' || formData.status_type === 'sold') && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="priceOfProperty">Price of Property *</label>
                                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="discount">Discount in %</label>
                                    <input type="text" id="discount" defaultValue={cardData.discount} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="priceAfterDiscount">Price After Discount</label>
                                    <input type="text" id="priceAfterDiscount" defaultValue={priceAfterDiscount} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="amountPaid">Amount Paid Till Now</label>
                                    <input type="text" id="amountPaid" defaultValue={cardData.amountPaid} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="enterAmount">Enter Amount *</label>
                                    <input type="number" id="enterAmount" />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="pendingPayment">Pending Payment</label>
                                    <input type="text" id="pendingPayment" defaultValue={pendingPayment} readOnly />
                                </div>
                            </>
                        )}
                  {/* Render fields for Plots type */}
                </>
              );
            case 'Farm lands':
              return (
                <>
                  <div className="sp-data-field">
                    <label htmlFor="dateOfvalidation">Date of Validation</label>
                    <input type="text" id="dateOfvalidation" defaultValue={cardData.dateOfValidation} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonID">Sales Person ID</label>
                    <input type="text" id="salesPersonID" defaultValue={cardData.salesPersonID} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="salesPersonName">Sales Person Name</label>
                    <input type="text" id="salesPersonName" defaultValue={cardData.salesPersonName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientName">Client Name</label>
                    <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="clientPhone">Client Phone</label>
                    <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                    <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="projectType">Project Type</label>
                    <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="plotNumber">Plot Number</label>
                    <input type="text" id="plotNumber" defaultValue={cardData.plotNumber} readOnly />
                  </div>
                  <div className="sp-data-field">
                    <label htmlFor="sqYards">Square Yards</label>
                    <input type="text" id="sqYards" defaultValue={cardData.sqYards} readOnly />
                  </div>
                  {/* <div className="sp-data-field">
                    <label htmlFor="priceOfProperty">Price of Property *</label>
                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                  </div> */}
                  <div className="sp-data-field">
                    <label htmlFor="status">Status</label>
                    <select name="" id="status" value={formData.status_type} onChange={handleRoleChange}>
                        <option value="Block">Block</option>
                        <option value="partPayment">Part-Payment</option>
                        <option value="sold">Sold</option>
                        <option value="available">Available</option>
                    </select>
                  </div>
                  {formData.status_type === 'Block' && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="blockedDays">No. of Blocked Days</label>
                                    <input type="number" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="extraBlockedDays">Add Extra Block Days</label>
                                    <input type="number" id="extraBlockedDays" defaultValue={cardData.extraBlockedDays} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="daysLeft">No. of Days Left</label>
                                    <input type="number" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="remark">Remark</label>
                                    <input type="text" id="remark" defaultValue={cardData.remark} />
                                </div>
                            </>
                        )}
                  {/* {cardData.status === 'Block' && (
                    <>
                      <div className="sp-data-field">
                        <label htmlFor="blockedDays">No. of Blocked Days</label>
                        <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                      </div>
                      <div className="sp-data-field">
                        <label htmlFor="daysLeft">No. of Days Left</label>
                        <input type="text" id="daysLeft" defaultValue={cardData.daysLeft} readOnly />
                      </div>
                    </>
                  )} */}
                  {(formData.status_type === 'partPayment' || formData.status_type === 'sold') && (
                            <>
                                <div className="sp-data-field">
                                    <label htmlFor="priceOfProperty">Price of Property *</label>
                                    <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="discount">Discount in %</label>
                                    <input type="text" id="discount" defaultValue={cardData.discount} />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="priceAfterDiscount">Price After Discount</label>
                                    <input type="text" id="priceAfterDiscount" defaultValue={priceAfterDiscount} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="amountPaid">Amount Paid Till Now</label>
                                    <input type="text" id="amountPaid" defaultValue={cardData.amountPaid} readOnly />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="enterAmount">Enter Amount *</label>
                                    <input type="number" id="enterAmount" />
                                </div>
                                <div className="sp-data-field">
                                    <label htmlFor="pendingPayment">Pending Payment</label>
                                    <input type="text" id="pendingPayment" defaultValue={pendingPayment} readOnly />
                                </div>
                            </>
                        )}
                  {/* Render fields for Farm land type */}
                </>
              );
            default:
              return null;
          }
        };

  return (
    <div className="sp-det">
        <div className="sp-sec">
            <div className="sp-head">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <h3>Block</h3>
              <div className='close'>
                <img src={close} alt="Close card" onClick={onClose} />
              </div>
            </div>
            <div className="sp-data">
                {renderFields()}
            </div>
            <div className="pay-actions">
                <div className="pay-cancel">
                    <button onClick={onClose}>Cancel</button>
                </div>
                <div className="pay-submit">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlockedCard;
