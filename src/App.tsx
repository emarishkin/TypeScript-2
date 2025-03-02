import Card, { CardVariant } from "./components/Card"
import { IUser } from "./components/types"
import UserList from "./components/UserList"

function App() {

const users:IUser[] = [
  {id:1,name:'Егор',email:'egor@gmail.com',address:{city:'Samara',street:'Ташкентская',zipcode:'string'}},
  {id:2,name:'Игорь',email:'igor@gmail.com',address:{city:'Samara',street:'lesnaya',zipcode:'string'}}
]


  return (
    <>
      <h1>Vite + React</h1>
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
