import './style.css'
import Facebook from '../../assets/facebook.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer_copyrights">©2022 (Nome do App)</div>
            <div className="footer_socialMedia">
                <img src={Facebook} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        </>
    )
}

export default Footer