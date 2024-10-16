import React, { useState } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import './App.css';

function App() {
  const [shapes, setShapes] = useState<any[]>([]);

  // Función para agregar un rectángulo
  const addRectangle = () => {
    const rect = {
      x: Math.random() * 500,
      y: Math.random() * 500,
      width: 100,
      height: 100,
      fill: 'blue',
      id: `rect${shapes.length + 1}`,
    };
    setShapes([...shapes, rect]);
  };

  // Función para agregar un círculo
  const addCircle = () => {
    const circle = {
      x: Math.random() * 500,
      y: Math.random() * 500,
      radius: 50,
      fill: 'green',
      id: `circle${shapes.length + 1}`,
    };
    setShapes([...shapes, circle]);
  };

  return (
    <div className="App">
      <h1>Worksite Map Creator</h1>
      <div>
        <button onClick={addRectangle}>Add Rectangle</button>
        <button onClick={addCircle}>Add Circle</button>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapes.map((shape, i) => {
            if (shape.width) {
              return <Rect key={i} {...shape} draggable />;
            } else {
              return <Circle key={i} {...shape} draggable />;
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
