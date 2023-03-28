const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/shubham")
.then(()=>console.log("Connection successful "))
.catch((err)=>console.log(err));


// schema 
// A mongo schema defines the structure of the document,
// default values, validators, etc,


const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// A mongoose is a wrapper on the Mongoose schema.
// A mongoose schema defines the strucutre of the document,
// default values, validators, etc, whereas a Mongoose model,
// provides an interface to the database for creating,
// querying an interface to the database for creating, etc,

// collections creations

const Playlist=new mongoose.model("Playlist",playlistSchema);

// create document or insert

const createDocument=async()=>{
    try {
        const reactPlaylist=new Playlist({
            name:"React JS",
            ctype:"Front End",
            videos:50,
            author:"Shubham Kumar Singh",
            active:true,
        
        })
        const jsPlaylist=new Playlist({
            name:"javaScript",
            ctype:"Front End",
            videos:150,
            author:"Shubham Kumar Singh",
            active:true,
        
        })
        const mongoPlaylist=new Playlist({
            name:"Monogo DB",
            ctype:"Database",
            videos:10,
            author:"Shubham Kumar Singh",
            active:true,
        
        })
        const mongoosePlaylist=new Playlist({
            name:"Mongoose JS",
            ctype:"Database",
            videos:4,
            author:"Shubham Kumar Singh",
            active:true,
        
        })
        const expressPlaylist=new Playlist({
            name:"Express JS",
            ctype:"Back End",
            videos:20,
            author:"Shubham Kumar Singh",
            active:true,
        
        })
        const result= await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}
//createDocument();

const getDocument=async()=>{
    try{
        const result =await Playlist
        //.find({videos:{$gte:10}});// here, gte mean greater than equal to
        //.find({ctype:{$in:["Back End"]}});// here, in means course type belongs to playlist or not s
        .find({ctype:{$in:["Front End"]}})
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

getDocument()