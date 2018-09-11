import React from 'react';
import { connect } from 'react-redux';

var styles={
    'width':'20%',
    'marginLeft':'300px',
    'marginTop':'100px',
    'float':'left',
    'fontSize':'40px'
}

class ComeIn extends React.Component{
    render(){
        return(
            <div>
                <div className="col" style={styles}>
                    <button onClick={this.props.comeInToA}>ComeToA</button>

                    {/* <button onClick={()=>this.props.comeInToA(this.props.b)}>ComeToA</button> */}
                    <div><span>A:</span><span>{this.props.a}</span>
                   
                    </div>
                    </div>
                    <div className="col" style={styles}>
                    <button onClick={this.props.comeInToB}>ComeToB</button>

                    {/* <button onClick={()=>this.props.comeInToB(this.props.a)}>ComeToB</button> */}
                    <div><span>B:</span><span>{this.props.b}</span>
                   
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps=(store)=>{
    return{
        a:store.a,
        b:store.b

        // a:store.R1.a,
        // b:store.R2.b
    }
};
const mapDispachToProps=(dispach)=>{
    return{
        comeInToA:()=>dispach({type:'ClickA'}),
        comeInToB:()=>dispach({type:'ClickB'})
        
        // comeInToA:(b)=>dispach({type:'ClickA',b:b}),
        // comeInToB:(a)=>dispach({type:'ClickB',a:a})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(ComeIn);