import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Education({info, setParam, addInput, delAll, eduList, removeIndex}) {

    const count = eduList.length;

    const options = [
        {
          label: "Mr",
          value: "Mr",
        },
        {
          label: "Mrs",
          value: "Mrs",
        },
        {
          label: "miss",
          value: "miss",
        },
        {
          label: "Dr",
          value: "Dr",
        },
        {
          label: "Prof",
          value: "Prof",
        },
      ];

      
    
    return (
        <div className='section p-div'>
            <div className='section-head sub-header'>
              <h4>Start with Primary education ~ alma mata</h4>
              {count <= 0 ? '' : <div><FontAwesomeIcon className='icon' size='lg' icon={["fas", "save"]} /><span>{count} saved succesfully</span></div>}
            </div>
            <input
            // required
            onChange={ (e) => setParam(e, 'education', 'newEdu') }
            type='text'
            value={info.education.newEdu.schoolName}
            placeholder='school name*'
            name='schoolName'

            />
            <input
            // required
            onChange={ (e) => setParam(e, 'education', 'newEdu') }
            type='text'
            value={info.education.newEdu.course}
            placeholder='course*'
            name='course'

            />
            <label htmlFor='startDate'>from</label>
            <input
            // required
            onChange={ (e) => setParam(e, 'education', 'newEdu') }
            type='month'
            value={info.education.newEdu.startDate}
            placeholder='enter year*'
            name='startDate'

            />

            <label htmlFor='stopDate'>To</label>
            <input
            // required
            onChange={ (e) => setParam(e, 'education', 'newEdu') }
            type='month'
            value={info.education.newEdu.stopDate}
            placeholder='enter year*'
            name='stopDate'

            />

            <select name='title' value={info.education.newEdu.title} onChange={ (e) => setParam(e, 'education', 'newEdu') }>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
            </select>

            <div className='sub-header'>
              <button onClick={ () => addInput('education', 'newEdu', 'educationHistory')}>Add</button>
              <button className='danger' onClick={() => delAll('education', 'educationHistory')}>Delete all</button>
              
            </div>
            <div className='edu-list-div' >
                {
                  eduList.map( (item, index) => {
                   return ( <div className='' key={index}>
                      <p>item {index+1}</p>
                      <p>School:  {item.schoolName}</p>
                      <p>Study:  {item.course}</p>
                      <p>Duration:  {item.startDate} - {item.stopDate}</p>
                      <p>Title: {item.title}</p>
                      <div className='edu-children'>
                        <button onClick={ () => removeIndex(index,'education','educationHistory')} className='danger'>Delete</button>
              
                      </div>
                    </div>)
                  })
                }
              </div>
        </div>
    )
}

export default Education
