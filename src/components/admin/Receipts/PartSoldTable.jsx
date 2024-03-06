import React, { useEffect, useState } from "react";
import '../Receipts/pendingReceipts.css'
import partSoldDataDummy from "../../../data/partSoldData";
import partSoldPayments from "../../../data/partSoldPayments";
import close from '../../../assets/menuClose.svg'
import deleteIcon from "../../../assets/delete.svg";
import exportIcon from "../../../assets/export.svg";

const PartSoldTable = ({ status }) => {
    const [partSoldData, setPartSoldData] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        // Filter data based on status
        const filteredData = partSoldDataDummy.filter(item => item.status === status);
        setPartSoldData(filteredData);
    }, [status]);

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize); // Listen for viewport width changes
      
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
      }, []);

    const handleRowClick = (rowID) => {
        setSelectedRow(rowID);
    };

    const handleCloseDropdown = () => {
        setSelectedRow(null);
    };

    const renderDropdown = (projectID) => {
        const selectedProject = partSoldPayments.find(item => item.projectID === projectID);
        if (selectedRow === projectID && selectedProject && selectedProject.payment) {
            const payments = Array.isArray(selectedProject.payment) ? selectedProject.payment : [selectedProject.payment];
            return (
                <tr className="dropdown" style={{backgroundColor: '#D9D9D9'}}>
                    <td colSpan="5">
                        <div className="drop-sec">
                            <div className="drop-head">
                                <h4>Part-Payment</h4>
                                <img src={close} alt="" onClick={handleCloseDropdown} />
                            </div>
                            <div className="drop-table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {payments.map((payment, index) => (
                                        <tr key={index}>
                                            <td>{payment.date || 'No Payments yet'}</td>
                                            <td>{payment.amount || 'No Payments yet'}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }
        return null;
    }

  return (
    <div className="receipt-table">
            <div className="receipt-table-sec">
                <div className="receipt-table-head">
                    <h3>Receipts</h3>
                    <div className="deleted-receipts">
                        <button>Deleted Receipts</button>
                    </div>
                </div>
                <div className="receipts-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Project ID</th>
                                <th>Project Name</th>
                                {<th>Client Name</th>}
                                {viewportWidth >= 1024 && <th>Status</th>}
                                {viewportWidth >= 1024 && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {partSoldData.map(partSold => (
                            <React.Fragment key={partSold.projectID}><tr key={partSold.projectID} onClick={() => handleRowClick(partSold.projectID)}>
                                <td>{partSold.projectID}</td>
                                <td>{partSold.projectName}</td>
                                {viewportWidth < 1024 && <td>{partSold.clientName}</td>}
                                {viewportWidth >= 1024 && <td>{partSold.status}</td>}
                                {viewportWidth >= 1024 && <td>
                                    <div className="receipt-actions">
                                        <img src={deleteIcon} alt="" />
                                        <img src={exportIcon} alt="" />
                                    </div>
                                </td>}
                            </tr>
                            {renderDropdown(partSold.projectID)}
                            </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default PartSoldTable;
