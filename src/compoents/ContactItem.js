import React from 'react'

export default function ContactItem(props) {
    const {contact,toggleIsFavorite} = props;
    const starImgUrl = contact.isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'


  return (
    <tr>
        <td>{contact.name}</td>
        <td>
            <div className='d-flex flex-row justify-content-between'>
            <p>{contact.mobileNo}</p>
            <button className='star_btn' type='button' onClick={()=>toggleIsFavorite(contact.id)}>
                <img src={starImgUrl}  alt='img'/>
            </button>
            </div>
        </td>
 
    </tr>
  )
}
