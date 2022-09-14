import React, { useContext } from 'react'
import { AppContext ,useGlobalContext} from './context'
import Movies from './Movies';
import Search from './Search';
 
const Home = () => {
    // const name=useContext(AppContext ) 
   // const name=useGlobalContext( )
  return (
    <>
      <Search/>
      <Movies/>
    </>
  )
}

export default Home
