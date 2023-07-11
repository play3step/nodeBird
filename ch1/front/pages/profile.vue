<template>
    <div>
        <v-container>
            <v-card style="margin-bottom: 20px;">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form>
                        <v-text-field label="닉네임" required />
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
            name: 'nuxt.js',
        }
    },
}

</script>


<style></style>