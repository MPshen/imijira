import React, { FormEvent } from "react";
import {useAuth} from "../context/auth-context";
import {Button, Form, Input} from 'antd'
import { LongButton } from ".";


const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreen = () => {
    const {login, user} = useAuth();
    // const login = (param:{ username:string, password:string}) => {
    //     fetch(`${apiUrl}/register`,{
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(param)
    //     }).then(
    //         async (response: Response) => {
    //             if(response.ok){
    //             }
    //         }
    //     );
    //}


    // HTMLFormElement extends Element
    const handleSubmit = (values:{username: string, password: string}) =>{
        login(values);
    }

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required:true, message:'请输入用户名'}]}>
                <Input placeholder={'用户名'} type="text" id={'username'}/>
            </Form.Item>
            <Form.Item name={'password'} rules={[{required:true, message: '请输入密码'}]}>
                <Input placeholder={'密码'} type="password" id={'password'}/>
            </Form.Item>
            <Form.Item>
                <LongButton htmlType={"submit"} type={"primary"}>登录</LongButton>
            </Form.Item>
            
        </Form>
    )
}