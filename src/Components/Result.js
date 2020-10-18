import React from "react";

function Result(props) {
    return (
        props.isSubmit && (
        <div className="container">
            <div className="card">
            <div className="card-body">
                <p>Fullname : {props.user.fullName}</p>
                <p>Email : {props.user.email}</p>
                <p>Birthday: {props.user.birthday}</p>
                <p>Gender: {props.user.gender}</p>
                <p>
                Skills:{" "}
                {props.user.skills.map((skill) => {
                    return (
                        <p key={skill.id}>
                        {skill.name}
                        </p>
                    );
                })}
                </p>
                <p>Division : {props.user.division}</p>
                <p>Address : {props.user.address}</p>
            </div>
            </div>
        </div>
        )
    );
}

export default Result;
