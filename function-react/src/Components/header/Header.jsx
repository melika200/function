const names=['melika','mohammad']

export default function Header(){
    const chosenName=Math.random() > 0.5 ? names[0] : names[1]
    return(
        <>
        <p>{chosenName}</p>
        </>
    )
}