  <template>
    <div class="hello">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mt-1 sticky-top">
            <div class="container">
                    <div class="navbar-brand">
                      <h3>Bytefury</h3>
                    </div>
                     <button class="navbar-toggler" data-target="#fir" data-toggle="collapse">
                          <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="fir">
                      <ul class="navbar-nav mx-auto">
                        <li  class="nav-item">
                          <button class="btn btn-dark" @click="home()">Home</button>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                          <button class="btn btn-dark" @click="goToLogin()">Login</button>
                        </li>
                        <li class="nav-item">
                          <button class="btn btn-dark" @click="goToRegister()">Register</button>
                        </li>
                      </ul>  
                  </div>
             </div>
        </nav>
        <div class="container">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-8 ">
                            <h1 class="mb-4">Page Heading Seconday Text</h1>
                            <div class="card shadow-lg mb-4">
                                <div class="card-header">
                                    <img :src="image1" class="card-img-top">
                                </div>
                                <div class="card-body">
                                <h1 style="font-family:'Playfair Display'">BootStrap</h1>
                                <p style="font-family:'Playfair Display';font-size:18px;letter-spacing:2px;">Bootstrap is modular and consists of a series of Less stylesheets that implement
                                     the various components of the toolkit. These stylesheets are generally compiled into a
                                     bundle and included in web pages, but individual components can be included or removed.
                                </p>
                                <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                                <div class="card-footer">
                                    <p>Posted on january 21 by <span class="text-primary" style="font-weight:bold;">start bootstrap</span></p>
                                </div>
                            </div>
                            <div class="card shadow-lg mb-4">
                                <div class="card-header">
                                    <img :src="image2" class="card-img-top">
                                </div>
                                <div class="card-body">
                                    <p>
                                        Bootstrap is modular and consists of a series of Less stylesheets that implement
                                        the various components of the toolkit. These stylesheets are generally compiled into a
                                        bundle and included in web pages, but individual components can be included or removed.
                                    </p>
                                    <button class="btn btn-primary">Read More</button>
                                </div>
                                <div class="card-footer">
                                    <p>Posted on november 25 by <span class="text-primary" style="font-weight:bold;">Start Bootstrap</span></p>
                                </div>
                            </div> 
                        </div>
                        <div class="col-sm-12 col-md-4  pl-3">
                            <div class="card shadow-lg mt-1 mb-4">
                                <div class="card-header">
                                    <h4>Search</h4>
                                </div>
                                <div class="card-body">
                                    <form class="form-inline">
                                        <input type="text" class="form-control" placeholder="search"><button class="btn bg-secondary" style="color:white">Go</button></input>
                                    </form>
                                </div>
                            </div>
                            <div class="card shadow-lg mb-4">
                                <div class="card-header">
                                    <h4>Catagories</h4>
                                </div>
                                <div class="card-body">
                                    <p class="text-primary">Web Design<span class="float-right">JavaScript</span></p>
                                    <p class="text-primary">Html<span class="float-right">CSS</span></p>
                                    <p class="text-primary">Freebies<span class="float-right">Tutotials</span></p>
                                </div>
                            </div>
                            <div class="card shadow-lg">
                                <div class="card-header">
                                    <h4>Sid Widget</h4>
                                </div>
                                <div class="card-body">
                                       <p>Each Bootstrap component consists of an HTML structure, CSS declarations, and in some cases accompanying JavaScript code</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </template>

  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        image1: require('../assets/bb.jpeg'),
        image2: require('../assets/fg.jpeg')
      }
    },
    methods:{
        home(){
            this.$router.replace('/hello');
        },
      goToRegister(){
          this.$router.replace('/register');
      },
      goToLogin(){
        this.$router.replace('/login');
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
