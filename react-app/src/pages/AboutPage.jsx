
import  '../App.css';
import classes from '../styles/about.module.css'
import imgHristina from '../images/Foto-Hristina.jpeg'
import imgNoelia from '../images/Noelia.jpg'
import imgMarine from '../images/Marine.jpg'
import linkdn from '../images/linkedin.png'

import githabLogo from '../assets/githubLogo.png'

import { Link } from 'react-router-dom'; 

function AboutPage() {
    return (
        <div className='pageCtn' >
            <div className={classes.mainCtn}>
            
                  
                 <div className={classes.team}>
                    <div className={classes.title}>
                         <h2>The project :</h2> 
                     </div>
                  <div className={classes.content}>

                         <div>
                             <p className={classes.text}>To-do app allowing the user to create and manage tasks, as well as check off (or uncheck) the existing tasks when completed</p>
                         </div>
                   </div >
            
                   <div className={classes.title}>
                         <h2>The team :</h2> 
                   </div>
                  <div className={classes.content}>
                      <div className={classes.info}>
                          <img src={imgNoelia} alt="Noelia" className={classes.img} />
                          
                             <div className={classes.text}>
                                   <h3>Noelia</h3>
                                  <p>Here what you want to say about you</p>
                             </div>
                             <div className={classes.iconeCtn}>
                                        <a  href="https://www.linkedin.com/in/noeliairanzoribera/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
                                         <a href="https://github.com/niranzri" target="_blank" ><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>
                            </div>        
                      </div>
                 </div>
                 

                 <div className={classes.content}>    
                     <div className={classes.info}> 
                          <img src={imgHristina} alt="Hristina" className={classes.img} />
                             <div className={classes.text}>
                                 <h3>Hristina</h3>
                                 <p>Here what you want to say about you</p>
 
                             </div>
                             <div className={classes.iconeCtn}>
                                         <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
                                         <a href="https://github.com/HristinaGjo" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>
                                    </div>
                         </div>
                     </div>


                   <div className={classes.content}>
                        <div className={classes.info}>
                             <img src={imgMarine} alt="Marine" className={classes.img} />
                                 <div className={classes.text}>
                                      <h3>Marine</h3>
                                      <p>After a master degree in chemistry,<br/> I learned Java and I worked as a java developper for 4 years </p>
                                    
                                  </div>
                                  <div className={classes.iconeCtn}>
                                        <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icone} /></a>
                                        <a href="https://github.com/MarineLC" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icone} /></a>
                                 </div>
                         </div>
                         
                  </div>


                  
             </div>

            



            
          </div> 
        </div>
    )
}
  
export default AboutPage

