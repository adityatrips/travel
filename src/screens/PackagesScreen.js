import React from "react";
import {Link} from "react-router-dom";

const PackagesScreen = () => {
    const destinations = [{
        name: "Bali", link: "/package/bali", img: "/assets/img/places/bali.png"
    }, {
        name: "Dubai", link: "/package/dubai", img: "/assets/img/places/dubai.png"
    }, {
        name: "Europe", link: "/package/europe", img: "/assets/img/places/europe.png"
    }, {
        name: "India", link: "/package/india", img: "/assets/img/places/india.png"
    }, {
        name: "Kerala", link: "/package/kerala", img: "/assets/img/places/kerala.png"
    }, {
        name: "singapore", link: "/package/singapore", img: "/assets/img/places/singapore.png"
    }, {
        name: "Thailand", link: "/package/thailand", img: "/assets/img/places/thailand.png"
    },]

    return <div className={'container'}>
        <div className="row row-cols-sm-1 row-cols-md-3">
            {destinations.map(dest => (<div className="col justify-content-center mb-4">
                <div className="bg-hover">
                    <div className="mask">
                        <Link style={{textDecoration: 'none'}} to={dest.link}
                              className={"secondary-bg p-2 mask"}>{dest.name}</Link>
                    </div>
                    <img className={"dest-img"} src={dest.img} alt={dest.name}/>

                </div>
            </div>))}
        </div>
    </div>
}

export default PackagesScreen;