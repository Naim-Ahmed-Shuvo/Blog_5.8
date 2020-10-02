<template>
    <div class="mt-30">
        <section class="content">
            <div class="container-fluid">
                <div class="row mt-30">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header ">
                                <h3 class="card-title">Category List</h3>
                                <div class="card-tools">
                                    <router-link
                                        :to="{ name: 'add_category' }"
                                        class="btn btn-primary"
                                        >Add Category</router-link
                                    >
                                </div>
                            </div>
                            <div class="card-body">
                                <table
                                    id="example2"
                                    class="table table-bordered table-hover"
                                >
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr
                                            v-for="category in categories"
                                            :key="category.id"
                                        >
                                            <td>{{ category.name }}</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        };
    },
    methods: {
        getCategory() {
            axios.get("get_Category").then(response => {
                this.categories = response.data;
                console.log(response);
            });
        }
    },
    mounted() {
        this.getCategory();
    }
    // computed: {
    //     getAllCategory() {
    //         // return this.$store.dispatch("getCategory");
    //         return this.$store.getters.getCategory;
    //     }
    // }
};
</script>

<style></style>
