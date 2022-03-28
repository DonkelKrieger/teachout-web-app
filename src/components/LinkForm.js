import React, {useState} from "react";

const LinkForm = (props) => {

    const initialStateValues = {
        url:'',
        name:'',
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({...values, [name]: value})
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        props.addOrEditLink(values);
        //setValues{}
    };

    return(
        <form className='card card-body' onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                    <i className="material-icons">inser_link</i>
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="placeholder"
                    name="url"
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                    <i className="material-icons">create</i>
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="website name"
                    name="name"
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary btn-block">
                save
            </button>
        </form>
    )
};

export default LinkForm