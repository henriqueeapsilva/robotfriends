import React, {Fragment} from "react";

const Card = ({ name, email, id }) => {
    return (
        <Fragment>
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;