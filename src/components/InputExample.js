// import { useState } from "react"
 
// const InputExample = () => {
//   const [name, setName] = useState('')
//   const [surname, setSurname] = useState('')
   
//   const onChange = (event) => setName(event.target.value)  
//   const onChangeSurname = (event) => setSurname(event.target.value)

//   return (
//     <div>
//         Name <br/>
//         <input value={name} onChange={onChange}/>
//         <br/>
//         Surname <br/>
//         <input value={surname} onChange={onChangeSurname} />
//     </div>
//   )
// }

// export default InputExample

//------------------------------------------------------------------
// import { useState } from "react"
 
// function InputExample(){
//   const [form, setForm] = useState({name:"", surname:""})
   
//   const onChangeInput = (e) => {
//       console.log(e.target.name)

//       setForm({...form, [e.target.name]: e.target.value})
//   }  

//   return (
//     <div>
//         Name <br/>
//         <input name="name" value={form.name} onChange={onChangeInput}/>
//         <br/>
//         <br/>
//         Surname <br/>
//         <input name="surname" value={form.surname} onChange={onChangeInput} />
//         <br/>
//         <br/>
//         {form.name} {form.surname}
//     </div>
//   )
// }

// export default InputExample


import { useState } from 'react'

function InputExample(){
    const [form, setForm] = useState({name:'', surname:''})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

  return (
    <div>
        Name
        <input name="name" value={form.name} onChange={onChangeInput}/>
        Surname
        <input name="surname" value={form.surname} onChange={onChangeInput}/>
        <br/>
        {form.name} {form.surname} 
    </div>
  )
}

export default InputExample