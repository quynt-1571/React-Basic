import React from 'react';

function Form(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    User Information    
                </div>
                <div className="card-body">
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4">Full name :</label>
                            <input
                                onChange={props.handleChange}
                                value={props.user.fullName}
                                type="text"
                                name="fullName"
                                className="form-control col-sm-8"
                            />
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4">Email :</label>
                            <input
                                onChange={props.handleChange}
                                value={props.user.email}
                                type="email"
                                name="email"
                                className="form-control col-sm-8"
                            />
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4">Birth day :</label>
                            <input
                                onChange={props.handleChange}
                                value={props.user.birthday}
                                type="date"
                                name="birthday"
                                className="form-control col-sm-8"
                        />
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4">Gender :</label>
                            <input
                                onChange={props.handleChange}
                                value="Male"
                                type="radio"
                                name="gender"
                                id="male"
                                className="form-control col-sm-4"
                            />
                            <label>Male</label>
                            <input
                                onChange={props.handleChange}
                                value="Female"
                                type="radio"
                                name="gender"
                                id="female"
                                className="form-control col-sm-4"
                            
                            />
                            <label>Female</label>
                        </div>
                        <div className="form-group row">
                        <label className="col-sm-4">Skills</label>
                        <div clas="col-sm-8 row">
                            {props.skills.map((skill) => {
                            return (
                                <div
                                className="custom-control custom-checkbox"
                                key={skill.id}
                                >
                                <input
                                    onChange={props.handleChange}
                                    value={JSON.stringify(skill)}
                                    name="skills"
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={skill.id}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor={skill.id}
                                >
                                    {skill.name}
                                </label>
                                </div>
                            );
                            })}
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-sm-4">Division :</label>
                        <select
                            onChange={props.handleChange}
                            value={props.user.division}
                            className="custom-select col-sm-8"
                            name="division"
                        >
                            <option value="">Choose...</option>
                            {props.divisions.map((division) => {
                            return (
                                <option value={division.name} key={division.id}>
                                {division.name}
                                </option>
                            );
                            })}
                        </select>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4">Address :</label>
                            <textarea
                                onChange={props.handleChange}
                                value={props.user.address}
                                name="address"
                                className="form-control col-sm-8"
                                rows="6"
                        />
                        </div>
                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;