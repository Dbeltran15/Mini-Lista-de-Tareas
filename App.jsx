import React, { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
    }
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini Lista de Tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} />
      <p>Total de tareas: {tareas.length}</p>
    </div>
  );
};

export default App;