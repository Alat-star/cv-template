import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Experience({info, setExp, setParam, addInput, delAll, removeIndex, expList}) {

    const count = expList.length;
    return (
        <div className='w-div'>
            <div className='sub-header'>
                <h4>Employment History <br></br>(descending order)</h4>
                {count <= 0 ? '' : <div><FontAwesomeIcon className='icon' size='lg' icon={["fas", "save"]} /><span>{count} saved succesfully</span></div>}
            </div>
            

            <input
            // required
            onChange={(e) => {setParam(e, 'workXp', 'experience')}}
            type='text'
            value={info.workXp.experience.company}
            placeholder='company name*'
            name='company'

            />
            <input
            // required
            onChange={(e) => {setParam(e, 'workXp', 'experience')}}
            type='text'
            value={info.workXp.experience.title}
            placeholder='role*'
            name='title'

            />
            <label for="tasks">What roles did you play ?</label><br />
            <textarea  minLength='50' maxlength="1000" rows="5" cols="30" id="tasks" value={info.workXp.experience.tasks} name='tasks' onChange={(e) => {setParam(e, 'workXp', 'experience')}} placeholder='Reel out three major roles' >
                
            </textarea>
            <label for='startDate'>from</label>
            <input
            id='startDate'
            // required
            onChange={(e) => {setParam(e, 'workXp', 'experience')}}
            type='month'
            value={info.workXp.experience.startDate}
            placeholder='enter year*'
            name='startDate'

            />
            <label for='stopDate'>To</label>
            <input
            id='stopDate'
            // required
            onChange={(e) => {setParam(e, 'workXp', 'experience')}}
            type='month'
            value={info.workXp.experience.stopDate}
            placeholder='enter year*'
            name='stopDate'

            />

            <div className='sub-header'>
              <button onClick={ () => addInput('workXp', 'experience', 'experiences')}>Add</button>
              <button className='danger' onClick={() => delAll('workXp', 'experiences')}>Delete all</button>
              
            </div>
            <div className='edu-list-div' >
                {
                  expList.map( (item, index) => {
                   return ( <div className='' key={index}>
                      <p>item {index+1}</p>
                      <p>Company:  <span>{item.company}</span></p>
                      <p>Title:  <span>{item.title}</span></p>
                      <p>Duration:  <span>{item.startDate} - {item.stopDate}</span></p>
                      <p>Role: <span>{item.tasks}</span></p>
                      <div className='edu-children'>
                        <button onClick={ () => removeIndex(index,'workXp','experiences')} className='danger'>Delete</button>
              
                      </div>
                    </div>)
                  })
                }
              </div>
        </div>
    )
}

export default Experience
