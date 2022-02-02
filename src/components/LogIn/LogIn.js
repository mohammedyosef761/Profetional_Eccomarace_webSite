
function LogIn(){
    return(
        <div>
            <h1 className="text center mx-5 text-info">
                hello {JSON.parse(localStorage.getItem("name"))} in your profile
            </h1>
        </div>
    )
}

export default LogIn;