import React, {useEffect, useState} from "react";
import LinkForm from "./LinkForm";
import {db} from '../firebase'


const Links = () => {
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEditLink = async (linkObject) => {
        if (currentId === ""){
            await db.collection('links').doc().set(linkObject);
            console.log("new task added");
        } else {
            await db.collection('links').doc(currentId).set(linkObject);
            setCurrentId('');
        }
    };

    const onDeleteLink = async id =>{
        if (window.confirm("Do you want eliminate?")){
            await db.collection('links').doc(id).delete();
            console.log('deleted')
        }
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setLinks(docs);
        });
    };    

    useEffect(() => {
        getLinks();
    }, []);

    return(
        <div>
            <div className="col-md-5 p-2">
                <LinkForm {...{addOrEditLink, currentId, links}} />
            </div>
            <div className="col-md-8">
                {links.map(link => (
                    <div className="card mb-1" key={link.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4>{link.name}</h4>
                                <div>
                                    <i className="material-icons text-danger" 
                                        onClick={() => onDeleteLink(link.id)}>close</i>
                                    <i className="material-icons text-danger" 
                                        onClick={() => setCurrentId(link.id)}>create</i>
                                </div>
                            </div>
                            <p>{link.description}</p>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                Go to Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Links;