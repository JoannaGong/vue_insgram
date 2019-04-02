<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <a class="cancel-cta"
          v-if="step===2 || step===3"
          @click="goToHome"
        >Cancel</a>
        <img src="./assets/vue_gram_logo_cp.png">
        <a class="next-cta"
          v-if="step===2"
          @click="step++">
          Next
        </a>
        <a class="next-cta"
          v-if="step===3"
          @click="share">
          Share
        </a>
      </div>
      <phone-body
        :posts="posts"
        :step="step"
        :image='image'
        :filters='filters'
        v-model="caption">
      </phone-body>
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fas fa-home fa-lg" @click="goToHome"></i>
        </div>
        <div class="upload-cta">
          <input type="file" id="file" name="file" @change="uploadImage"   :disabled="step!== 1">
          <label for="file"><i class="far fa-plus-square fa-lg"></i></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from './data/posts'
import phoneBody from "./components/phoneBody"
import filters from './data/filters'

export default {
  data(){
    return {
      posts,
      step: 1,
      image: '',
      filters,
      caption: '123'
    }
  },
  components: {
    phoneBody
  },
  methods:{
    uploadImage(evt){
      const files = evt.target.files;
      if(!files.length) return;
      
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload=evt => {
        this.image = evt.target.result;
        this.step = 2
      }
    },
    goToHome(){
      this.image = "";
      this.filter = "";
      this.step = 1;
    },
    share(){
      const post = {
        username: "liuluwei",
        userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
        postImage: this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.filter
      }
      this.posts.unshift(post);
      this.goToHome();
    }
  }
};
</script>

<style lang="scss" src="./styles/app.scss">
</style>
