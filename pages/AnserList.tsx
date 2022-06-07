import React from 'react'

const AnserList = ({anserList}) => { 
  console.log(anserList);
  const AnserLists={

  }


  return (
    <div>
      <h1>{anserList.Netflix}</h1>
      <h1>{anserList.UNext}</h1>
      <h1>{anserList.Disney_plus}</h1>
    </div>
  )
}

export default AnserList