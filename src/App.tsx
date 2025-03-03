import { useEffect, useState } from "react"
import Card, { CardVariant } from "./components/Card"
import { IUser } from "./components/types"
import UserList from "./components/UserList"
import axios from "axios"

function App() {

const [users,setUsers] = useState<IUser[]>([])

useEffect(()=>{
  fetchUsers()
},[])

async function fetchUsers(){
  try{
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  } catch(e){
    alert(e)
  }
}



// const users:IUser[] = [
//   {id:1,name:'Егор',email:'egor@gmail.com',address:{city:'Samara',street:'Ташкентская',zipcode:'string'}},
//   {id:2,name:'Игорь',email:'igor@gmail.com',address:{city:'Samara',street:'lesnaya',zipcode:'string'}}
// ]


  return (
    <>
      <h1>React TS</h1>
      <Card variant={CardVariant.primary} width="200px" height="100px">
        <button>
          sss
        </button>
      </Card>
      <UserList users={users}/>
    </>
  )
}

export default App
