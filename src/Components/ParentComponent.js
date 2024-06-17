import React, { createRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const childRef = createRef();

  const handleClickChild = () => {
    childRef.current.clickChild();
    childRef.current.focus();
  };

  

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClickChild}>Click Child</button>
     
    </div>
  );
}

export default ParentComponent;
