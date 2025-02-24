  import './App.css'

 const Persone = (props) => { // this is what component and a props looks like
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastname}</h2>
    <h3 >Age: {props.age}</h3>
  </>

  )};
  const App = () => {

    return (
      <>
      <div className='App'>
        <Persone name ={'john'} lastname = {'doe'} age= {30} /> <br/>
        <Persone name ={'Abhishek'} lastname = {'kumar'} age= {25}  /><br />
        <Persone name ={'Vinjesh'} lastname = {'kumar'} age= {21}  />
      </div>

      </>
    )
  }

  export default App
