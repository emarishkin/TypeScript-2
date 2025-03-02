import Card, { CardVariant } from "./components/Card"

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Card variant={CardVariant.primary} width="2000px" height="1000px">
        <button>
          sss
        </button>
      </Card>
    </>
  )
}

export default App
