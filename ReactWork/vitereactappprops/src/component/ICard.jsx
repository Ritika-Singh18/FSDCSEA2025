import React from 'react'

function ICard({data}) {
  return (
    <div>ICard
        <h2>Name:{data.name}</h2>
        <h2>Age:{data.age}</h2>
        <h2>Branch:{data.branch}</h2>
        <h2>College:{data.college}</h2>
        <h2>Location:{data.location}</h2>
    </div>
  )
}

export default ICard