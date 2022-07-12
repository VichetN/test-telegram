import { action } from "easy-peasy";

const todos = {
    items:[{
        id:1,
        title:"Learn EasyPeasy",
        completed:false
    },
    {
        id:2,
        title:"Learn React",
        completed:false
    },
    {
        id:3,
        title:"Learn React Native",
        completed:false
    }],
    toggleTodo: action((state,id)=>{
        console.log(state.todos)
        state.items.map(todo =>{
            if(todo?.id===id){
                todo.completed = !todo.completed
            }
            return todo;
        })
    })
}

export default todos;