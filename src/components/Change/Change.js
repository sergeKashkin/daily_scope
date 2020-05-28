import './Change.css'
import React from 'react';


const Change = ({changeSign}) => {


    const signName = (e) => {
        let signon = e.target.src.split('/')[6].split('.')[0];
        document.getElementById('cur_sign').textContent = signon.charAt(0).toUpperCase() + signon.slice(1);
    }

    const clear = () => {
        document.getElementById('cur_sign').textContent=""
    }

    const change = (e) => {
        let signon = e.target.src.split('/')[6].split('.')[0];
        changeSign(signon);
    }

    return (
    <div className="card2">
        <div className="title"><p>Choose Your Sign</p></div>
        <div className="flex" id="first">
            <img className="sign" src={require('../../signs/aquarius.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/aries.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/cancer.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/capricorn.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/gemini.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/leo.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
        </div>
        <div id="cur_sign"></div>
        <div className="flex" id="second">
            <img className="sign" src={require('../../signs/libra.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/pisces.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/sagittarius.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/scorpio.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/taurus.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <img className="sign" src={require('../../signs/virgo.png')} onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
        </div>
        <div></div>
    </div>
    )
}


export default Change;