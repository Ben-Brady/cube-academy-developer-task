<script lang="ts">
	export let stat: string;
	export let value: string;
	export let comparedTo: number | null = null;
	export let inference: "neutral" | "positive" | "negative" = "neutral";

	const modifier = {
		neutral: "~",
		positive: "+",
		negative: "-",
	}[inference];
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
			<span class="comparison" data-compared="{inference}">
				{modifier}({comparedTo})
			</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.block {
		min-width: 8rem;
		width: fit-content;
		height: 6rem;
		padding: 0.5rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		display: inline-flex;
	}

	.stat {
		text-decoration: underline;
		text-align: center;
	}

	.value-box {
		text-align: center;
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
