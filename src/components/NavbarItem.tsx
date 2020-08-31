import * as React from "react"
import "./NavbarItem.scss"

export default class NavbarItem extends React.Component {
    public render() {
        return (
            <div className="NavbarItem">
                { this.props.children }
            </div>
        )
    }
}
