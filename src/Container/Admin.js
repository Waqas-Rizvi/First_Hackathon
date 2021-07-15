import React, { useState } from 'react'
import firebase from '../Config/Firebase'

export const Admin = () => {
    let [hotel, sethotel] = useState("")
    const [rooms, setrooms] = useState("")
    const [price, setprice] = useState("")
    const [services, setservices] = useState("")

    const send = () => {
        let hoteldata = {
            hotel,
            rooms,
            price,
            services
        }
        console.log(hoteldata)
        firebase.database().ref("Hotels").push(hoteldata)
    }

    return (
        <div className="container bg-light p-3 mt-5" style={{ margin: "auto" }}>
            <center>
                <h1>Admin Panel</h1>
            </center>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Hotel Name</label>
                    <input onChange={(e) => sethotel(e.target.value)} value={hotel} type="text" className="form-control" placeholder="Enter Hotel Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">No of Rooms</label>
                    <input onChange={(e) => setrooms(e.target.value)} value={rooms} type="text" className="form-control" placeholder="Enter No of Rooms" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Per day price</label>
                    <input onChange={(e) => setprice(e.target.value)} value={price} type="text" className="form-control" placeholder="Enter Per day price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Services</label>
                    <input onChange={(e) => setservices(e.target.value)} value={services} type="text" className="form-control" placeholder="Enter Services" />
                </div>
            </form>
            <button className="btn btn-primary" onClick={send}>Add</button>
        </div>
    )
}
