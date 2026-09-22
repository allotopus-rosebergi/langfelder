import { ReactComponent as DoorSvg } from '../../assets/svg/door_colored.svg';
import {potato_range} from "../../constants/index.jsx";
import {useEffect} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {Highlighter} from "../highlighter.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Products() {

    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = SplitText.create(".titleP", {type: "lines", mask:"lines"})
            gsap.fromTo(split.lines,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.inOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".titleP",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo(".infoBox",
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "ease.inOut",
                    scrollTrigger: {
                        trigger: ".infoBox",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo(".potatoes",
                {opacity: 0, y: 20,},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.inOut",
                    stagger: 0.8,
                    scrollTrigger: {
                        trigger: ".potatoes",
                        start: "top 90%",
                        scrub: true,
                    }
                }
            );
        })
    })

    return (
        <section id="sorten">
            <div className="mb-8 sm:mb-16 mt-8 sm:mt-48">
                <div className=" px-8 sm:px-16 py-8 titleP">
                    <h2 className="text-center leading-none"> Unsere Sorten </h2>
                    <p className="text-center text-tiefbraun"> Bei uns finden Sie für jedes Gericht die
                        passenden Erdäpfel! </p>
                </div>



                <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-y-32 sm:gap-y-48 mb-24 mt-32`}>
                    {potato_range.map((potato) => (
                        <div className="relative w-full potatoes" key={potato.id}>
                            <div className={`relative w-full flex flex-col items-center  ${potato.disabled ? "disabled opacity-45 pointer-events-none" : ""}`}>
                                <p className="cursive_highlight absolute -top-12">{potato.special}</p>
                                <h3>{potato.name}</h3>
                                <p>{potato.characteristics}</p>

                                <div className="relative w-5/6 sm:w-4/6 my-6 sm:mt-6 object-center">
                                    <DoorSvg className="w-2/3 opacity-65 m-auto" />
                                    <img
                                        src={potato.img}
                                        alt={potato.alt}
                                        loading="lazy"
                                        className={`absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:drop-shadow-xl`}
                                    />
                                </div>

                                <p className="w-5/6 sm:w-2/5">{potato.description}</p>
                            </div>

                            <div className={`${potato.disabled ? "absolute w-full h-full flex items-center justify-center top-0" : "hidden"}`}>
                                <p className="w-full text-center text-tiefbraun sm:text-3xl text-2xl rubik-bold">
                                    Derzeit leider <br/>
                                    nicht verfügbar!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>




                <div className="infoBox m-8 sm:m-16 p-4 sm:p-8 border-[1px] border-taubengrau rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-16 items-center">
                    <div className="w-full sm:w-2/3">
                        <p>Zusätzlich bieten wir auch Erdäpfel als <Highlighter action="underline"> <span className="text-goldgelb font-bold"> Futtermittel für Tiere </span></Highlighter> an. Dabei handelt es sich um aussortierte Erdäpfel verschiedener Sorten, die aufgrund kleiner Schönheitsfehler nicht für den Verkauf als Speisekartoffeln geeignet sind, jedoch weiterhin wertvolle Nährstoffe enthalten.</p>
                    </div>
                    <div className="w-full sm:w-1/3 text-left sm:text-center font-bold">
                        <p>Hinweis: Nur auf Anfrage erhältlich, bitte kontaktieren Sie uns im Vorhinein.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products