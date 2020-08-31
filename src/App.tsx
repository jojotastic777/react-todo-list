import * as React from "react"
import Navbar from "./components/Navbar"
import NavbarItem from "./components/NavbarItem"
import "./App.scss"

export default class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Navbar>
                    <NavbarItem >One</NavbarItem>
                    <NavbarItem>Two</NavbarItem>
                    <NavbarItem>Three</NavbarItem>
                </Navbar>
            </div>
        )
    }
}
