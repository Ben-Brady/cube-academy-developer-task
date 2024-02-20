<script>
	import './styles.css';
	import './reset.css';
</script>

<div>
	<nav>
		<a href="/">Home</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem 10vw;
	}

	nav {
		width: 100%;
	}
</style>
