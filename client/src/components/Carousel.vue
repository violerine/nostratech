<template>
    <!-- CAROUSEL -->
        <div class="carousel-content">
            <carousel :autoplay="true" :loop="true" :per-page="1" >
                <slide>
                    <div>
                        <img src="../assets/carousel1.png">
                    </div>
                </slide>
                <slide>
                    <div>
                        <img src="../assets/carousel2.png">
                    </div>
                </slide>
                <!-- <slide>
                    <div>
                        <img src="../../assets/slide3.png">
                    </div>
                </slide> -->
            </carousel>
        </div>
<!-- CAROUSEL END -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components:{
        Carousel,
        Slide
    }

}
</script>

<style scoped>

.carousel-content{
    margin-left: 100px;
    margin-right: 100px;
}

</style>
