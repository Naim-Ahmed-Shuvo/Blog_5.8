<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header ">
                            <div class="d-flex justify-content-between">
                                <h5>All Category</h5>

                                <div class="card-tools">
                                    <div>
                                        <router-link
                                            :to="{ name: 'add_category' }"
                                            class="btn btn-success"
                                            >Add Category</router-link
                                        >
                                    </div>
                                    <!-- <router-link
                                        type="button"
                                        class="btn btn-sm btn-success"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style="back-ground: #4ae095;"
                                    >
                                        Add Category
                                    </router-link> -->
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <table class="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">SL</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(post, index) in categories.data"
                                        :key="post.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ post.name }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'edit_category',
                                                    params: { id: post.id }
                                                }"
                                                href=""
                                                class="btn btn-sm btn-info"
                                                ><i class="fa fa-edit"></i
                                            ></router-link>
                                            <router-link
                                                :to="{
                                                    name: 'delete_category'
                                                }"
                                                class="btn btn-danger btn-sm"
                                            >
                                                <i class="fas fa-trash-alt"></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <pagination
                                :data="categories"
                                @pagination-change-page="getResults"
                            ></pagination>
                            <!-- Modal -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: {}
        };
    },

    methods: {
        getResults(page = 1) {
            axios.get("all_category?page=" + page).then(response => {
                this.categories = response.data;
            });
        }
    },
    mounted() {
        this.getResults();
    }
};
</script>

<style scoped>
.main {
    padding: 60px 0px 0px 30px;
}
.card {
    box-shadow: -2px -2px 5px dimgray;
}

.card-tools button {
    background: #39ad73;
}
</style>
