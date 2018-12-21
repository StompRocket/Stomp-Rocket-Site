extern crate stdweb;
extern crate yew;

use yew::prelude::*;

pub enum Msg { }



type link = [String;2];

pub fn link(name: &str, href: &str) -> link {
    [name.to_string(), href.to_string()]
}

#[derive(PartialEq, Clone)]
pub struct Props {
    pub name: String,
    pub links: Vec<link>,
}

pub struct Navbar {
    pub name: String,
    pub links: Vec<link>,
}

impl Default for Props {
    fn default() -> Self {
        Self { 
            name: "default".to_string(),
            links: vec![],
        }
    }
}

impl Component for Navbar {
    type Message = Msg;
    type Properties = Props;

    fn create(props: Self::Properties, _: ComponentLink<Self>) -> Self {
        Self {
            name: props.name,
            links: props.links,
        }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }
}

impl Renderable<Navbar> for Navbar {
    fn view(&self) -> Html<Self> {

        let link_to_a = |b: Vec<link>| -> Vec<Html<Self>> {
            let space = "        ";

            let mut v: Vec<Html<Self>> = Vec::new();
            for a in b {
                let to = a[1].clone();
                let name = a[0].clone();
                v.push(html!{
                    <>
                        { space }
                        <a href=to,>
                            { name }
                        </a>
                    </>
                });
            }
            v
        };


        html! {
            <nav class=("navbar", "material", "white"),>
                <div class="container",>
                    <div class="nav-logo",>
                        <a href="/",><h3>{ &self.name }</h3></a>
                    </div>
                    <div class="nav-menu",>
                        { for link_to_a(self.links.clone()) }
                    </div>
                </div>
            </nav>
        }
    }
}
