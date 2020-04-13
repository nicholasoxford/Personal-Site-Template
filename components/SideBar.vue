<template>
  <div class="tall">
    <div class="img-div">
      <img src="~/static/nick.jpg" alt="nick" class="circle-img" />
    </div>
    <div class="padding">
      <h1 class="name">
        Nicholas Oxford
      </h1>
        <hr class="line" />
        <h2 class="subtitle1">
          Atlanta, Ga
        </h2>
        <h3 class="bio">
         💻 Peloton Software Engineer (Intern) <br>
         🌎 International Baccalaureate <br>
         📕 Started at Babson College <br>
         📚 Graduating from Georgia State
        </h3>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.name {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle1 {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
  padding-bottom: 15px;
}
.circle-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.bio {
  text-align: left;
}
.img-div {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 30px;
  margin-bottom: 10px;
}
.img-div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
</style>
