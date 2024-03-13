import React, { useEffect, useState } from "react";
import './/leadGen.css'
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg';
import leadExport from '../../../assets/leadExport.svg';
import MobileModal from "../../menu/MobileModal";
import NavBar from '../../NavBar';
import WebMenu from '../../menu/WebMenu';
import leadGenData from '../../../data/leaGenData'

const LeadGeneration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leadGeneration, setLeadGeneration] = useState([]);

  useEffect(() => {
    setLeadGeneration(leadGenData);
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };


  return (
    <div>
      <style>
        {`
          @media screen and (min-width: 1024px) {
            body {
              background: #f0f1f3;
            }
          }
        `}
      </style>
      <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
      </div >
      <div className="export-sec">
        <div className="export">
          <img src={leadExport} alt="" />
          <p>Export</p>
        </div>
      </div>
      <div className="lead-table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {leadGeneration.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.emailId}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NavBar />
      <WebMenu />
      <MobileModal isOpen={isOpen} onClose={toggleModal}/>
    </div>
  );
};

export default LeadGeneration;
