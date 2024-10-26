import React, { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ClientNode from "./ClientNode";
import ServerNode from "./ServerNode"; // Custom server node component// If you prefer Axios, install with npm install axios
import RouterNode from "./RouterNode";
const server = {
  name: "IT config",
  ip: "192.168.1.100",
  port: 8080,
  total_bandwidth: 3000,
  used_bandwidth: 0,
};
const initialNodes = [
  {
    id: "node-0",
    type: "serverNode", // Custom server node
    position: { x: 300, y: -100 },
    data: server,
  },
  {
    id: "node-1",
    type: "routerNode", // Custom server node
    position: { x: 300, y: 100 },
    data: { value: "ROUTER" },
  },
];
const initialEdges = [
  {
    id: "1000292",
    source: "node-0",
    target: "node-1",
    animated: true,
    style: { stroke: "#db2777", strokeWidth: 4 },
  },
];
const nodeTypes = {
  serverNode: ServerNode,
  clientNode: ClientNode,
  routerNode: RouterNode,
};
const Network = ({clients}) => {
  const [nodes, setNodes] = useState(initialNodes); // Start with just the server
  const [edges, setEdges] = useState(initialEdges);
  useEffect(() => {
    const clientNodes = clients
      ?.filter((client) => client?.bandwidth_logs.length>0) // Filter clients based on connection status
      .map((client, index) => ({
        id: `client-${client.id}`,
        type: "clientNode",
        position: { x: 0 + index * 300, y: 300 + (index % 6) * 4 }, // Dynamically position nodes
        data: { ...client, index: index + 1 }, // Include the index in the data
      }));
    const clientEdges = clients
    ?.filter((client) => client?.bandwidth_logs.length>0) // Filter clients based on connection status
    .map((client) => ({
        id: `e1-${client.id}`, // Unique ID for each edge
        source: "node-1", // Connect clients to server node
        target:`client-${client.id}`, // Client node ID
        animated: true,
        style: { stroke: "#db2777", strokeWidth: 4 }, // Customize edge style
      }));
    setNodes([...initialNodes,...clientNodes]);
    setEdges([...initialEdges,...clientEdges]);
  }, [clients]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div className="w-full h-[500px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-itconfig-bgColor"
      >
        <Background color="#e0f7fa" variant="lines" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Network;
