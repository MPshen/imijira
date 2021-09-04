import styled from "@emotion/styled";
import React from "react";
import { Row } from "./components/lib";
import { useAuth } from "./context/auth-context";
import { ProjectListScreen } from "./screens/project-list";

export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return (
        <Container>
            <Header between={true}>
                <HeaderLeft gap={true}>
                    <h3>Logo</h3>
                    <h3>项目</h3>
                    <h3>用户</h3>
                </HeaderLeft>
                <HeaderRight>
                    <button onClick={logout}>登出</button> 
                </HeaderRight>                               
            </Header>
            <Main>
                <ProjectListScreen/>                
            </Main>
        </Container>
    ); 
}

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr 6rem;
/* grid-template-columns: 20rem 1fr 20rem; */
height: 100vh;
`

// grid-area 用来给grid子元素起名字
const Header = styled(Row)``
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main``
