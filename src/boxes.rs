extern crate yew;
use yew::prelude::*;

pub struct Box {
    pub heading: String,
    pub img_url: String,
    pub description: String,
    pub link: String,
}

pub struct Msg { }

#[derive(PartialEq, Clone)]
pub struct BoxProps {
    pub heading: &'static str,
    pub img_url: &'static str,
    pub description: &'static str,
    pub link: &'static str,
}

impl Component for Box {
    type Message = Msg;
    type Properties = BoxProps;

    fn create(props: Self::Properties, _: ComponentLink<Self>) -> Self {
        Self {
            heading: props.heading.to_string(),
            img_url: props.img_url.to_string(),
            description: props.description.to_string(),
            link: props.link.to_string(),
        }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }
}

impl Default for BoxProps {
    fn default() -> Self {
        Self {
            heading: "",
            img_url: "",
            description: "",
            link: "",
        }
    }
}

impl Renderable<Box> for Box {

    fn view(&self) -> Html<Self> {
        let show_link = |link: String| -> Html<Self> {
            if !link.is_empty() {
                html!{
                    <a href=link.clone(),>
                        { link }
                    </a>
                }
            } else {
                html!{}
            }
        };

        let show_image = |img: String| -> Html<Self> {
            if !img.is_empty() {
                html!{
                    <img src=img.clone(),/>
                }
            } else {
                html!{ <a/> }
            }
        };


        html!{
            <div class="box",>
                { show_image(self.img_url.clone()) }
                <div class="container",>
                    <h3>{ &self.heading }</h3>
                    <br/>
                    <p>
                        { &self.description }
                    </p>
                    { show_link(self.link.clone()) }
                </div>
            </div>
        }
    }

}