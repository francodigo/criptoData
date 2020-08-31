<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2"></th>
                    <th class="px-4 py-2">Ranking</th>
                    <th class="px-4 py-2">Nombre</th>
                    <th class="px-4 py-2">Precio</th>
                    <th class="px-4 py-2">Cap. de Mercado</th>
                    <th class="px-4 py-2">Variación 24hs</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="a in assets" :key="a.id">
                    <td>
                        <img
                            class="h-16 w-16"
                            :src="
                                `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
                            "
                            :alt="a.name"
                        />
                    </td>
                    <td># {{ a.rank }}</td>
                    <td>{{ a.name }}</td>
                    <td>{{ Math.trunc(a.priceUsd) }}</td>
                    <td>{{ Math.trunc(a.marketCapUsd) }}</td>
                    <td>{{ Math.trunc(a.changePercent24Hr) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from '@/api';

export default {
    name: 'App',
    data() {
        return {
            assets: [],
        };
    },
    created() {
        api.getAssets().then((assets) => (this.assets = assets));
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
