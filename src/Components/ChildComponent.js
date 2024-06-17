import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const handleClick = () => {
    alert("You clicked");
  };
  useImperativeHandle(ref, () => ({
    clickChild: handleClick
  }));

  return (
    <div  onClick={handleClick}>
      Child Component
    </div>
  );
});

export default ChildComponent;
