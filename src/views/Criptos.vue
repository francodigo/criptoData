<template>
	<div
		class="md:flex md:flex-col md:justify-center md:items-center"
	>
		<!-- Content -->
		<template v-if="!isLoading">
			<h1 class="text-4xl mb-4 mt-5 text-gray-700">
				Criptomonedas
			</h1>
			<h2 class="text-3xl text-gray-500">
				#Top 20
			</h2>
			<assets-table :assets="assets"></assets-table>
		</template>

		<!-- Loader -->
		<div v-else class="flex justify-center">
			<bounce-loader
				:loading="isLoading"
				:color="'#FFF159'"
				:size="100"
			/>
		</div>
	</div>
</template>

<script>
import AssetsTable from '@/components/AssetsTable';
import api from '@/api';
export default {
	name: 'home',

	data() {
		return {
			isLoading: true,
			assets: [],
		};
	},
	created() {
		api
			.getAssets()
			.then((assets) => (this.assets = assets))
			.finally(() => (this.isLoading = false));
	},
	components: {
		AssetsTable,
	},
};
</script>

<style></style>
