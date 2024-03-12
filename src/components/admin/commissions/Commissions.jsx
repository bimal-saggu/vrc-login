import React, { useState } from "react";
import './/commissions.css'
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg'
import MobileModal from "../../menu/MobileModal";
import NavBar from '../../NavBar';
import WebMenu from '../../menu/WebMenu';
import ValidationTable from "./ValidationTable";
import SoldTable from "./SoldTable";
import CpCommissionTable from "./CpCommissionTable";

const Commissions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState('Validation');

    const toggleModal = () => {
        setIsOpen(!isOpen); // Toggle modal visibility
    };

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType)
    }

  return (
    <div>
        <style>
            {`
                .com-type-btn button {
                    background-color: ${selectedButton ? '#9FC2F3' : '#1366d9'};
                }
            `}
        </style>
        <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
        </div >
        <div className="com-type">
            <div className="com-type-btn">
                <button style={{ backgroundColor: selectedButton === 'Validation' ? '#1366d9' : '' }} onClick={() => handleButtonClick('Validation')}>Validation</button>
            </div>
            <div className="com-type-btn">
                <button style={{ backgroundColor: selectedButton === 'Sold' ? '#1366d9' : '' }} onClick={() => handleButtonClick('Sold')}>Sold</button>
            </div>
            <div className="com-type-btn">
                <button style={{ backgroundColor: selectedButton === 'Cp Commission' ? '#1366d9' : '' }} onClick={() => handleButtonClick('Cp Commission')}>Cp Commission</button>
            </div>
        </div>
        {selectedButton === 'Validation' && <ValidationTable />}
        {selectedButton === 'Sold' && <SoldTable />}
        {selectedButton === 'Cp Commission' && <CpCommissionTable />}
        <NavBar />
        <WebMenu />
        <MobileModal isOpen={isOpen} onClose={toggleModal}/>
    </div>
  );
};

export default Commissions;
