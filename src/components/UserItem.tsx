import { FC } from "react";
import { IUser } from "./types";


export interface UserItemProops{
    user:IUser
}


const UserItem:FC<UserItemProops> = ({user}) => {
    return(
        <div>
           {user.id}.{user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}
export default UserItem