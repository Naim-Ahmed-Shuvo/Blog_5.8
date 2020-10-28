<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div class="title">
                                    <h5 style="font-family: sans-serif;">
                                        Edit Post
                                    </h5>
                                </div>
                                <div class="go">
                                    <router-link
                                        :to="{ name: 'post' }"
                                        class="btn btn-sm btn-info text-white"
                                        ><i class="fa fa-back"></i>All Posts
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <form
                                enctype="multipart/form-data"
                                @submit.prevent="updatePost"
                            >
                                <div class="form-group">
                                    <label for="">Title</label>
                                    <input
                                        type="text"
                                        v-model="form.title"
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="">Description</label><br />
                                    <textarea
                                        v-model="form.description"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        class="form-control"
                                    ></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Category ID</label>
                                    <select
                                        class="form-control"
                                        v-model="form.category_id"
                                    >
                                        <option
                                            v-for="category in get_categories"
                                            :key="category.id"
                                            :value="category.id"
                                        >
                                            {{ category.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input
                                        @change="update_img($event)"
                                        type="file"
                                    />

                                    <img
                                        :src="updateImage()"
                                        alt=""
                                        height="40"
                                        width="50"
                                    />
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="bt btn-sm btn-success"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
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
        this.$store.dispatch("getCategory");
    },

    created() {
        let id = this.$route.params.id;
        axios.get(`/edit_post/${id}`).then(response => {
            console.log(response.data);
            this.form.fill(response.data);
        });
    },
    computed: {
        get_categories() {
            return this.$store.getters.getCategory;
        }
    },
    data() {
        return {
            form: new Form({
                title: "",
                description: "",
                category_id: "",
                photo: ""
            })
        };
    },
    methods: {
        update_img(event) {
            let file = event.target.files[0];
            if (file.size > 1048576) {
                Swal.fire({
                    title: "Error!",
                    text: "Image size must be less than 1 MB",
                    icon: "error",
                    confirmButtonText: "Cool"
                });
            } else {
                let reader = new FileReader();
                reader.onload = event => {
                    this.form.photo = event.target.result;
                };

                reader.readAsDataURL(file);
            }
        },
        updatePost() {
            this.form
                .post(`/update_post/${this.$route.params.id}`)
                .then(response => {
                    this.$router.push({ name: "post" });
                    Toast.fire({
                        icon: "success",
                        title: "Post updated successfully"
                    });
                });
        },

        updateImage() {
            let img = this.form.photo;
            if (img.length > 100) {
                return this.form.photo;
            } else {
                return `post_img/${this.form.photo}`;
            }
        }
    }
};
</script>

<style scoped>
.main {
    padding: 60px 0px 0px 30px;
}
</style>
