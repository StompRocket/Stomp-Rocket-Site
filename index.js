import '@stomprocket/blastoff'
import { Navbar } from '@stomprocket/blastoff-preact'
import { Component } from 'preact'
import { Project } from './project'
import { About } from './about'
import { Showcase } from './showcase'
import './style'

const links = [
	{
		"body": "Github",
		"href": "//github.com/stomprocket"
	}
]

const projects = [
	{
		title: "Graphite Writer",
		desc: "A modren web based text editor, with Firebase, Vue JS, and Quill JS",
		url: "graphitewriter.com",
		accent: "graphite",
		repo: "Graphite-Writer",
		route: '/graphite'
	},
	{
		title: "Blast Off",
		desc: "A minimal and ux-focused CSS framework powered by Flexbox.",
		url: "blastoff.stomprocket.io",
		accent: "blastoff",
		repo: "BlastOff",
		route: '/blastoff'
	},
	{
		title: "RootEd",
		desc: "A hackathon project that teaches you vocabulary by making deep connections​ between roots of words.",
		accent: "rooted",
		repo: "RootEd",
		route: '/rooted'
	},
	{
		title: "Myst",
		desc: "A a beautiful, lightweight, open source weather app developed by Ronan Furuta",
		url: "myst.stomprocket.io",
		accent: "myst",
		repo: "Myst",
		route: '/myst'
	},
	{
		title: "Math",
		desc: "Text based smart calculator",
		url: "math.stomprocket.io",
		accent: "math",
		repo: "Math",
		route: '/math'
	},
	{
		title: "Hyphen-Hacks",
		desc: "Internal dashboard for the hyphen-hacks hackathon",
		url: "hyphen-hacks.com",
		accent: "hh"
	}
]

class HomePage extends Component {
	render() {
		return (
			<div>
				<About />

				<Showcase items={Object.keys(projects).map(k => projects[k])} />
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar title={ <img src="assets/sr-logo-light@2x.png" class="nav-img"></img> } links={links} />

				{
					typeof window !== 'undefined' ?
						window.location.pathname == "/" ?
							<HomePage />
						:
							<Project
								data={projects.filter((p) => (p.route == window.location.pathname))[0]}
							/>
					: <HomePage />
				}
			</div>
		)
	}
}
