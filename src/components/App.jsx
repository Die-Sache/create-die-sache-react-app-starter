import React from 'react';
import DieSache from "./DieSache/DieSache.jsx";
import styled from "styled-components";

const App = styled.div`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      margin: 0;
      padding: 0;
    `

export default function () {
    return (
        <App>
            <DieSache/>{/*This is a placeholder and should be removed*/}
            {/*The app content goes here*/}
        </App>
    )
}