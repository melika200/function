export default function Textarea(props){
    return(
        <>
        <div>
            <label>writting what you want</label>
            <textarea onChange={props.areachange} >

            </textarea>
        </div>
        </>
    )
}