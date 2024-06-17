import React from 'react';

const UploadedDocList = ({ documents }) => {
  return (
    <div>
      {documents.map((document) => (
        <div key={document.id}>
          {/* Display the contents of each document here */}
          <p>{document.name}</p>
          <p>{document.date}</p>
          {/* ... and other properties you want to display */}
        </div>
      ))}
    </div>
  );
};

export default UploadedDocList;


