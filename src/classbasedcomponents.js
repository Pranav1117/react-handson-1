import { Component} from 'react';
import'./style.css';

export default class Classcompo extends Component{
    render(){
        return(
            <>
            <div className='bodyofclass'>
            <h2>This is created using Class Component</h2>
            <div>This is done using external CSS</div>
            <div style={{color:'blue'}}>This is done using inline CSS</div>
            </div>
            </>
        )
    }
}

