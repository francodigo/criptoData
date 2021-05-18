<template>
	<div class="text-grey_500" id="app">

		<SideBar  :showMenu='showMenu' @showMenu = 'showMenu = $event' />
		<TheNavbar :showMenu='showMenu' @showMenu = 'showMenu = $event'/>

		<!-- Router view with padding top space by TheNavbar-->
		<div class="">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import SideBar from '@/components/SideBar';
export default {
	name: 'App',
	components: { TheNavbar, SideBar },
	data(){
		return {
			showMenu:false,
		}
	},
	methods:{
		show(){
			console.log('Franco');
		}
	}
};
</script>

<style>
#app {
	position: relative;
}
body {
	font-family: 'Poppins' , sans-serif;
	background-color: rgba(209, 209, 209, 0.2);
	-webkit-tap-highlight-color: transparent;
}
</style>
