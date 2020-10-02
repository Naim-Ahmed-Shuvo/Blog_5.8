<template>
    <div class="main_content">
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around mt-5">
                    <div class="col-lg-6 ">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h5>Create Category</h5>
                            </div>

                            <form
                                role="form"
                                @submit.prevent="add_category"
                                @keydown="form.onKeydown($event)"
                            >
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1"
                                            >Category Name</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="form.category_name"
                                            name="category_name"
                                            id="exampleInputEmail1"
                                            placeholder="Enter category name"
                                            :class="{
                                                'is-invalid': form.errors.has(
                                                    'category_name'
                                                )
                                            }"
                                        />
                                        <has-error
                                            :form="form"
                                            field="category_name"
                                        ></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputFile"
                                            >File input</label
                                        >
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    id="exampleInputFile"
                                                />
                                                <label
                                                    class="custom-file-label"
                                                    for="exampleInputFile"
                                                    >Choose file</label
                                                >
                                            </div>
                                            <div class="input-group-append">
                                                <span
                                                    class="input-group-text"
                                                    id=""
                                                    >Upload</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Form } from "vform";
export default {
    data() {
        return {
            // Create a new form instance
            form: new Form({
                category_name: ""
            })
        };
    },
    methods: {
        add_category() {
            // Submit the form via a POST request
            this.form.post("/add_category").then(response => {
                this.$router.push("/category");
                toast.fire({
                    icon: "success",
                    title: "Category added"
                });
            });
        }
    },
    mounted() {
        console.log("component mountd.");
    }
};
</script>

<style></style>
