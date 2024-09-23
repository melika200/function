import { useState } from "react"
import Textarea from "./Textarea"

export default function TextList(){
    const[enterbody,setEnterbody]=useState('')
    const bodychangehandler=(event)=>{
    setEnterbody(event.target.value)
    }
    return(
        <>
        <div style={{backgroundColor:'pink',width:'150px',height:'150px'}}>
        <p>{enterbody}</p>
        <Textarea areachange={bodychangehandler}></Textarea>
        </div>
        </>
    )
}