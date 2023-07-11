import React from "react";

import './grid-system.scss';

const GirdSystem = () => {
    return (
        <div className={"grid wide container"}>
            <div className="row">
                <div className="col l-3 m-6 c-6">
                    <h1 className="course_item">
                        Course 1
                    </h1>
                </div>

                <div className="col l-3 m-6 c-6">
                    <h1 className="course_item">
                        Course 2
                    </h1>
                </div>

                <div className="col l-3 m-6 c-6">
                    <h1 className="course_item">
                        Course 3
                    </h1>
                </div>

                <div className="col l-3 m-6 c-6">
                    <h1 className="course_item">
                        Course 4
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default GirdSystem;