import { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    window.addEventListener("editRow", (e) => {
      const { rowData, index } = e.detail;
      setName(rowData.name);
      setEmail(rowData.email);
      setEditIndex(index);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = new CustomEvent("addOrEditRow", {
      detail: { name, email, editIndex },
    });
    window.dispatchEvent(event);

    setName("");
    setEmail("");
    setEditIndex(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default Form;
