<template>
  <div class="home">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div class="homecontent container">
        <div class="columns">
          <div class="column">
            <Sidecontent></Sidecontent>
          </div>
          <div class="column is-three-fifths">
            <Content></Content>
          </div>
        </div>
      </div>
      <div class="modal">
        <Modal></Modal>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Content from '@/components/Content.vue'
import Sidecontent from '@/components/SideContent'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Carousel,
    Content,
    Sidecontent,
    Footer,
    Modal
  },
  methods:{

  }
}
</script>
<style css>

.homecontent{
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}


</style>

