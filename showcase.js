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
                                            i.repo ? 
                                            <a class="heading-link" href={
                                                        "//github.com/stomprocket/" + i.repo
                                                }>
                                                <img src="assets/github.svg" class="gh-icon" />
                                            </a>
                                            : <span />
                                        }

                                        {i.title}
                                    </h2>
                                    <p>
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