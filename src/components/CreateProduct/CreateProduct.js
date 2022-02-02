import AddProduct from "./funcComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function CreateProduct(){
     return(
         <div>
          <Header />
         <h1 className="text-info text-center">Create Product</h1>
         <AddProduct />

         <Footer />
         </div>
     )
 }
 export default CreateProduct;



