<template>
    <div class="phone-body">
        <div class="feed" v-if="step === 1" v-dragscroll>
            <vuegram-post
                v-for="(post, index) in posts"
                :key="index"
                :post="post">
            </vuegram-post>
        </div>
        <div v-if="step === 2">
            <div class="selected-image"
                :style="{backgroundImage: 'url('+ image +')'}"
                :class="filter">
            </div>
            <div class="filter-container" v-dragscroll>
                <filter-type
                    v-for="filter in filters"
                    :key="filter.name"
                    :image='image'
                    :filter="filter"
                    @selectFilter="selectFilter">
                </filter-type>
            </div>
        </div>
        <div v-if="step === 3">
            <div class="selected-image"
                :style="{backgroundImage: 'url('+ image +')'}"
                :class="filter">
            </div>
            <div class="caption-container">
                <textarea
                    placeholder="Write a caption..."
                    :value="value"
                    @input='inputText'>
                </textarea>
            </div>
        </div>
    </div>
</template>
<script>
import vuegramPost from './vuegramPost'
import filterType from './filterType'

export default {
    props: {
        posts: Array,
        filters: Array,
        step: Number,
        image: String,
        value: String
    },
    data(){
        return {
            filter: ''
        }
    },
    components: {
        vuegramPost,
        filterType
    },
    methods: {
        selectFilter(evt){
            this.filter = evt
        },
        inputText(event){
            this.$emit('input', event.target.value)
        }
    }
}
</script>
<style lang="scss" src="../styles/phone-body.scss">

</style>