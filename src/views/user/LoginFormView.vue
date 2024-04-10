<template>
    <div>
        <div id="wrap">

            <AppHeader/>

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>회원</h2>
                    <ul>
                        <li>회원정보</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">

                    <div id="content-head">
                        <h3>로그인</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li class="last">로그인</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="user">
                        <div id="loginForm">
                            <form v-on:submit.prevent="login" action="" method="">

                                <!-- 아이디 -->
                                <div class="form-group">
                                    <label class="form-text" for="input-uid">아이디</label>
                                    <input type="text" id="input-uid" name="id" v-model="userVo.id"
                                        placeholder="아이디를 입력하세요">
                                </div>

                                <!-- 비밀번호 -->
                                <div class="form-group">
                                    <label class="form-text" for="input-pass">비밀번호</label>
                                    <input type="text" id="input-pass" name="password" v-model="userVo.password"
                                        placeholder="비밀번호를 입력하세요">
                                </div>


                                <!-- 버튼영역 -->
                                <div class="button-area">
                                    <button type="submit" id="btn-submit">로그인</button>
                                </div>

                            </form>
                        </div>
                        <!-- //loginForm -->
                    </div>
                    <!-- //user -->
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
import "@/assets/css/user.css"
import axios from 'axios';

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "LoginFormView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            userVo: {
                id: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            console.log("로그인");
            axios({
                method: 'post', //put, post, delete                   
                url: 'http://localhost:9000/api/users/login',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                if(response.data.result=="success"){
                    //로그인 사용자 정보
                    let authUser=response.data.apiData;

                    // token 응답문서의 헤더에 있음    
                    //"Authorization Bearer fdjafdjaslfdjalfjda.ajfdkfjdlsafd.fdjksfjdal"                
                    const token = response.headers.authorization.split(" ")[1];
                
                    //vuex저장
                    this.$store.commit("setAuthUser", authUser);
                    this.$store.commit("setToken", token);

                    console.log(authUser);
                    console.log(token); 

                    this.$router.push("/");
                }else{
                    console.log(response.data.message);
                    alert("아이디, 패스워드를 확인하세요")
                }


            }).catch(error => {
                console.log(error);
            });


        }

    },
};
</script>