import './App.css';
import ForceGraph2D from 'react-force-graph-2d'
import d3Force from 'd3-force-3d'
import {useEffect, useRef} from 'react'


const bond_data = {
  nodes: [{"id": "abc", "group": 1},
          {"id": "fgh", "group": 1},
          {"id": "lpj", "group": 1},
          {"id": "alk", "group": 1},
          {"id": "pur", "group": 1},
          {"id": "jek", "group": 1},
          {"id": "mkl", "group": 1}
  ],
  links: [{"source": "abc", "target": "fgh", "value": 0.05, "distance": 10}, 
          {"source": "abc", "target": "lpj", "value": 0.19, "distance": 20},  
          {"source": "abc", "target": "alk", "value": 0.1234, "distance": 30},
          {"source": "abc", "target": "pur", "value": 0.6585,"distance": 20},
          {"source": "abc", "target": "jek", "value": 0.4823, "distance": 10},
          {"source": "abc", "target": "mkl", "value": 0.4823, "distance": 20},
          {"source": "fgh", "target": "lpj", "value": 0.9334,"distance": 30},
          {"source": "fgh", "target": "alk", "value": 0.7854,"distance": 20},
          {"source": "fgh", "target": "pur", "value": 0.7854,"distance": 10},
          {"source": "fgh", "target": "jek", "value": 0.7234,"distance": 20},
          {"source": "fgh", "target": "mkl", "value": 0.7234,"distance": 30},
          {"source": "lpj", "target": "alk", "value": 0.5642,"distance": 50},
          {"source": "lpj", "target": "pur", "value": 0.5642,"distance": 10},
          {"source": "lpj", "target": "jek", "value": 0.9272,"distance": 20},
          {"source": "lpj", "target": "mkl", "value": 0.9272,"distance": 30},
          {"source": "alk", "target": "pur", "value": 0.5642,"distance": 20},
          {"source": "alk", "target": "jek", "value": 0.2938,"distance": 10},
          {"source": "alk", "target": "mkl", "value": 0.2938,"distance": 20},
          {"source": "pur", "target": "jek", "value": 0.5938,"distance": 30},
          {"source": "pur", "target": "mkl", "value": 0.5938,"distance": 20},
          {"source": "jek", "target": "mkl", "value": 0.5938,"distance": 10},
  ]
}


function App() {
  const fgRef = useRef()

  useEffect(() => {
    const fg = fgRef.current;
    fg.d3Force('link').distance(link => 
      link.distance
    )

    
  }, [bond_data])

  return (
    <div className="App">
      <ForceGraph2D graphData={bond_data} ref={fgRef} 
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





