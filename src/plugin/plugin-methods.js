export default {
    goto(value) {
        this.$router.push(value);
    },
    back() {
        this.$router.go(-1);
    },
    getUserInfo() {
        // const self = this;
        // self.$http.userInfo().then(res => {
        //     if (res.success === true) {
        //         self.$store.dispatch('initUserInfo', res.data)
        //     }
        // }, error => {
        //
        // });
    }
}
