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
                        <form v-on:submit.prevent="uploadFile" action="" method="post" enctype="multipart/form-data">
                            <table>
                                <colgroup>
                                    <col style="width: 600px;">
                                    <col style="width: 220px;">
                                </colgroup>

                                <!-- 추가된 부분 -->
                                <tr>
                                    <td class="text-left">
                                        <label>이름</label>
                                        <input type="text" name="name" v-model="name">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left">
                                        <label>성별</label>
                                        <input type="text" name="gender" v-model="gender">
                                    </td>
                                </tr>
                                <!-- //추가된 부분 -->
                                
                                <tr>
                                    <td class="text-left"><input v-on:change="selectFile" type="file" name="file"></td>
                                    <td class="text-right"><button type="submit">파일업로드</button></td>
                                </tr>
                            </table>
                        </form>
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
import axios from 'axios';

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"


export default {
    name: "AttachFormView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            file:"",
            name:"",
            gender:""
        };
    },
    methods: {
        selectFile(event){
            console.log("파일 선택");

            this.file=event.target.files[0];
        },
        uploadFile(){
            console.log("파일 업로드");

            //데이터 서버 전송용 전용 박스
            let formData=new FormData();
            formData.append("file", this.file);
            //data로 보낸다(json 방식이 아님)
            formData.append("name", this.name);
            formData.append("gender", this.gender);

            axios({
                method: 'post', // put, post, delete                   
                url: 'http://localhost:9000/api/attach',
                headers: { "Content-Type": "multipart/form-data" }, //전송타입
                //*멀티파트로 변경
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.apiData); //수신데이터
                let saveName=response.data.apiData;

                this.$router.push(
                    {
                        path:"/attach/result",
                        query:{saveName:saveName}
                    }
                );

            }).catch(error => {
                console.log(error);
            });
        }
    },
};
</script>


<style></style>