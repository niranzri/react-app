
import  '../App.css';
import classes from '../styles/about.module.css'
import imgHristina from '../images/Foto-Hristina.jpeg'
import imgNoelia from '../images/Noelia.jpg'
import imgMarine from '../images/Marine.jpg'
import linkdn from '../images/linkedin.png'
//import Collapsible from '../components/collapsible';
import githabLogo from '../assets/githubLogo.png'

import { Link } from 'react-router-dom'; 

function AboutPage() {
    return (
        <div className='pageCtn' >
            <div className={classes.mainCtn}>
     
            <h2>Description</h2> 
            
            <div>
            <p className={classes.text}>To-do app allowing the user to create and manage tasks, as well as check off (or uncheck) the existing tasks when completed</p>
            
            </div >
            <div className={classes.team}>
            <h2>About the team</h2>

            <div className={classes.content}>
            <h3>Noealia</h3>
            <div className={classes.info}>

            <img src={imgNoelia} alt="Noelia" className={classes.img} />
            <p>Here what you want to say about you</p>
            <div className={classes.middleCtn}>
            <a href="https://www.linkedin.com/in/noeliairanzoribera/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
             <a href="https://github.com/niranzri" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>
             
            </div>

            </div>
            </div>

            <div className={classes.content}>
            <h3>Hristina</h3>
            <div className={classes.info}>
            <img src={imgHristina} alt="Hristina" className={classes.img} />
            <p>Here what you want to say about you</p>
            <div className={classes.middleCtn}>
            <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
            <a href="https://github.com/HristinaGjo" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>

            </div>

            </div>
            </div>


            <div className={classes.content}>
            <h3>Marine</h3>
            <div className={classes.info}>
            <img src={imgMarine} alt="Marine" className={classes.img} />
            <p>Here what you want to say about you</p>
            <div className={classes.middleCtn}>
            <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
            <a href="https://github.com/MarineLC" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>

            </div>
            </div>
            </div>
            </div>
           {/* <Collapsible name={"Noelia"} information={"test"} label="Noelia" />
            <Collapsible name={"Hristina"} information={"test 2"} label="Noelia" />
            <Collapsible name={"Marine"} information={"test3"} label="Noelia" />*/}
            

        </div>
        </div>
    )
}
  
export default AboutPage

