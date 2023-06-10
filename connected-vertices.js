function connectedVertices(edges) {
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	const adjList = {};

	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}

	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}

	const visited = {};

	let count = 0;

	for (let vertex = 0; vertex <= maxVertex; vertex++) {
		if (!visited[vertex]) {
			bfs(adjList, vertex, visited);
			count++;
		}
	}

	return count;
}


// bfs solution
function bfs(adjList, vertex, visited) {

	const queue = [vertex];
	visited[vertex] = true;

	while (queue.length > 0) {
		const cur = queue.shift();

		for (let i = 0; i < adjList[cur].length; i++) {
			if (!visited[adjList[cur][i]]) {
				queue.push(adjList[cur][i]);
				visited[adjList[cur][i]] = true;
			}
		}
	}
}

function dfs(adjList, vertex, visited) {
	visited[vertex] = true;

	for (let i = 0; i < adjList[vertex].length; i++) {

		if (!visited[adjList[vertex][i]]) {
			dfs(adjList, adjList[vertex][i], visited);
		}
	}
}