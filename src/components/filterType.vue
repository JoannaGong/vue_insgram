<template>
  <div class="filter-type">
    <p>{{ filter.name }}</p>
    <div
      class="img"
      :style="{backgroundImage: 'url('+ image +')'}"
      :class="filter.name"
      @click="selectFilter"
    ></div>
  </div>
</template>
<script>
export default {
    props: {
        filter: Object,
        image: String
    },
    methods: {
        selectFilter(){
            this.$emit('selectFilter', this.filter.name)
        }
    }

};
</script>
<style lang="scss" src="../styles/filter-type.scss">
</style>