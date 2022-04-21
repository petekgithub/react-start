import { useState } from "react"


//useState'i component içeriisnde her yerde kullanabiliriz

function App() {
  const [name, setName] = useState('Petek')
  const [age, setAge] = useState(34);

  return (
    <div className="App">
      <h1>Hey: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={() => setName('ali')}> Click name </button>
      <button onClick={() => setAge(56)}> Change Age </button>

    </div>
  );
}

export default App;
