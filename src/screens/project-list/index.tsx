import React from "react";
import { SearchPanel } from "./search-panel";
import { List, Project } from "./list";
import { useEffect, useState } from "react";
import { useMount, useDebounce, cleanObject } from "../../utils";
// import * as qs from "qs";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useAsync } from "../../utils/use-async";
import { useProjects } from "../../utils/project";
import { useUsers } from "../../utils/user";
import { useUrlQueryParam } from "../../utils/url";
// const apiUrl = process.env.REACT_APP_API_URL


export const ProjectListScreen = () => {

    const [param, setParam] = useUrlQueryParam(['name', 'personId'])
    const {data: users} = useUsers()
    const debounceParam = useDebounce(param,200)
    const {isLoading, error, data:list} = useProjects(debounceParam)

    return (
    <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users || []} param={param} setParam={setParam}/>
        {error? <Typography.Text type={"danger"}>{error.message}</Typography.Text>:null}
        <List loading={isLoading} users={users || []} dataSource={list || []}/>
    </Container>)
}

ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
padding: 3.2rem
`