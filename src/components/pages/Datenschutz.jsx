import HeroHeader from "../sections/HeroHeader.jsx";
import {InteractiveHoverButton} from "../InteractiveButton.jsx"


function Datenschutz() {
    return (
        <div className={`min-h-screen`}>
            <HeroHeader />
            <div className={`w-full p-6 pt-36 flex flex-row justify-center items-center`}>
                <h2> Datenschutz </h2>
            </div>
            <div className={`p-6 sm:p-16 w-full sm:w-1/2 m-auto flex flex-col gap-6`}>
                <section>
                    <p>Diese Datenschutzerklärung informiert über die Erhebung und Verwendung von Daten auf dieser Website.</p>
                </section>


                <section>
                    <p className="highlight">Verantwortlicher / Kontaktdaten:</p>
                    <p>
                        Familie Semper<br/>
                        Manuel und Daniela Lassl<br/>
                        Langfeld 27<br/>
                        A-3970 Weitra, Österreich<br/>
                        E-Mail: <a href="mailto:daniela.semper1@gmx.at" className="underline underline-offset-4">daniela.semper1@gmx.at</a><br/>
                        Telefon: +43 (0)664 7952710, +43 (0)664 3200339<br/>
                        Website: <a href="https://www.langfelder-biokartoffel.at" target="_blank" className="underline underline-offset-4">www.langfelder-biokartoffel.at</a>
                    </p>
                </section>

                <section>
                    <p className="highlight">Erhebung und Verwendung personenbezogener Daten:</p>
                    <p>Die Website sammelt keine personenbezogenen Daten der Besucher. Es werden weder Cookies noch Formulare verwendet, die Name, E-Mail-Adresse oder Telefonnummer abfragen.</p>
                </section>

                <section>
                    <p className="highlight">Bildrechte:</p>
                    <p>Alle auf dieser Website verwendeten Bilder und das Logo wurden von Marius Lassl erstellt. Eine Weiterverwendung, Vervielfältigung oder Veröffentlichung durch Dritte ist nicht gestattet. Die Nutzung ist nur nach ausdrücklicher schriftlicher Zustimmung von Marius Lassl erlaubt. Die Inhalte dürfen vom Website-Inhaber (Manuel und Daniela Semper) für den vereinbarten Zweck verwendet werden.</p>
                </section>

                <section>
                    <p className="highlight">Externe Links:</p>
                    <p>Die Website enthält einen Link zu <a href="https://www.bio-austria.at" target="_blank" className="underline underline-offset-4">Bio Austria</a>. Durch das Anklicken dieses Links können Daten an die verlinkte Website übertragen werden. Wir haben keinen Einfluss auf die Erhebung und Verwendung dieser Daten durch die verlinkte Website.</p>
                    <p>
                        Wir verwenden Google Fonts, die IP-Adressen verarbeiten. Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" className="underline underline-offset-4">Google Datenschutz</a>.
                    </p>
                </section>

                <section>
                    <p className="highlight">Sicherheitsmaßnahmen:</p>
                    <p>
                        Wir schützen personenbezogene Daten durch organisatorische und technische Maßnahmen. Dazu zählt insbesondere die TLS/SSL-Verschlüsselung der Datenübertragung über GitHub Pages, um ein angemessenes Schutzniveau zu gewährleisten.
                    </p>
                </section>

                <section>
                    <p className="highlight">Webhosting & Onlineangebot:</p>
                    <p>
                        Für den Betrieb unserer Website nutzen wir GitHub Pages, einen externen Hosting-Dienst. Dabei werden technisch IP-Adressen der Nutzer durch den Hosting-Dienst verarbeitet, um Inhalte korrekt auszuliefern. Wir selbst haben keinen direkten Zugriff auf diese Daten. Rechtsgrundlage für die Verarbeitung bei uns: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                </section>

                <section>
                    <p className="highlight">Änderungen der Datenschutzerklärung:</p>
                    <p>
                        Wir passen die Datenschutzerklärung bei Änderungen unserer Datenverarbeitung an und informieren Sie, falls eine Einwilligung oder andere Mitwirkung erforderlich wird.
                    </p>
                </section>

                <hr/>

                <section>
                    <p className="highlight">Website Erstellung:</p>
                    <p>
                        Die Website, das Logo und die Fotos wurden von Marius Lassl erstellt. Alle Rechte an der Gestaltung, den Bildern und dem Logo liegen bei Marius Lassl. Die Nutzung durch Dritte ist nur mit ausdrücklicher schriftlicher Zustimmung gestattet. Manuel und Daniela Semper dürfen das Logo, die Fotos und die Website für ihre eigenen Zwecke frei verwenden.
                    </p>
                </section>


                <section>
                    <p className="highlight">Dienstleister Kontaktdaten:</p>
                    <p>
                        Marius Lassl<br/>
                        E-Mail: office@marius-lassl.at<br/>
                        Website: <a href="https://www.marius-lassl.com" target="_blank" className="underline underline-offset-4">www.marius-lassl.com</a>
                    </p>
                </section>




                <div className="w-full flex flex-row justify-center mt-8 sm:mt-16">
                    <InteractiveHoverButton className="text-tiefbraun border-tiefbraun" onClick={() => (window.location.href = "#/")}> Zurück zum Start <span>&#8203;</span> <span>&#8203;</span><span>&#8203;</span><span>&#8203;</span><span>&#8203;</span></InteractiveHoverButton>
                </div>
            </div>
        </div>
    )
}

export default Datenschutz