import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="text-white bg-slate-950 p-4 rounded-md flex justify-between shadow m">
      <input
        type="text"
        placeholder="Nome da tarefa"
        className="bg-slate-800 border border-slate-700 outline-slate-400 rounded-md p-1"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="bg-slate-800 border border-slate-700 outline-slate-400 rounded-md p-1"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          addTask(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-800 rounded-md p-2 cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
