import { FC } from "react"
import { IUser } from "./types"

interface UserListProops{
    users:IUser[]
}



const UserList:FC<UserListProops> = ({users}) => {
   
    return(
        <div>
      {users.map(user=>
        <div key={user.id}>
           {user.id}.{user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
      )}
        </div>
    )
}
export default UserList