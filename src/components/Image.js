import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Image({openWidget,info, handleNewImage, setParam, uploadHandler}) {
    return (
        <div>
            <div className='upload-div p-div'>
                
                    <div className='profile-div'>
                        <div className='cloud-div'> 
                        <FontAwesomeIcon className='upload-icon icon' size='4x' icon={["fas", "cloud-upload-alt"]} />
                        <div>
                            <label htmlFor="file">Upload image   <br/><em>(1mb 0r less)</em></label>
                            <input
                                type="file"
                            //  value={info.file.imageFile} 
                                onChange={(e) => handleNewImage(e, 'file')}
                                name='imageFile'
                                id='file'
                                accept=".jpg, .jpeg, .png"
                            />
                        </div>
                        </div>
                        <div className='img-div' >
                            {
                            info.file.imageFile ? <img className='img-tag' height='250px' width='250px' src={info.file.imageFile} alt='profile pic' /> : console.log('nay')
                            }
                        </div>
                    </div>
                        <div className='btn-div'>

                            <button onClick={ () => uploadHandler()}>
                                Upload!
                            </button>

                
                            <button className='widget-btn' onClick={openWidget} type="button" className="btn widget-btn">Upload Via Widget</button>
                        </div>
                
            </div>
        </div>
    )
}

export default Image
