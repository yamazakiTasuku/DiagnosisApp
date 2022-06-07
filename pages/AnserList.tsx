import React, {useState} from 'react'

const AnserList = ({anserList,anserConter,toggleAnser}) => { 
  let NET = 0;
  let UNX = 0;
  let DSP = 0;
  type anserConterType={
    NetflixNum:number;
    UNextNum:number;
    DisneyPlusNum:number;
  }
  const [anser,setAnsers] = useState<anserConterType[]>([]);

const handleSubmit = (e,anserConter:anserConterType,Sabusuc:string) =>{
  e.preventDefault();
  NET = 0;
  UNX = 0;
  DSP = 0;
  if (Sabusuc === "NET"){
    NET = 1;
  }else if(Sabusuc === "UNX"){
    UNX = 1;
  }else if(Sabusuc === "DSP"){
    DSP = 1;
  }
  let newAnserConter = [ NET,UNX,DSP ]
  toggleAnser(newAnserConter)
  return newAnserConter

}


  return (
    <div>

      <div>
        
      </div>
      
      <div className='flex justify-center'>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition " onClick={(e) => handleSubmit(e,anserConter,"NET")}>{anserList.Netflix}</button>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition " onClick={(e) => handleSubmit(e,anserConter,"UNX")}>{anserList.UNext}</button>
        <button className=" shadow-lg my-10 mx-10 px-10 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition " onClick={(e) => handleSubmit(e,anserConter,"DSP")}>{anserList.Disney_plus}</button>
      
      </div>
    </div>
  )
}

export default AnserList