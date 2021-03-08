import avataar from './assets/avataar.svg'
import github from './assets/github.svg'
import linkedIn from './assets/linkedIn.svg'
import email from './assets/email.svg'

import './App.css'

function App() {
    return (
        <div id="root">
            <div className="Centered">
                <div>
                    <img src={avataar} className="avataar" alt="logo" />
                </div>
                <p className="Text-name">JODI FOSTER</p>
                <p className="Text">SOFTWARE DEVELOPER</p>
                <div className="Social-container">
                    <a href="https://www.linkedin.com/in/jodi-foster-092415b1/">
                        <img src={linkedIn} className="Social-icon" alt="logo" />
                    </a>
                    <a href="https://github.com/JodiFoster">
                        <img src={github} className="Social-icon" alt="logo" />
                    </a>
                    <a href="mailto:jodiallysonfoster@gmail.com">
                        <img src={email} className="Social-icon" alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App