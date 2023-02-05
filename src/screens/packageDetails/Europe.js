import React from "react";
import eDb from './packageDb/europe.json';
import {Link, useParams} from "react-router-dom";
import EuropeDetails from "./Europe/EuropeDetails";

const Europe = () => {
    const {europe} = eDb;
    const {packageName} = useParams();
    console.log(packageName)

    switch (packageName) {
        case "exclusive-europe":
            return <EuropeDetails packName={packageName}/>
        case "exclusive-europe-1":
            return <EuropeDetails packName={packageName}/>
        case "fascinating-paris-and-swiss":
            return <EuropeDetails packName={packageName}/>
        case "best-of-europe":
            return <EuropeDetails packName={packageName}/>
        case "grand-wonders-of-europe":
            return <EuropeDetails packName={packageName}/>
        case "grand-train-tour":
            return <EuropeDetails packName={packageName}/>
        case "greece-holiday-package":
            return <EuropeDetails packName={packageName}/>
        case "swiss-premium-tour":
            return <EuropeDetails packName={packageName}/>
        case "magical-tour-of-europe":
            return <EuropeDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

    return <div className={"container"}>
        <div className="row row-cols-sm-1 row-cols-md-2">
            {europe.map(pack => (<div className="col justify-content-center mb-3 h-100" key={pack.name}>
                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{pack.name}</h5>
                        <h6 className="card-subtitle text-muted">{pack.code}</h6>
                        <Link to={pack.link} className="mt-2 btn secondary-bg text-white w-100">Explore</Link>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
}

export default Europe;