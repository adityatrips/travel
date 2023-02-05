import React from "react";
import dDb from './packageDb/dubai.json';
import {Link, useParams} from "react-router-dom";
import DubaiDetails from "./Dubai/DubaiDetails";

const Dubai = () => {
    const {dubai} = dDb;

    const {packageName} = useParams();
    console.log(packageName)
    switch (packageName) {
        case "incredible-dubai":
            return <DubaiDetails packName={packageName}/>
        case "dubai-adventure":
            return <DubaiDetails packName={packageName}/>
        case "spectacular-dubai":
            return <DubaiDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

    return <div className={"container"}>
        <div className="row row-cols-sm-1 row-cols-md-2">
            {dubai.map(pack => (
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

export default Dubai;