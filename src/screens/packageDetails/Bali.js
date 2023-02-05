import React from "react";
import bDb from './packageDb/bali.json';
import {Link, useParams} from "react-router-dom";
import BaliDetails from "./Bali/BaliDetails";

const Bali = () => {
    const {bali} = bDb;

    const {packageName} = useParams();
    console.log(packageName)
    switch (packageName) {
        case "dazzling-bali-family-package":
            return <BaliDetails packName={packageName}/>
        case "futuristic-bali-package":
            return <BaliDetails packName={packageName}/>
        case "fully-loaded-family-package":
            return <BaliDetails packName={packageName}/>
        case "glamorous-couple-package":
            return <BaliDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

    return <div className={"container"}>
        <div className="row row-cols-sm-1 row-cols-md-2">
            {bali.map(pack => (
                <div className="col justify-content-center mb-3 h-100" key={pack.name}>
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">{pack.name}</h5>
                            <h6 className="card-subtitle text-muted">{pack.code}</h6>
                            <Link to={pack.link} className="mt-2 btn secondary-bg text-white w-100">Explore</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Bali;