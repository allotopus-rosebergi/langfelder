import img0 from '../assets/img/weide.webp';
import img1 from '../assets/img/kapelle.webp';
import img2 from '../assets/img/katze.webp';
import img3 from '../assets/img/gaense.webp';
import img4 from '../assets/img/kartoffeln.webp';

import img_ditta from '../assets/img/potatoes/Ditta_front.webp'
import img_agria from '../assets/img/potatoes/Agria_front.webp'
import img_hermes from '../assets/img/potatoes/Hermes_front.webp'
import img_valdivia from '../assets/img/potatoes/Valdivia_front.webp'

import { Highlighter } from "../components/highlighter.jsx";

export const navLinks = [
    {
        id: '0',
        title: 'Über uns',
        slug: 'ueber-uns'
    },
    {
        id: '1',
        title: 'Qualität',
        slug: 'qualitaet'
    },
    {
        id: '2',
        title: 'Sorten',
        slug: 'sorten',
    },
    {
        id: '3',
        title: 'Kontakt',
        slug: 'kontakt',
    }
]
export const gallery = [
    {
        id: '2',
        alt: 'Katze am Hof in Langfeld, Waldviertel',
        img: img2
    },
    {
        id: '1',
        alt: 'Kühe auf der Weide in Langfeld, Waldviertel',
        img: img0
    },
    {
        id: '0',
        alt: 'Kapelle in Langfeld, Waldviertel',
        img: img1
    },

    {
        id: '3',
        alt: 'Gänse am Teich in Langfeld, Waldviertel',
        img: img3
    },
    {
        id: '4',
        alt: 'Unsere Langfelder Bio Erdäpfel, frisch vom Hof',
        img: img4
    },
]
export const potato_range = [
    {
        id: '0',
        special: 'Am beliebtesten!',
        name: 'Ditta',
        alt: 'Ditta Kartoffel',
        characteristics: 'festkochend und speckig',
        img: img_ditta,
        description: (
            <>
                Mit ihrer kräftig gelben Farbe ist Ditta eine vielseitige Sorte,
                die sich besonders gut für{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Bratkartoffel</span>
                </Highlighter>
                ,{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Salate</span>
                </Highlighter>{" "}
                und viele andere Gerichte eignet.
            </>

        )
    },
    {
        id: '1',
        special: null,
        name: 'Agria',
        alt: 'Agria Kartoffel',
        characteristics: 'leicht mehlig bis mehlig',
        img: img_agria,
        description: (
            <>
                Die Sorte Agria überzeugt mit gelbem Fleisch und kräftiger Farbe.
                Sie eignet sich ideal für{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Püree</span>
                </Highlighter>
                ,{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Knödel</span>
                </Highlighter>
                ,{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Pommes Frites</span>
                </Highlighter>{" "}
                und{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">knusprige Chips</span>
                </Highlighter>
                .
            </>
        )
    },
    {
        id: '2',
        special: null,
        name: 'Hermes',
        alt: 'Hermes Kartoffel',
        characteristics: 'sehr mehlig',
        img: img_hermes,
        description: (
            <>
                Hermes hat eine sehr runde Knolle, eine gelbe Schale und ein gelbliches Fleisch.
                Sie eignet sich hervorragend für mehlige Speisen wie{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Püree</span>
                </Highlighter>
                ,{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Knödel</span>
                </Highlighter>{" "}
                oder{" "}
                <Highlighter action="highlight">
                    <span className="text-tiefbraun">Eintöpfe</span>
                </Highlighter>
                .
            </>
        )
    },
    {
        id: '3',
        special: null,
        disabled: true,
        name: 'Valdivia',
        alt: 'Valdivia Kartoffel',
        characteristics: 'festkochend und sehr speckig',
        img: img_valdivia,
        description: (
            <>
                Valdivia hat eine längliche, ovale Form und eignet sich besonders gut für <Highlighter action="highlight"> <span className="text-tiefbraun">frische Salate.</span></Highlighter>
            </>
        )
    },
]