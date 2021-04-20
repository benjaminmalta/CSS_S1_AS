<template>
<section>
  <div class="table-responsive-md">
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Profile Image</th>
        </tr>
            </thead>
            <tbody>
        <tr v-for="local in people" :key="local.id">
                <td>{{local.iD}}</td>
                <td>{{local.name}}</td>
                <td>{{local.surname}}</td>
                <td><img :src=local.profileImage></td>
        </tr>
            </tbody>
            </table>
  </div>
        <div class='row' id='buttonRow'>
            <button @click="back" type="button" class="btn btn-secondary">Back</button>
            </div>
</section>
    
</template>
<script>
export default {
    data(){
        return{
            people:[
                {
                    id: 1,
                    iD: "168200L",
                    name: "Kevin",
                    surname: "Borg",
                    profileImage: require("../Images/Profile-Image.png")
                },
                {
                    id: 2,
                    iD: "198610L",
                    name: "Julian",
                    surname: "Agius",
                    profileImage: require("../Images/Profile-Image.png")
                },
                {
                    id: 2,
                    iD: "198610L",
                    name: "Jeremy",
                    surname: "Vella",
                    profileImage: require("../Images/Profile-Image.png")
                },
            ]
        };
    },
    

  methods:{
    back(){
      this.$router.back();
    }
  }
}
</script>
<style scoped>
img{
    width: 100px;
}
section{
    margin: 2rem auto;
    
    border-radius: 12px;

}
button{    
    
    width: 100px;
    float: right;
}

</style>