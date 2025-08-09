import React from "react";
class FooterSectionClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const { name, gmail } = this.props
        return (
            <div>
                <h2>Name: {name}</h2>
                <h4>Gmail: {gmail}</h4> 
            </div>
        )
    }
}
export default FooterSectionClass