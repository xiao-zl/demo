<template>
  <el-row>
    <el-input v-model="name" placeholder="请输入内容" clearable></el-input>
    <el-button type="primary" @click="search">搜索</el-button>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name:'search',
  data(){
    return{
      name:''
    }
  },
  mounted(){
    console.log('search',this)
  },
  methods:{
    search(){
      axios.get(`https://api.github.com/search/users?q=${this.name}`).then(
        response =>{
          console.log(JSON.parse(JSON.stringify(response.data.items)))
          // this.$store.state.users=response.data.items
          this.$bus.$emit('getUsers',response.data.items)
        },
        err=>{
          console.log(err.message)
        }
        
      )
    }
  }
}
</script>

<style scoped>
.el-row { 
  margin-bottom: 5px;
}

.el-input {
  width: 180px;
  margin-right: 5px;
}
</style>