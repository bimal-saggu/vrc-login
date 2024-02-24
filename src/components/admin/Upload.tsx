import React, { useState } from "react";

const Upload = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // onClose();
  };
  return (
    <div className="add_Proj">
      <div className="add_Sec">
        <div className="add_Head">
          <h3>Select the file</h3>
        </div>
        <div className="add_Form">
          <form action="">
            <div className="add_input-field">
              <div className="file-label">
                <label htmlFor="file">Choose a CSV File</label>
              </div>
              <div className="file-input-wrapper">
                <input id="file" type="file" />
                <button className="browse-button">Browse Files</button>
              </div>
            </div>
            <div className="add_input-field">
              <label htmlFor="flat-number" className="add-label">
                Project Type
              </label>
              <input id="flat-number" type="text" />
            </div>
            <div className="add_Btns">
              <div className="can-btn">
                <button onClick={handleClose}>Cancel</button>
              </div>
              <div className="add-btn">
                <button>Add Project</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
