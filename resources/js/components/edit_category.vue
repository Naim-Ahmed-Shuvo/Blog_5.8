<template>
    <div class="main">
        <div class="card">
            <div class="card-header">
                Edit Category
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategory()">
                    <div class="form-group">
                        <label for="">Category Name</label>
                        <label for="">{{ this.$route.params.id }}</label>
                        <input
                            v-model="form.category_name"
                            type="text"
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-sm btn-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        axios.get(`/edit_category/${this.$route.params.id}`).then(response => {
            console.log(response.data);
            this.form.category_name = response.data.name;
            // this.form.fill(response.data);
        });
    },

    data() {
        return {
            form: new Form({
                category_name: ""
            })
        };
    },

    methods: {
        updateCategory(id) {
            this.form
                .post(`/update_category/${this.$route.params.id}`)
                .then(({ data }) => {
                    this.$router.push({ name: "category" });
                    Toast.fire({
                        icon: "success",
                        title: "Category Updated successfully"
                    });
                });
        }
    }
};
</script>

<style>
.main {
    padding: 60px 0px 0px 30px;
}
</style>
