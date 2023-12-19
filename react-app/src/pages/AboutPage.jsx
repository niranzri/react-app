
import  '../App.css';
import classes from '../styles/about.module.css'
import imgHristina from '../images/Hristina.jpeg'
import imgNoelia from '../images/Noelia.jpg'
import imgMarine from '../images/Marine.jpg'
import linkdn from '../images/linkedin.png'
import githabLogo from '../assets/githubLogo.png'


function AboutPage() {
    return (
        <div className='pageCtn' >
            <div className={classes.mainCtn}>
                <div className={classes.team}>
                        <div className={classes.title}>
                            <h2>The project: </h2> 
                        </div>
                        <div className={classes.content}>
                            <p className={classes.text}> <span> Do </span> is a to-do app that allows users to create and manage tasks, 
                            as well as check off (or uncheck) the existing tasks when completed.</p>
                        </div>
            
                        <div className={classes.title}>
                            <h2>The makers: </h2> 
                        </div>
                        <div className={classes.content}>
                            <div className={classes.info}>
                                <img src={imgNoelia} alt="Noelia" className={classes.img} />
                                <div className={classes.text}>
                                    <h3>Noelia</h3>
                                    <p> Hi, I am Noelia. I am a physicist and philosopher by training. After having worked as a university lecturer for a while, I decided to pusue a career switch. 
                                    Front-end development offers the perfect balance between analytical and creative work; that's why I enrolled in Ironhack's web development bootcamp. </p>
                                </div>
                                <div className={classes.iconCtn}>
                                    <a  href="https://www.linkedin.com/in/noeliairanzoribera/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icon} /></a>
                                    <a href="https://github.com/niranzri" target="_blank" ><img src={githabLogo} alt="githabLogo" className={classes.icon} /></a>
                                </div>        
                            </div>
                        </div>
                
                        <div className={classes.content}>    
                            <div className={classes.info}> 
                                <img src={imgHristina} alt="Hristina" className={classes.img} />
                                <div className={classes.text}>
                                    <h3>Hristina</h3>
                                    <p>Hi, I am Hristina. I am a passionate UX Designer with a background in architecture. 
                                    Currently enrolled in the web development course, determined to further upskill my capabilities as a UX Designer.</p>
                                </div>
                                <div className={classes.iconCtn}>
                                    <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icon} /></a>
                                    <a href="https://github.com/HristinaGjo" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icon} /></a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.content}>
                            <div className={classes.info}>
                                <img src={imgMarine} alt="Marine" className={classes.img} />
                                <div className={classes.text}>
                                    <h3>Marine</h3>
                                    <p>Hi, I am Marine. After a master degree in chemistry, I learned Java and I worked as a Java developper for 4 years. </p>
                                </div>
                                <div className={classes.iconCtn}>
                                    <a href="https://www.linkedin.com/in/gjorgieva/" target="_blank" rel="noreferrer"><img src={linkdn} alt="linkdn" className={classes.icon} /></a>
                                    <a href="https://github.com/MarineLC" target="_blank" rel="noreferrer"><img src={githabLogo} alt="githabLogo" className={classes.icon} /></a>
                                 </div>
                            </div>    
                        </div> 
                </div>
            </div> 
        </div>
    )
}
  
export default AboutPage

