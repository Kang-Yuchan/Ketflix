import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header `
    color: white;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    padding:0px 10px;
    z-index: 10;
`;

const List = styled.ul`
    display:flex;
   
`;

const Item = styled.li `
    width:80px;
    height: 50px;
    text-align:center;
    border-bottom: 3px solid 
        ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">ホーム</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV番組</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">検索</SLink>
            </Item>
            <Item current={pathname === "/detail"}>
                <SLink to="/detail">詳細</SLink>
            </Item>
        </List>
    </Header>
));