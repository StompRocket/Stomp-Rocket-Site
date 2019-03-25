import { Component } from 'preact'

export class Showcase extends Component {
    render({ items }) {
        return (
            <div class="vcenter-full">
                <div class="container">
                    <h1 class="bold">Stuff we've worked on</h1>

                    <div class="wrap-box">
                        {
                            items.map(i =>
                                <div class="box container" accent={i.accent}>
                                    

                                    <h2 class="mono">
                                        {
                                            i.route ? 
                                            <a class="heading-link" href={i.route} accent={i.accent}>
                                                {i.title}
                                            </a>
                                            : i.title
                                        }
                                    </h2>
                                    <p class="white">
                                        {i.desc}
                                    </p>
                                    {
                                        i.url ? (
                                        <a class="product-link" href={"//" + i.url} target="_blank">
                                            {i.url}
                                        </a>
                                        ) : <i class="product-link">No website available</i>
                                    }
                                    <br />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}