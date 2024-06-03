import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const refreshdata = ()=>{
        fetch(`http://localhost:5000/addtocart`)
        .then((res)=>{return res.json()})
        .then((data)=>{})
    }
const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        userData:(state,action)=>{
            state.push(action.payload)
        },
        addtocartdata:(state,action)=>{
            fetch('http://localhost:5000/addtocart',
                {
                    method:'post',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(action.payload)
                }
            )
            .then((res)=>{
                if(res){
                    toast.success('Product added to cart...')
                    window.location.reload()
                }
                else{
                    toast.warning('Not added check the error...')
                }
            })
        },
        updatedata: (state, action) => {
            console.log(action.payload.id)
            console.log(state)
            
        },
        deletedata:(state,action)=>{
            fetch(`http://localhost:5000/addtocart/`+action.payload.id,
                {
                    method:'delete'
                }
            )
            .then((res)=>{
                if(res){
                    window.location.reload()
                }
                else{
                    toast.warning('Not deleted check the error...')
                }
            })
        }
    }
})
export const {userData,addtocartdata,deletedata,updatedata} = userSlice.actions;
export default userSlice.reducer;