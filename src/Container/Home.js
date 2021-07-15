import React, { useEffect } from 'react'
import Hotel from "../Assets/Hotel.jpg";
import { useSelector } from 'react-redux';
import { data } from '../Store/Action'
import { useDispatch } from 'react-redux';

export const Home = () => {

    let state = useSelector(state => state)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(data())
    }, [])


    console.log(state.Cards)

    return (
        <div className="container mt-4">
            <div className="row">
                {Object.keys(state.Cards).length == 0 ? <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button> : state.Cards.map((e, i) => {
                    return (
                        <div key={i} className="col" style={{ margin: "10px", display: "flex", flexWrap: "wrap" }}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Hotel} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.hotel}</h5>
                                    <p className="card-text">{e.rooms}</p>
                                    <p className="card-text">{e.price}</p>
                                    <p className="card-text">{e.services}</p>
                                    <button className="btn btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
