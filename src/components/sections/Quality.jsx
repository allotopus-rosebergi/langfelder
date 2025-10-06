import { Highlighter } from "../highlighter.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {gsap} from "gsap";
import {useEffect} from "react";

import KartoffelImg from '../../assets/img/kartoffeln.webp'


gsap.registerPlugin(ScrollTrigger,SplitText);

function Quality() {
    useEffect(() => {
        document.fonts.ready.then(() => {
            gsap.fromTo(".para2",
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: ".para2",
                        start: "top 80%",
                        end: "top 55%",
                    }
                }
            );

            gsap.fromTo('.title2',
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ".para2",
                        start: "top 80%",
                        end: "top 55%",
                    }
                }
            );
        });
    }, []);

    return (
        <section id="qualitaet">
            <div className={`lg:mx-16 lg:my-16 mx-0 my-0`}>
                <div className="flex flex-col-reverse lg:flex-row gap-16 mt-16">

                    <img src={KartoffelImg} alt="Unsere Langfelder Bio Erdäpfel, frisch vom Hof" className="w-full lg:w-1/2 object-cover" loading="lazy"/>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                        <h2 className="title2"> Was macht unsere Erdäpfel so besonders? </h2>
                        <p className="para2"> Unsere Erdäpfel wachsen im Waldviertel in Langfeld. Die Region ist bekannt für ihren
                            <Highlighter action="underline">
                                <span className="text-goldgelb font-bold">nährstoffreichen Boden</span>
                            </Highlighter>
                            und das
                            <Highlighter action="underline">
                                <span className="text-goldgelb font-bold">ideale Klima.</span>
                            </Highlighter>
                            Durch die mineralhaltige Erde und die sorgfältige Bewirtschaftung entstehen Erdäpfel mit einzigartigem Geschmack, hoher Qualität und langer Haltbarkeit. </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Quality