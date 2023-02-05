import React from "react";
import {useParams} from "react-router-dom";
import Bali from "./packageDetails/Bali";
import Dubai from "./packageDetails/Dubai";
import Europe from "./packageDetails/Europe";
import Singapore from "./packageDetails/Singapore";
import Thailand from "./packageDetails/Thailand";

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
        case "thailand":
            return <Thailand/>
        default:
            return <p className="text-center">404</p>
    }
}

export default PackageDetailsScreen;