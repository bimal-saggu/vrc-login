import React, { useState } from "react";
import './/customer.css'
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg'
import MobileModal from "../../menu/MobileModal";


const Customer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen); // Toggle modal visibility
    };

  return (
    <div>
        <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
        </div >
        <MobileModal isOpen={isOpen} onClose={toggleModal}/>
        <div className="status-buttons">
            <div className="status-primary">
                <div className="status">
                    <button>Token</button>
                </div>
                <div className="status">
                    <button>Advance</button>
                </div>
                <div className="status">
                    <button>Block</button>
                </div>
            </div>
            <div className="status-secondary">
                <div className="status">
                    <button>Part-Payment</button>
                </div>
                <div className="status">
                    <button>Sold</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Customer;
