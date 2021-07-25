
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Display({pupil}) {

    if (!pupil) {
        return null
    }

    
    
    return (
        <div className='template'>
            <div className='pic-div'>
                    <img className='pic' src={pupil.file.imageFile} alt='user-pic'/>
                </div>
                <div className='name-div'>
                    <span className='name'>{pupil.bio.name}</span>
                    <span>{pupil.bio.job}</span>
                </div>
            <div className='tw-div'>
                
                <div className='edu-div'>
                    <p className='tag'>Education</p>
                     {pupil.education.educationHistory.map((edu) => {
                        return(
                            <div className='box' key={edu.id}>
                                <div className='year-box'>
                                    <FontAwesomeIcon className='icon' size='lg' icon={["fas", "square"]} />
                                    <div className='date-box'>
                                        <span>
                                        {edu.startDate.split('-').filter( (item) => {
                                              return item.length >= 4;
                                            }).join('')} - {edu.stopDate.split('-').filter( (item) => {
                                                return item.length >= 4;
                                              }).join('')}
                                        </span>
                                        <span>{edu.title}</span>
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <span className='detail_item_one'>{edu.course}</span>
                                    <span>{edu.schoolName}</span>
                                </div>
                            </div>
                        )
                    })} 
                </div>
                <div className='exp-div'>
                    <p className='tag'>Experience</p>
                    {pupil.workXp.experiences.map((edu) => {
                        //  if (!edu || edu)
                        // console.log(edu);
                        return(
                            <div className='box' key={edu.id}>
                                <div className='year-box'>
                                    <FontAwesomeIcon className='icon' size='lg' icon={["fas", "square"]} />
                                    <div className='date-box'>
                                        <span>
                                        {edu.startDate.split('-').filter( (item) => {
                                              return item.length >= 4;
                                            }).join('')} - {edu.stopDate.split('-').filter( (item) => {
                                                return item.length >= 4;
                                              }).join('')}
                                        </span>
                                        <span>{edu.title}</span>
                                    </div>
                                </div>
                                <div className='detail-box'>
                                    <span className='detail_item_one'>{edu.company}</span>
                                    <span>{edu.tasks}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='b-div'>
                <div className='contact'>
                    <div className='bdiv-head'>CONTACT ME</div>
                    <div className='contact-item'>
                        <div>
                            <FontAwesomeIcon className='icon' size='lg' icon={["fas", "map-marker-alt"]} />
                            <div>
                                <span>ADDRESS</span>
                                <span>{pupil.bio.address}</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon className='icon' size='lg' icon={["fas", "globe"]} />
                            <div>
                                <span>WEB</span>
                                <span>{pupil.bio.email}</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon className='icon' size='lg' icon={["fas", "phone-alt"]} />
                            <div>
                                <span>PHONE</span>
                                <span>{pupil.bio.telephone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <p className='bdiv-head'>PRO SKILLS</p>
                    <div>
                        <div>
                            <p>{pupil.skills.one}</p>
                        </div>
                        <div>
                            <p>{pupil.skills.two}</p>
                        </div>
                        <div>
                            <p>{pupil.skills.three}</p>
                        </div>
                    </div>
                </div>
                <div className='social'>
                    {/* <a target='_Blank' href='#' rel='#'>hjkkl</a> */}
                    <a href={pupil.socials.facebook}><FontAwesomeIcon className='icon social-item' size='lg' icon={["fab", "facebook-f"]} /></a>
                    <a href={pupil.socials.linkedin}><FontAwesomeIcon className='icon social-item' size='lg' icon={["fab", "linkedin"]} /></a>
                    <a href={pupil.socials.instagram}><FontAwesomeIcon className='icon social-item' size='lg' icon={["fab", "instagram"]} /></a>
                </div>
            </div>
        </div>
    )
    
}

export default Display
