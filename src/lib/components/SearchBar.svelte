<script>
	import SearchIcon from "$lib/images/search.svg";
</script>

<div class="search">
	<input class="search-input" />
	<div class="search-button">
		<img
			width="{25}"
			height="{25}"
			style="width: 25px; height: 25px;"
			src="{SearchIcon}"
			alt=""
		/>
	</div>
</div>

<style lang="scss">
	.search {
		display: grid;
		grid-template-columns: 1fr 3rem;

		height: 100%;
		width: 25rem;
		background: #d9d9d9;
		border-radius: 1rem;
		overflow: hidden;

		&:has(input:focus) {
			border: var(--text) solid 0.1rem;
		}

		.search-input {
			border: none !important;
			background: none;
			height: 100%;
			width: 100%;
			padding: 0 1rem;
		}

		.search-button {
			width: 100%;
			align-self: stretch;
			background: rgba(var(--text), 0.5);
			border-left: 1px var(--text) solid;

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
