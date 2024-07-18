
import './App.css'
import Child from './components/Child'

function App() {
  console.log('parent')

  const handleSubmit = (input)=>{
      console.log('handleSubmit Clicked')
      console.log(`inputValue is ${input}`)
      alert(  `input value in parent is ${input}`)
  }

  return (
    <>
    
    <Child handleSubmit = {handleSubmit}/>
    
    </>
  )
}

export default App
