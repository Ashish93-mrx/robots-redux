import React from "react";
import Card from "./Card";
//import { robots } from './robots';

const cardlist = ( {robots} ) => {
    // if(1){
    //     throw new Error('Nooooo!'); 
    // }
    return (
        <div>
        {
           robots.map((user,i) => {
        return (
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        />
        );
        })
        }
        </div>
    );
    
} 

export default cardlist;