
import './App.css';
import ForceGraph2D from 'react-force-graph-2d'


const bond_data = {
  nodes: [
    {
        "id": "abc", 
        "group": 1
    },
    {
        "id": "fgh", 
        "group": 1
    },
    {
        "id": "lpj",
        "group": 1
    },
    {
        "id": "alk", 
        "group": 1
    }
],
  links: [
      {
          "source": "abc",
          "target": "fgh",
          "value": 0.1234
      },
      {
          "source": "fgh",
          "target": "lpj",
          "value": 0.9334
      },
      {
          "source": "lpj",
          "target": "alk",
          "value": 0.5642
      },
      {
          "source": "abc",
          "target": "alk",
          "value": 0.1234
      }
  ]
}


function App() {
  return (
    <div className="App">
      <ForceGraph2D graphData={bond_data}  
          nodeAutoColorBy="group"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            const bckgDimensions = node.__bckgDimensions;
            bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
          }}/>
    </div>
  );
}

export default App;





