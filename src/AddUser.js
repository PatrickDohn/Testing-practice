import React, { useState } from 'react'

function AddUser() {
    const [list, setList] = React.useState([]);
    const [name, setName] = React.useState('');

    function handleChange(event) {
      setName(event.target.value);
    }

    function handleAdd() {
      const newList = list.concat({ name });

      setList(newList);
    }

    return (
      <div>
        <div>
          <input type="text" placeholder='Name' value={name} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>

        <ul key={list.item}>
          {list.map((item) => (
            <p>{item.name}</p>
          ))}
        </ul>
      </div>
    )
}

export default AddUser
