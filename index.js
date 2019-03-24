import '@stomprocket/blastoff'
import { Navbar } from '@stomprocket/blastoff-preact'
import { Component } from 'preact'
import { About } from './about'
import { Showcase } from './showcase'
import './style';

let links = [
	{
		"body": "Github",
		"href": "//github.com/stomprocket"
	}
]

let projects = [
	{
		title: "Graphite Writer",
		desc: "F",
		url: "graphitewriter.com",
		accent: "graphite"
	},
	{
		title: "Blast Off",
		desc: "Css Framework",
		url: "blastoff.stomprocket.io",
		accent: "blastoff"
	},
	{
		title: "Myst",
		desc: "Elegant weather app",
		url: "myst.stomprocket.io",
		accent: "myst"
	},
	{
		title: "Math",
		desc: "Text based smart calculator",
		url: "math.stomprocket.io",
		accent: "math"
	}
]

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar title={ <img src="assets/sr-logo-light@2x.png" class="nav-img"></img> } links={links} />

				<About />

				<Showcase items={projects} />
			</div>
		);
	}
}
