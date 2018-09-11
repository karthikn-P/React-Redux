import React from 'react';
import {Todo} from './Todo'
import { connect   } from 'react-redux'
import {addtodo,deltodo} from './actionCreater';

// class Todooos extends React.Component{
//     constructor(props){
//         super(props);     
//     this.handleSubmit=this.handleSubmit.bind(this);
//     this.handleChange=this.handleChange.bind(this);
//     this.removeTodo=this.removeTodo.bind(this);
//     this.state = {
//         task:""
//     } 
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         this.props.dispatch(
//             {
//                 type:"ADD_TODO",
//                 task:this.state.task
//             } );
//         e.target.reset()
//     }
//     handleChange(e){
//         this.setState(
//             {
//                 [e.target.name]:e.target.value
//             })
//     }
//     removeTodo(id){
//         this.props.dispatch(
//             {
//                 type:"DEL_TODO",
//                 id:id
//             })
//     }
//     render(){ 
//         console.log(this.props.todo)
//         let todoIter = this.props.todo.map((val,ind) => (
//         <Todo removeTodo={this.removeTodo.bind(this,val.id)} 
//               task={val.task} 
//               key={ind} />));
//         return(<div>
//                     <form onSubmit={this.handleSubmit}>
//                         <input type="text" name="task" id="task" onChange={this.handleChange} />
//                         <button>Add_Todo</button>
//                     </form>
//                     <ul>
//                         {todoIter}
//                     </ul>
//              </div>);
//     }
// }
// function mapStateToProps(reduxState){
//     return{
//         todo:reduxState.todo
//     };
// }
// export default connect(mapStateToProps) (Todooos);



class Todooos extends React.Component{
    constructor(props){
        super(props);     
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
    this.state = {
        task:""
    } 
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addtodo(this.state.task);
        e.target.reset()
    }
    handleChange(e){
        this.setState(
            {
                [e.target.name]:e.target.value
            })
    }
    removeTodo(id){
        this.props.deltodo(id);
    }
    render(){ 
        let todoIter = this.props.todo.map((val,ind) => (
        <Todo removeTodo={this.removeTodo.bind(this,val.id)} 
              task={val.task} 
              key={ind} />));
        return(<div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="task" id="task" onChange={this.handleChange} />
                        <button>Add_Todo</button>
                    </form>
                    <ul>
                        {todoIter}
                    </ul>
             </div>);
    }
}
function mapStateToProps(reduxState){
    return{
        todo:reduxState.todo
    };
}
export default connect(mapStateToProps,{addtodo,deltodo}) (Todooos);
