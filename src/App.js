import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Experience from './components/Experience'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />

        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Experience />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    )
  }
}

export default App
