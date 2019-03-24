import { Component } from 'preact'

export class Showcase extends Component {
    render({ items }) {
        return (
            <div class="vcenter">
                <div class="container">
                    <h1 class="bold">Stuff we've made</h1>

                    <div class="wrap-box">
                        {
                            items.map(i =>
                                <div class="box container" accent={i.accent}>
                                    <h2 class="mono">{i.title}</h2>
                                    <p>
                                        {i.desc}
                                    </p>
                                    <a class="product-link" href={"//" + i.url} target="_blank">{i.url}</a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}