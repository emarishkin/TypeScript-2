import React,{FC} from "react"

export enum CardVariant{
    outlined= 'outlined',
    primary= 'primary'
}

interface CardProps{
    width?:string
    height?:string
    children:React.ReactNode
    variant:CardVariant
}


const Card:FC<CardProps> = ({width,height,children,variant})=>{
    return (
        <div style=
        {{width,
        height,
        border: variant === CardVariant.outlined?'5px solid black':'none',
        backgroundColor:variant===CardVariant.primary?'grey':'none'
        }}>
        {children}
        </div>
    )
}
export default Card