<template>
  <div class="login">
    <div class="top">
      <img src="../../assets/img/head_default.png" alt />
    </div>
    <p class="phone in">
      <i></i>
      <input v-model="phonenum" class="phone-num" type="text" @focus="focusNumber" maxlength="11" placeholder="请输入您的手机号码" />
      <b @click="showInfo"></b>
    </p>
    <p class="pass in">
      <i></i>
      <input v-model="password" class="pass-word" @focus="focusString" type="password" placeholder="请输入密码" />
    </p>
    <div @click="checkInfo" class="login-btn">登录</div>
    <div class="mask" v-if="showDialog">
      <div class="dialog">
        <h4>账号说明！</h4>
        <i></i>
        <p>testttttttttttttttttttttttttttttttttttttttttt</p>
        <div class="know" @click="closeInfo">我知道了</div>
      </div>
    </div>
  </div>
</template>

<script>
import Apis from "@/apis/api.js";

export default {
  name: "Login",

  data() {
    return {
      phonenum: "",
      password: "",
      npw:'',//记住的密码
      showDialog: false,
    };
  },
  methods: {

    //弹窗
    showInfo() {
      this.showDialog = true;
    },
    closeInfo() {
      this.showDialog = false;
    },
    //修复记住密码的问题
    focusString() {
      if(this.npw != ''){
        this.npw = '';
        this.password = '';
      }
    },
    focusNumber() {
      if(this.npw != ''){
        this.npw = '';
        this.password = '';
        this.phonenum = '';
      }
    },
    //输入信息校验
    checkInfo() {
      const reg = new RegExp("^[1]{1}[3,4,5,7,8,9]{1}[0-9]{9}$");

      if (this.phonenum == "") {

        return;
      }

      if (!reg.test(this.phonenum)) {
 
        return;
      }

      if (this.password == "") {

        return;
      }

      if (this.password.length < 6) {
   
        return;
      }

    },
    //提交登录验证
    goLogin(ph, pw) {
      Apis.queryallmessages({
        msisdn: ph,
        password: pw
      }).then(res => {
        let data = res.data;
        if (data) {

        } else {

        }
      });
    }
  },
  mounted() {
    document.body.addEventListener('focusout', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #ffffff;
  .top {
    width: 750px;
    height: 400px;
    text-align: center;
    img {
      width: 194px;
      height: 204px;
      margin-top: 165px;
    }
  }
  .in {
    width: 484px;
    margin: 0 auto;
    height: 80px;
    position: relative;
    i {
      position: absolute;
      top: 50%;
      left: -34px;
      transform: translateY(-50%);
    }
    &.phone {
      margin-top: 74px;
      margin-bottom: 8px;
      i {
        display: inline-block;
        width: 26px;
        height: 38px;
        background: url("../../assets/img/icon_phone.png") no-repeat center top;
        background-size: 100% 100%;
      }
      b {
        position: absolute;
        display: inline-block;
        width: 35px;
        height: 35px;
        background: url("../../assets/img/icon_w.png") no-repeat center top;
        background-size: 100% 100%;
        top: 50%;
        right: -80px;
        transform: translateY(-50%);
      }
    }
    &.pass {
      i {
        display: inline-block;
        width: 29px;
        height: 40px;
        background: url("../../assets/img/icon_lock.png") no-repeat center top;
        background-size: 100% 100%;
      }
    }

    .pass-word,
    .phone-num {
      width: 484px;
      line-height: 50px;
      height: 50px;
      border-bottom: 1px solid #ababab;
      margin-left: 14px;
      padding-left: 8px;
      font-size: 30px;
      color: #999999;
      margin-top: 20px;
      &::placeholder {
        font-size: 30px;
        color: #cccccc;
      }
    }
  }
  .login-btn {
    width: 550px;
    height: 110px;
    line-height: 110px;
    text-align: center;
    margin: 167px auto 0;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(
      307deg,
      rgba(84, 159, 255, 1) 0%,
      rgba(93, 109, 255, 1) 100%
    );
    box-shadow: 0 4px 8px 0 rgba(67, 128, 205, 0.52);
    border-radius: 60px;
  }

  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    .dialog {
      width: 515px;
      padding: 0 30px;
      padding-top: 55px;
      min-height: 630px;
      background: #fff;
      border-radius: 30px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h4 {
        color: #4f9cff;
        font-size: 38px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
      }
      i {
        display: inline-block;
        width: 48px;
        height: 6px;
        background: #4f9cff;
        border-radius: 6px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      p {
        color: #5a5a5a;
        font-size: 28px;
        min-height: 295px;
        line-height: 50px;
      }
      .know {
        width: 430px;
        height: 96px;
        text-align: center;
        margin: 0 auto;
        margin-top: 10px;
        line-height: 94px;
        font-family: PingFangSC-Medium;
        font-size: 36px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(
          307deg,
          rgba(84, 159, 255, 1) 0%,
          rgba(93, 109, 255, 1) 100%
        );
        box-shadow: 0 4px 8px 0 rgba(67, 128, 205, 0.52);
        border-radius: 60px;
      }
    }
  }
}
</style>
