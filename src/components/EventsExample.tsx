import { FC, useState } from "react";

const EventsExample:FC = () => {

const [value,setValue] = useState<string>('')
const [drag,setDrag] = useState<boolean>(false)

const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value)
}

const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(value)
}

const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
console.log('drag')
}

const dragWithParantHandler = (e:React.DragEvent<HTMLDivElement>) => {
e.preventDefault()
setDrag(true)
}

const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
e.preventDefault()
setDrag(false)
}

const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
e.preventDefault()
setDrag(false)
console.log('drop')
}


    return(
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>click</button>
            <div onDrag={dragHandler} draggable style={{width:200,height:200,backgroundColor:'red'}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithParantHandler} style={{width:200,height:200,backgroundColor:drag?'green':'red',marginTop:50}}></div>
        </div>
    )
}

export default EventsExample