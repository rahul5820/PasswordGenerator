import { useState ,useCallback} from 'react'
// import "./App.css"



function App() {
  const [length, setlength] = useState(6)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [randompaas,setrandompaas]=useState("")
  const passgenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed)str+"!@#$ %&*-_=+|:/?.>"
    for(let i=0;i<=array.length;i++){
     let char=Math.floor(Math.random*str.length +1)
      pass=str.charAt(char)
      setrandompaas(pass)
    }
  
  },[length,numAllowed,charAllowed,setrandompaas])
 

  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 py-3 px-4 text-orange-500 bg-gray-800">
   <h1 className='text-center mx-3'>PASSWORD GENERATOR</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text"value={randompaas} className='outline- w-full py-1 px-3' placeholder='Password'/>
    <button className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'>copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" name=''id="" min={0}  max={100} value={length} className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
      />
      <label>length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
   <input type='checkbox' name='' id="" defaultChecked={setnumAllowed} onChange={()=>{
    setnumAllowed ((pre) => !pre);} 
    } />
<label htmlFor="numberInput">Number</label>
  </div>
 </div>
 </div>
    </>
  )
}

export default App
 