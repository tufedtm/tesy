<template>
    <div v-if="post">
        <img :src="post.image">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
    import posts from '../posts';

    export default {
        data: function () {
            return {
                posts,
                post: null
            }
        },
        created: function () {
            const postId = this.$route.params.id

            this.post = this.posts[postId]
        }
    }
</script>

<style></style>
