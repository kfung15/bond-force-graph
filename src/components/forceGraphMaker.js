import ForceGraph2D from 'react-force-graph-2d'
import {useState, useEffect, useRef} from 'react'


// This function takes an array of bond ids and returns a corresponding force graph.


import rawBondData from "../data/bondData.txt"

function ForceGraphMaker(criteria) {
  let masterBondData = new Array()


  const [bondData, setBondData] = useState({"nodes" : [], "links": []})

  async function convertBondDataToJson() {
    fetch(rawBondData)
    .then(r => r.text())
    .then(text => {
      console.log('text decoded:', text);
      masterBondData = JSON.parse(text)
      let bond_data = {"nodes" : [], "links": []}
      console.log(JSON.stringify(masterBondData))
      console.log(criteria)

      // Go through the filtering process
      bond_data.nodes = criteria.content.region != "All" ? masterBondData.nodes.filter(node => criteria.content.region.includes(node.region)) : masterBondData.nodes
      bond_data.nodes = criteria.content.country != "All" ? bond_data.nodes.filter(node => criteria.content.country.includes(node.country)) : bond_data.nodes
      bond_data.nodes = criteria.content.rating != "All" ? bond_data.nodes.filter(node => criteria.content.rating === node.rating) : bond_data.nodes
      bond_data.nodes = criteria.content.sector != "All" ? bond_data.nodes.filter(node => criteria.content.sector.includes(node.sector)) : bond_data.nodes
      
      console.log(bond_data.nodes)

      let bondIds = []
      for(let x = 0; x < bond_data.nodes.length; x++){
        bondIds.push(bond_data.nodes[x].id)
      }
      console.log(bondIds)
      
      bond_data.links = masterBondData.links.filter(link => bondIds.includes(link.source) & bondIds.includes(link.target))
      setBondData(bond_data)
    });
  }

    const fgRef = useRef()

    useEffect(() => {
      const fg = fgRef.current;
      convertBondDataToJson()
      console.log(bondData)
      fg.d3Force('link').distance(link => 
        link.distance
      )
    }, [criteria])
  
    return (
      <div>
        <ForceGraph2D graphData={bondData} ref={fgRef} 
            width={900}
            height={600}
            nodeAutoColorBy="group"
            nodeCanvasObject={(node, ctx) => {
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

export default ForceGraphMaker