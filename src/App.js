// import './App.css';
// import './css/bootstrap.css'
// import flip from './flip/Components';
// import Header from './Components/Header';
// import img2 from './Images/Youtube.png'
// import Searchbar from './Components/Searchbar';
// import Sidebar from './Components/Sidebar';
// import Home from './Components/Home';
// import Shorts from './Components/Shorts';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { createContext } from 'react';
// import
// import const Store = createContext();
// import
    // function App() {
    //     let studentdata = [
    //         {
    //             Name: 'sanny',
    //             Roll: '21',
    //             Branch: 'EEE',
    //         },
    //         {
    //             Name: 'vinay',
    //             Roll: '22',
    //             Branch: 'ECE',
    //         }
    //     ]
//         const [data, setDate] = useState(studentdata)
//         return (
//             <>
//                 <BrowserRouter>
//                     <StorageEvent.Provider value={[data, setDate]}>
//                         <div className='container-fluid bg-info'>
//                             <div className='row'>
//                                 <Sidebar />
//                                 <div className='col-md-10'>
//                                     <Searchbar data={studentdata} />
//                                     <Routes>
//                                         <Route path='/Home' element={<Home />} />
//                                         <Route path='/shorts' element={<Shorts />} />
//                                     </Routes>
//                                 </div>
//                             </div>
//                         </div>
//                     </StorageEvent.Provider>
//                 </BrowserRouter>
//             </>
//         );
//     }
// export default App;


// import React from "react";
// import "./css/Bootstrap.css"
// import Header from "./Components/Header";
// import './App.css'
// function App(){
//   return(
//     <>
//     <div className="cla-md-10 bg-white"/>
//     <div className="container-fluid">
//         <Header/>
//       </div>

//     </>
//   )
// }
// export default App;

import './App.css';
import './css/Bootstrap.css'
import Header from './Components/Header';
import Catog from './Components/Catog';
import React from 'react';
import Banner from './Components/Baneer';
import Form from './Components/Form';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <Header/>
      <Catog/>
     <Banner/>
     {/*   */}
      <Form/>
    </div>
    </div>
    </>
  );
}

export default App;