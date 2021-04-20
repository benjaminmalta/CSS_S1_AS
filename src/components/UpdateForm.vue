<template>
<div class="container">
    <form @submit.prevent="updateForm">
    <br/>
    <h1>Personal Details</h1>
    <br/>
      <div class="form-group row">
        <label for="idcardno" class="col-md-2 col-form-label">Identification</label>
        <div class="col-sm-6">
          <input @blur="$v.idcardno.$touch()" id="idcardno" class="form-control" type="text" v-model.trim="idcardno"/>
          <div v-if="$v.idcardno.$error">
            <div v-for="(error, index) of $v.idcardno.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="name" class="col-md-2 col-form-label">Name</label>
        <div class="col-sm-6">
          <input @blur="$v.name.$touch()" id="name" class="form-control" type="text" v-model.trim="name"/>
          <div v-if="$v.name.$error">
            <div v-for="(error, index) of $v.name.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="surname" class="col-md-2 col-form-label">Surname</label>
        <div class="col-sm-6">
          <input @blur="$v.surname.$touch()" id="name" class="form-control" type="text" v-model.trim="surname"/>
          <div v-if="$v.surname.$error">
            <div v-for="(error, index) of $v.surname.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="dob" class="col-md-2 col-form-label">Date Of Birth</label>
        <div class="col-sm-6">
          <input @blur="$v.dob.$touch()" id="name" class="form-control" type="date" v-model.trim="dob" />
          <div v-if="$v.dob.$error">
            <div v-for="(error, index) of $v.dob.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="nation" class="col-md-2 col-form-label">Nationality</label>
        <div class="col-sm-6">
          <select @blur="$v.nation.$touch()" id="nation" name="nation" class="form-control" v-model.trim="nation">
            <option value=""></option>
            <option value="Maltese">Maltese</option>
            <option value="Gozitan">Gozitan</option>
            <option value="Other">Other</option>
          </select>
          <div v-if="$v.nation.$error">
            <div v-for="(error, index) of $v.nation.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="gender" class="col-md-2 col-form-label">Gender</label>
        <div class="col-sm-6">
          <select @blur="$v.gender.$touch()" id="gender" name="gender" class="form-control" v-model.trim="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>
          <div v-if="$v.gender.$error">
            <div v-for="(error, index) of $v.gender.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <h1>Contact Details</h1>
      <br/>
      <div class="form-group row">
        <label for="email" class="col-md-2 col-form-label">Email</label>
        <div class="col-sm-6">
          <input @blur="$v.email.$touch()" id="email" class="form-control" type="text" v-model.trim="email"/>
          <div v-if="$v.email.$error">
            <div v-for="(error, index) of $v.email.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>



      <div class="form-group row">
        <label for="password" class="col-md-2 col-form-label">Password</label>
        <div class="col-sm-6">
          <input @blur="$v.password.$touch()" id="password" class="form-control" type="password" v-model.trim="password"/>
          <div v-if="$v.password.$error">
            <div v-for="(error, index) of $v.password.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="cpassword" class="col-md-2 col-form-label">Confirm Password</label>
        <div class="col-sm-6">
          <input @blur="$v.cpassword.$touch()" id="cpassword" class="form-control" type="password" v-model.trim="cpassword"/>
          <div v-if="$v.cpassword.sameAsPassword">
            <div v-for="(error, index) of $v.cpassword.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="form-group row">
        <label for="telephone" class="col-md-2 col-form-label">Telephone</label>
        <div class="col-sm-6">
          <input @blur="$v.telephone.$touch()" id="telephone" class="form-control" type="text" v-model.trim="telephone"/>
          <div v-if="$v.telephone.$error">
            <div v-for="(error, index) of $v.telephone.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <br/>
      <h1>Player Details</h1>
      <br/>

      <div class="form-group row">
        <label for="status" class="col-md-2 col-form-label">Player Status</label>
        <div class="col-sm-6">
          <select @blur="$v.status.$touch()" id="status" name="status" class="form-control" v-model.trim="status">
            <option value=""></option>
            <option value="Full-Time">Full-Time Pro</option>
            <option value="Part-Time">Part-Time Pro</option>
            <option value="Other">Other</option>
          </select>
          <div v-if="$v.status.$error">
            <div v-for="(error, index) of $v.status.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="club" class="col-md-2 col-form-label">Club</label>
        <div class="col-sm-6">
          <select @blur="$v.club.$touch()" id="club" name="club" class="form-control" v-model.trim="club">
            <option value=""></option>
            <option value="NoClub">NO CLUB-M</option>
            <option value="Rabat">Rabat</option>
            <option value="Valletta">Floriana</option>
            <option value="Birkirkara">Birkirkara</option>
            <option value="Other">Other</option>
          </select>
          <div v-if="$v.club.$error">
            <div v-for="(error, index) of $v.club.$errors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>




    
    <div class="form-group row">
      <button @click="back" type="button" class="btn btn-secondary">Back</button>   
      <!--<div v-if="$v.$anyError" class="text-danger">Please fill in all fields correctly.</div>-->
 
      <button data-toggle="modal" data-target="#myModal" type="submit" :disabled="$v.$invalid "  class="btn btn-primary">Submit</button>   
      <!--<div v-if="$v.$anyError" class="text-danger">Please fill in all fields correctly.</div>-->
  </div>
  </form>
</div>

<!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <!--<div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Firebase Example</h4>
        </div>-->
        <div class="modal-body">
          <p>Updated member stored in Firebase</p>
        </div>
        <div class="modal-footer">
          <button type="button" @click="afterModal" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>  
</template>



<script>
import { required, minLength, maxLength, alphaNum, alpha, numeric, email,sameAs  } from '@vuelidate/validators'
export default {
  //emits: ['set-data'],
  data() {
    return {
      idcardno: '',
      name: '',
      surname: '',
      dob: '',
      nation: '',
      gender: '',
      email: '',
      password: '',
      cpassword: '',
      telephone: '',
      status:'',
      club:'',
      updateMode: false
    };
  },
  validations(){
    return{
      idcardno:{required, alphaNum, minLength: minLength(4),maxLength: maxLength(10)},
      name:{required, minLength: minLength(4), maxLength: maxLength(15), alpha},
      surname:{required, minLength: minLength(3), maxLength: maxLength(15), alpha},
      dob:{required},
      nation:{required},
      gender:{required},
      email:{required, email},
      password:{required, minLength:minLength(3)},
      cpassword:{required, sameAsPassword: sameAs(this.password)},
      telephone:{required,numeric, minLength: minLength(8)},
      status:{required},
      club:{required},
      
    }
  },
  methods: {
    
    afterModal(){
      this.$router.push('/');
    },

    back(){
      this.$router.back();
    },

    async updateForm() {
      this.$v.$touch();
      //we will submit only if the form does not contain anything invalid
      console.log(this.$route.params.memberId);
      if(!this.$v.$invalid){
          //this.$emit('set-data', this.name,  this.age, this.gender, this.interest, this.how, this.confirm);
          const response = await fetch("https://clientsidescripting-6c454-default-rtdb.europe-west1.firebasedatabase.app/contact/"+ this.$route.params.memberId+".json",{
            method: 'PATCH',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              idcardno:this.idcardno,
              name:this.name,
              surname:this.surname,
              dob:this.dob,
              nation:this.nation,
              gender:this.gender,
              email:this.email,
              telephone:this.telephone,
              status:this.status,
              club:this.club
              
            })
          })
          if(!response.ok){
            console.log("Something went wrong");
          }
      }
    },
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
  
};
</script>

<!--The style block with the scoped attribute will overwrite the global 
styles and will effect this component only. -->
<style scoped>
form{
  width:70%;
  padding:5px;
  margin: auto;
}


</style>

