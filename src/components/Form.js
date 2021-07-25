import React, { Component } from 'react';
import Bio from './Bio';
import Education from './Education';
import Experience from './Experience';
import Image from './Image';
import Skills from './Skills';

class Form extends Component {
    render() {

        const {openWidget,submitHdler, handleNewImage, mychars, addInput, delAll, setParam, eduList, expList, removeIndex, uploadHandler} = this.props

        return (
            <div className='form-group'>
                <Image openWidget={openWidget} handleNewImage={handleNewImage} info={mychars} uploadHandler={uploadHandler} setParam={setParam} />
                    
                <form onSubmit={submitHdler}>
                    <Bio info={mychars} setParam={setParam} /> 
                    <Education setParam={setParam} removeIndex={removeIndex} eduList={eduList} delAll={delAll} addInput={addInput} info={mychars} />
                    <Experience setParam={setParam} expList={expList} delAll={delAll} removeIndex={removeIndex} addInput={addInput} info={mychars} />
                    <Skills info={mychars} setParam={setParam} />
                </form>
                <button className='form-btn' type='submit' onClick={submitHdler} >Submit</button>
            </div>
        )
    }
}

export default Form
