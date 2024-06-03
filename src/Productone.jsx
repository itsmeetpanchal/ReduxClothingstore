import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { addtocartdata } from './Usereducer'


function Productone() {
    const {id}=useParams()
    const [name,setname] = useState('')
    const [price,setprice] = useState('')
    const [url,seturl] = useState('') 
    const [quantity,setquantity]=useState(1)
    const [size,setsize]=useState('')
    const [color,setcolor] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch(`http://localhost:5000/users/`+id)
        .then((res)=>{return res.json()})
        .then((data)=>{setname(data.name)
            seturl(data.url)
            setprice(data.price)
        })
    },[id])
    
    const addtocart=(e)=>{
        dispatch(addtocartdata({id:id,name:name,url:url,price:price,quantity:quantity,size:size,color:color }))
      
    }
    return (
        <>
            <Navbar />
            <div className='row me-0 p-5'>
                <div className='col-lg-6'>
                    <img src={url} alt="" className='img-fluid' />
                </div>
                <div className='col-lg-6'>
                    <p className='fs-1 fw-bold'>{name}</p>
                    <p className='fs-5 fw-bold'>${price}</p>
                    <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
                    <p className='text-danger fs-5'>Note:Select color and size is compalsary.</p>
                    <p className='fs-5'>Size &nbsp;&nbsp;<select className='w-50 p-2' onClick={(e)=>{setsize(e.target.value)}}>
                        <option disabled>Choose an option</option>
                        <option >Size S</option>
                        <option >Size M</option>
                        <option >Size L</option>
                        <option >Size XL</option>
                    </select></p>
                    <p className='fs-5'>Color <select className='w-50 p-2' onClick={(e)=>{setcolor(e.target.value)}}>
                        <option disabled>Choose an option</option>
                        <option >Red</option>
                        <option >Blue</option>
                        <option >White</option>
                        <option >Grey</option>
                    </select></p>
                    <div className='row border w-50 text-center ms-2 py-2 align-items-center fs-5'>
                        <div className='col-4 border-end btn' onClick={()=>{setquantity(quantity>1?quantity-1:1)}}>-</div>
                        <div className='col-4'>{quantity}</div>
                        <div className='col-4 border-start btn' onClick={()=>{setquantity(quantity+1)}}>+</div>
                    </div>
                    <button className='btn rounded-pill btn-primary py-2 px-4 mt-3 fs-5' onClick={()=>{addtocart()}}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Productone
