import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import "../saecss/member.css"
import { AiFillLinkedin } from "react-icons/ai"
import {SiGmail} from "react-icons/si"

const Members = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://saeapi.saenitd.com/api/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country);
    // const img = document.querySelector("img");
    // const icons = document.querySelector(".icons");
    // img.onclick = function () {
    //     this.classList.toggle("active");
    //     icons.classList.toggle("active");
    // }
    return (
        <>
            <h1 className=" p-4 text-center" style={{ color: "red",textTransform:"uppercase"  }}>OUR TEAM</h1>
            <section class="page-section " id="team">
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red",textTransform:"uppercase"  }} >OFFICE-BEARERS</h1>
                    </div>
                    <div class="row ">
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2023) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="rounded mx-auto d-block" src={item.image} alt="..." />
                                        <h4  style={{textTransform:"uppercase"}}>{item.first_name} {item.last_name}</h4>
                                        <p class="text-muted">{item.post}</p>
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<a class="btn btn-muted  border-dark btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>
                                        }
                                         {
                                             (item.email)?
                                        <a class="btn btn-danger btn-social mx-2" href={`mailto:${item.email}`}><SiGmail /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.email}><SiGmail/></a>
                                        }
                                        {/* {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.facebook}><AiFillInstagram /></a>
                                        } */}
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                  
                </div>
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red", marginTop: "-400px", color: "red",textTransform:"uppercase" }} >SENIOR COORDINATORS</h1>
                    </div>
                    <div class="row">
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2024) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="rounded mx-auto d-block" src={item.image} alt="..." />
                                        <h4 className='mb-3  ' style={{textTransform:"uppercase"}}>{item.first_name} {item.last_name}</h4>
                                        {/* <p class="text-muted">{item.post}</p> */}
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<a class="btn btn-muted  border-dark btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>
                                        }
                                        {
                                             (item.email)?
                                        <a class="btn btn-danger btn-social mx-2" href={`mailto:${item.email}`}><SiGmail /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.email}><SiGmail /></a>
                                        }
                                        {/* {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.email}><AiFillInstagram /></a>
                                        } */}
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                    
                </div>
                <div class="container ">
                    <div class="text-center">
                    <h1 className=" p-4 text-center" style={{ color: "red", marginTop: "-50px",marginBottom: "10px", color: "red",textTransform:"uppercase" }}   >JUNIOR COORDINATORS</h1>
                    </div><br/><br/><br/><br/><br/><br/>
                    <div class="row"  style={{ marginTop: "-350px" }}>
                        {
                            country.map((item) =>{
                            var x = item.batch;
                            console.log(x);
                            return(
                                (x === 2025) ? <div class="col-lg-3">
                                    <div class="team-member">
                                        <img class="rounded mx-auto d-block" src={item.image} alt="..." />
                                        <h4 className='mb-2'  style={{textTransform:"uppercase"}}>{item.first_name} {item.last_name}</h4>
                                        
                                        {/* <p class="text-muted">{item.post}</p> */}
                                        {
                                            (item.linkedin)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>:<a class="btn btn-muted  border-dark btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>
                                        }
                                         {
                                             (item.email)?
                                        <a class="btn btn-danger btn-social mx-2" href={`mailto:${item.email}`}><SiGmail /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.email}><SiGmail /></a>
                                        }
                                        {/* {
                                            (item.insta)?
                                        <a class="btn btn-danger btn-social mx-2" href={item.insta}><AiFillInstagram /></a>:<a class="btn btn-muted border-dark btn-social mx-2" href={item.facebook}><AiFillInstagram /></a>
                                        } */}
                                    </div>
                                </div>:<h1></h1>)
                             } )
                        }
                    </div>
                    
                </div>
            </section>
            
           
            


        </>
    )
}

export default Members
