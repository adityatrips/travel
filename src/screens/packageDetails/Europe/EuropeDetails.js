import React, {useState} from "react";
import eDb from '../packageDb/europe.json'

const DubaiDetails = () => {
    const {europe} = eDb;

    let packDetails = {};
    const [selDay, setSelDay] = useState("One")
    const [dayEvt, setDayEvt] = useState({})
    const [dayIdx, setDayIdx] = useState(0)

    europe.map(b => {
        if (b.link === window.location.pathname) {
            console.log(b.link, window.location.pathname)
            packDetails = b;
        }
    })

    return (<div className={"container"}>
            <h2 className="text-center fw-bold text-uppercase">{packDetails.name}</h2>
            <p className={'text-white text-center secondary-bg'}>{packDetails.code}</p>
            <hr/>
            <ul className="list-group">
                {packDetails.day_wise.map((d, idx) => {
                    return (<li key={d.day} onClick={() => {
                        setSelDay(d.day);
                        setDayIdx(idx)
                    }}
                                style={{cursor: "pointer"}}
                                className="text-center secondary-fg  fw-bold text-uppercase list-group-item">
                        Day {d.day}
                    </li>)
                })}
            </ul>
            <hr/>
            <div className="day-content mt-4">
                <div className="arrow"></div>
                <h3 className={'text-uppercase'}>Day {selDay}</h3>
                <ul>
                    {packDetails.day_wise[dayIdx].desc}
                </ul>
            </div>
            <hr/>
            <h3 className={'text-uppercase'}>Accommodation</h3>
            <ul>
                {packDetails.accommodation.map(a => (
                    <li>{a}</li>
                ))}
            </ul>
            <hr/>
            <h3 className={'text-uppercase'}>Inclusions</h3>
            {
                Object.entries(packDetails.inclusions).map((k) => {
                    return (
                        <>
                            <h4>{k[0]}</h4>
                            <ul>
                                {k[1].map(p => (
                                    <li>{p}</li>
                                ))}
                            </ul>
                        </>
                    )
                })
            }
            <hr/>
            <h3 className={'text-uppercase'}>Exclusions</h3>
            <ul>
                {packDetails.exclusions.map(i => (
                    <li>{i}</li>
                ))}
            </ul>
            <hr/>
        </div>
    )
}

export default DubaiDetails;