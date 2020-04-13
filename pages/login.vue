<template>
  <div class="login">
    <img class="logo" src="../assets/logo.png" alt="Nuxt Amplify Auth Starter">
    <div v-if="!signedIn">
      <amplify-authenticator />
    </div>
    <div v-else>
       <amplify-photo-picker
            v-bind:photoPickerConfig="photoPickerConfig"
          ></amplify-photo-picker>
          <amplify-s3-album path="images/"></amplify-s3-album>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Storage } from 'aws-amplify'
Storage.list('images/')
  .then(data => console.log('images from S3: ', data))
  .catch(err => console.log('error'))

const photoPickerConfig = {
  path: 'images/',
}

export default {
  data() {
    return {
      signedIn: false,
      photoPickerConfig
    }
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

.logo {
  margin-bottom: 30px;
  max-width: 400px;
}
</style>