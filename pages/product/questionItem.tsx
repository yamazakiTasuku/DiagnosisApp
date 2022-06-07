const anserLists = [{
    Netflix: "a",
    UNext: "b",
    Disney_plus:"c",
},{
    Netflix: "d",
    UNext: "e",
    Disney_plus:"f",
},{
    Netflix: "g",
    UNext: "h",
    Disney_plus:"i",
},{
    Netflix: "j",
    UNext: "k",
    Disney_plus:"l",
},{
    Netflix: "m",
    UNext: "n",
    Disney_plus:"o",
},{
    Netflix: "p",
    UNext: "q",
    Disney_plus:"r",
}]

const anserLists2 = [{
    Netflix: "A",
    UNext: "B",
    Disney_plus:"C",
},{
    Netflix: "D",
    UNext: "E",
    Disney_plus:"F",
},{
    Netflix: "G",
    UNext: "H",
    Disney_plus:"I",
},{
    Netflix: "J",
    UNext: "K",
    Disney_plus:"L",
},{
    Netflix: "M",
    UNext: "N",
    Disney_plus:"O",
},{
    Netflix: "P",
    UNext: "Q",
    Disney_plus:"R",
}]

const anserLists3 = [{
    Netflix: "a",
    UNext: "b",
    Disney_plus:"c",
},{
    Netflix: "d",
    UNext: "e",
    Disney_plus:"f",
},{
    Netflix: "g",
    UNext: "h",
    Disney_plus:"i",
},{
    Netflix: "j",
    UNext: "k",
    Disney_plus:"l",
},{
    Netflix: "m",
    UNext: "n",
    Disney_plus:"o",
},{
    Netflix: "p",
    UNext: "q",
    Disney_plus:"r",
}]

export const QuestionItemGive = (urlNum) =>{
    if(urlNum === 1){
        return anserLists
    }else if(urlNum ===2){
        return anserLists2
    }else if(urlNum ===3){
        return anserLists3
    }

}