<template>
    <div class="main">
        <div class="container">
            <div class="row  justify-content-around">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div class="card-title">
                                    <h5>Add Category</h5>
                                </div>
                                <div class="card-tools">
                                    <router-link
                                        :to="{ name: 'category' }"
                                        class="btn btn-info btn-sm"
                                    >
                                        All Category
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <form @submit.prevent="create_category">
                                <div class="form-group">
                                    <label for="">Category Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="form.category_name"
                                    />
                                </div>

                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                    >
                                        Add
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
    data() {
        return {
            form: new Form({
                category_name: ""
            })
        };
    },

    methods: {
        create_category() {
            this.form.post("add_category").then(({ data }) => {
                this.$router.push({ name: "category" });
                Toast.fire({
                    icon: "success",
                    title: "Category inserted successfully"
                });
            });
        }
    }
};
</script>

<style></style>
