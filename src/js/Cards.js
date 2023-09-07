import React, {Component} from "react"
import Card from "./Card";

export class Cards extends Component {
    render() {
        return (
            <main>
                {this.props.cards.map(elem => (
                    <Card key={elem.id} card={elem}/>
                ))}
            </main>
        )
    }
}

export default Cards