import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellCake, addCake } from '../reduxdemo/rtk_demo/app/features/cake/cakeSlice';
import { sellIceCream,addIceCream } from './rtk_demo/app/features/icecream/icecreamSlice';

function CakeShop() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const noOfIcecreams=useSelector((state)=>state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
 

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <h2>Number of IceCreams{noOfIcecreams}</h2>
      <button onClick={() => dispatch(sellCake(1))}>Sell a cake</button>
      <button onClick={() => dispatch(addCake(1))}>Add a cake</button><br/>
      <button onClick={()=>dispatch(sellIceCream(1))}>Sell a IceCream</button>
      <button onClick={()=>dispatch(addIceCream(1))}>Add a IceCream</button>
    </div>
  );
}

export default CakeShop;
