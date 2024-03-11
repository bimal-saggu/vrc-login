import React, { useEffect, useState } from "react";
import '../Receipts/pendingReceipts.css';
import receiptsDataDummy from '../../../data/receiptsDataDummy'
import PendingReceiptCard from "./PendingReceiptCard";

const PendingReceiptsTable = ({onDeletedReceiptsClick}) => {
    const [receiptsData, setReceiptsData] = useState([]);
    const [selectedProjectID, setSelectedProjectID] = useState(null);

    useEffect(() => {
        setReceiptsData(receiptsDataDummy)
    }, [])

    const handleRowClick = (projectID) => {
        setSelectedProjectID(projectID); // Update the selected projectID when a row is clicked
    }

    const handleCloseReceiptCard = () => {
        setSelectedProjectID(false)
    }

  return (
    <div className="receipt-table">
            <div className="receipt-table-sec">
                <div className="receipt-table-head">
                    <h3>Receipts</h3>
                        <div className="deleted-receipts">
                            <button onClick={onDeletedReceiptsClick}>Deleted Receipts</button>
                        </div>
                </div>
                <div className="receipts-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Project ID</th>
                                <th>Project Name</th>
                                <th>Project Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptsData.map(receipt => (
                            <tr key={receipt.projectID} onClick={() => handleRowClick(receipt.projectID)}>
                                <td>{receipt.projectID}</td>
                                <td>{receipt.projectName}</td>
                                <td>{receipt.projectType}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedProjectID && <PendingReceiptCard projectID={selectedProjectID} receiptsData={receiptsData} onClose={handleCloseReceiptCard} />}
        </div>
  );
};

export default PendingReceiptsTable;
