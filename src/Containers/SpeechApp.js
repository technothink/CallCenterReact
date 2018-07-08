import React from 'react';
import TranscribeArea from '../Components/TranscribeArea';
import Table from '../Components/Table';
import Waveform from '../Components/Waveform';
import Footer from '../Components/Footer';



class SpeechApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            tableData:null,
            speakers:null
        }
    }

    componentWillReceiveProps(newProps){
       // console.log('Prop',newProps)
        this.parserResponse(newProps);
    }
    
    parserResponse=(response)=>{
        let data=response.responseData.data;
       
        this.setState({
            tableData:data
        });
        
        
    }

    speakerHandler = speekers => {
        //  alert('clciked');
          console.log(speekers)
          this.setState({
            speakers:speekers
          });
        };

    render(){

        const style = {
            display: 'flex',
            margin: '5px',
            height: '420px',
            

        }
        
        return(
           
    
    <div >
        <div className="mdc-card">
            <section className="mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">Transcribes</h1>
            </section>
            <div style={style}>
            <Table  tableData={this.state.tableData} SpeakerHandler={this.speakerHandler} />
                
                <TranscribeArea  Speakers={this.state.speakers}/>
            </div>
            <div>

                <Waveform src='abc.wav' />
            </div>
            <div>

                <Footer />
            </div>
        </div>

                </div>
        );
    }
}

export default SpeechApp;
