import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'
import './Buttons.css'

export default props => 
  <div className='buttons-fadein'>
    <div className='empty-album-desc'>
        <h3>It looks like your album is empty. Let's get started!</h3>
    </div>
    <div className='add-images-selection'>
        <div className='button'>
        <label htmlFor='single'>
            <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
        </label>
        <input type='file' id='single' onChange={props.onChange} /> 
        </div>

        <div className='button'>
        <label htmlFor='multi'>
            <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
        </label>
        <input type='file' id='multi' onChange={props.onChange} multiple />
        </div>
    </div>

  </div>