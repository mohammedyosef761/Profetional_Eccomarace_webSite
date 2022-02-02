import './Hero.css'
function Hero(){
    return(
        <section id="hero" className="bg-dark mt-2 text-light text-center text-sm-start">
        <div className="container-fluid text-uppercase  d-md-flex justify-content-center align-item-center">
        <div>
              <img src="/images/Htc.jpg"  className="w-10   my-3"/>
              <div className=""><h2>best <span className="text-info text-capitalize">shopping cart</span></h2>you are in the right place if you want to be exciting shopping now. </div>
        </div>
        <div>    
              <img className="my-3  h-30 img2 "  src="/images/sumsung.jpg"/>
              <div className="mx-1"><h2>best <span className="text-danger text-capitalize">shopping cart</span></h2>you can do shopping from anywhere in the world we hope an interested shopping</div>
              </div> 
        </div>
        </section>
    )
}
export default Hero;