<template>
	<aside :class="{'sidebarContainer active': showMenu , 'sidebarContainer':!showMenu  }">
		<figure class="sidebar__logo">
			<IconLogo/>
		</figure>

		<div class="sidebar__closeBtn" @click="hideMenu()">
            <IconifyIcon :icon="icons.cross" />
		</div>
		<div class="sidebarWrapper">
			<ul class="sidebarMenu">
				<router-link class="sidebar__link" to="/dolar">
                    <span @click="hideMenu()">
                    Dólar
                    </span>    
                </router-link>
				<router-link class="sidebar__link" to="/criptos">                    
                    <span @click="hideMenu()">
                    Criptos
                    </span>  
                </router-link>
				<li class="sidebar__link">Nosotros</li>
				<li class="sidebar__link">Unirse</li>
			</ul>
		</div>
	</aside>
</template>

<script>
import IconLogo from '@/components/IconLogo';
import IconifyIcon from '@iconify/vue';
import cross11 from '@iconify-icons/maki/cross-11';

export default {
    name:'SideBar',
    components: { IconLogo ,IconifyIcon},
    props:['showMenu'],
    data(){
        return{
            icons:{
                cross: cross11
            },
            isOpen:this.$props.showMenu
        }
    },
    methods: {
        hideMenu(){
            this.$emit('showMenu', this.isOpen);
            }
    }


};
</script>

<style scoped>

.sidebarContainer{
    font-family: 'Poppins';
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#FFF13D;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    top:-100%;
}

.sidebarContainer.active{
    top:0;
}

.sidebar__logo{
    position: absolute;
    position: absolute;
    top:1.2rem;
    left:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none; 
}

.sidebar__closeBtn{
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:1.8rem;
    cursor: pointer;
    outline:none; 
}

.sidebarWrapper{
    padding-top: 80px;
}
.sidebarMenu{
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
}


@media screen and (max-width:480px){
    .sidebarMenu{
        grid-template-rows:repeat(6,60px);
    }
}

.sidebar__link{
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 1.15rem;
    text-decoration:none;
    list-style:none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: #444;
    cursor: pointer;
    font-weight: 600;

}

.sidebarBtnWrapper{
    display:flex;
    justify-content:center;
}

.sidebar__btnLink{
    border-radius:50px;
    background:#444;
    white-space:nowrap;
    padding:16px 64px;
    color: #FFF13D;
    font-size:16px;
    outline:none;
    border: none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;   
}

</style>

