import { useState } from "react"


//useState'i component içeriisnde her yerde kullanabiliriz

function App() {
  const [name, setName] = useState('Petek')
  const [age, setAge] = useState(34);
  const [friends, setFriends] = useState(["ahmet","murat","pelin"])
  const [address, setAddress] = useState({
    title: "Istanbul",
    zip:34555
  })



  return (
    <div className="App">
      <h1>Hey: {name}</h1>
      <h2>Age: {age}</h2>
      <button onClick={() => setName('ali')}> Change name </button>
      <button onClick={() => setAge(56)}> Change age </button>

      <hr/>
      <br />
      <h3>Friends</h3>
      {
        friends.map((friend, index) => (
            // for listing we have to add key 
          <div key={index}>{friend}</div>
        ))}

        {/* statelerde atama işlemi yaparken, ilk bakmak gereken şey tanımlanan state'ine uygun atama yapılır. */}
        {/* if I write jsut a name inside the array, it will change the whole array and set the just "aysem" */}
      {/* <button onClick={() => setFriends(["ayşem"])}> Add new friend: </button> 
       for that reason I'm writing  */}
       {/* add the end of the array  */}
      {/* <button onClick={() => setFriends([...friends, "ayşem"])}> Add new friend </button>  */}
      {/* add the beginning of the array */}
      <button onClick={() => setFriends(["ayşem",...friends])}> Add new friend </button> 


      <hr/>
      <br />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <hr/>
      <br />

      <button onClick={() => setAddress ({...App, title: "Ankara"})}>Change Address</button>


    </div>
  );
}

export default App;
