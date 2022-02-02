import Modal from 'react-modal';
import './ShoppingNow'


function ModalProducts({modal,closeModal}){
  

        return (
            <Modal isOpen={modal}  onRequestClose={closeModal} style={{backgroundColor:"black"}}>
                <span onClick={closeModal} className='text-info times bg-dark'>&times;</span>
                <div className='text-light bg-dark text-center '>
                <img className='w-50 h-100 my-5 mx-5' src={"/images/"+modal.images.slice(12)} alt={modal.title} />
                <div>
                   <p>type:{modal.title}</p>
                   <p>{modal.desc}</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur modi est explicabo sit perferendis, dolor consequatur nulla distinctio ab sapiente! Nemo velit minus labore nostrum est, illum at obcaecati?</p>
                   <p>${modal.price}</p>
                 </div>
                </div>
            </Modal>
              );
             };

export  default ModalProducts;

    
