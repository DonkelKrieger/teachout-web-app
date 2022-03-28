import React, {useState, useEffect} from "react";
import { db } from "../firebase";

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
        props.addOrEditLink(values);
        setValues({...initialStateValues})
    };

    const getLinkById = async id => {
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()});
    }

    useEffect(() => {
        if (props.currentId === ''){
            setValues({...initialStateValues});
        } else {
            getLinkById(props.currentId)
        }
    }, [props.currentId]);

    return(
        <form className='card card-body' onSubmit={handleSubmit}>
           
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
                    value={values.name}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Url name"
                    name="url"
                    onChange={handleInputChange}
                    value={values.url}
                />
            </div>

            <button className="btn btn-primary btn-block">
                {props.currentId === '' ? 'Save': 'Update'}
            </button>
        </form>
    )
};

export default LinkForm