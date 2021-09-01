import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { useMount, useDebounce } from "../../utils";
// import * as qs from "qs";
//const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    const debounceParam = useDebounce(param,1000)

    useEffect(()=>{
        // fetch(`http://localhost:3001/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
        // fetch(`http://localhost:3001/projects`).then(async response => {
        // fetch(`http://localhost:3001/projects?${qs.stringfy(cleanObject(param))}`).then(async response => {
        // fetch(`http://localhost:3001/projects?name=${cleanObject(param).name}&personId=${cleanObject(param).personId}`).then(async response => {
        fetch(`http://localhost:3001/projects?${debounceParam.name?`name=${debounceParam.name}&`:''}${debounceParam.personId?`personId=${debounceParam.personId}`:''}`).then(async response => {
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debounceParam])

    useMount(()=>{
        fetch(`http://localhost:3001/users`).then(async response => {
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