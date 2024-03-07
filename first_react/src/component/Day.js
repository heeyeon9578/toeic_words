//import dummy from "../DB/data.json";
import { useParams } from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";
import Word from "./Word";
import useFetch from "./hooks/useFetch";
export default function Day(){
    const selectedCountry = useParams().eng;
    console.log(selectedCountry);
    const selectedDay = useParams();
    console.log(selectedDay);
    const day=selectedDay.day;
    let dayURL = '';
    let whatWord = '';
    if(selectedCountry==="eng"){
        dayURL = "1";
        whatWord= "영어단어";
    }else if(selectedCountry==="jap"){
        dayURL = "2";
        whatWord= "일본어 단어";
    }else if(selectedCountry==="star"){
        dayURL = "3";
        whatWord= "내 단어";
    }
    const words = useFetch(`http://localhost:300${dayURL}/words?day=${day}`);
  
    return(
        <>
        <Header kind={selectedCountry}></Header>
        <h2>Day : {day}</h2>

        <table>
        <thead>
            <tr>
                <th>확인 여부</th>
                { selectedCountry != "star" &&(<th>나만의 단어장에 추가</th>)}
                <th>{whatWord}</th>
                <th>뜻</th>
                <th>조작</th>
            </tr>
        </thead>
        <tbody>
            {words.map(word=>(
                 <Word word={word} key={word.id}></Word>
            )
               
            )}
        </tbody>
        </table>
        
            
            </>
    );
}