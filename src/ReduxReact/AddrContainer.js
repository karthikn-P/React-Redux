import React from 'react';
import {AddrPresent} from './AddrPresent'
import { connect } from 'react-redux'
import {addAddr,delAddr} from './reduxAction';
class AddrContainer extends React.Component{
    constructor(props){
    super(props);     
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.removeAddr=this.removeAddr.bind(this);
    this.state = {
        name:"",
        id:"",
        city:""
    } 
    }
    handleSubmit(e){
        e.preventDefault();

        this.props.addAddr(this.state);

        e.target.reset()
    }
    handleChange(e){
        if(e.target.name === 'name'){
        this.setState(
            {               
                name:e.target.value              
            })
        }
        if(e.target.name === 'id'){
            this.setState(
                {               
                    id:e.target.value              
                })
        }
        if(e.target.name === 'city'){
            this.setState(
                {               
                    city:e.target.value              
                })
        }
    }
    removeAddr(id){
        this.props.delAddr(id);
    }
    render(){       
        let addtitr = this.props.Addr.map((val,ind) => (
        <AddrPresent removeAddr={()=>this.removeAddr(val.id)} 
              addr={val} 
              key={ind} />));
        return(<div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" id="name" onChange={this.handleChange} />
                        <input type="text" name="id" id="id" onChange={this.handleChange} />
                        <input type="text" name="city" id="city" onChange={this.handleChange} />
                        <button>Add_Addr</button>
                    </form>
                    <ul>
                         {addtitr}
                    </ul>
             </div>);
    }
}


function mapStateToProps(reduxState){

    return{
        Addr:reduxState.Addr
    };
}


export default connect(mapStateToProps,{addAddr,delAddr}) (AddrContainer);