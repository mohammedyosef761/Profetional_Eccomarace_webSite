import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './ShoppingNow.css';
import data from '../../data.json'
import { useEffect, useState } from "react";
import ModalProducts from "./ModalProducts";
import Filter from "./Filter";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart  } from '../CounterSlice/CounterSlice';
import Bounce from 'react-reveal/Bounce';

function ShoppingNow(){

  const [img,setImage]= useState([]);

const newProduct = useSelector((state) => state.counter.newProduct);
const [products,setProducts] = useState(newProduct);
console.log(newProduct);

// console.log("URL",URL.createObjectURL(newProduct.images))
// console.log("newProducts",newProduct[0].images.length)



// let images="/images/" ;
// let index=0;
// if(newProduct.length>0)index = newProduct.length-1;

// if(newProduct.length>0){
// for(let i=12;i<newProduct[index].images.length;i++){
//  images +=newProduct[index].images[i];
// }
// setImage([...img,images]);
// }

console.log("img",img);
// newProduct[index]=[...newProduct[index] , images:image];


// useEffect( ()=>{
  // const newProduct = JSON.parse(localStorage.getItem("newProduct"))||{}

// localStorage.setItem('products' , JSON.stringify(products));
// },[products]);


const [modal,setModal] = useState("");

const openModal = (modal)=>{
 setModal(modal);
}

const closeModal = ()=>{
    setModal(false);
}

const [sort ,setSort] = useState("");

const handeleFilterByOrder = (e)=>{
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts   = productsClone.sort(function(a,b){
      if(order === "lowest"){
        return a.price - b.price
      }
      else if(order==="highest"){
          return b.price - a.price 
      }
      else{
        return a.id < b.id ? 1 : -1 
      }
    });
    setProducts(newProducts);
  }

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter.cartItems)


  const handleaddToCart = (item)=>{
    dispatch(addToCart(item));
    console.log(item);
  }



//  useEffect(()=>{
//    if(newProduct)setProducts([...products,newProduct])
//   },[newProduct])

  // useEffect(()=>{
  //   console.log(newProduct);
  // },[cartItems])


return (
    <div className="product_wrapper">
    <Header />
      <div className="main text-center ">
          <h3 className="text-center text-info">Our Products</h3> 
 
    
    <Filter 
        sort={sort}
        handeleFilterByOrder={handeleFilterByOrder} 

    />

{/* "C:\\fakepath\\IPHONE7.jpg" 

src={"/images/"+item.images.slice(12)}

we just need IPHONE7.jpg

so we take slice

*/}

{newProduct.length>0 &&
          <div className="d-flex justify-content-center align-item-center">

                    <div className="container my-3" >
                    <Bounce left cascade>
                    <div className="row">
                    {
                    products.map((item,index)=>(<div className="  col-lg-4 col-sm-12 col-md-6 my-3">
                        <div className="card" key={item.id}>
                                <img src={"/images/"+item.images.slice(12)} className="card-img-top" alt="..." />
                                <div className="card-body text-light">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h3 className="card-text">${item.price}</h3>
                                    <p className="card-text desc">{item.desc}</p>
                                    <button href="#" className="btn btn-primary" onClick={()=>handleaddToCart(item)}>add to cart</button>
                                    <button href="#" className="btn btn-danger mx-2" onClick={()=>openModal(item)} >View Details</button>
                                </div>
                        </div>
                        </div>
                      
                    ))}
                    </div>
                    </Bounce>
                </div>
            </div>
          }
          { modal && <ModalProducts  modal={modal} closeModal={closeModal}/> }

          {newProduct.length===0 && <h1 className="btn-outline-warning my-5 alert-danger" role="alert">There is no product now   </h1>}

                      
  </div>


    <Footer />

    </div>
);
}
export default ShoppingNow;