import React, { Component } from 'react'

export class Bio extends Component {

    // const {info, setBio} = this.props

    render() {
    const {info, setParam} = this.props
        return (
            <div className='w-div'>

            {/* <input
            required
            onChange={(e) => setParam(e,'bio')}
            type='image'
            value={info.bio.name}
            name='name'

            /> */}

            <input
            required
            onChange={(e) => setParam(e,'bio')}
            type='text'
            value={info.bio.name}
            placeholder='fullname*'
            name='name'

            />

            <input
            onChange={(e) => setParam(e,'bio')}
            type='email'
            value={info.bio.email}
            name='email'
            placeholder='email address*'
            
            />

            <input
            required
            onChange={(e) => setParam(e,'bio')}
            type='text'
            value={info.bio.address}
            placeholder='home address*'
            name='address'

            />

            <input
            required
            onChange={(e) => setParam(e,'bio')}
            type='text'
            value={info.bio.job}
            placeholder='profession*'
            name='job'

            />
            
            <input
            onChange={(e) => setParam(e,'bio')}
            type='tel'
            value={info.bio.telephone}
            name='telephone'
            placeholder='mobile number'
            
            />
        </div>
        )
    }
}

export default Bio
