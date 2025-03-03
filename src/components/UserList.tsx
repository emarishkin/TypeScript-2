import { FC } from "react"
import { IUser } from "./types"
import UserItem from "./UserItem"

interface UserListProops{
    users:IUser[]
}



const UserList:FC<UserListProops> = ({users}) => {
   
    return(
        <div>
      {users.map(user=>
        <UserItem user={user} key={user.id}/>
      )}
        </div>
    )
}
export default UserList