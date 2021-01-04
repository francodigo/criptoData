<template>
	<main>
		<table>
			<thead>
				<tr>
					<th>/</th>
					<th>Ranking</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Cap. de Mercado</th>
					<th>Variación 24Hs</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="a in assets"
					:key="a.id"
					class="bg-white rounded-lg p-6 shadow-lg text-center hover:bg-gray-300 cursor-pointer"
					@click="goToCoin(a.id)"
				>
					<td class="flex justify-center">
						<img
							class="w-24 h-24 sm:w-6 sm:h-6 "
							:src="
								`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
							"
							:alt="a.name"
						/>
					</td>
					<td># {{ a.rank }}</td>
					<td class="text-2xl md:text-base">
						{{ a.name }}
						<small class="ml-1 text-gray-500">{{
							a.symbol
						}}</small>
					</td>
					<td class="text-purple-700 text-2xl">
						{{ a.priceUsd | dollar }}
					</td>
					<td
						class="font-bold"
						data-titulo="Capitalización de Mercado"
					>
						{{ a.marketCapUsd | dollar }}
					</td>
					<td
						class="font-bold"
						data-titulo="Variación 24Hs: "
						:class="
							a.changePercent24Hr.includes('-')
								? 'text-red-600'
								: 'text-green-600'
						"
					>
						{{ a.changePercent24Hr | percent }}
					</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script>
export default {
	name: 'AssetsTable',
	data() {
		return {
			filter: '',
			sortOrder: 1,
		};
	},
	props: {
		assets: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		goToCoin(id) {
			this.$router.push({
				name: 'coin-detail',
				params: { id },
			});
		},
		changeSortOrder() {
			this.sortOrder = this.sortOrder === 1 ? -1 : 1;
		},
	},
};
</script>

<style scoped>
table {
	border-collapse: collapse;
}

td,
th {
	padding: 5px 10px;
}

main {
	padding: 1em 2em;
}

@media (max-width: 30em) {
	/* 30 x 16px = 480px */
	table {
		width: 100%;
	}

	table thead {
		display: none;
	}

	table tr {
		display: flex;
		flex-direction: column;
		padding: 1em;
		margin-bottom: 5em;
	}

	table td[data-titulo] {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	table td[data-titulo]::before {
		content: attr(data-titulo);
		padding-right: 2px;
		color: black;
		font-weight: normal;
	}
}
</style>
