<template>
    <div>
        <div id="wrap">

            <AppHeader/>


            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>갤러리</h2>
                    <ul>
                        <li><a href="">일반갤러리</a></li>
                        <li><a href="">파일첨부연습</a></li>
                    </ul>
                </div>
                <!-- //aside -->


                <div id="content">

                    <div id="content-head">
                        <h3>첨부파일연습</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li class="last">첨부파일연습</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->


                    <div id="file">

                        <div>
                            <img id="resultImg" v-bind:src="`http://localhost:9000/upload/${this.$route.query.saveName}`">
                        </div>
                        <p>
                            <router-link id="btnUpload" to="/attach/form">다시 업로드 하기</router-link>
                        </p>

                    </div>
                    <!-- //file -->

                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->


            <AppFooter/>

        </div>
        <!-- //wrap -->
    </div>
</template>


<script>
import "@/assets/css/gallery.css"

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "AttachResultView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>