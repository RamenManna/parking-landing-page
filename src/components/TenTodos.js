import React from 'react';
import {useDispatch} from 'react-redux';
import {extendTodo}from '../reducers/actions';
import 'bootstrap/dist/css/bootstrap.css';

function TenTodos() {
	let dispatch=useDispatch();
  return (
<div>
<br/>
<br/>
<hr/>
<div className="text-center">
{/* <h4>Add 10 Spaces in the parking Area at a time</h4> */}
				<button 
					onClick={()=>
					{
					
						
						dispatch(extendTodo(
						));
					}}
				className="btn btn-primary  mx-2"><strong>CLICK HERE FOR ADD NEW SPACES BELOW</strong></button>
				
				<hr/></div></div>
  );
}

export default TenTodos;
