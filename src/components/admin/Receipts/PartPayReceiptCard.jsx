import React, { useEffect, useState } from "react";
import './pendingReceipts.css'
import close from '../../../assets/menuClose.svg'
import partPayRecData from "../../../data/partPayRecData";

const PartPayReceiptCard = ({ projectID, selectedProject, onClose }) => {
  const [receiptData, setReceiptData] = useState([]);

  useEffect(() => {
    setReceiptData(partPayRecData.find(recData => recData.projectID === projectID))
  }, [projectID])

  // if (!selectedProject) return null;

    const renderFields = () => {
      // const projectType = selectedProject.projectType;

        switch (receiptData) {
          case 'Apartment':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="date">Date</label>
                  <input type="text" id="date" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="towerNumber">Tower Number</label>
                  <input type="text" id="towerNumber" defaultValue={receiptData.towerNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input type="text" id="flatNumber" defaultValue={receiptData.flatNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property *</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfPartPayment">Date of part-payment</label>
                  <input type="text" id="dateOfPartPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="amount">Amount</label>
                  <input type="text" id="amount" defaultValue={receiptData.amount} />
                </div>
              </>
            );
          case 'Villas':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="date">Date</label>
                  <input type="text" id="date" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="villaNumber">Villa Number</label>
                  <input type="text" id="villaNumber" defaultValue={receiptData.villaNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property *</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfPartPayment">Date of part-payment</label>
                  <input type="text" id="dateOfPartPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="amount">Amount</label>
                  <input type="text" id="amount" defaultValue={receiptData.amount} />
                </div>
                {/* Render fields for Villas type */}
              </>
            );
          case 'Plots':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="date">Date</label>
                  <input type="text" id="date" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property *</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfPartPayment">Date of part-payment</label>
                  <input type="text" id="dateOfPartPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="amount">Amount</label>
                  <input type="text" id="amount" defaultValue={receiptData.amount} />
                </div>
                {/* Render fields for Plots type */}
              </>
            );
          case 'Farm lands':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="date">Date</label>
                  <input type="text" id="date" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="sqYards">Square Yards</label>
                  <input type="text" id="sqYards" defaultValue={receiptData.sqYards} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property *</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfPartPayment">Date of part-payment</label>
                  <input type="text" id="dateOfPartPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="amount">Amount</label>
                  <input type="text" id="amount" defaultValue={receiptData.amount} />
                </div>
                {/* Render fields for Farm land type */}
              </>
            );
          default:
            return null;
        }
      };

  return (
    <div className="rec-det">
        <div className="rec-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="rec-head">
                <h3>Part-Payment Receipt</h3>
            </div>
            <div className="rec-data">
                {renderFields()}
            </div>
            <div className="rec-actions">
                <div className="rec-delete">
                    <button>Delete</button>
                </div>
                <div className="rec-sec-actions">
                    <button className="save">Save</button>
                    <button className="export">Export</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PartPayReceiptCard;
