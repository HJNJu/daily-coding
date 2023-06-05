function createMatrix(edges) {
	let max = 0;
	for (let i = 0; i < edges.length; i++) {
		const curMax = Math.max(...edges[i].slice(0, 2));
		curMax > max ? (max = curMax) : null;
	}

	const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));
	
	edges.forEach((edge) => {
		const [row, col, direction] = edge;
		if (direction === "undirected") {
			result[col][row] = 1;
		}
		result[row][col] = 1;
	});

	return result;
}