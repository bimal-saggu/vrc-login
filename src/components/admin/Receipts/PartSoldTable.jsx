import React, { useEffect, useState } from "react";
import '../Receipts/pendingReceipts.css'
import partSoldDataDummy from "../../../data/partSoldData";
import deleteIcon from "../../../assets/delete.svg";
import exportIcon from "../../../assets/export.svg";

const PartSoldTable = ({ status }) => {
    const [partSoldData, setPartSoldData] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
                                {viewportWidth >= 1024 && <th>Client Name</th>}
                                {viewportWidth >= 1024 && <th>Status</th>}
                                {viewportWidth >= 1024 && <th>Actions</th>}
                                {viewportWidth < 1024 && <th>Project Type</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {partSoldData.map(partSold => (
                            <tr key={partSold.projectID}>
                                <td>{partSold.projectID}</td>
                                <td>{partSold.projectName}</td>
                                {viewportWidth >= 1024 && <td>{partSold.clientName}</td>}
                                {viewportWidth >= 1024 && <td>{partSold.status}</td>}
                                {viewportWidth >= 1024 && <td>
                                    <div className="receipt-actions">
                                        <img src={deleteIcon} alt="" />
                                        <img src={exportIcon} alt="" />
                                    </div>
                                </td>}
                                {viewportWidth < 1024 && <td>{partSold.projectType}</td>}
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default PartSoldTable;
