import { useState, useEffect } from "react";

function Table() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    window.addEventListener("addOrEditRow", (e) => {
      const { name, email, editIndex } = e.detail;
      let newRows = [...rows];

      if (editIndex !== null) {
        newRows[editIndex] = { name, email };
      } else {
        newRows.push({ name, email });
      }
      setRows(newRows);
    });
  });

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const editRow = (index) => {
    const event = new CustomEvent("editRow", {
      detail: { rowData: rows[index], index },
    });
    window.dispatchEvent(event);
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>
              <button onClick={() => editRow(index)}>Edit</button>
              <button onClick={() => deleteRow(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
