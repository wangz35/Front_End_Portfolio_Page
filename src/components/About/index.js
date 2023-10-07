import { faCss3, faDiscord, faGithub, faHive, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () =>{

    const [letterClass, setletterclass]=useState('text-animate')
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setletterclass('text-animate-hover')
        }, 4000)
        return ()=>{
            clearTimeout(timer);
        }
    },[])

    const [playAnimation, setPlayAnimation] = useState(true);

    const handleClick = () => {
        setPlayAnimation(true);
    }

    useEffect(() => {
        if (playAnimation) {
            const timer = setTimeout(() => {
                setPlayAnimation(false);
            }, 12000);  // 12s is the duration of the animation
            return () => {
                clearTimeout(timer);
            }
        }
    }, [playAnimation]);
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx = {15}/>
                </h1>
                <p>I am Zhihao Wang, a graduate with a solid foundation in Computer Science from Rensselaer Polytechnic Institute 
                    and currently pursuing my master's degree at North Carolina State University. </p>
                <p>
                I'm a quick learner, adaptable and willing to learn any new technology!
                </p>
                <p>
                With my past developing experiences and robust academic projects, I am keen to contribute to my first job as a career.
                </p>
            </div>

            <div className='stage-cube-cont' onMouseEnter={handleClick}>
                <div className={`cubespinner ${playAnimation ? 'animate' : ''}`}>
                        <div className='face1'>
                            <FontAwesomeIcon icon = {faPython} color ="#204483"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon = {faJava} color= "#fff"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon = {faDatabase} color= "#ff7300"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon = {faReact} color= "#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon = {faHive} color= "#fff700"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon = {faJsSquare} color= "#1eff00"/>
                        </div>
                </div>
                    <div className="orbiting-icon">
                        <FontAwesomeIcon icon={faReact} color ="#5ED4F4" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -1s infinite linear`, }}>
                        <FontAwesomeIcon icon={faPython} color ="#204483" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -2s infinite linear`, }}>
                        <FontAwesomeIcon icon={faJava} color ="#fff" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -3s infinite linear`, }}>
                        <FontAwesomeIcon icon={faDatabase} color ="#ff7300" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -4s infinite linear`, }}>
                        <FontAwesomeIcon icon={faHive} color ="#fff700" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -5s infinite linear`, }}>
                        <FontAwesomeIcon icon={faJsSquare} color ="#1eff00" />
                    </div>
                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -6s infinite linear`, }}>
                        <FontAwesomeIcon icon={faDiscord} color ="#3eb4fe" />
                    </div>

                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -7s infinite linear`, }}>
                        <FontAwesomeIcon icon={faGithub} color ="#000000" />
                    </div>

                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -8s infinite linear`, }}>
                        <FontAwesomeIcon icon={faCss3} color ="#ff00ee" />
                    </div>

                    <div className="orbiting-icon" style={{ 
                                                        animation: `orbit 10s -9s infinite linear`, }}>
                        <FontAwesomeIcon icon={faHtml5} color ="#ff0000" />
                    </div>



            </div>
        </div>
    )
}

export default About