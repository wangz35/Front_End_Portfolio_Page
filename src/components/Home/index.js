import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Logo from './Logo';


const Home = () => 

    {
    const [letterClass, setletterclass]=useState('text-animate')

    const nameArray =['h','i', 'h', 'a', 'o', ' ','W','a','n','g,']
    const name1 =['Graduate ',' ','student ',' ','majoring ',' ', 'in ',' ','Computer Science',' ', 'with ',' ','Master degree']
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setletterclass('text-animate-hover')
        }, 3000)
        return ()=>{
            clearTimeout(timer);
        }
    },[])
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    &nbsp;
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray ={nameArray} idx = {15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray ={name1} idx = {15}/>
                </h1>
                <h2>Software Engineer/ Developer/ Data Engineer</h2>
                
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo>
                
            </Logo>
        </div>
    );}


export default Home