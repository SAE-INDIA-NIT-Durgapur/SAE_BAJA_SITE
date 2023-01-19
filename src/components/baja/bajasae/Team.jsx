import { useState, React } from 'react'
import axios from "axios"
import { useEffect, usesState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
import "../bajacss/team.css"
const Team = () => {
    const [country, setcountry] = useState([]);
    useEffect(() => {
        axios.get(`https://saeapi.saenitd.com/api/baja/`)
            .then(res => {
                const persons = res.data;
                setcountry(persons);
            })
    }, []);
    console.log(country)
    return (
        <>

            <section className="page-section bg-light" id="team">
                <div className="container mt-4">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <div className="row">
                        {
                            country.map((item) =>
                                <div className="col-lg-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src={item.image} alt="..." />
                                        <h4 style={{textTransform:"uppercase"}}>{item.name}</h4>
                                        <p className="text-muted">{item.post}</p>
                                        <a className="btn btn-dark btn-social mx-2" href={item.linkedin}><AiFillLinkedin /></a>
                                        {/* <a className="btn btn-dark btn-social mx-2" href={item.facebook}><AiFillFacebook /></a>
                                        <a className="btn btn-dark btn-social mx-2" href={item.insta}><AiFillInstagram /></a> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted"></p></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team
