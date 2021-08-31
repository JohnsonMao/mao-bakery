import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';

import './scss/_favorites.scss';

export default function Favorites() {
  return (
    <button 
      className="btn btn-danger favorites rounded-circle fs-2 lh-1 p-1" 
      type="button">
      <FontAwesomeIcon icon={fasFaHeart} />
    </button>
  )
}
