import React, { useEffect, useState } from "react";
import partSoldDataDummy from "../../../data/partSoldData";

const DeletedPartpaymentProjectsTable = () => {
    const [deltedPartpaymentProjects, setDeletedpartpaymentProjects] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setDeletedpartpaymentProjects(partSoldDataDummy);
    }, [])

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize); // Listen for viewport width changes
    
        return () => {
          window.removeEventListener("resize", handleResize); // Cleanup
        };
      }, []);

  return (
    <div className="receipt-table">
      <div className="receipt-table-sec">
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
              {deltedPartpaymentProjects.map((data) => (
                <React.Fragment key={data.projectID}>
                  <tr
                    key={data.projectID}
                  >
                    <td>{data.projectID}</td>
                    <td>{data.projectName}</td>
                    <td>{data.clientName}</td>
                    {viewportWidth >= 1024 && <td>{data.status}</td>}
                    {viewportWidth >= 1024 && (
                      <td>
                        <div className="receipt-actions">
                          <img src={deleteIcon} alt="" />
                          <img src={exportIcon} alt="" />
                        </div>
                      </td>
                    )}
                  </tr>
                  {/* {renderDropdown(data.projectID)} */}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeletedPartpaymentProjectsTable;
