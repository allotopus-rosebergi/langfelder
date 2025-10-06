import {styles} from '../../styles.js';
import { Highlighter } from "../highlighter.jsx";
import {useEffect} from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {Split} from "lucide-react";

import AboutUsImg from '../../assets/img/about_us.webp'
import FamilenfotoImg from '../../assets/img/about_us_full.webp'


gsap.registerPlugin(ScrollTrigger,SplitText);

function AboutUs() {
    useEffect(() => {
        document.fonts.ready.then(() => {
            gsap.fromTo(".para",
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: ".para",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo('.title',
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ".para",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );
        });
    }, []);
    return (
        <section id="ueber-uns">
            <div  className="lg:mx-16 lg:my-16 mx-0 my-0" >
                <div className="flex flex-col lg:flex-row gap-16">
                    <img src={AboutUsImg} alt="Familie Semper" className=" w-full lg:w-1/2 object-cover" loading="lazy"/>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                        <p className="title cursive_highlight"> Willkommen! </p>
                        <h2 className="title"> Wir sind die Familie Semper</h2>
                        <p className="para"> … ehemals Lassl.
                            <Highlighter action="underline"> <span className="text-goldgelb font-bold">Schon seit 1992 </span></Highlighter>  dreht sich bei uns alles um Erdäpfel. Als Familienbetrieb arbeiten wir Seite an Seite und bringen Erfahrung und Begeisterung für die Landwirtschaft zusammen. </p>
                    </div>
                </div>
            </div>

            <div className={`${styles.marginY} mt-16`}>
                <img src={FamilenfotoImg} alt="Familienfoto Semper" className="w-full aspect-1/1 sm:aspect-auto object-cover" loading="lazy"/>
            </div>
        </section>
    )
}

export default AboutUs