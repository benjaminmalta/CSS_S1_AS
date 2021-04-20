<template>      

<section>


<!-- Modal -->
 
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header flex-column">
										
				<h4 class="modal-title w-100">Are you sure?</h4>	
                
			</div>
			<div class="modal-body">
				<p>Do you really want to delete this member? This process cannot be undone.</p>
			</div>
			<div class="modal-footer justify-content-center">
				<button type="button" @click="afterModal" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
				<button type="button" @click="afterModalDelete" class="btn btn-danger" data-dismiss="modal">Delete</button>
			</div>
		</div>
	</div>
</div>  


    
</section>

</template>

<script>  

  import DisplayData from './DisplayData' 
  export default {
    props:{
      deletingId: {
        type: String
        },
      deleteIndex:{
        type: Number
        },

    },
    
    
    data(){

      return{
        
        
        
      
      },
     
      DisplayData
      
      
    },
    methods:{
      showModal(){
        
        $('#myModal').modal('show')
      },
      afterModal(){
        $('#myModal').modal('show')
       
        
      },
      afterModalDelete(){
        var id = this.deletingId;
        console.log(this.deletingId);
        fetch("https://clientsidescripting-6c454-default-rtdb.europe-west1.firebasedatabase.app/contact/"+id+".json",{method: 'DELETE'});
        DisplayData.methods.deleteRowId(this.deleteIndex);

      }
    }

  }
            
</script>

<style scoped>

.view-enter-active,
.view-leave-active{
  transition: opacity 0.5s ease-in-out, transform 0.5s ease; 
}


.view-enter-from,
.view-leave-to{
  opacity:0;
  transform: translateY(-100px);
}
.view-enter-to,
.view-leave-from{
  opacity:1;
  transform: translateY(0);
}

</style>
