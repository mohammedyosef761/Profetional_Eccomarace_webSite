import './Footer.css'
function Footer(){
    return (
        <footer className='footer navbar-fixed-bottom my-5'>
        <div className="text-center text-light ">
            <h3 className='text-info btn-outline-danger'>follow us on facebook</h3>
            <i className="fa fa-facebook-f text-info"></i>
            <h3 className='text-warning btn-outline-info'>follow us on instagram</h3>
            <i className="fa fa-instagram text-warning"></i>
            <h2 className='text-danger btn-outline-warning'>©copy right mohammed yosef</h2>
        </div>
        </footer>
    )
}
export default Footer;