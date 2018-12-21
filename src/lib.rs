extern crate stdweb;
#[macro_use]
extern crate yew;

use yew::prelude::*;


mod navbar;
mod boxes;


pub struct Model { }

#[derive(Debug, Clone)]
pub enum Msg {}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Model { }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
    }
}

impl Renderable<Model> for Model {
    fn view(&self) -> Html<Self> {
        html!{
            <>
                <navbar::Navbar: name="StompRocket", links=vec![
                    navbar::link("Github", "https://github.com/stomprocket"),
                ], />

                <div class="container",>
                    <br/>
                    <h2>{ "Projects:" }</h2>
                    <br/>

                    <boxes::Box: heading="Graphite Writer", 
                        description="A modern document editor for your browser",
                        link="https://graphitewriter.com",
                        img_url="graphite.jpg",/>

                </div>
            </>
        }
    }
}
