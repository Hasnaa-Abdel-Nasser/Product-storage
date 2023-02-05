import React from 'react';
import '../AddProduct/add.css'
import {Put} from '../database/endPointe';
let dialogStyles = {
    width: '40%',
    height: '50%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: 'white',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '5px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

export const Edit = ({data , setData ,setProduct})=>{
    console.log(data);
    const close = ()=>{
        data.val = false;
        setData({
            ...data,
            val: false
        });
    };
    const update = ()=>{
        Put(data.id , data.name , data.price , data.description, setProduct);
        close();
    };
    const handel=(event)=>{
        if(event.target.name ==='name'){
            setData({
                ...data,
                name: event.target.value
            })
        }else if(event.target.name === 'price'){
            setData({
                ...data,
                price: event.target.value
            })
        }else{
            setData({
                ...data,
                description: event.target.value
            })
        }
    }
    let dialog = (
        <div style={dialogStyles}>
            <button style={dialogCloseButtonStyles} onClick={()=>{close()}}>x</button>
            <div style={{fontSize: '12px' , fontWeight: 'bold',color: 'rgb(44, 24, 109)',marginBottom: '10px'}}>
                <p>Edit Product</p>
                <form>
                    <label>Name</label>
                    <input type="text" onChange = {(event)=>handel(event)} name="name" id = "name" value={data.name}/>
                    <label>Price</label>
                    <input type="text" onChange = {(event)=>handel(event)} name="price" id = "price" value={data.price}/>
                    <label >Description</label>
                    <textarea onChange = {(event)=>handel(event)} rows = "5" cols = "40" name = "desc" id="desc" value={data.description}></textarea>
                </form>
                <button className = 'add-product' onClick={()=>{update()}}  style={{position: 'absolute',right:'20px',marginTop: '10px'}}>Save Change</button>
            </div>  
        </div>
    );

    if (!data.val) {
        dialog = null;
    }
    return (

        <div style={{backgroundColor: '#b2b2b280' , position: 'fixed' , top:0 , left:0,right:0,bottom:0}}>
            <div>
                {dialog}
            </div>
        </div>
    );
}