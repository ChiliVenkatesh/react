// import React from 'react'
// /function Searchbar(props){
//    let sno=1
//     return(
//        <>
//        <div className='col-md-8 bg'>
//            <div class="input-group rounded">
//                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
//                <span class="input-group-text border-0" id="search-addon">
//                    <i class="fas fa-search"></i>
//                </span>
//            </div>
//        <br></br>

//        </div>
//        </>
//    )
// }
// export default Searchbar;


import React, { useEffect } from 'react'
import { useState } from 'react';
function Searchbar(props) {
    let sno = 1;
    //let count=1;
    //const changecount=()=>{
    //count++;
    //alert(count)
    let [count, setCount] = useState(1)
    useEffect(()=> console.log("Hello world") ,[count])
    return (
        <>
            <div className='col-md-8 bg'>
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <br></br>
 
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>ROLLNO</th>
                        <th>BRANCH</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((element, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{sno++}</td>
                                        <td>{element.Name}</td>
                                        <td>{element.Roll}</td>
                                        <td>{element.Branch}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='col-md-2 bd-white'>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} className="btn btn-danger">Click</button>
                <h1>Clicked times</h1>
                <hr></hr>
            </div>
        </>
    )
}
export default Searchbar;