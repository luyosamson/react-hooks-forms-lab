import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

const[name,setName]=useState("")
const [category,setCategory]=useState("Produce")


function handleChangeInName(event) {
    setName(event.target.value);
  }

  function handleChangeInCategory(event){
    setCategory(event.target.name)
  }

  function handleSubmission(e){
    e.preventDefault()
    onItemFormSubmit({
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name,
        category,

    })
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmission}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChangeInName}  />
      </label>

      <label>
        Category:
        <select name="category"   onChange={handleChangeInCategory} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
