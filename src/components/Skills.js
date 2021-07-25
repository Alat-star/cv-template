import React from 'react'

function Skills({setParam, info}) {
    return (
        <div className='p-div'>
            <h4>Pro-skills</h4>
            <input
            required
            onChange={(e) => {setParam(e, 'skills')}}
            type='text'
            value={info.skills.one}
            placeholder='skill-one*'
            name='one'

            />
            <input
            required
            onChange={(e) => {setParam(e, 'skills')}}
            type='text'
            value={info.skills.two}
            placeholder='skill-two*'
            name='two'

            />
            <input
            required
            onChange={(e) => {setParam(e, 'skills')}}
            type='text'
            value={info.skills.three}
            placeholder='skill-three*'
            name='three'

            />
            <h5>Socials url</h5>
            <input
            required
            onChange={(e) => {setParam(e, 'socials')}}
            type='text'
            value={info.socials.linkedin}
            placeholder='linkedin-url*'
            name='linkedin'

            />
            <input
            required
            onChange={(e) => {setParam(e, 'socials')}}
            type='text'
            value={info.socials.facebook}
            placeholder='facebook*'
            name='facebook'

            />
            <input
            required
            onChange={(e) => {setParam(e, 'socials')}}
            type='text'
            value={info.socials.instagram}
            placeholder='instagram*'
            name='instagram'

            />
        </div>
    )
}

export default Skills
