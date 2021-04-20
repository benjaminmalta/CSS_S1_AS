<template>
  <div v-show="isDeleting" id="modalComp">
  
  <delete-component v-bind:deletingId="deletingId" v-bind:deleteIndex="deleteIndex" ref="modalComponent">

  </delete-component>
 
  </div>
  <section  v-if="this.results.length" >
    <div class="table-responsive-lg">
    <table class="table" id="tableData" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">View</th>
      <th scope="col">Identification</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>      
      <th scope="col">Email</th>
      <th scope="col"></th>      
      <th scope="col"></th>

      
    </tr>
  </thead>
  <tbody>
    <tr v-for="res in results" :key="res.id">
    <td><button @click="viewMember(res)" class='btn btn-primary'>View</button></td> 
    <td>{{res.idcardno}}</td> 
    <td>{{res.name}}</td>
    <td>{{res.surname}}</td>    
    <td>{{res.email}}</td>
    <td><button @click="updateMember(res)" class='btn btn-primary'>Update</button></td>
    <td><button @click="deleteMember(res)" class='btn btn-danger'>Delete</button></td> 
    </tr>
  </tbody>
</table>
    </div>
  </section>
  <section v-else-if="!this.results.length">
    No data to show
  </section>
</template>

<script>
import deleteComponent from './DeleteComponent';
//import AppVue from '../App.vue';


export default {
  data(){    
    return{
      deletingId: '',
      isDeleting: false,
      results: [],     
      reload: 0,
      deleteIndex: 0,
      
    };
  },
  components:{
   'delete-component' : deleteComponent
  },
  
  methods:{
//we can connect this to a button as well
    updateMember(member){      
      const memId = member.id;
      this.$router.push('/updateForm/' + memId);
      
    },
    viewMember(member){
      const memId = member.id;
      this.$router.push('/viewMember/' + memId);
    },
    deleteMember(res){
      //const memID = res.id;
            
     
      //fetch("https://clientsidescripting-6c454-default-rtdb.europe-west1.firebasedatabase.app/contact/"+res.id+".json",{method: 'DELETE'});      
      //console.log(res);
      //document.getElementById("tableData").deleteRow(res.index);
      this.deleteIndex = res.index;
      //this.$router.push('/deleteComponent/' + res.id);
      this.isDeleting = true;
      this.deletingId = res.id;
      console.log (this.deletingId);
      console.log("Deleting row" + this.deleteIndex);
      deleteComponent.methods.showModal(res.id);
      

    },
    deleteRowId(id){
      console.log("Deleting row 84: " + id);
      document.getElementById("tableData").deleteRow(id);
    },
    
    

    async getData(){
      console.log("Getting data");
      try{
      const response = await fetch("https://clientsidescripting-6c454-default-rtdb.europe-west1.firebasedatabase.app/contact.json",{
        method: 'GET'
      }) //the below will parse the data thats part of the response if it is in json format; returns a promise
        const responseData = await response.json();
        if(!response.ok){
              console.log("Something went wrong") 
        }
        var index = 0; 
        const results = [];
        for (const id in responseData){
          index ++;  
          console.log(index);
          results.push({  
                  
            id:id,
            idcardno: responseData[id].idcardno,
            name: responseData[id].name,
            surname: responseData[id].surname,
            email: responseData[id].email,
            index,     
          }); 
          

          this.results = results;
        }
      }catch(error){
        console.log(error);
      }
    },
  },
  //when component is fully initialised call method
  mounted(){
      this.getData();
  }
}
</script>


<style scoped>
section {
  margin: 2rem auto;
  
  border-radius: 12px;
}




</style>