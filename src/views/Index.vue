<template>
      <main>
        <section class="hero container">
        <div class="content">
            <div class="heroAction">
                <h1>Formate online y potenciá tus ingresos</h1>
                <p>Aprendé a ganarle a la inflación usando las mejores criptomonedas del mercado.</p>
                <button class="btn btn-primary btn-sm">Comenzar</button>
            </div>
            <div class="heroImages">
                <img class="hero__workerImg" :src='images.workers' alt="">
                <img class="hero__asset" :src="assetPath" alt="">
                <img class="hero__surround" :src='images.surround' alt="">
            </div>
        </div>
    </section>
          </main>
</template>

<script>


export default {
    name:'index',
    data(){
      return{
        images:{
          workers : require('@/assets/img/workers.png'),
          surround: require('@/assets/img/surround.png'),
        },
        actualAsset: 1,
        MAX_IMG_HERO : 18
      }
    },
    computed:{
      assetPath: function() {
        return require(`@/assets/img/asset${this.actualAsset}.png`);
      }
    },
    created: function() {
        let i = 1;
        setInterval(()=>{
            if (i === this.MAX_IMG_HERO + 1 ) i=1;
            if (i <= this.MAX_IMG_HERO ) {
              this.actualAsset = i;
              i++;
            }
        }
        ,2000);
    }
}
</script>


<style scoped>
main{
    position: relative;
    height:100%;
    z-index: 0;
}

.container{
  padding: 0 20px;
}

.hero{
    border-bottom-left-radius: 750px 100px;
    border-bottom-right-radius: 900px 100px;
    background: #FFF13D;
}

.heroAction{
    display:flex;
    flex-direction: column;
    height:250px;
    justify-content: space-around;
    align-items: flex-start;
    padding: 50px 5px 0px 5px;
}

.heroAction h1{
    font-size: 1.6rem;
    font-family: Roboto;
    font-weight: 600;
}
  @media screen and (min-width: 375px) {
    .heroAction h1{
      font-size: 1.8rem;
      font-family: Roboto;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

.heroAction p {
  font-size: 1rem;
  font-family: Roboto;
}

.btn{
    background: none;
    outline: none;
    border:none;
    border-radius: 5px;
  }
  
  .btn-primary{
    width:max-content;
    height:max-content;
    font-weight: 500;
    background-color: #272725;
    color: #FFF13D;
    letter-spacing: 1.2px;
    border-radius:50px;
    padding:10px 22px;
    font-size:16px;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    font-family: Roboto;
}
.btn-sm{    
    padding: .5rem 1rem;  
    font-size: 1rem;

  }



.heroImages{
    position:relative;
    margin-top: 4rem;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
}

.hero__workerImg{
    position:absolute;
    height:300px;
    width:300px;
    transform: translateX(-12px);
}

.hero__asset{
    width:200px;
    height:200px;
}

.hero__surround{
    height:120px;
    width:180px;
    position: absolute;
    bottom:0;
    right: 0;
    transform: translateY(50px);
}

@media (min-width: 598px) and (max-width: 767px){
  .container{
    padding: 0 50px;
    max-width: 100%;
  }

  .heroAction h1{
    font-size:2.2rem;
  }

  .heroAction p {
    font-size: 1.4rem;
    padding-bottom: 20px;
  }

}

@media (min-width: 768px) {

  .container{
    padding: 0 50px;
    max-width: 100%;
  }
  .hero{
    margin:0;
  }

  .heroAction h1{
    font-size:2.2rem;
  }

  .heroAction p {
    font-size: 1.4rem;
  }
}

  @media (min-width: 991px) {
      main{
        width: 100%;
        background-color:transparent;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .container{
        width: 100%;
        display:flex;
        justify-content:space-between;
        padding: 0 50px;
      }

      .hero{
        height:500px;
        max-width: 100%;
        margin: 0 0;
        padding-top: 60px;
        border-bottom-left-radius: 750px 100px;
        border-bottom-right-radius: 900px 100px;
        background-color:#FFF13D;
      }
      
      .hero .content{
        display:flex;
        justify-content:space-between;
      }
      .heroAction{
        width:70%;
      }
      
      .heroAction h1 {
        font-size: 52px;
        font-weight: 500;
        line-height: 1.2;
      }
      
      .hero p{
        font-weight: 400;
        font-size: 20px;
        line-height: 1.2;
        margin-top: 50px;
        width:75%;
      }
      .hero button{
        margin-top: 50px;
      }
      
      .btn{
        background: none;
        outline: none;
        border:none;
        border-radius: 5px;
      }
      
      .btn-primary{
        width:max-content;
        height:max-content;
        font-size: 1rem;
        font-weight: 500;
        background-color: #272725;
        color: #FFF13D;
        letter-spacing: 1.2px;
        padding: .8rem 1.2rem;  
      }
      
      .heroImages{
        height:300px;
        width:35%;
        margin: 0 0 0 5rem;
        position: relative;
      }
      
      .hero__workerImg{
        position: absolute;
        left: -20px;
      }
      
      .hero__asset{
        width:200px;
        height:200px;
      }
      
      .hero__surround{
        position: absolute;
        top:180px;
        right:0;
        height:150px;
      }
      

      
  }

  @media (min-width: 1280px) {
    .container{
      max-width: 100%;
      padding: 0 215px;
      padding-top: 80px;
    }

    .heroAction p {
      font-size: 1.25rem;
    }

    }
</style>