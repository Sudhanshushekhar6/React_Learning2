import {useState} from "react"
import {useFormik} from 'formik'



const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username= 'Required';
   }
 
  
 
   return errors;
 };
 
 
export default function CommentsForm({addnewcomment}){
    // let [formdata,setformdata]=useState({
    //   username:"",
    //   remarks:"",
    //   rating:5
    // });


    const formik = useFormik({
     initialValues: {
       username:"",
      remarks:"",
      rating:5
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleinputchange=(event)=>{
    //     setformdata((currdata)=>{
    //         return{...currdata, [event.target.name]:event.target.value};
    //     });
    // };
    // let handlesubmit=(event)=>{
        
    //     event.preventDefault();
    //     addnewcomment(formdata);
    //     setformdata({
    //   username:"",
    //   remarks:"",
    //   rating:5
    // });
    // };
   return(
<div>
    <h4>Give a Comment</h4>
    <form onSubmit={formik.handleSubmit}> 
        <label htmlFor="username">Username</label>
        <input placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
       <br></br>
              {formik.errors.username ? <div>{formik.errors.username}</div> : null}
       <label htmlfor="remarks">Remarks</label>
        <textarea value={formik.values.remarks} placeholder="add remarks" onChange={ formik.handleChange} id="remarks" name="remarks">Remarks</textarea>
           <br></br>
            <label htmlFor="rating">Rating</label>
    <input placeholder="Rating" min={1} max={5} type="number" value={formik.values.rating} onChange={ formik.handleChange} id="rating" name="rating"/>
       <br></br>
       <button>Add Comment</button>
    </form>
</div>
   )
}