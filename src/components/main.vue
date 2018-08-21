<template>
  <div class="main">
    <div>  
         <nav class="navbar navbar-expand-sm navbar-dark bg-dark mt-1 sticky-top">
          <div class="container"> 
            <div class="navbar-brand">
              <h3>Bytefury</h3>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <button @click="logout()" class="btn btn-dark">Logout</button>
                </li>
                <li class="nav-item ml-2">
                    <button class="btn border btn-dark" data-target="#mod1" data-toggle="modal">Add It</button>
                </li>
            </ul>
         </div>
      </nav>
      <div class="container mt-5">
            <div class="card pt-5">
                <div class="card-header bg-white  mx-auto">
                     <h1 >BYTE BLOGLIFE</h1>
                     <p>Welcome to <span class="text-white mkdark p-2" style="font-weight:bold;">Byte World</span></p>
                </div>
                   <img :src="image2" class="" style="width:100% ;" >
                
                <div class="card-footer bg-white ">
                    <div class="row">
                        <div class="col-sm-12 col-md-8">
                                <div class="card mt-3 pt-2 shadow-lg">
                                    <div class="card-header mx-auto mt-4 bg-white">
                                        <h1 class="card-title">BOOTSTRAP</h1>
                                        <p>This is Bootstrap</p>
                                    </div>
                                    <div class="card-body">
                                        <img :src="image1" style="width:100%;">
                                        <label class="mt-3">
                                                Perhaps travel cannot prevent bigotry, but, by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends.
                                        </label>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-dark like float-left btn-dark" style="font-weight:bold;" data-target="#foot1" data-toggle="collapse">Commnet</button>
                                            <button class="btn btn-outline-dark like btn-dark float-right " style="font-weight:bold;">LIKE</button>
                                        </div>
                                    </div>
                                    <div class=" collapse " id="foot1">
                                          <hr>
                                         <form class="p-3">
                                            <input tpye="text" class="form-control " v-model="com1" placeholder="Enter your Commnet" @keyup.enter="comFirst()"/>
                                        </form>   
                                        <div class="card-footer" >
                                            <div  class="card mt-2 p-2" v-for="(det ,key) in cmt1" :key="key">
                                                 <div class="mt-4">
                                                    <label class="p-2 float-left">{{ det.commentFirst}}</label>
                                                    <button type="button" class="btn mkdark ml-2 btn-default btn-sm float-right">
                                                        <i class="fa fa-pencil" style="font-size:20px"></i>
                                                    </button>
                                                    <button type="button" @click="del1(key)" class="btn mkdark btn-default btn-sm float-right">
                                                        <i class="fa fa-trash" style="font-size:20px"></i>
                                                    </button>
                                                  </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mt-4 shadow-lg mb-5">
                                    <div class="card-header mx-auto mt-4 bg-white">
                                        <h1>STYLE-SHEET</h1>
                                        <p>This is Stylesheet</p>
                                    </div>
                                    <div class="card-body">
                                        <img :src="image3" style="width:100%;">
                                        <label class="mt-3">
                                                A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul.
                                        </label>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-dark like float-left btn-dark" style="font-weight:bold;" data-toggle="collapse" data-target="#foot2">Commnet</button>
                                            <button class="btn btn-outline-dark like btn-dark float-right " style="font-weight:bold;">LIKE</button>
                                        </div>
                                    </div>
                                    <div id="foot2" class=" collapse">
                                        <form class="p-3">
                                            <input tpye="text" class="form-control" v-model="com2"  placeholder="Enter your Commnet" @keyup.enter="comSecond()"/>
                                        </form>
                                        <div class="card-footer">
                                             <div  class="card mt-2 p-2" v-for="(dett ,key) in cmt2" :key="key">
                                                  <div class="mt-4">
                                                    <label class="p-2 float-left">{{ dett.commentSecond }}</label>
                                                    <button type="button" class="btn ml-2 mkdark btn-default btn-sm float-right">
                                                     <i class="fa fa-pencil" style="font-size:20px"></i>
                                                    </button>
                                                    <button type="button" @click="del2(key)" class="btn mkdark btn-default btn-sm float-right">
                                                        <i class="fa fa-trash" style="font-size:20px"></i>
                                                    </button>
                                                  </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="(takeit ,key) in imgDetail" :key="key">
                                    <div class="card mt-5 mb-5">
                                        <div class="card-header mkbgdark text-white">
                                            <div class="card-title">
                                                <h2> {{ takeit.title}}</h2>
                                            </div>  
                                        </div>
                                         <div class="card-body">
                                                <label>
                                                        {{ takeit.description }}
                                                </label>
                                            </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                                 <div class="card mt-3 shadow-lg">
                                    <img :src="image4" class="card-img-top" style="width:100%;">
                                     <div class="card-body mkdark text-white p-4">
                                          <label>
                                           The soldiers that didn't come back were the heroes. It's a roll of the dice. If a bullet has your name on it, you're a hero. If you hear a bullet go by, you're a survivor.
                                         </label>
                                    </div> 
                                </div> 
                                <div class="card mt-3 shadow-lg">
                                    <div class="card-header mkdark">
                                        <h3 class="card-title text-white">POPULAR POST</h3>
                                    </div>
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <img :src="image5" style="width:20% ;height:50px;"/>
                                                <label class="pl-3">Radhika makwana</label> 
                                             </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <img :src="image6"  style="width:20% ;height:50px;"/>
                                                <label class="pl-3">Prayag Trivedi</label>
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <img :src="image7"  style="width:20% ;height:50px;" />
                                                <label class="pl-3">Smruti Kakkad</label>
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <img :src="image8" style="width:20%;height:50px;" />
                                                <label class="pl-3">Mihit Thakkar</label>
                                            </a>
                                         </div>
                                </div> 
                                <div class="card mt-3 shadow-lg">
                                    <div class="card-header mkdark">
                                        <h3 class=" card-title text-white">SUBSCRIBE</h3>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                              <input type="text" class="form-control" placeholder="Name">
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Email">
                                            </div>
                                            <div class="form-group">
                                                <button class="btn mkdark  mx-auto sub btn-outline-dark">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                             </div>
                         
                     </div>
                </div>               
            </div>
         </div>
         <div class="modal fade" id="mod1">
            <div class="modal-dialog">
            <div class="modal-content"> 

                <div class="modal-header">
                    <h4 class="modal-title">Add Post</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>
                
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <h3>Title</h3>
                            <input type="text" v-model="title" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <h3>Select File</h3>
                            <button class="btn btn-danger" @click="uploadFile()">Upload</button>
                            <input type="file"  accept="image/*" @change="onFilePicked" ref="fileMenu" class="form-control" style="display:none;"/>
                            <img :src="imageUrl" style="height:100%; width:100%;"/>
                        </div>
                        <div class="form-group  mt-5">
                            <h3>description</h3>
                            <textarea type="text" cols="50" rows="5"  v-model="description" class="from-control"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="upload()" data-dismiss="modal">Upload</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
        
        </div>
        </div>
  </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      image1 : require('../assets/dekh.jpg'),
      image2 : require('../assets/kk.jpg'),
      image3 : require('../assets/mus.jpeg'),
      image4 : require('../assets/t.jpg'),
      image5 : require('../assets/ra1.jpeg'),
      image6 : require('../assets/ra2.jpeg'),
      image7 : require('../assets/ra3.jpeg'),
      image8 : require('../assets/ra4.jpg'),
      com1:'',
      com2:'',
      cmt1:[],
      cmt2:[],
     title:'',
     imgDetail:[],
     description:null,
     imageName:null
    }
  },
  methods:{
      upload(){
          firebase.database().ref('postIt').push({title : this.title , description: this.description , image : this.imageName})
            .then((data)=> console.log(data))
            .catch((e) =>{
                alert(e);
            })
            this.title =null;
            this.description= null;
            this.Image= null;
            this.imageUrl = null;
      },
    logout(){
        firebase.auth().signOut()
        .then(()=>{
            this.$router.replace('/hello')
        })
    },
    comFirst(){
        firebase.database().ref('Comment1').push({commentFirst : this.com1, see1 : false})
        .then((data)=>console.log(data))
        .catch((e)=>{
            alert(e);
        })
        ;
        this.com1 = null;  
    },
    comSecond(){
        firebase.database().ref('Comment2').push({commentSecond : this.com2, see2 : false})
        .then((data)=>console.log(data))
        .catch((e)=>{
            alert(e)
        })
        ;
        this.com2 = null
    },
    onFilePicked(event){
        const files = event.target.files
        let filename = files[0].name
        if(filename.lastIndexOf('.') <= 0){
            return alert("please enter a valid file!!")
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.imageName = `require('../assets/${files[0].name})`
        console.log(filename);
    },
    del1(key){
          firebase.database().ref('Comment1/'+ key).remove();
      },
    del2(key){
          firebase.database().ref('Comment2/'+ key).remove();
      },
      uploadFile(){
          this.$refs.fileMenu.click();
      }
  },
  created(){
      firebase.database().ref('Comment1').on('value',(snapshot)=>{
          this.cmt1=snapshot.val();
      })
      firebase.database().ref('Comment2').on('value',(snapshot)=>{
          this.cmt2=snapshot.val();
      })
      firebase.database().ref('postIt').on('value',(snapshot)=>{
          this.imgDetail=snapshot.val();
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        h1{
            font-family: 'Impact';
            letter-spacing:2px;
            word-spacing:10px;
            color:black;
        }
        p{
            font-family:"courier";
            letter-spacing:2px;
            color:black;
        }
        label{
            font-family:"Playfair Display";
            font-size:18px;
            letter-spacing:2px;
        }
        .pos{
            position:relative;
        }
        .mkdark{
            background:black;
            color:white;
            border:white 1px solid;
        }
        .mkbgdark{
            background:black;
        }
        .mkdark:hover{
            background:white;
            color:black;
            border:black 1px solid;
        }
        .txtdark{
            color:black;
        }
        .sub{
            background:black;
            color:white;
            font-weight:bold;
        }
        .sub:hover{
            background:white;
            color:black;    
        }
       .like{
           padding-left:5%;
           padding-right:5%;
            color:black;
       }
       .like:hover{
         background:black;
         color:white;
       }
       .right{
           position:relative;
           float:right;
       }
       .bold1{
           color:black;
           font-weight:black;
           font-family:fantasy;
           letter-spacing:2px;
           float: right;
       }
</style>
