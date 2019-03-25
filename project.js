import { Component } from 'preact'

class Info extends Component {
    render({ prompt, val }) {
        return (
            <span class="project-info mono">
                <span>{prompt}&nbsp;</span>
                
                <b class="bold">{val}</b>
            </span>
        )
    }
}

export class Project extends Component {
    state = {
        language: 'Unknown',
        forks: 0,
        lastUpdate: 'Unknown'
    }

    parseDate = x => x.getMonth() + '/' + x.getDay() + '/' + x.getFullYear()

    componentDidMount() {
        let { repo } = this.props.data
        fetch('https://api.github.com/repos/stomprocket/' + repo)
            .then(e => e.json())
            .then(data => {
                this.setState(data)
                return data
            })
            .then(data => 
                this.setState({
                    lastUpdate: this.parseDate(new Date(data.updated_at))
                })
            )
    }

    render({ data }, { language, forks, open_issues, license, lastUpdate, stargazers_count }) {
        return (
            <div class="container">
                <h1 accent={data.accent} class="mono transition">
                    <a href={'//github.com/stomprocket/' + data.repo}
                        class="heading-link"
                        accent={data.accent}
                    >
                        {data.title}
                    </a>
                </h1>
                <div class="infos">
                    <Info prompt="Language" val={language} />
                    <Info prompt="Forks" val={forks} />
                    <Info prompt="Stargazers" val={stargazers_count} />
                    <Info prompt="Issues" val={open_issues} />
                    <Info prompt="License" val={license ? license.spdx_id : 'Unknown'} />
                    <Info prompt="Updated at" val={lastUpdate} />
                </div>
                <p class="sizeable">
                    {data.desc}
                </p>
            </div>
        )
    }
}
