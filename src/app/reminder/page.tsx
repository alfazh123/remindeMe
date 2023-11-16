"use client"; 

import React from "react";
import {useState, useEffect} from "react";
import { useRouter } from "next/router";


export default function Reminders() {

    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState("");
    const [liquid, setLiquid] = useState("infuse 1");

    function handleClick(){
        const router = useRouter();
        router.push({
            pathname: "/",
            query: {name: time, reminder: reminder, liquid: liquid},
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("succes")
        
        const data = {
            time: time,
            reminder: reminder,
            liquid: liquid
        }
        console.log(data);
        return data;
    }



    return (
        <div className="bg-blue-400 h-screen flex flex-col p-24 items-center">
            <h1>Reminders</h1>
            <form className="flex flex-col">
                <label htmlFor="reminder">Reminder</label>
                <input value={reminder} 
                onChange={({target}) => setReminder(target.value)}
                name="reminder"
                className="text-blue-400 rounded-md px-3 py-2" type="text" id="reminder" />
                
                <label htmlFor="time">Time</label>
                <input value={time}
                onChange={({target}) => setTime(target.value)}
                name="time"
                id="time"
                className="text-blue-400 rounded-md px-3 py-2" type="time"/>
                
                <label htmlFor="date">Liquid</label>
                <select
                value={liquid}
                onChange={({target}) => setLiquid(target.value)}
                name="liquid"
                id="liquid"
                className="text-blue-400 rounded-md px-3 py-2" >
                    <option value="infuse1">Infuse 1</option>
                    <option value="infuse2">Infuse 2</option>
                    <option value="infuse3">Infuse 3</option>
                </select>
                
                <button onClick={handleSubmit} type="submit" className="bg-blue-700 px-3 py-2 rounded-md mt-5">Add</button>
            </form>
        </div>
    )
}