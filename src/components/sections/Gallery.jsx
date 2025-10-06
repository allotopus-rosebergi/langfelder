import {gallery} from '../../constants/index.jsx'
import {styles} from "../../styles.js";

function Gallery() {
    return (
        <>
            <div className={`${styles.marginY} w-full h-auto sm:h-dvh flex flex-col sm:flex-row my-16`}>
                <div className="w-full sm:w-1/2 h-full">
                    <div className="h-1/2">
                        <img src={gallery[0].img} alt={gallery[0].alt} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div className="h-1/2 object-cover">
                        <img src={gallery[1].img} alt={gallery[1].alt} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 h-full object-cover">
                    <div className="w-full h-2/3">
                        <img src={gallery[2].img} alt={gallery[2].alt} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div className="w-1/2 flex h-1/3">
                        <div className="w-full h-full flex flex-row">
                            <img src={gallery[3].img} alt={gallery[3].alt} className="w-full h-full object-cover" loading="lazy"/>
                            <img src={gallery[4].img} alt={gallery[4].alt} className="w-full h-full object-cover aspect-3/2" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery