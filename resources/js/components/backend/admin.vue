<template>
    <div class="wrapper">
        <!-- Navbar -->
        <topbar></topbar>
        <!-- ./endNavbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <!-- Sidebar -->
            <sidebar></sidebar>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
        <!-- /.content-wrapper -->
        <!-- footer -->
        <footerr></footerr>
        <!-- footer end -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
import topbar from "./topnavbar.vue";
import sidebar from "./sidebar.vue";
import footerr from "./footer.vue";
export default {
    components: {
        topbar,
        sidebar,
        footerr
    },
    mounted() {
        console.log("component mounted.");
    }
};
</script>
