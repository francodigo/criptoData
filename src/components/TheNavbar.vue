<template>
	<nav class="navbar">
		<div class="navbarContainer">
			<router-link to='/' class="navbar__logo">
				<IconLogo/>
				<span>
					Cripto Inversor
				</span>	
			</router-link>
			<div class="navbar__mobileBtn" @click="toggleMenu()">
                <IconifyIcon :icon="icons.menu" />
            </div>
            <ul class="navbarMenu">
                <li class="navbar__item">
                    <router-link to='/dolar' class="navbar__link">Dólar</router-link>
                </li>
                <li class="navbar__item">
                    <router-link to='/criptos' class="navbar__link">Criptos</router-link>
                </li>
                <li class="navbar__item">
                    <a href="#" class="navbar__link">Nosotros</a>
                </li>
                <li class="navbar__item">
                    <a href="#" class="navbar__link">Unirse</a>
                </li>
            </ul>
            <button class="navbar__btn">
                <a class="navbar__btnLink" href="">
                    Registrarse
                </a>
            </button>
		</div>
	</nav>
</template>

<script>
import IconLogo from '@/components/IconLogo';
// Import component
import IconifyIcon from '@iconify/vue';
import baselineMenu from '@iconify-icons/ic/baseline-menu';

export default {
	name: 'TheNavbar',
    props:['showMenu'],
	components: { IconLogo , IconifyIcon },
	data() {
		return {
            icons:{
                menu: baselineMenu
            },
            isOpen: this.$props.showMenu
		};
	},
    methods:{
        toggleMenu(){
            this.isOpen = !this.isOpen;
            this.$emit('showMenu', this.isOpen)
        }
    }
};
</script>

<style scoped>
.navbar{
    background: #FFF13D;
    height: 60px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top: 0;
    z-index:10;
    font-family: Poppins;
}

@media screen and (max-width: 960px){
    .navbar{
        transition: 0.8s all ease;
    }
}

.navbarContainer{
    display:flex;
    justify-content:space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
}

.navbar__logo{
    display:flex;
    color:#444;
    justify-self:flex-start;
    align-items:center;
    cursor:pointer;
    font-size: 1rem;
    font-weight:bold;
    text-decoration:none;
}

.navbar__logo > span {
    margin-left: 12px;
}

.navbar__mobileBtn{
    display:none;
}

@media screen and (max-width: 768px)
{
    .navbar__mobileBtn{
        color:#444;
        display:flex;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
    }

    .navbarContainer{
        padding: 0 20px;
    }
}

.navbarMenu{
    display:flex;
    align-items:center;
    list-style:none;
    text-align: center;
    margin-right: -22px;
}

@media screen and (max-width: 768px){
    .navbarMenu{
        display:none;
    }
}

.navbar__item{
    height:60px;
}

.navbar__link{
    color: #444;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer; 
    font-weight: 500;  
    letter-spacing: -0.2px;
}

.navbar__link:active{
    box-shadow: inset 0px -13px 0px -10px #444;
}

.navbar__btn{
    display:flex;
    align-items:center;
    background:transparent;
}

@media screen and (max-width: 768px){
    .navbar__btn{
        display:none;

    }
}

.navbar__btnLink{
    border-radius:50px;
    background:transparent;
    white-space:nowrap;
    padding:10px 22px;
    color: #444;
    font-size:16px;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
	border:1px solid #444;
    
}

.navbar__btnLink:hover{
    transition: all 0.2s ease-in-out;
    background: #444;
    color: #FFF13D;
}


</style>
