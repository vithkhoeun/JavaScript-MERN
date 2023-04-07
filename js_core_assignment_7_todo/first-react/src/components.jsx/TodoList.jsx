import React, {useState} from 'react'

const TodoList = ({item, checkHandler}) => {

    const itemCheckHandler = () => {
      checkHandler (item.id);
    };

    const [lists, setLists] = useState({
        item: "",
        ticketsSold: "",
    })

    const [todoList, setTodoList] = useState([])

    const listValidation = (e) => {
        let isValid = true
        if (lists.item.length < 3) {
            isValid = false
            console.log("There is an error")
            return isValid
        }else{
            console.log("No Error")
            return isValid
        }
    }

    const changeHandler = (e) =>{
        setLists({...lists, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let isValid = listValidation()
        if(isValid){
            console.log('ok')
            setTodoList([...todoList, lists])
            setLists({
                item: "",
            })
        }
    }
  return (
    <div>
        <div className="containter">
            <div className="row">
                <form action="" className="form col-4 offset-4" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Todo List: </label>
                        <input type="text" name="item" className="form-control" onChange={changeHandler} value={lists.item}/>
                        { // Ternary operator                   // true                                             // false
                            lists.item && lists.item.length < 3 ? <p className="text-danger">Item must be at least 3 characters long</p>: ""
                        }
                    </div>
                    <button className="btn btn-primary mt-3">Add Item</button>
                </form>
                <div className="col-4 offset-4">
                    {
                        todoList.map((lists, i) => (
                                <div className="card" key={i}>
                                    <div className="card-body">
                                        <h3 className="card-title">Todo</h3>
                                        <p className="card-text">Item: {lists.item}</p>
                                        <button onClick={itemCheckHandler}>Delete</button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            </div>
    </div>
  )
}

export default TodoList