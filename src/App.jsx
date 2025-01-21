import React, { useState } from "react";
import "./TodoApp.css"; // Importando o arquivo CSS

function TodoApp() {
  const [tarefas, setTarefas] = useState([]); // Lista de tarefas
  const [valorInput, setValorInput] = useState(""); // Valor do input

  // Adiciona uma nova tarefa
  const adicionarTarefa = () => {
    if (valorInput.trim() !== "") {
      setTarefas([...tarefas, { texto: valorInput, concluida: false }]);
      setValorInput("");
    }
  };

  // Alterna o estado de concluído de uma tarefa
  const alternarConclusao = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  // Remove uma tarefa
  const removerTarefa = (indice) => {
    setTarefas(tarefas.filter((_, i) => i !== indice));
  };

  return (
    <div className="todo-app">
      <h1>LISTA DE TAREFAS</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      
      <ul className="task-list">
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className="task-item">
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarConclusao(indice)}
            />
            <span className={tarefa.concluida ? "completed" : ""}>
              {tarefa.texto}
            </span>
            <button onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;