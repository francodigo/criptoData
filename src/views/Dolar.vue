<template>
	<div>
		<div class="flex justify-center">
			<bounce-loader
				:loading="isLoading"
				:color="'#FFF159'"
				:size="100"
			/>
		</div>
		<template v-if="!isLoading">
			<h1
				class="text-4xl mb-4 mt-5 ml-4 text-gray-700 md:text-center"
			>
				Dólar en Argentina
			</h1>
			<h2
				class="text-3xl ml-4 text-gray-500 md:text-center mb-6"
			>
				USD / ARS
			</h2>
			<ul class="sm:flex-row sm:flex justify-center">
				<li
					class="bg-white rounded-lg p-6 mx-4 mb-5 shadow-lg text-center"
				>
					<h3>Dolar "Solidario"</h3>
					<h4 class="text-green-500 text-base mb-2">
						Venta
					</h4>
					<h4 class="text-purple-700 text-2xl">
						$
						{{
							parseFloat(dollar.oficial * 1.65).toFixed(2)
						}}
					</h4>
				</li>
				<li
					class="bg-white rounded-lg p-6 mx-4 mb-5 shadow-lg text-center"
				>
					<h3>Dolar "Blue"</h3>
					<h4 class="text-green-500 text-base mb-2">
						Venta
					</h4>
					<h4 class="text-purple-700 text-2xl">
						$ {{ dollar.blue }}
					</h4>
				</li>
				<li
					class="bg-white rounded-lg p-6 mx-4 mb-5 shadow-lg text-center"
				>
					<h3>Dolar "CCL"</h3>
					<h4 class="text-green-500 text-base mb-2">
						Venta
					</h4>
					<h4 class="text-purple-700 text-2xl">
						$ {{ dollar.ccl }}
					</h4>
				</li>
				<li
					class="bg-white rounded-lg p-6 mx-4 mb-5 shadow-lg text-center"
				>
					<h3>Dolar "MEP"</h3>
					<h4 class="text-green-500 text-base mb-2">
						Venta
					</h4>
					<h5 class="text-purple-700 text-2xl">
						$ {{ dollar.mep }}
					</h5>
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
import api from '@/api';
export default {
	name: 'dolar',
	data() {
		return {
			dollar: false,
			isLoading: true,
		};
	},
	created() {
		api
			.getDollars()
			.then((dollar) => (this.dollar = dollar))
			.finally(() => (this.isLoading = false));
	},
};
</script>

<style></style>
