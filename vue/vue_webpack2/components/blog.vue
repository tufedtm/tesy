<template>
    <div>
        <div v-for="(post, index) in posts">
            <img :src="post.image">
            <h3>{{ post.title }}</h3>
            <router-link :to="{ name: 'post', params: { id: index } }">подробнее</router-link>
        </div>
    </div>
</template>

<script>
    import posts from '../posts';

    export default {
        data: function () {
            return {
                posts
            }
        }
    }
</script>
