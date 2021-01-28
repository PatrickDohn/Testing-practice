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
          <form>
            <input id="input" type="text" placeholder='Name' value={name} onChange={handleChange} />
            <button id="addUserBtn" type="button" onClick={handleAdd}>
              Add
            </button>
          </form>
        </div>

        <ul>
          {list.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </ul>
      </div>
    )
}

export default AddUser
