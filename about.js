import { Component } from 'preact'

export class About extends Component {
    render() {
        return (
            <div class="vcenter">
                <div class="container">
                    <h1 class="bold">StompRocket</h1>
                    <h2>
                        We're a group of highschool students from California.
                        <br />
                        This is our website.
                    </h2>
                </div>
                <span class="scroll-prompt">Scroll Down</span>
            </div>
        )
    }
}
