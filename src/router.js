import Vue from 'vue';
import Router from 'vue-router';
/** Views */
import Index from '@/views/Index';
import Criptos from '@/views/Criptos';
import Dolar from '@/views/Dolar';
import CoinDetail from '@/views/CoinDetail';
import Error from '@/views/Error';

Vue.use(Router);

export default new Router({
	mode: 'history',

	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
		},
		{
			path: '/criptos',
			name: 'home',
			component: Criptos,
		},
		{
			path: '/dolar',
			name: 'dolar',
			component: Dolar,
		},
		{
			path: '/coin/:id',
			name: 'coin-detail',
			component: CoinDetail,
		},
		{
			path: '*',
			name: 'error',
			component: Error,
		},
	],
});
