import { useState } from "react";
import AnserList from "../AnserList"
import Link from 'next/link'
import {useRouter} from "next/router"
import  {anserLists} from "./questionItem"

const App = () => {
    let UrlNum = 0
    let url,urlStr:string
    const router = useRouter();
    let {id} = router.query;
    urlStr = `${id}`
    UrlNum = Number(urlStr.slice(-1)) + 1

    const [ansers,setAnsers] = useState();

    type anser = {
        Netflix: string;
        UNext: string;
        Disney_plus:string;
    }
    type anserConterType={
        NetflixNum:number;
        UNextNum:number;
        DisneyPlusNum:number;
    }

    //答えの種類を足していく
    let anserConter:anserConterType = {
        NetflixNum : 0,
        UNextNum : 0,
        DisneyPlusNum:0
    };

    //回答の種類を定義
    

    const toggleAnser = (counter) =>{
        anserConter.NetflixNum = anserConter.NetflixNum + counter[0] 
        anserConter.UNextNum = anserConter.UNextNum + counter[1]
        anserConter.DisneyPlusNum = anserConter.DisneyPlusNum + counter[2]
        console.log(anserConter)
    }
    
    url = "/product/Question"  + String(UrlNum)
    return(
        <div>
            <div className="flex justify-center">
                <h1>
                    以下の中から好きな作品を選んでください
                </h1>
            </div>
            {anserLists.map((anserList)=>(  
                <AnserList anserList={anserList} anserConter={anserConter} toggleAnser={toggleAnser} key={anserList.Netflix}/>
            ))}
            <div className="flex justify-center my-10">
                <Link href={url}>
                    <button  className='mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500'>
                    次の質問へ!!
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default App;