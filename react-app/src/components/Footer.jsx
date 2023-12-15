import classesFooter from '../styles/footer.module.css';
import githabLogo from '../assets/githubLogo.png'

function Footer(){

return(
<>

<footer className={classesFooter.footer}>
   {/*<p >This is the footer </p>*/}
   <div className={classesFooter.logoContainer}>
   <img src={githabLogo} alt="Logo" className={classesFooter.logo} />
     <a href="https://github.com/niranzri/react-app">{/*link to the repo/*/}</a>
     </div>
</footer>


</>


);


}


export default Footer;