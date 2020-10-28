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
                                        <th>Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(category,
                                        index) in get_categories"
                                        :key="category.id"
                                    >
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ category.name }}</td>
                                        <td>
                                            {{
                                                category.created_at
                                                    | time_format
                                            }}
                                        </td>
                                        <td>
                                            <router-link
                                                :to="
                                                    `/edit_category/${category.id}`
                                                "
                                                class="btn btn-sm btn-info text-white"
                                                ><i class="fa fa-edit"></i
                                            ></router-link>
                                            <a
                                                class="btn btn-danger btn-sm text-white"
                                                @click.prevent="
                                                    deleteCategory(category.id)
                                                "
                                            >
                                                <i class="fas fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr></tr>
                                </tbody>
                            </table>
                            <!-- <pagination
                                :data="categories"
                                @pagination-change-page="getCategory"
                            ></pagination> -->
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
        deleteCategory(id) {
            axios.get("/delete_category/" + id).then(response => {
                this.$store.dispatch("getCategory");
                Toast.fire({
                    icon: "error",
                    title: "Category deleted successfully"
                });
            });
        }
    },
    computed: {
        get_categories() {
            return this.$store.getters.getCategory;
        }
    },
    mounted() {
        this.$store.dispatch("getCategory");
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
