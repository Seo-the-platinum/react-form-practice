import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import React, { useEffect, useState } from 'react'
import { api } from './apis/dogs'
const App =()=> {
  const [ dogs, setDogs ] = useState('')
    useEffect(()=> {
        const fetchDog = async ()=> {
            try {
                const response = await api.get('/breeds/image/random')
                setDogs(response.data)
            } 
            catch(err) {
                console.log(err.response)
                console.log(err.response.status)
            }
        }

        fetchDog()
    }, [])
  return (
    <div className="App" style={{backgroundImage: `url(${dogs.message})`}}>
      <Form/>
    </div>
  );
}

export default App;
