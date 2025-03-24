import Course from "../Course";
import html from './assets/html.webp';
import css from './assets/css.webp';
import js from './assets/js.jpg';
import { useState } from "react";

function CourseList(){
    const[courses,setCourses] = useState([
        {   
            id:1,
            name:"HTML",
            image:html,
            price:66,
            ratings:5,

        },
        {   id:2,
            name:"JS",
            image:js,
            price:99,
            ratings:4.5,

        },
        {   id:3,
            name:"CSS",
            image:css,
            price:50,
            ratings:4.5,
           

        },

        {

        }
     ])

     function handlingDelete(id)
     {
        const newCourses=courses.filter((x)=>id!=x.id);
        setCourses(newCourses);
     }
//sorting by the descending order
courses.sort((x,y)=>y.price-x.price);

// create the another variable and filter by the price greater than or equal to 50
let vfm=courses.filter((x)=>x.price>=50 );
console.log(courses);

//map creates the new components for the elements or objects
let CourseLists= vfm.map((course)=>
                <Course name={course.name}
                        key={course.id}//key is the primary key for all the cards
                        img={course.image} 
                        price={course.price} 
                        ratings={course.ratings}  delete={handlingDelete} id={course.id}
                />)



    return( 
        <>
       {CourseLists}
            </>

    );
}
export default CourseList;