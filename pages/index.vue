<template>
  <div class="container">
    <h2 class="title">
      About this website
    </h2>
    <hr class="line" />
    <p class="para-1">
      I created this personal website to share an easy to follow tutorial + tempalte. When I was making a wesbite, I often times got overwhelemd or hit a roadblock. The JAMstack movement particullary interested me, especially with Nuxt. However I wanted to find something that just "worked". After working with a few AWS employees during a COVID Hackathon, I was introduced to AWS Amplify. I was so impressed by the product, I thought that everyone should create personal website / internal tools using this platform.<br>
    <br>  You can find the code for this website <a href="https://github.com/nicholasoxford/Personal-Site-Template">here.</a>
      <hr class="line" />
      <h3 class="subtitle">
        Technology this website was made with:
      </h3>
  <div class="imgcon">
      <img src="~/static/nuxt.png" alt="nuxt" class="tech" />
     <img src="~/static/aws.png" alt="aws" class="tech" />
      <img src="~/static/cog.png" alt="cog" class="tech"  />
      <img src="~/static/s3.png" alt="s3" class="tech"  />
            <img src="~/static/lambda.png" alt="lambda" class="tech"  />
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 75px;
  color: #35495e;
  letter-spacing: 1px;
}
.para-1 {
  text-align: left;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-top: 10px;
  text-align: center;
}
.box-card {
  margin-left: 5px;
  margin-right: 5px;
  width: auto;
}
.links {
  padding-top: 15px;
  padding-bottom: 15px;
}
.para-1 {
  border: 3px grey;
  font-size: 25px;
}
.tech {
 vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
  max-height: 120px;
  padding-bottom: 15px;
  padding-left: 10px;
}
.imgcon {
 
}
</style>
