import React from "react";
import { Link } from "react-router-dom";
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
`;

const List = styled.ul`
    display:flex;
   
`;

const Item = styled.li `
    width:70px;
    height: 50px;
    text-align:center;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">ホーム</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV番組</SLink>
            </Item>
            <Item>
                <SLink to="/search">検索</SLink>
            </Item>
            <Item>
                <SLink to="/detail">詳細</SLink>
            </Item>
        </List>
    </Header>
);