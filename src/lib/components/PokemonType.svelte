<script lang="ts">
	export let type: string;
</script>

<div data-type={type}>
	{type}
</div>

<style lang="scss">
	div {
		padding: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: var(--shadow-elevation-low);

		border: 0.1rem solid black;

		/* Colours taken from https://pokemondb.net/type */
		background-color: #aa9;
		text-transform: capitalize;

		&[data-type='fire'] {
			background-color: #f42;
		}
		&[data-type='water'] {
			background-color: #39f;
		}
		&[data-type='electric'] {
			background-color: #fc3;
		}
		&[data-type='grass'] {
			background-color: #7c5;
		}
		&[data-type='ice'] {
			background-color: #6cf;
		}
		&[data-type='fighting'] {
			background-color: #b54;
		}
		&[data-type='poison'] {
			background-color: #a59;
		}
		&[data-type='ground'] {
			background-color: #db5;
		}
		&[data-type='flying'] {
			background-color: #89f;
		}
		&[data-type='psychic'] {
			background-color: #f59;
		}
		&[data-type='bug'] {
			background-color: #ab2;
		}
		&[data-type='rock'] {
			background-color: #ba6;
		}
		&[data-type='ghost'] {
			background-color: #66b;
		}
		&[data-type='dragon'] {
			background-color: #76e;
		}
		&[data-type='dark'] {
			background-color: #754;
		}
		&[data-type='steel'] {
			background-color: #aab;
		}
		&[data-type='fairy'] {
			background-color: #e9e;
		}
		&[data-type='curse'] {
			background-color: #698;
		}
	}
</style>
