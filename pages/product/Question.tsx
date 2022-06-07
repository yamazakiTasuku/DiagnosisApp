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
    const anserLists:anser[] = new Array();
    anserLists[0] = {
        Netflix: "a",
        UNext: "b",
        Disney_plus:"c",
    }




    return(
        <div>
            <AnserList anserList={anserLists[0]}/>
            
        </div>
    )

}
export default App;