<template>
	<div class="text-grey_500" id="app">
		<TheNavbar />

		<!-- Router view with padding top space by TheNavbar-->
		<div class="pt-16">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
export default {
	name: 'App',
	components: { TheNavbar },
};
</script>

<style>
#app {
	position: relative;
}
body {
	font-family: 'Poppins' , sans-serif;
	background-color: rgba(209, 209, 209, 0.2);
}
</style>
