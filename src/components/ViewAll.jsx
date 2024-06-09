import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table table-striped">
                <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">USER ID</th>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
      <th scope="col">BODY</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
       (value,index)=>{
            return <tr>
            <th scope="row">{index+1}</th>
            <td>{value.userId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.body}</td>
            <td></td>
          </tr>
       } 
    )}
  </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll