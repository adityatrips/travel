import React from "react";
import tDb from './packageDb/thailand.json';
import {useParams} from "react-router-dom";
import ThailandDetails from "./Thailand/ThailandDetails";

const Thailand = () => {
    const {thailand} = tDb;
    const {packageName} = useParams();

    switch (packageName) {
        case "pearls-of-thailand":
            return <ThailandDetails packName={packageName}/>
        case "beaches-of-thailand":
            return <ThailandDetails packName={packageName}/>
        case "thai-paradise":
            return <ThailandDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

}

export default Thailand;