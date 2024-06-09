import React, { useState } from 'react'
import Navbar from './Navbar'

const AddPost = () => {
    const [data,setData]=useState(
        {
            "pid":"",
            "pname":"",
            "desc":"",
            "file":"",
            "cmt":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 align="center">ADD POST</h2>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post Id</label>
                            <input type="text" className="form-control" name='pid' value={data.pid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post Name</label>
                            <input type="text" className="form-control" name='pname' value={data.pname} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='desc'value={data.desc} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Choose File</label>
                            <input type="file"  id="" className="form-control" name='file' value={data.file} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Comments</label>
                            <input type="text" className="form-control" name='cmt' value={data.cmt} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost