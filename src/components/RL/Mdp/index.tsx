import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactFlow, {
  Position,
  MarkerType,
  type Node,
  type Edge,
  type FitViewOptions,
  type DefaultEdgeOptions,
} from 'reactflow';
import { isMobile } from '@site/src/utils'
// import 'reactflow/dist/style.css';
import './style.css';



const initialNodes: Node[] = [
  { className: "agent", id: '1', data: { label: 'Agent' }, position: { x: 5, y: 5 }, sourcePosition: Position.Right, targetPosition: Position.Left},
  { className: "env", id: '2', data: { label: 'Environment' }, position: { x: 5, y: 100 }, sourcePosition: Position.Left, targetPosition: Position.Right},
];

const initialEdges: Edge[] = [
  { id: 'action', source: '1', target: '2', label: 'Actionₜ', type: 'smoothstep', pathOptions: { offset: 40 }  },
  { id: 'state', source: '2', target: '1', label: 'Stateₜ', type: 'smoothstep', pathOptions: { offset: 90 } },
  { id: 'reward', source: '2', target: '1', label: 'Rewardₜ', type: 'smoothstep', pathOptions: { offset: 40 } }
];

const fitViewOptions: FitViewOptions = {
  padding: isMobile() ? 1.5 : 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const proOptions = { hideAttribution: true };

const panOnDrag = false;

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);


  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
        <div style={{ height: '400px', width: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            fitViewOptions={fitViewOptions}
            defaultEdgeOptions={defaultEdgeOptions}
            proOptions={proOptions}
            panOnDrag={panOnDrag}
            preventScrolling={panOnDrag}
          />
        </div>
    )}
    </BrowserOnly>
  );
}

export default Flow;
