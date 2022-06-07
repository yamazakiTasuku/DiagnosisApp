import { useState } from "react";
import AnserList from "../AnserList"
import {useRouter} from "next/router"

const App = () => {
    const [ansers,setAnsers] = useState();

    type anser = {
        Netflix: string;
        UNext: string;
        Disney_plus:string;
    }
    type anserConterType={
        NetflixNum:number;
        UNextNum:number;
        DisneyPlus:number;
    }

    //答えの種類を足していく
    let anserConter:anserConterType = {
        NetflixNum : 0,
        UNextNum : 0,
        DisneyPlus:0
    };

    //回答の種類を定義
    const anserLists:anser[] = new Array();
    anserLists[0] = {
        Netflix: "a",
        UNext: "b",
        Disney_plus:"c",
    }

    anserLists[1] = {
        Netflix: "d",
        UNext: "e",
        Disney_plus:"f",
    }

    anserLists[2] = {
        Netflix: "g",
        UNext: "h",
        Disney_plus:"i",
    }




    return(
        <div>
            <AnserList anserList={anserLists[0]} anserConter={anserConter}/>
            <AnserList anserList={anserLists[1]} anserConter={anserConter}/>
            <AnserList anserList={anserLists[2]} anserConter={anserConter}/>
        </div>
    )

}
export default App;