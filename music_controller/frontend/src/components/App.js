import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoomPage from "./CreateRoomPage";
import HomePage from './HomePage';
import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div>
                <HomePage />
                {/* <RoomJoinPage />
                <CreateRoomPage /> */}
            </div>

        );
    }
}

const appDiv = document.getElementById('app');
render(<App name="Tim" />, appDiv);