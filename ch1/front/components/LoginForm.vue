<template>
    <v-container>
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                        v-model="email"
                        :rules="emailRulse"
                        label = "이메일"
                        type = "emmail"
                        required
                    />
                    <v-text-field
                        v-model="password"
                        :rules="passwordRulse"
                        label = "비밀번호"
                        type = "password"
                        required
                    />
                    <v-btn color = "green" type = "submit" :disabled="!valid">로그인</v-btn>
                    <v-btn nuxt to ="/signup">회원가입</v-btn>
                    
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>
<script>
export default {   
    data(){
        return {
            valid: false,
            email: '',
            password: '',
            emailRulse: [
                v => !!v || "이메일을 입력하세요",
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "이메일이 유효하지 않습니다.",
            ],
            passwordRulse: [
                v => !!v || "비밀번호을 입력하세요",
            ],
        };
    },
    methods: {
        onSubmitForm(){
            this.$refs.form.validate();
        }
    }

}

</script>


<style></style>