import './App.css';
import ForceGraph2D from 'react-force-graph-2d'


const bond_data = {
  nodes: [{"id": "abc", "group": 1},
          {"id": "fgh", "group": 1},
          {"id": "lpj", "group": 1},
          {"id": "alk", "group": 1},
          {"id": "pur", "group": 1},
          {"id": "jek", "group": 1},
          {"id": "mkl", "group": 1}
  ],
  links: [{"source": "abc", "target": "fgh", "value": 0.05}, 
          {"source": "abc", "target": "lpj", "value": 0.19},  
          {"source": "abc", "target": "alk", "value": 0.1234},
          {"source": "abc", "target": "pur", "value": 0.6585},
          {"source": "abc", "target": "jek", "value": 0.4823},
          {"source": "abc", "target": "mkl", "value": 0.4823},
          {"source": "fgh", "target": "lpj", "value": 0.9334},
          {"source": "fgh", "target": "alk", "value": 0.7854},
          {"source": "fgh", "target": "pur", "value": 0.7854},
          {"source": "fgh", "target": "jek", "value": 0.7234},
          {"source": "fgh", "target": "mkl", "value": 0.7234},
          {"source": "lpj", "target": "alk", "value": 0.5642},
          {"source": "lpj", "target": "pur", "value": 0.5642},
          {"source": "lpj", "target": "jek", "value": 0.9272},
          {"source": "lpj", "target": "mkl", "value": 0.9272},
          {"source": "alk", "target": "pur", "value": 0.5642},
          {"source": "alk", "target": "jek", "value": 0.2938},
          {"source": "alk", "target": "mkl", "value": 0.2938},
          {"source": "pur", "target": "jek", "value": 0.5938},
          {"source": "pur", "target": "mkl", "value": 0.5938},
          {"source": "jek", "target": "mkl", "value": 0.5938},
  ]
}


function App() {
  return (
    <div className="App">
      <ForceGraph2D graphData={bond_data}  
          width={1920}
          height={1080}
          nodeAutoColorBy="group"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 3;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.1); // some padding

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
          }}
          
          linkWidth={(link) => (link.value * 10)}
          linkLabel={(link) => ("Price Corr (" + link.source.id + "-" + link.target.id + "): " + link.value)}

          />
    </div>
  );
}

export default App;





