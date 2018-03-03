

export default {
    name: 'Skills',
    data(){
      return{
        skill: '',
       skills: [
         {"skill": "Vue.js"},
         {"skill": "Frontend Developer"}
       ],
       
       //name: 'Coursetro',
       // btnState:true
      }
    },
    methods: {
        addSkill(){
            this.$validator.validateAll().then((result)=>{
                if(result){
                    this.skills.push({skill: this.skill})
                    this.skill='';
                }else{
                    console.log('Not valid')
                }
            })
        },
        remove(id){
            this.skills.splice(id, 1);
        }
    }
  }