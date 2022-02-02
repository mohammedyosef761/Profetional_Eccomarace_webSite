import {useState,useEffect} from 'react';
import './Cart.css'
// import data from '../../data.json'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart , addQuantity } from '../CounterSlice/CounterSlice'
import Bounce from 'react-reveal/Bounce';



function Cart(){

    // const [cartItems,setCartItems] = useState(data); 

   

    const dispatch = useDispatch();
    let cartItems = useSelector((state) => state.counter.cartItems)

  
    const handleRemoveItem = (item)=>{
      dispatch(removeFromCart(item));

      console.log(item);
    }


  

    const [quantity,setQuantity]= useState(1)

    const handleaddQuantity = (item,e)=>{
        setQuantity(e.target.value);
        let newItem=cartItems.find(item2=>item2.id ===item.id)
        newItem ={...newItem,qty:e.target.value};
        dispatch(addQuantity(newItem));
    }
    return (

        <div className='main'>
        <Header />
        <Bounce bottom cascade>
        <div className="container ">
      
            {cartItems.map(item=>(
              <div className="d-lg-flex justify-content-around align-item-center my-4 bg-light text-center cart m-3">
              <img src={"/images/"+item.images.slice(12)} className="m-2 h-25"/>
              <p className="text-info display-8 m-auto text-center bg-light">type:{item.title}</p>
              <p className="text-info display-8 m-auto text-center bg-light">price:${item.price}</p>
              <label className="text-info display-8 m-auto text-center bg-light">qty:</label>
              <input className="text-danger w-20 mt-5 mb-5 bg-info mx-2 me-3" value={quantity} min="1" type="number" onChange={(e)=>handleaddQuantity(item,e)}></input>
              <button className='btn btn-danger m-5'   onClick={(()=>handleRemoveItem(item.id))}>remove</button>
              </div>
              ))}
             

              <h3 className='text-center text-danger'>Total Price:
              {cartItems.reduce((acc,item)=>{
                  return acc +=(item.price) *(item.qty);
              },0)}
              $</h3>
        </div>
        </Bounce>

        <Footer />
        </div>
    )
}

export default Cart;





//   cartItems = JSON.parse(localStorage.getItem("cartItems"))||[] ;
  // console.log("e",e.target.value);
        // console.log("item",item);

      
        // console.log(item);

    //    let index=cartItems.find(item2=>item2.id ===item.id);
       //console.log("index",index);
        // index={...index,qty:quantity}
        // console.log("quantity",quantity);
        // const i= cartItems.findIndex(item2 =>item2.id ===item.id);
        // if(i !==-1){
        //     let tmp={...cartItems[i],qty:quantity};            
        //     cartItems=[...cartItems,tmp];
           
        // }
        // localStorage.setItem('cartItems',JSON.stringify(cartItems));
    //   localStorage.setItem('cartItems',JSON.stringify(cartItems));

      // useEffect(()=>{
    //     localStorage.setItem('cartItems',JSON.stringify(cartItems));
    //   },[cartItems])

    //  cartItems = JSON.parse(localStorage.getItem("cartItems"))||[] ;
