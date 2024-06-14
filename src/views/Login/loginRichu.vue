<template>
    <div class="login">
        <div class="box">
            <div class="left"></div>
            <div class="right">
                <h4>登 录</h4>
                <el-form :model="logininfos" :rules="rules" ref="loginforms">
                    <el-form-item prop="username">
                        <el-input class="acc" type="text" placeholder="输入用户名" :prefix-icon="User"
                            v-model="logininfos.username">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="acc" type="password" placeholder="密码" :prefix-icon="Lock"
                            v-model="logininfos.password" :show-password="true">
                        </el-input>
                    </el-form-item>
                    <input class="submit" value="Login" @click="submit">
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
/* 引入小仓库 */
import userStore from "../../stores/modules/user"
//导入路由
import { useRouter } from "vue-router"
//导入消息提示
import { ElNotification } from 'element-plus';
import { getTime } from '../../utils/time'
const userinfo = userStore();
let $router = useRouter();
let loginforms = ref();
let logininfos = reactive({ username: 'admin', password: '111111' })

const submit = async () => {
    //保证校验全部通过
    await loginforms.value.validate();

    try {
        await userinfo.UserLogins(logininfos);
        //编程式路由导航跳转
        $router.push('/');
        //登录成功的提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `Hi,${getTime()}好`
        })
    } catch (error) {
        //登录失败的提示信息
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}

const rules = {
    username: [
        { required: true, min: 5, max: 10, message: '长度为6-10位', trigger: 'change' }
    ],
    password: [
        { required: true, min: 5, max: 10, message: '长度为6-10位', trigger: 'change' }
    ]
}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100vh;
    background-color: rgb(144, 129, 241);
}

::selection {
    color: #fff;
    background-color: rgb(144, 129, 241);
}

.box {
    display: flex;
    overflow: hidden;
    width: 90rem;
    height: 55rem;
    background-color: rgba(255, 255, 255, 60%);
    border-radius: 1.5rem;
    margin: 0 auto;
    box-shadow: 0 0 1rem 0.2rem rgb(0 0 0 / 10%);
}

.box .left {
    position: relative;
    width: 35%;
    height: 100%;
    background-color: skyblue;
}

.box .left::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 80%;
}

.box .right {
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: center;
}

.box .right h4 {
    color: rgb(144, 129, 241);
    font-size: 3rem;
    margin-top: 5rem;
}

el-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.acc {
    outline: none;
    width: 800px;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 5rem;
    padding: 1rem 0 0 1.6rem;
    border: none;
    border-bottom: 1px solid rgb(144, 129, 241);
    color: rgb(144, 129, 241);
    background-color: rgba(0, 0, 0, 0);
}

.acc:focus {
    outline: none;
    color: rgb(144, 129, 241);
    padding: 1rem 0 0 1.6rem;
}

.right .submit {
    width: 60%;
    height: 5rem;
    color: #f6f6f6;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #e0c3fc 100%);
    font-size: 1.4rem;
    border: none;
    border-radius: 0.5rem;
    margin: 6rem 0 0 50%;
    transform: translateX(-50%);
    text-align: center;
    line-height: 5rem;
}

.right .submit:hover {
    box-shadow: 0 0 2rem -0.5rem rgb(0 0 0 / 15%);
}

.right .fn {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    width: 70%;
}

.right .fn a {
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 5rem;
    padding: 1rem 2rem;
    color: #666;
}

.right .fn a:hover {
    color: rgb(144, 129, 241);
}
</style>