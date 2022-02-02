import { Button,Form ,Table,FloatingLabel } from "react-bootstrap";
import {useState,createRef} from 'react';
import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from 'react-redux'
import {addProduct} from '../CounterSlice/CounterSlice';



function AddProduct(){

    let intitialValue = [];
    const [products,setProduct] = useState(intitialValue);
    const formData     = createRef();
    const incIndex     = createRef();
    const dispatch = useDispatch();


    //addProduct handler method
    const add = (event)=>{


        event.preventDefault();
      
        // console.log(formData.current);
          
        const newProduct = {
            title:formData.current.title.value,
            price : formData.current.price.value,
            qty :Number(formData.current.qty.value),
            images:formData.current.images.value,
            id:uuid(),
            desc : formData.current.desc.value,
        }

          dispatch(addProduct(newProduct));
          console.log(newProduct);

    //    localStorage.setItem('newProduct' , JSON.stringify(newProduct));

    

        formData.current.title.value="";
        formData.current.price.value="";
        formData.current.qty.value="";
        formData.current.images.value="";
        formData.current.desc.value="";

         setProduct([...products,newProduct]);
        //  console.log(products);
    }

    // const increQty = (event)=>{
    // //    console.log(incIndex.current.value);
    // // console.log(event.target.value);
    // const indexofArray= event.target.value;
    // products[indexofArray].qty = products[indexofArray].qty + 1; 
    // setProduct([...products])

    // }

    // const decreQty = (event)=>{
    // const indexofArray= event.target.value;
    // products[indexofArray].qty = products[indexofArray].qty - 1; 
    // setProduct([...products])
    // }
     

    return(
        <div className="text-center m-auto text-light w-50">
         <Form onSubmit={add}  ref={formData}>
                <Form.Group className="mb-3" controlId="formBasicProductName" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Title"  name="title"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control  type="number" placeholder="Price In dollar" name="price"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Qty:</Form.Label>
                    <Form.Control  type="number" placeholder="How many:qty"  name="qty"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose image</Form.Label>
                    <Form.Control type="file" name="images" />
               </Form.Group>

               <Form.Label>Enter Description</Form.Label>
               <FloatingLabel controlId="floatingTextarea2" className="text-light m-3 p-1">
               <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        name="desc"
                />

              </FloatingLabel>

                <Button variant="primary" type="submit">
                    Add To Products
                </Button>
       </Form>



       <Table striped bordered hover variant="dark" className="my-3" >
            <thead>
                <tr>
                <th>index</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                {/* <th>Option</th> */}

                </tr>
            </thead>
            <tbody>
                {
                    products.map((item,index)=>{
                        return(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            {/* <td>
                                <Button variant="success" onClick={(event)=>increQty(event)} ref={incIndex} value={index}>+</Button>
                                <Button variant="danger" onClick={(event)=>decreQty(event)}  value={index}> - </Button>
                          </td> */}
                       </tr>
                        )
                    })
                }
            </tbody>
</Table>


        </div>
    )

}

export default AddProduct;


  // console.log(event.target.product_name.value);
        // const formData = event.target;
        // const newProduct = {
        //     product_name:formData.product_name.value,
        //     price : formData.price.value,
        //     qty :formData.qty.value
        // }