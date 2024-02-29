<script lang="ts">
	export let stat: string;
	export let value: number;
	export let unit: string = "";
	export let comparedTo: number | null = null;

	type CompareToInfo = {
		inference: "neutral" | "positive" | "negative";
		modifier: string;
		value: number;
		difference: number;
	};
	function getComparedToInfo(comparedTo: number|null): CompareToInfo | null {
		if (comparedTo === null) {
			return null;
		}

		let difference = Math.abs(value - comparedTo);
		if (!Number.isInteger(difference)) {
			difference = Number(difference.toFixed(2));
		}
		let inference: "neutral" | "positive" | "negative" = (() => {
			if (value > comparedTo) {
				return "negative";
			} else if (value < comparedTo) {
				return "positive";
			} else {
				return "neutral";
			}
		})();

		let modifier = {
			neutral: "~",
			positive: "+",
			negative: "-",
		}[inference]
		return  {
			inference,
			modifier,
			value: comparedTo,
			difference: difference,
		};
	}

	$: comparedToInfo = getComparedToInfo(comparedTo)
</script>

<div class="block">
	<div class="stat">
		{stat}
	</div>
	<div class="value-box">
		<span class="value">
			{value}{unit}
		</span>
		{#if comparedToInfo !== null}
			vs {comparedToInfo.value}{unit}
			<span class="comparison" data-compared="{comparedToInfo.inference}">
				{#if comparedToInfo.inference !== "neutral"}
					({comparedToInfo.modifier}{comparedToInfo.difference}{unit})
				{/if}
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
			color: var(--text);
		}
		&[data-compared="positive"] {
			color: var(--positive);
		}
		&[data-compared="negative"] {
			color: var(--negative);
		}
	}
</style>
