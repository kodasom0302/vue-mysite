<template>
    <div>
        <div id="header" class="clearfix">
            <h1>
                <router-link to="/">MySite</router-link>
            </h1>


            <ul v-if="this.$store.state.authUser != null">
                <li>{{ this.$store.state.authUser.name }} 님 안녕하세요^^</li>
                <li><button v-on:click="logout" type="button" class="btn_s">로그아웃</button></li>
                <li><router-link to="/user/modifyform" class="btn_s">회원정보수정</router-link></li>
            </ul>

            <ul v-if="this.$store.state.authUser == null">
                <li><router-link to="/user/loginform" class="btn_s">로그인</router-link></li>
                <li><router-link to="/user/joinform" class="btn_s">회원가입</router-link></li>
            </ul>

        </div>
        <!-- //header -->

        <div id="nav">
            <ul class="clearfix">
                <li><a href="">입사지원서</a></li>
                <li><a href="">게시판</a></li>
                <li><a href="">갤러리</a></li>
                <li><a href="">방명록</a></li>
            </ul>
        </div>
        <!-- //nav -->
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
        logout() {
            console.log("로그아웃");
            this.$store.commit("setAuthUser", null);
            this.$store.commit("setToken", null);
        }
    },
    created() { }
};
</script>