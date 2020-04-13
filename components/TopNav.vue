<template>
  <el-menu class="menu" mode="horizontal" background-color="#545c64" text-color="white">
  <el-menu-item index="1"><nuxt-link :to="{ name: 'index' }">Home</nuxt-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title" >Projects</template>
    <el-menu-item index="2-1" ><nuxt-link :to="{ name: 'vol' }">Augmented Reality</nuxt-link></el-menu-item>
    <el-menu-item index="2-3" @click="coming_soon">Javascript</el-menu-item>
    <el-menu-item index="2-2" @click="coming_soon">Hackathons</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title" @click="coming_soon">Tutorials</template>
      <el-menu-item index="2-4-1" @click="coming_soon">AR App</el-menu-item>
      <el-menu-item index="2-4-2" @click="coming_soon">This Website</el-menu-item>
      <el-menu-item index="2-4-3" @click="coming_soon">Weather API</el-menu-item>
    </el-submenu>
  </el-submenu>
<el-menu-item  index="4" @click="coming_soon">Contact Me</el-menu-item>
      <el-menu-item  v-if="!signedIn" index="5" style="float: right;text-decoration: underline">
        <nuxt-link :to="{ name: 'login' }">
       <el-button type="info" size="small">Login!</el-button>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item v-else index="5" style="float: right;text-decoration: underline">
            <amplify-sign-out class="out"/>
      </el-menu-item>
</el-menu>
</template>

<script>
export default {
    props: {
        signedIn: {
      value: Boolean,
      default: false
    },
    },

        data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      coming_soon () {
        alert('Coming Soon!')
      },
      team () {
         window.location.href = 'https://devpost.com/software/therapeutics-vaccines-and-serum-donation'
      }
    }
}
</script>

<style >
.nuxt-link{
  text-decoration: none;
}
.el-menu-item * {
  text-decoration: none;
}
.out {
  text-decoration-color: aqua;
}
.Button__button___1FrBC{
  padding: 5px
}
.Input__inputLabel___nQolz{
  margin-bottom: 0px;
}
</style>