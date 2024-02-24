import React, { useState } from 'react'
import '../admin/style.css'

const AddProject = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => { 
      setIsOpen(false);
      onClose();
    };

  return (
        <div className='add_Proj'>
            <div className='add_Sec'>
                <div className='add_Head'>
                    <h3>
                        New Project
                    </h3>
                </div>
                <div className='add_Form'>
                    <form action="">
                    <div className='add_input-field'>
                        <label htmlFor="type" className='add-label'>Project Type</label>
                        <input id='type' type="text"  />
                    </div>
                    <div className='add_input-field'>
                        <label htmlFor="name" className='add-label'>Project Name</label>
                        <input id='name' type="text" placeholder='Enter project name' />
                    </div>
                    <div className='add_input-field'>
                        <label htmlFor="tower-number" className='add-label'>Tower Number</label>
                        <input id='tower-number' type="text" placeholder='Enter tower number' />
                    </div>
                    <div className='add_input-field'>
                        <label htmlFor="flat-number" className='add-label'>Project Name</label>
                        <input id='flat-number' type="text" placeholder='Enter flat number' />
                    </div>
                    <div className='add_Btns'>
                        <div className='disc-btn'>
                            <button onClick={handleClose}>Discard</button>
                        </div>
                        <div className='add-btn'>
                            <button>Add Project</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddProject