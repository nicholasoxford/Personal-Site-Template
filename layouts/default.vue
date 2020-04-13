<template>
  <div>
    <TopNav :signedIn="signedIn" class="top-menu"></TopNav>
    <div class="container">
          <el-card class="side-bar">
        <SideBar class="side-bar-app" />
      </el-card>
      <el-card class="box-card">
        <nuxt class="main-app-nuxt" />
      </el-card>
      </div>
  </div>
</template>
<script>

import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import SideBar from '~/components/SideBar.vue'
import TopNav from '~/components/TopNav.vue'
export default {
  data() {
    return {
      signedIn: false,
      title: "Home"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  components: {
    TopNav,
    SideBar
  },

    methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        this.signedIn = true
        console.log(user)
      } catch(err) {
        this.signedIn = false
      }
    }
  },
  created() {
    this.findUser()

    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        this.findUser()
      } else {
        this.signedIn = false
      }
    })
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.nuxt-link {
  text-decoration: none;
}
.container {
  padding-left:5%;
  padding-right: 5%;
  margin-top: 5px;
}
.side-bar {
  width: 25%;
  float: left;
  margin-left: 5px;
  margin-right: 10px;
  text-align: center;
}
.box-card {
  margin: 5px;
  margin-top: 10px;
  text-align: center;
  padding: 0;
}
</style>
