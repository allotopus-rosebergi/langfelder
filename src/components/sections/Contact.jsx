import {useEffect} from "react";
import {SplitText} from "gsap/SplitText";
import {gsap} from "gsap";

import StandlImg from '../../assets/img/verkaufsstand.webp'

function Contact (){
    useEffect(() => {
        document.fonts.ready.then(() => {
            const split = SplitText.create('.info3', {type: "lines", mask:"lines"});

            gsap.fromTo(split.lines,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo(".para3",
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );

            gsap.fromTo('.title3',
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ".para3",
                        start: "top 80%",
                        end: "top 20%",
                    }
                }
            );
        });
    }, []);
    return(
        <>
            <section id="kontakt">
                <div  className={`lg:mx-16 lg:my-16 mx-0 my-0 mt-8`} >
                    <div className="flex flex-col-reverse lg:flex-row gap-16">

                        <img src={StandlImg} alt="Verkaufsstand Langfelder Bio Erdäpfel" className="w-full lg:w-1/2 object-cover object-center" loading="lazy"/>

                        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6">
                            <h2 className="title3"> Wie kommen Sie zu unseren Erdäpfeln? </h2>
                            <p className="para3"> Unsere Erdäpfel bekommen Sie direkt bei uns am Hof in Langfeld.
                                Im Verkaufsstand können Sie die Erdäpfel mittels Selbstbedienung kaufen. Geöffnet ist der Verkaufsstand von Montag bis Sonntag. Bei Frost sind die Erdäpfel im Haus erhältlich. Für größere Mengen bitten wir um Voranmeldung. </p>

                            <div className="info3 w-full flex flex-col justify-center pt-6 gap-6">
                                <div>
                                    <p> Rufen Sie uns an oder schreiben Sie uns auf WhatsApp </p>
                                    <p className="highlight text-lg"> 0664 7952710 </p>
                                    <p className="highlight text-lg"> 0664 3200339 </p>
                                </div>

                                <div>
                                    <p> Senden Sie uns eine E-Mail </p>
                                    <p className="highlight text-lg"> daniela.semper1@gmx.at </p>
                                </div>

                                <div>
                                    <p> Besuchen Sie uns </p>
                                    <p className="highlight text-lg"> Langfeld 27 </p>
                                    <p className="highlight text-lg"> 3970 Weitra </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact