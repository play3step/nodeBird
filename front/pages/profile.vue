<template>
    <div>
        <v-container>
            <v-card style="margin-bottom: 20px;">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form v-model="valid" @submit.prevent="onChangeNickname">
                        <v-text-field 
                        v-model="nickname"
                        label="닉네임" 
                        :rules="nicknameRules"
                        required 
                        />
                        <v-btn color="blue" type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px;">
                <v-container>
                    <v-subheader>팔로잉</v-subheader>
                    <followList />
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px;">
                <v-container>
                    <v-subheader>팔로워</v-subheader>
                    <followList />
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import followList from '../components/FollowList.vue'
export default {
    components: {
        followList,
    },
    data() {
        return {
            valid: false,
            nickname: '',
            nicknameRules: [
                v => !!v || '닉네임을 입력하세요',
            ]
        };
    },
    methods: {
        onChangeNickname(){
            this.$store.dispatch('users/changeNickname',{
                nickname: this.nickname
            })
        }
    }
}

</script>


<style></style>