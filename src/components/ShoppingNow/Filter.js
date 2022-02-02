
function Filter (props){
    return (
        <div className='text-light bg-light' >
      <span className="display-7 text-danger p-1">Filter by Price</span>
      <select className="text-info form-select" aria-label="Default select example" value={props.sort} onChange={ props.handeleFilterByOrder}>
      <option  selected>Filter...</option>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">highest</option>
      </select>
  </div>
    )
}

export default Filter;