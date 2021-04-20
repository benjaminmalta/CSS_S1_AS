<template>
  <transition name="view">
    <section>

    
    <table  class="table table-bordered" >

    <thead class="thead-dark">        
    <tr>
        <th>Personal Info</th>
        <th></th>
        </tr>
    </thead>
    <tr>
        <th>Identification:</th>
        <td>{{idcardno}}</td>
    </tr>    
    <tr>
        <th>Name:</th>
        <td>{{name.toUpperCase()}}</td>
    </tr>
    <tr>
        <th>Surname:</th>
        <td>{{surname.toLowerCase()}}</td>
    </tr>
    <tr>
        <th>Date Of Birth:</th>
        <td>{{dob}}</td>
    </tr>
    <tr>
        <th>Natonality:</th>
        <td>{{nation}}</td>
    </tr>
    <tr>
        <th>Gender:</th>
        <td>{{gender}}</td>
    </tr>
    
    <thead class="thead-dark">        
    <tr>
        <th>Contact Info</th>
        <th></th>
        </tr>
    </thead>
    
    
    <tr>
        <th >Email:</th>
        <td>{{email}}</td>
    </tr>
    <tr>
        <th>Telephone No:</th>
        <td>{{telephoneWCC}}</td>
    </tr>
    
    
    <thead class="thead-dark">        
    <tr>
        <th>Player Info</th>
        <th></th>
        </tr>
    </thead>
   
    <tr>
        <th>Player Status:</th>
        <td>{{status}}</td>
    </tr>
    <tr>
        <th>Club:</th>
        <td>{{strippedClubname}}</td>
    </tr>
    
    </table>
        
  </section>
  </transition>
</template>

<script>
export default {
  data(){
    return{
       idcardno: '', 
       name: '',
       surname: '',
       dob: '',
       nation: '',
       gender:'',
       email:'',
       telephone: '',
       status: '',
       club:'',       
    };
  },
  computed: {
    strippedClubname(){
      return this.club.substring(0,3)
    },
    telephoneWCC(){
      return "+356 " + this.telephone
    }
      
    
  },

methods:{
  async getData(){
      console.log("Getting data");
      var id = this.$route.params.memberId;
      try{
      const response = await fetch("https://clientsidescripting-6c454-default-rtdb.europe-west1.firebasedatabase.app/contact/"+id+".json",{
        method: 'GET'
      }) //the below will parse the data thats part of the response if it is in json format; returns a promise
        const responseData = await response.json();
        console.log(responseData.name);
        if(!response.ok){
              console.log("Something went wrong") 
        }
        this.idcardno = responseData.idcardno;
        this.name = responseData.name;
        this.surname = responseData.surname;
        this.dob = responseData.dob;
        this.nation = responseData.nation;
        this.gender = responseData.gender;
        this.email = responseData.email;
        this.telephone = responseData.telephone;
        this.status = responseData.status;
        this.club = responseData.club;
        
        
      }catch(error){
        console.log(error);
      }
    }
    },
    mounted(){
      console.log(this.$route.params.memberId);
      this.getData();
  }
}
  </script>
  <style  scoped>
  section {
  margin: 1rem auto;
  max-width: 80rem;
  border-radius: 12px; 
  }


  .view-enter, .view-leave {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  }


  .view-enter, .view-leave-to {
    opacity: 0;
  }
  .view-enter-to, .view-leave {
    opacity: 1;
  }
  
  </style>