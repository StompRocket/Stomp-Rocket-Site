import '@stomprocket/blastoff'
import { Navbar } from '@stomprocket/blastoff-preact'
import { Component } from 'preact'
import { Router } from 'preact-router'
import { About } from './about'
import { Showcase } from './showcase'
import './style'

let links = [
	{
		"body": "Github",
		"href": "//github.com/stomprocket"
	}
]

let projects = [
	{
		title: "Graphite Writer",
		desc: "A modren web based text editor, with Firebase, Vue JS, and Quill JS",
		url: "graphitewriter.com",
		accent: "graphite",
		repo: "Graphite-Writer"
	},
	{
		title: "Blast Off",
		desc: "A minimal and ux-focused CSS framework powered by Flexbox.",
		url: "blastoff.stomprocket.io",
		accent: "blastoff",
		repo: "BlastOff"
	},
	{
		title: "RootEd",
		desc: "A hackathon project that teaches you vocabulary by making deep connections​ between roots of words.",
		accent: "rooted",
		repo: "RootEd"
	},
	{
		title: "Myst",
		desc: "A a beautiful, lightweight, open source weather app developed by Ronan Furuta",
		url: "myst.stomprocket.io",
		accent: "myst",
		repo: "Myst"
	},
	{
		title: "Math",
		desc: "Text based smart calculator",
		url: "math.stomprocket.io",
		accent: "math",
		repo: "Math"
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

				<Showcase items={projects} />
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar title={ <img src="assets/sr-logo-light@2x.png" class="nav-img"></img> } links={links} />

				<HomePage />
			</div>
		);
	}
}
