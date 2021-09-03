import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { useMount, useDebounce, cleanObject } from "../../utils";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    const debounceParam = useDebounce(param,1000)

    useEffect(()=>{
        // fetch(`http://localhost:3001/projects?${debounceParam.name?`name=${debounceParam.name}&`:''}${debounceParam.personId?`personId=${debounceParam.personId}`:''}`).then(async response => {
        // fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debounceParam])

    useMount(()=>{
        // fetch(`http://localhost:3001/users`).then(async response => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}