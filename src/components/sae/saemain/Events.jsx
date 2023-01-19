import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {AiOutlineClose} from "react-icons/ai"

const Events = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://saeapi.saenitd.com/api/event/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country[0])
    return (
        <>

            <div>
                <div className="text-center my-5">

                    <h1 style={{ color: "red" }}>Our Events</h1>



                </div>
            </div>
            

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                   
                    <div className="row">
                    {country.map((item) =>
                        <div className="col-lg-3  mb-4 shadow-lg p-3 m-0  bg-white rounded">
                            
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href={`#${item.name}`}>
                                    <div className="portfolio-hover1">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" style={{height:"300px",width:"300px"}} src={item.poster} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading " style={{textTransform:"uppercase"}} >{item.name}</div>
                                    <div className="portfolio-caption-subheading text-muted">{`${item.Writeup.substring(0, 200)}...`}</div>
                                </div>
                            </div>
                           
                        </div>
                         )
                        }
                        
                    </div>
                </div>
            </section>
            {country.map((item) =>
            <div className="portfolio-modal modal fade" id={item.name} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><AiOutlineClose size={64} color="red"/></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">

                                        <h2 className="text-uppercase">{item.name}</h2>
                                        <p className="item-intro text-muted">{item.date}</p>
                                        <img className="img-fluid d-block mx-auto" style={{width:"400px",height:"400px"}} src={item.poster} alt="..." />
                                        <p>{item.Writeup}</p>
                                        <ul className="list-inline">
                                            {/* <li>
                                                <strong>Client:</strong>
                                                Threads
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Illustration
                                            </li> */}
                                        </ul>
                                        <button className="btn btn-danger btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                           
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
            }

           

        </>
    )

}




export default Events
