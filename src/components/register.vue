<template>
  <div class="register">
       <nav class="navbar navbar-expand-sm navbar-dark bg-dark mt-1 sticky-top">
                <div class="container">
                    <div class="navbar-brand">
                      <h3>Bytefury</h3>
                    </div>
                     <button class="navbar-toggler" data-target="#fir" data-toggle="collapse">
                          <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse float-right" id="fir">
                      <ul class="navbar-nav mx-auto">
                        <li  class="nav-item">
                          <button class="btn btn-dark" @click="home()">Home</button>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">About</a>
                        </li>
                      </ul>  
                  </div>
             </div>
        </nav>
        <div class="container mt-5">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h1 class="card-title">Register</h1>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input tpye="email" v-model="formData.email" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="formData.password" class="form-control"/>
                        </div>
                        <button type="button" class="btn btn-dark" @click="signup()">Submit</button>
                    </form>
                </div>
            </div>
        </div>   
   </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
       formData:{
           email : '',
           password : ''
       }
    }
  },
  methods:{
      home(){
          this.$router.replace('/hello');
      },
     signup(){
            firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password)
            .then((user)=>{
              this.$router.replace('/main');
            })
            .catch((e)=>{
                alert("oops"+ e.message);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
