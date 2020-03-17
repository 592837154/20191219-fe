import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { message, Button } from 'antd';
import Router from './pages/router';
import { aaa } from './aaa';
import TestRef from './TestRef';
import './App.css';
import G6 from '@antv/g6';
console.log('feat：新功能（feature）');
console.log('fix：修补bug');
console.log('style：样式（不影响代码运行的变动）');


const data = {
	"nodes": [{
		"id": "0",
		"name": "analytics.cluster",
		"cluster": "analytics",
		"value": 21
	}, {
		"id": "1",
		"name": "analytics.graph",
		"cluster": "analytics",
		"value": 34
	},
	{
		"id": "11",
		"name": "111111",
		"cluster": "analytics",
		"value": 34
	},
	{
		"id": "121",
		"name": "1112111",
		"cluster": "analytics",
		"value": 34
	},
	{
		"id": "2",
		"name": "analytics.optimization",
		"cluster": "analytics",
		"value": 8
	}, {
		"id": "3",
		"name": "animate",
		"cluster": "animate",
		"value": 40
	}, {
		"id": "4",
		"name": "animate.interpolate",
		"cluster": "animate",
		"value": 18
	}, {
		"id": "5",
		"name": "data.converters",
		"cluster": "data",
		"value": 25
	}, {
		"id": "6",
		"name": "data",
		"cluster": "data",
		"value": 10
	}, {
		"id": "7",
		"name": "display",
		"cluster": "display",
		"value": 4
	}, {
		"id": "8",
		"name": "flex",
		"cluster": "flex",
		"value": 6
	}, {
		"id": "9",
		"name": "physics",
		"cluster": "physics",
		"value": 22
	}, {
		"id": "10",
		"name": "query",
		"cluster": "query",
		"value": 67
	}, {
		"id": "11",
		"name": "query.methods",
		"cluster": "query",
		"value": 71
	}, {
		"id": "12",
		"name": "scale",
		"cluster": "scale",
		"value": 33
	}, {
		"id": "13",
		"name": "util",
		"cluster": "util",
		"value": 23
	}, {
		"id": "14",
		"name": "util.heap",
		"cluster": "util",
		"value": 2
	}, {
		"id": "15",
		"cluster": "util",
		"name": "util.math",
		"value": 2
	}, {
		"id": "16",
		"name": "util.palette",
		"cluster": "util",
		"value": 5
	}, {
		"id": "17",
		"name": "vis.axis",
		"cluster": "vis",
		"value": 24
	}, {
		"id": "18",
		"name": "vis.controls",
		"cluster": "vis",
		"value": 28
	}, {
		"id": "19",
		"name": "vis.data",
		"cluster": "vis",
		"value": 70
	}, {
		"id": "20",
		"name": "vis.data.render",
		"cluster": "vis",
		"value": 11
	}, {
		"id": "21",
		"name": "vis.events",
		"cluster": "vis",
		"value": 8
	}, {
		"id": "22",
		"name": "vis.legend",
		"cluster": "vis",
		"value": 27
	}, {
		"id": "23",
		"name": "vis.operator.distortion",
		"cluster": "vis",
		"value": 9
	}, {
		"id": "24",
		"name": "vis.operator.encoder",
		"cluster": "vis",
		"value": 30
	}, {
		"id": "25",
		"name": "vis.operator.filter",
		"cluster": "vis",
		"value": 17
	}, {
		"id": "26",
		"name": "vis.operator",
		"cluster": "vis",
		"value": 27
	}, {
		"id": "27",
		"name": "vis.operator.label",
		"cluster": "vis",
		"value": 18
	}, {
		"id": "28",
		"name": "vis.operator.layout",
		"cluster": "vis",
		"value": 91
	}, {
		"id": "29",
		"name": "vis",
		"cluster": "vis",
		"value": 13
	}],
	"edges": [{
		"source": "10",
		"target": "10",
		"sourceWeight": 61,
		"targetWeight": 61
	}, {
		"source": "11",
		"target": "11",
		"sourceWeight": 39,
		"targetWeight": 39
	}, {
		"source": "3",
		"target": "3",
		"sourceWeight": 30,
		"targetWeight": 30
	}, {
		"source": "19",
		"target": "19",
		"sourceWeight": 26,
		"targetWeight": 26
	}, {
		"source": "13",
		"target": "13",
		"sourceWeight": 23,
		"targetWeight": 23
	}, {
		"source": "9",
		"target": "9",
		"sourceWeight": 22,
		"targetWeight": 22
	}, {
		"source": "12",
		"target": "12",
		"sourceWeight": 19,
		"targetWeight": 19
	}, {
		"source": "28",
		"target": "19",
		"sourceWeight": 34,
		"targetWeight": 0
	}, {
		"source": "4",
		"target": "4",
		"sourceWeight": 16,
		"targetWeight": 16
	}, {
		"source": "11",
		"target": "10",
		"sourceWeight": 32,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "28",
		"sourceWeight": 14,
		"targetWeight": 14
	}, {
		"source": "18",
		"target": "18",
		"sourceWeight": 12,
		"targetWeight": 12
	}, {
		"source": "26",
		"target": "26",
		"sourceWeight": 11,
		"targetWeight": 11
	}, {
		"source": "28",
		"target": "13",
		"sourceWeight": 20,
		"targetWeight": 0
	}, {
		"source": "5",
		"target": "6",
		"sourceWeight": 17,
		"targetWeight": 2
	}, {
		"source": "19",
		"target": "13",
		"sourceWeight": 17,
		"targetWeight": 0
	}, {
		"source": "17",
		"target": "17",
		"sourceWeight": 7,
		"targetWeight": 7
	}, {
		"source": "6",
		"target": "6",
		"sourceWeight": 7,
		"targetWeight": 7
	}, {
		"source": "12",
		"target": "13",
		"sourceWeight": 14,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "19",
		"sourceWeight": 14,
		"targetWeight": 0
	}, {
		"source": "5",
		"target": "5",
		"sourceWeight": 7,
		"targetWeight": 7
	}, {
		"source": "21",
		"target": "19",
		"sourceWeight": 6,
		"targetWeight": 4
	}, {
		"source": "25",
		"target": "19",
		"sourceWeight": 10,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "0",
		"sourceWeight": 5,
		"targetWeight": 5
	}, {
		"source": "3",
		"target": "13",
		"sourceWeight": 9,
		"targetWeight": 0
	}, {
		"source": "20",
		"target": "19",
		"sourceWeight": 5,
		"targetWeight": 4
	}, {
		"source": "19",
		"target": "12",
		"sourceWeight": 9,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "19",
		"sourceWeight": 8,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "19",
		"sourceWeight": 8,
		"targetWeight": 0
	}, {
		"source": "22",
		"target": "22",
		"sourceWeight": 4,
		"targetWeight": 4
	}, {
		"source": "24",
		"target": "24",
		"sourceWeight": 4,
		"targetWeight": 4
	}, {
		"source": "26",
		"target": "3",
		"sourceWeight": 7,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "16",
		"sourceWeight": 7,
		"targetWeight": 0
	}, {
		"source": "16",
		"target": "16",
		"sourceWeight": 3,
		"targetWeight": 3
	}, {
		"source": "10",
		"target": "13",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "7",
		"target": "7",
		"sourceWeight": 3,
		"targetWeight": 3
	}, {
		"source": "22",
		"target": "13",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "20",
		"target": "20",
		"sourceWeight": 3,
		"targetWeight": 3
	}, {
		"source": "1",
		"target": "26",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "19",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "12",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "22",
		"target": "7",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "3",
		"sourceWeight": 6,
		"targetWeight": 0
	}, {
		"source": "17",
		"target": "7",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "26",
		"target": "13",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "13",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "13",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "3",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "26",
		"target": "29",
		"sourceWeight": 3,
		"targetWeight": 2
	}, {
		"source": "22",
		"target": "16",
		"sourceWeight": 5,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "21",
		"sourceWeight": 4,
		"targetWeight": 0
	}, {
		"source": "22",
		"target": "12",
		"sourceWeight": 4,
		"targetWeight": 0
	}, {
		"source": "23",
		"target": "23",
		"sourceWeight": 2,
		"targetWeight": 2
	}, {
		"source": "17",
		"target": "29",
		"sourceWeight": 2,
		"targetWeight": 2
	}, {
		"source": "28",
		"target": "17",
		"sourceWeight": 4,
		"targetWeight": 0
	}, {
		"source": "15",
		"target": "15",
		"sourceWeight": 2,
		"targetWeight": 2
	}, {
		"source": "17",
		"target": "12",
		"sourceWeight": 4,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "27",
		"sourceWeight": 2,
		"targetWeight": 2
	}, {
		"source": "14",
		"target": "14",
		"sourceWeight": 2,
		"targetWeight": 2
	}, {
		"source": "18",
		"target": "29",
		"sourceWeight": 3,
		"targetWeight": 1
	}, {
		"source": "25",
		"target": "26",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "9",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "7",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "12",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "17",
		"target": "13",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "13",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "20",
		"target": "13",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "13",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "13",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "19",
		"target": "6",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "29",
		"target": "3",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "25",
		"target": "3",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "3",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "17",
		"target": "3",
		"sourceWeight": 3,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "15",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "26",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "24",
		"target": "26",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "16",
		"target": "13",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "14",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "29",
		"target": "21",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "21",
		"target": "21",
		"sourceWeight": 1,
		"targetWeight": 1
	}, {
		"source": "29",
		"target": "19",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "19",
		"target": "14",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "4",
		"target": "13",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "19",
		"target": "15",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "8",
		"target": "17",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "13",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "19",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "1",
		"sourceWeight": 1,
		"targetWeight": 1
	}, {
		"source": "23",
		"target": "17",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "23",
		"target": "19",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "3",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "3",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "19",
		"target": "3",
		"sourceWeight": 2,
		"targetWeight": 0
	}, {
		"source": "29",
		"target": "13",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "8",
		"target": "29",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "21",
		"target": "3",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "22",
		"target": "3",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "3",
		"target": "4",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "29",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "22",
		"target": "19",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "23",
		"target": "3",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "26",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "19",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "26",
		"target": "19",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "17",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "3",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "5",
		"target": "13",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "12",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "20",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "28",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "23",
		"target": "21",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "8",
		"target": "6",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "2",
		"target": "3",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "1",
		"target": "29",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "23",
		"target": "28",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "6",
		"target": "13",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "25",
		"target": "13",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "8",
		"target": "7",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "7",
		"target": "13",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "27",
		"target": "26",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "18",
		"target": "7",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "0",
		"target": "26",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "19",
		"target": "7",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "8",
		"target": "19",
		"sourceWeight": 1,
		"targetWeight": 0
	}, {
		"source": "28",
		"target": "29",
		"sourceWeight": 1,
		"targetWeight": 0
	}]
}
const colors = [
	'rgb(91, 143, 249)',
	'rgb(90, 216, 166)',
	'rgb(93, 112, 146)',
	'rgb(246, 189, 22)',
	'rgb(232, 104, 74)',
	'rgb(109, 200, 236)',
	'rgb(146, 112, 202)',
	'rgb(255, 157, 77)',
	'rgb(38, 154, 153)',
	'rgb(227, 137, 163)',
];
const width = document.getElementById('container')!.scrollWidth;
const height = document.getElementById('container')!.scrollHeight || 800;
console.log(width,height);

const graph = new G6.Graph({
	fitView: true,
  fitViewPadding: [0, 40, 50, 20],
	container: 'container',
	width,
	height,
	linkCenter: true,
	modes: {
		default: [
			{
				type: 'edge-tooltip',
				formatText: function formatText(model) {
					const text = 'source: ' + model.sourceName + '<br/> target: ' + model.targetName;
					return text;
				},
			},
		],
	},
	defaultNode: {
		style: {
			opacity: 0.8,
			lineWidth: 11,
			stroke: 'transparent',
		},
	},
	defaultEdge: {
		size: 0.1,
		color: 'black',
		// style: {
		// 	opacity: 0.6,
		// 	lineAppendWidth: 23,
		// },
	},
});
graph.on('node:mouseenter', function (e: any) {
});
graph.on('edge:mouseenter', function (e: any) {
	const edge = e.item;
	graph.setItemState(edge, 'hover', true);
});
graph.on('edge:mouseleave', function (e: any) {
	const edge = e.item;
	graph.setItemState(edge, 'hover', false);
});

const origin = [width / 2, height / 2];
const radius = width < height ? width / 2 : height / 2;
const edges = data.edges;
const nodes = data.nodes;
const nodeMap = new Map();
const clusterMap = new Map();
let clusterId = 0;
const n = nodes.length;
const angleSep = (Math.PI * 2) / n;

nodes.forEach(function (node: any, i: any) {
	const angle = i * angleSep;
	node.x = -radius * Math.cos(angle) + origin[0];

	node.y = radius * Math.sin(angle) + origin[1];
	node.angle = angle;
	nodeMap.set(node.id, node);
	// cluster
	if (node.cluster && clusterMap.get(node.cluster) === undefined) {
		clusterMap.set(node.cluster, clusterId);
		clusterId++;
	}
	const id = clusterMap.get(node.cluster);
	if (node.style) {

		node.style.stroke = colors[id % colors.length];
		node.style.fill = colors[id % colors.length];
	} else {
		node.style = {
			stroke: colors[id % colors.length],
			fill: colors[id % colors.length],
		};
	}
	// label
	node.label = node.name;

	node.labelCfg = {
		position: 'center',
		style: {
			rotate: 3.14 - angle,
			rotateCenter: 'lefttop',
			positions: 'right right',
			textAlign: 'start',
			fillStyle: 'red',
			fontSize: '12'
		},
	};
});
edges.forEach((edge: any) => {
	
	edge.type = 'quadratic';
	const source = nodeMap.get(edge.source);
	const target = nodeMap.get(edge.target);

	edge.controlPoints = [
		{
			x: origin[0],
			y: origin[1],
		},
	];
	edge.color = source.style.fill;
	edge.sourceName = source.name;
	edge.targetName = target.name;
});

// map the value to node size
let maxValue = -9999,
	minValue = 9999;
nodes.forEach(function (n: any) {
	if (maxValue < n.value) maxValue = n.value;
	if (minValue > n.value) minValue = n.value;
});
const sizeRange = [4, 40];
const sizeDataRange = [minValue, maxValue];
scaleNodeProp(nodes, 'size', 'value', sizeDataRange, sizeRange);

graph.data(data);
graph.render();

function scaleNodeProp(nodes: any, propName: any, refPropName: any, dataRange: any, outRange: any) {
	const outLength = outRange[1] - outRange[0];
	const dataLength = dataRange[1] - dataRange[0];
	nodes.forEach(function (n: any) {
		n[propName] = ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
	});
}

const App: React.FC = () => {
  const [data, setData] = useState('');
  const getData = () => {
    setData('')
    // fetch('http://localhost:2019/api/first').then((aaa)=> {
    //   console.log(aaa);
    // })
    fetch(
      '/api/first'
    )
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        
        setData(data.constent);
      }).catch((err) => {
        console.log(err);
      })
  }
  const postData = () => {
    setData('');
    fetch('/api/first', {
      method: 'POST',
      body: JSON.stringify({
        // 你想要发送到后台的数据，以对象形式发送
        a: 'post成功',
    }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(((res) => {
      console.log(res);
      setData(res.a);
    })).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    if (data.length) {
      message.success(data);
    }
  }, [data])
  useEffect(() => {
    message.success('create-react-app + typescript + antd');
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          前端页面
        </p>
        <div className="buttons">
          <Button onClick={getData}>get</Button>
          <Button onClick={postData}>post</Button>
        </div>
        <Router/>
      </header>
    </div>
  );
}
export default App;
