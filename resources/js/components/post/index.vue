<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div class="title">
                                    <h5>All Posts</h5>
                                </div>
                                <div class="go">
                                    <router-link
                                        :to="{ name: 'add_post' }"
                                        class="btn btn-sm btn-info text-white"
                                        ><i class="fa fa-plus"></i>New
                                        One</router-link
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Photo</th>
                                        <th scope="col">SL</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(post, index) in getAllPosts"
                                        :key="post.id"
                                    >
                                        <td>
                                            <img
                                                :src="postImage(post.photo)"
                                                alt=""
                                                width="40"
                                                height="50"
                                            />
                                        </td>
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ post.user_id }}</td>

                                        <td>{{ post.category_id }}</td>

                                        <td>{{ post.title }}</td>

                                        <td>
                                            {{ post.description }}
                                        </td>

                                        <td>
                                            <router-link
                                                :to="`/edit_post/${post.id}`"
                                                class="btn btn-info btn-sm text-white"
                                                ><i class="fas fa-edit"></i
                                            ></router-link>
                                            <a
                                                @click.prevent="
                                                    deletePost(post.id)
                                                "
                                                class="btn btn-sm btn-danger text-white"
                                                ><i class="fas fa-trash-alt"></i
                                            ></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getAllPost");
    },

    computed: {
        getAllPosts() {
            return this.$store.getters.getPosts;
        }
    },

    methods: {
        postImage(img) {
            return "post_img/" + img;
        },

        deletePost(id) {
            axios.get("/delete_post/" + id).then(response => {
                this.$store.dispatch("getAllPost");
                Toast.fire({
                    icon: "error",
                    title: "Post deleted successfully"
                });
            });
            console.log(id);
        }
    }
};
</script>

<style scoped>
.main {
    padding: 60px 0px 0px 0px;
}

.card-header {
    background: #82bfe8;
    color: white;
}
</style>
