import React, { useState, useCallback } from "react"
import {fetchPoint, fetchDirection} from '../api/api';
import { useDirections } from "../exemplo-hook";
import '../index.css';

export function Menu(){
    const [origem, setOrigem] = useState([]);
    const [destino, setDestino] = useState([]);
    const {addDirection} = useDirections();

    const pointHandleOrigin = async (point)=>{
        const res = await fetchPoint(point);
        setOrigem(res.features[0].geometry.coordinates);
        
    }

    const pointHandleDestination = async (point)=>{
        const res =  await fetchPoint(point);;
       setDestino(res.features[0].geometry.coordinates);
       
    }

    const handleDirection = async (e) => {
        e.preventDefault();
        console.log('alo');
        const res = await fetchDirection(origem,destino);
        addDirection({coordinates: res.features[0].geometry.coordinates})
    }

    

    return(
        <form onSubmit={handleDirection} className="trajectForm_container">
        <label>
          Origem:
          <input  onChange={ ((e) => pointHandleOrigin(e.currentTarget.value))}  type="text" />
        </label>
        <label>
          Destino:
          <input  onChange={ ((e) => pointHandleDestination(e.currentTarget.value))} type="text" />
        </label>
        <button type="submit" >Search</button>
      </form>
    )
}