import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let arrObj = [{
    imgg:"/images/table.jpg",
    title:"Lorem Ipsum has been the",
    desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  },
  {
    imgg:"/images/table.jpg",
    title:"Lorem Ipsum has been the",
    desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  },
  {
    imgg:"/images/table.jpg",
    title:"Lorem Ipsum has been the",
    desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  },
  {
    imgg:"/images/table.jpg",
    title:"Lorem Ipsum has been the",
    desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  },
  {
    imgg:"/images/table.jpg",
    title:"Lorem Ipsum has been the",
    desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  }];
  return (
   <div>
    {/* ============= NAV BAR =================*/}
    <header className="header">
    <nav className="nav bd-grid">
        <div className="nav__menu" id="nav-menu" > 
            <ul className="nav__list" style={{paddingLeft:'250px',paddingTop:"12px",paddingBottom:"7px"}}>
                        <li className="nav__item" ><a href="#Applications"  className="nav__link  textDec">Applications</a></li>
                        <li className="nav__item"><a href="#Innovations" className="nav__link textDec">Innovations</a></li>
                        <li className="nav__item"><a href="#Company" className="nav__link textDec">Company</a></li>
                        <li className="nav__item"><a href="#Careers" className="nav__link textDec">Careers</a></li>
            </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
        </div>
    </nav>
     </header>

     {/* ============= Carousel =================*/}

    <Carousel data-bs-theme="dark" style={{marginTop:"46px"}}>
<Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="/images/table.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Customised Solutions</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="/images/clothes.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Filtration</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="/images/car.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Automotive</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="/images/women.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Apparel</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    {/* ============= Slider Section =================*/}

    <section className=" section" id="contact">
    <h2 className="section-title3" ><span style={{color:'#7DF9FF'}}>Next era</span> of possibitities</h2>
   <div className="slider10-container" >
    <div className="slider10">
      {arrObj.map(obj=>(
         <div className="slide10 hov">
         <img src={obj.imgg} ></img>
         <h4 className='spacing'>{obj.title}</h4>
         <p style={{padding:'10px'}}>{obj.desc}</p>
       </div>
      ))}
    </div>
  </div>
  </section>

  {/* ============= Contact Section =================*/}

  <section className="contact section curved-section" >
        <div className="contact__container bd-grid"  style={{ backgroundColor: '#0F67B1', padding: '20px', borderRadius: '15px',   }}>
          <div style={{display:"flex",  width:"100%", height:"100%"}}>

          <div style={{ width:"50%", height:"100%", color:"white"}}>
          
          <div className='font' style={{justifyContent:"center", display:"grid", textAlign:"left",}}>
          <h2 className="section-title">Get in touch</h2>
          <p style={{fontSize:"20px"}}>For general enquiries</p><br></br>
          <p>Address: <br></br> 110, 16th Road, Chembur, Mumbai-400071</p><br></br>
          <p>Phone: <br></br> 9999999999</p><br></br>
          <p>Email: <br></br>info@gmail.com</p>
          
          </div>
          
          </div>

          <div style={{  width:"50%", height:"100%"}}>
          <input type="mail" placeholder="Full Name" className="contact__input" style={{ marginTop: '17px', border: 'none',backgroundColor: '#0F67B1',color:'white',borderBottom:"1px solid white" , borderRadius:"0%"}}/>
                <input type="mail" placeholder="E-mail" className="contact__input" style={{ marginTop: '17px', border: 'none',backgroundColor: '#0F67B1',color:'white',borderBottom:"1px solid white" , borderRadius:"0%"}}/>
                <input type="mail" placeholder="Subject" className="contact__input" style={{ marginTop: '17px', border: 'none' ,backgroundColor: '#0F67B1',color:'white',borderBottom:"1px solid white", borderRadius:"0%"}}/>
                <input type="mail" placeholder="Message" className="contact__input" style={{ marginTop: '17px', border: 'none',backgroundColor: '#0F67B1',color:'white',borderBottom:"1px solid white" , borderRadius:"0%"}}/>
                <input type="button" value="Send" className="contact__button button"/>
          </div>
          </div>
        </div>
  </section>

  {/* ============= Footer =================*/}

    <footer className="footer">
        <div className="section10 orange-section" style={{padding:"20px", justifyContent:"center"}}>
            <div className="contain">
            <div className="brand"  >
                <img src="/images/logo1.PNG" alt="Company Logo" style={{width:"200px", marginLeft:"50px"}}/>
                {/* <h1><span style={{color:"#4070F4", fontSize:"20px"}}>SUPREME</span> <br></br><span style={{color:"#7DF9FF", fontSize:"15px"}}>GROUP</span></h1> */}
            </div>
                <div className="col">
               
                  <h1 className="title "><u >APPLICATIONS</u></h1>
                  <ul>
                    <li>Apparel</li>
                    <li>Automotive</li>
                    <li>Filtration</li>
                    <li>Customised Solutions</li>
                    
                  </ul>
                </div>  
                <div className="col martop">
                <h1 className="title "><u >COMPANY</u></h1>
                  <ul>
                    <li>Innovation</li>
                    <li>Global Competency</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="col" >
                <h1 className="title "><u >MORE</u></h1>
                  <ul>
                    <li>Careers</li>
                    <li>Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
                <div className="col" >
                <h1 className="title "><u >FOLLOW US</u></h1>
                  <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Linked In</li>
                    
                  </ul>
                </div>
            </div>
            <div className="legal"> 
                <p>&copy; 2023 . All rights reserved.</p>
           </div>
        </div>
    </footer>

   </div>
  );
}

export default App;