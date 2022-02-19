import React from "react";
import './Slayder.scss';

const Slayder = () => {

    return (
        <div className="slayder">
            <ul className="slayder-slides">
                <li className="slayder-slide showing">Slide 1</li>
                <li className="slayder-slide">Slide 2</li>
                <li className="slayder-slide">Slide 3</li>
                <li className="slayder-slide">Slide 4</li>
                <li className="slayder-slide">Slide 5</li>
            </ul>
        </div>
    )
}

export default Slayder;