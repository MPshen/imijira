import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL


export const LoginScreen = () => {
    const login = (param:{ username:string, password:string}) => {
        fetch(`${apiUrl}/login`,{
        // fetch(`http://localhost:3001/login`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(param)
        }).then(
            async (response: Response) => {
                if(response.ok){
                }
            }
        );
    }


    // HTMLFormElement extends Element
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const username:string = (event.currentTarget[0] as HTMLFormElement).value
        const password:string = (event.currentTarget[1] as HTMLFormElement).value
        login({username,password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'}/>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'}/>
        </div>
        <button type={"submit"}>登录</button>
    </form>
}