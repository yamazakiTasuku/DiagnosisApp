import React, {useState} from 'react'

const AnserList = ({anserList,anserConter,toggleAnser}) => { 
  type anserConterType={
    NetflixNum:number;
    UNextNum:number;
    DisneyPlus:number;
  }
  const [anser,setAnsers] = useState<anserConterType[]>([]);

const handleSubmit = (e,anserConter:anserConterType) =>{
  
  e.preventDefault();
  let newAnserConter :anserConterType={
    NetflixNum : 1,
    UNextNum :1,
    DisneyPlus: 1,
  }
  toggleAnser(newAnserConter)
  return newAnserConter

}


  return (
    <div>
      
      <div className='flex justify-center'>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition " onClick={(e) => handleSubmit(e,anserConter)}>{anserList.Netflix}</button>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">{anserList.UNext}</button>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">{anserList.Disney_plus}</button>
      
      </div>
    </div>
  )
}

export default AnserList