function FormInput({handleChange, user,handleAddgiftcard}){
    return(
        <div className="form-row row">
            <div className="col">
                <input type="text" className="form-control" value={user.name} name="name"
                onChange={handleChange}
                placeholder="name"/></div>
                <div className="col">
                <input type="file" className="form-control" value={user.file} name="file"
                onChange={handleChange}
                placeholder="file"/></div>
                <div className="col">
                <input type="text" className="form-control" value={user.price} name="price"
               onChange={handleChange}
                placeholder="price"/></div>
                <div className="col">
                <input type="text" className="form-control" value={user.description} name="description"
               onChange={handleChange}
                placeholder="description"/></div>
                <div className="col">
                 <button onClick={handleAddgiftcard} > Add Gift Card </button><br></br>
                 </div>
            </div>
    )
}
export default FormInput;