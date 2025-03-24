
import { useState } from 'react';
import CourseList from './src/CourseList';
function Course(props)
{
function Buyprice(dicount ,e)
{
    // alert(`${props.name} buyed with ${dicount}% discount`);
    console.log(e.type);
    console.log(e.target);
    console.log(e);
    setPurchased(true);
}


const[purchased,setPurchased ]=useState(false);
    return(
        props.name &&
        <div className="card">
           <img src={props.img} alt="" />
           <h1>{props.name}</h1>
           <p>{props.price}</p>
           <span>{props.ratings}</span><br /> <br />
           <button onClick={(event)=>Buyprice(20,event)}>BUY</button>
           <button onClick={()=>props.delete(props.id)}>DELETE</button>
           <p>{purchased ?"Already purchased" :"Get it Now"}</p>
        </div>
    )

}

export default Course;