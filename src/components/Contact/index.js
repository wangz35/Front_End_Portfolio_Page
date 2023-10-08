import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'

const Contact =()=>{
    return(
        <div class="Contact">
            <div className='block'>
                <div className='test_box atleft'>
                    <img src={LogoTitle} alt="developer" />
                    <h2>EMAIL
                    </h2>
                    <p>zwang238@ncsu.edu
                    </p>
                </div>
            </div>
            <div className='test_box atmid'>
                <img src={LogoTitle} alt="developer" />
                <h2>LINKEDIN
                </h2>
                <p>zwang238@ncsu.edu
                </p>
        </div>
            <div className='test_box atright'>
                <img src={LogoTitle} alt="developer" />
                <h2>GITHUB
                </h2>
                <p>zwang238@ncsu.edu
                </p>
        </div>
    </div>
    )
}

export default Contact