import React from 'react'
import '../CSS/deleted.css';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
function DeletePage() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='deletepage'>
        <div className='delete'>Deleted Succesfully</div>
    </div>
    <Footer/>
    </>
  )
}

export default DeletePage