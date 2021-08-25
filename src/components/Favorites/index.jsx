import React from 'react';

import './_favorites.scss';

export default function Favorites() {
  return (
    <button 
      className="btn btn-danger favorites rounded-circle fs-2 lh-1 p-1" 
      type="button">
      <i className="fas fa-heart"></i>
    </button>
  )
}
