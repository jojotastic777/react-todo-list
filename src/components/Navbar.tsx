import * as React from "react"
import "./Navbar.scss"

export default class Navbar extends React.Component {
    public render() {
        return (
            <div className={'Navbar'}>
                { this.props.children }
            </div>
        )
    }
}
