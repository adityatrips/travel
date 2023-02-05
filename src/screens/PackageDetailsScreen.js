import React from "react";
import {useParams} from "react-router-dom";
import Bali from "./packageDetails/Bali";
import Dubai from "./packageDetails/Dubai";
import Europe from "./packageDetails/Europe";
import Singapore from "./packageDetails/Singapore";

const PackageDetailsScreen = () => {
    const {place} = useParams();

    switch (place) {
        case "bali":
            return <Bali/>
        case "dubai":
            return <Dubai/>
        case "europe":
            return <Europe/>
        case "singapore":
            return <Singapore/>
        default:
            return <p className="text-center">404</p>
    }
}

export default PackageDetailsScreen;