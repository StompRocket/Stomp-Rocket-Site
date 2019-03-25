import { Component } from 'preact'
import { Project } from './project'

export class Router extends Component {
    render({ routes, home, notfound }) {
        let l = window.location.pathname
        console.log('at', home)
        return <home />
    }
}
