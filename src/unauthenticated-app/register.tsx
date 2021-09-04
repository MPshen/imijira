import { Button, Form, Input } from "antd";
import React, { FormEvent } from "react";
import {useAuth} from "../context/auth-context";



const apiUrl = process.env.REACT_APP_API_URL


export const RegisterScreen = () => {
    const {register, user} = useAuth();
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
        register(values);
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
                <Button htmlType={"submit"} type={"primary"}>注册</Button>
            </Form.Item>
            
        </Form>
    )
}