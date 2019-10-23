import React from 'react'
import '../App.css'

const Header = () => {
    return (
        <header className="App-header">
            <div className="header-title">REACT-MOVIES</div>
            <div style={{float:'right'}}>
                <div className="tab-title"><a href="mailto:hamza.n.arshadwork@gmail.com" className="a-tag">CONTACT</a></div>
                <div className="tab-title"><a className="a-tag" href="https://hamzaarshad.com/app/views/resume.html">RESUME</a></div>
                <div className="tab-title"><a className="a-tag" href="https://hamzaarshad.com/app/views/portfolio.html">PORTFOLIO</a></div>
                <div className="tab-title"><a className="a-tag" href="https://hamzaarshad.com/app/views/profile.html">ABOUT</a></div>
                <div className="tab-title"><a className="a-tag" href="https://hamzaarshad.com">HOME</a></div>
            </div>
        </header>
    );
}

export default Header;
