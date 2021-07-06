

let app = new Vue({
    el: "#vueList",
    
    data: {
        title:"List",
        lists:[
            
        ],
        newItem:"",
    },
    methods: {
        addItem:function(){
            let id = this.lists.length + 1
            if(this.newItem !== ''){
                const newList = {id:id, item:this.newItem, checked:false}
                this.lists.push(newList)
                
                this.newItem = ''
            }
        },
        remove:function(id){
            console.log(id)
            this.lists.splice(id,1)
        },
        
        
    },

    mounted() {
        this.lists = JSON.parse(localStorage.getItem("lists")) || [];
    }

}) 

addEventListener("beforeunload", function(event) {
    localStorage.setItem("lists", JSON.stringify(app.lists));
    event.preventDefault();
});