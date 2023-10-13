// import React from "react";
// import logo from '../Images/flip.png'
// import logo1 from '../images/top.jpg'
// function Header() {
//     return (
//         <>
//             <div className="container-fluid bg">

//                 <div className="col-md-2 bg">
                    
                    
//             </div>
//             <div className="container-fluid bg">
//                 <div className="col-md-8" />
                
//                 <div class="input-group rounded">
//                 <img src={logo} width={95} />
//                     <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
//                     <span class="input-group-text border-0" id="search-addon">
//                         <i class="fas fa-search"></i>
//                     </span>
                
//                     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                         <a class="navbar-brand" href="#"><i class="fa-solid fa-shop"></i>  Become a seller   </a>
//                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-user">  </i>  Sign In   </a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link active" href="#" ><i class="fa-solid fa-cart-shopping"></i>Cart</a>
//                             </li>
//                         </ul>
//                     </nav >
//                 </div>
//                 </div>
//             </div>
//             <div className="container-fluid">
//                 <div className="col-md-10 bg-info"/>
//                 <div class="input-group rounded">
//                 <img src={logo1} width={95} />

//             </div>
//             </div>
//         </>
//     )
// }
// export default Header;




import React from 'react'

export default function Header() {
  return (
    <>
    
    <div className='col md-2 logo'>
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg'/><br></br>
        <span className='span'><i>Explore</i> </span><span><i>Plus&nbsp;&nbsp;</i><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg'/></span>

    </div>
    <div className='col md-6  searchbar'>
        <input className='search'type='text'placeholder='Search for Products,Brands and More'/>
    </div>
    <div className='col md-4 icon'>
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg'/>&nbsp;&nbsp;Become a Seller&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg'/>&nbsp;&nbsp;Sign in&nbsp;&nbsp;&nbsp;&nbsp;
        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'/>&nbsp;&nbsp;Cart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg'/>
    </div>
    
    </>
  )
}