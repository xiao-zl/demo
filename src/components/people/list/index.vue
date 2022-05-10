<template>
  <el-row :gutter="20">
    <el-col :span="6" class="block" v-for="user in users" :key="user.id">
      <el-image
      :src='user.avatar_url'
      fit='fill'>
      </el-image>
      <span class="demonstration">{{user.login}}</span>
    </el-col>
  </el-row>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'list',
  data(){
    return{
      users:[]
    }
  },
  computed:{
    // users(){
    //   return this.$store.state.users
    // }
    //vuex方案
    // ...mapState(['users'])
  },
  mounted(){
    this.$bus.$on('getUsers',(users)=>{
      this.users=users
    })
  }
}
</script>
