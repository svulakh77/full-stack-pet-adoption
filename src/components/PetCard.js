import React from 'react'

function PetCard({pet}) {
  return (
    <div className='petCard'>
      <div className='petInfo'>
      <h3>Name:{pet.petName}</h3>
      <h3>Adoption Status:{pet.adoptionStatus}</h3>
        <button>See More</button>
    </div>
    </div>
  )
}

export default PetCard