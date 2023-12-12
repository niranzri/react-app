import classesNav from '../styles/navbar.module.css'

function Navbar({appName,logo}) {
  return (
 
    <div>
      <div>
      <img src={logo}/>
      </div>
      <div>
        <h1>{appName} </h1>
      </div>
 


    </div>
  );
}

export default Navbar;
