import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { addTodo, deleteTodo , removeTodo } from '../actions/index';

 const Todo = () => {
     const [inputData , setInputData] = useState('');
     const list = useSelector((state)=>state.todoReducer.list);
     console.log(list);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <div className="heading">
                         Add Your List Here 
                    </div>
                           
                       
                    <div className="addItems input-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Add Item...." 
                         value={inputData}
                         onChange={(event)=> setInputData(event.target.value) }
                        />
                        <button 
                        className="btn btn-outline-info" 
                        type="button" 
                         onClick={()=> dispatch(addTodo(inputData),setInputData('') ) }
                        >Add</button>
                       
                        
                    </div>
                     <div className="showItems">
                         {
                             list.map((elm)=>{
                                 return(
                                <div className="Items input-group mt-3" key="elm.id">
                        <input type="text" 
                        className="form-control" readOnly
                           value={elm.data}
                        />
                        <button 
                        className="btn btn-outline-danger " 
                        type="button" 
                         onClick={()=> dispatch(deleteTodo(elm.id) )}
                        >Delete</button>
                       
                        
                    </div>
                                 )
                             })
                         }
                     </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Todo;
