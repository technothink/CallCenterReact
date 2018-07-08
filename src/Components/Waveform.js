

import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'


export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'violet',
      progressColor: 'purple'
    })
    this.wavesurfer.load("in.wav")
  }
  componentWillUnmount() {

  }
  render() {

    const style = {
     
      margin: '10px',
      
    
  }

    return (
      <div className='waveform' style={style}>
       <h1 className="mdc-card__title mdc-card__title--large">Spectrum</h1>
        <div className='wave'></div>
        
      </div>
    )
  }
}

Waveform.defaultProps = {
  src: ""
}