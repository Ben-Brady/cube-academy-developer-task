<script lang="ts">
	export let stat: string;
	export let value: string;
	export let comparedTo: number|null = null;
	export let inference: "neutral" | "positive" | "negative" = "neutral";

	const modifier = {
		"neutral": "~",
		"positive": "+",
		"negative": "-",
	}[inference]
</script>

<div class="block">
	<div class="stat">
			{stat}
	</div>
	<div class="value-box">
		<span class="value">
				{value}
		</span>
		{#if comparedTo !== null}
			<span class="comparison" data-compared={inference}>
				{modifier}({comparedTo})
			</span>
		{/if}
	</div>
</div>

<style lang="scss">
	#block {
		width: 128px;
		height: 59px;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		background: white;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		display: inline-flex;
	}

	.stat {

	}

	.value-box {

	}

	.value-box > .comparison {
		&[data-compared="neutral"] {
			color: green;
		}
		&[data-compared="positive"] {
			color: var(--positive);
		}
		&[data-compared="negative"] {
			color: var(--negative);
		}

	}

</style>
