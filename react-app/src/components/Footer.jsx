import classesFooter from '../styles/footer.module.css';
import githabLogo from '../assets/githubLogo.png'

function Footer(){

   return (
      <>
      <footer className={classesFooter.footer}>
         <div className={classesFooter.logoContainer}>
            <a href="https://github.com/niranzri/react-app" target="_blank" rel="noreferrer">{/*link to the repo/*/}
            <img src={githabLogo} alt="Logo" className={classesFooter.logo} />
            </a>
      </div>
      </footer>
      </>

   );
   
}


export default Footer;