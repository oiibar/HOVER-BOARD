* {
	box-sizing: border-box;
}

body {
	background-color: #111;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
	margin: 0;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 80%;
}

.square {
	width: 16px;
	margin: 2px;
	height: 16px;
	background-color: #1d1d1d;
	box-shadow: 0 0 2px #000;
	transition: 1s ease;
}

.square:hover {
	transition-duration: 0s;
}