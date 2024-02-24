import React, { useEffect, useState } from 'react'
import './table.css'
import dummyData from '../data/dummyData'
import AddProject from './admin/AddProject';
import Upload from './admin/Upload'

const Table = () => {

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  
  const maxRowsPerPage = 10;

  useEffect(() => {
    setProjects(dummyData);
  }, []);

  const handleAddProject = () => {
    setShowAddProjectForm(true);
  };

  const handleUpload = () => {
    setShowUploadForm(true);
  };

  // const handleButtonClick = (type) => {
  //   setSelectedButton(type);
  // };

//   const renderColumns = () => {
//     switch (selectedButton) {
//         case 'Apartments':
//             return (
//                 <>
//                     <th>Tower Number</th>
//                     <th>Flat Number</th>
//                 </>
//             );
//         case 'Villas':
//             return <th>Villa Number</th>;
//         case 'Plots':
//             return <th>Plot Number</th>;
//         case 'Farm lands':
//             return (
//                 <>
//                     <th>Plot Number</th>
//                     <th>Sq yards</th>
//                 </>
//             );
//         default:
//             return null;
//     }
// };

  const getStatusColor = (status) => {
    switch (status) {
        case 'Available':
            return '#10A760';
        case 'Sold':
            return '#FF0000';
        case 'Token':
            return '#E19133';
        case 'Advance':
            return '#3D4DD6';
        case 'Block':
            return '#9C9C9C';
        case 'Part-Payment':
            return '#515151';
        default:
            return '';
    }
};

  const startIndex = (currentPage - 1) * maxRowsPerPage;
  const endIndex = startIndex + maxRowsPerPage;
  const displayedProjects = projects.slice(startIndex, endIndex);

   const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="table">
      <div className='table_Sec'>
      <div className="table_Head">
        <h1>Projects</h1>
        <div className="actions">
          <button onClick={handleAddProject}>Add Project</button>
          <div className='actions file-actions'>
            <button onClick={handleUpload}>Upload</button>
            <button>Download</button>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Project Name</th>
              <th>Tower Number</th>
              <th>Flat Number</th>
              <th>Project ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map(project => (
              <tr key={project.projectID}>
              <td>{project.sno}</td>
              <td>{project.projectName}</td>
              <td>{project.towerNumber}</td>
              <td>{project.flatNumber}</td>
              <td>{project.projectID}</td>
              <td className='status' style={{ color: getStatusColor(project.status) }}>{project.status}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(projects.length / maxRowsPerPage)}</span>
        <button onClick={handleNextPage} disabled={endIndex >= projects.length}>Next</button>
      </div>
      </div>
      {showAddProjectForm && <AddProject />}
      {showUploadForm && <Upload />}
    </div>
  )
}

export default Table