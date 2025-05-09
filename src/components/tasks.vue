<template>
<div @loadedmetadata="">

</div>
<div class="task-container" v-for="task in taskdata">
    <div id="color-status-task">

    </div>
    <div id="task-info">
        <h3>{{ task.nametask }}</h3>
        <p>{{task.infotask}}</p>
        <h4>{{formatDate(task.datetask)}}</h4>
    </div>
    
    <div id="actions-task">
        <button @click="EditTask(task.id)">Editar</button>
        <button @click="DeleteTask(task.id)">Excluir</button>
    </div>
    <div id="status-task">
        <input type="checkbox" name="" id="" @click="attStatus(task.id)">
    </div>
</div>
</template>

<style>

    #status-task{
        padding-left: 40px;
        display: flex;
        accent-color: green;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

    }

    #status-task>input{
        height: 30px;
        width: 40px;
        border-radius: 999px;

    }

    .task-container{
        background-color: aliceblue;
        display: flex;
        width: 90%;
        margin-bottom:20px ;
        padding-right: 20px;
        height: 100px;
        color: white;
        background-color: #131313;
        border-radius: 20px;
        
    }

    .task-container>#color-status-task{
        width: 2%;
        background-color: green;
        height: 100%;
        border-radius: 20px;
    }

    #task-info{
        width: 88%;
        padding-left:20px;
        padding-top:10px;
        padding-bottom:10px;
        font-size: 19px;
        display: flex;
        flex-direction: column;
    }

    #task-info>p{
        font-weight: semi-bold;
        font-size: 16px;
    }

    #actions-task{
        width: 10%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #actions-task>button{
        border-radius: 15px;
        padding: 9px;
        font-weight: semi-bold;
        color: #597575;
        background-color: black;
        outline: none;
        border:none;
        height: 40px;
        cursor: pointer;
    }

    #actions-task>button:hover{
        border: 1px solid green;
    }

</style>


<script>
import EditTask from '@/editTask.vue';

export default{
    data(){
        return{
            taskdata:[],
            id:this.id,
            statustask:this.statustask
        }
    },
    methods:{
    async getAllTasks(){
        try{
            const res = await fetch('http://localhost:3000/routes/tasks',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },

        });
        this.taskdata = await res.json();
        console.log(this.taskdata)    
        }
        catch(err){
            console.log(err)
        }
        return 
    },
    formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
},
    

    EditTask(id){
            this.$router.push(`/editTask/${id}`)

        },
    DeleteTask(id){
            this.$router.push(`/deleteTask/${id}`)

        },
        
       async attStatus(id){
           const statustask = 'done'
        try{

            const res = await fetch(`http://localhost:3000/routes/tasks/status/${id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({statustask:statustask})
            });
            const data = await res.json();
            console.log(data.message);
        }
        catch(err){
            console.log(err)
        }
        this.$router.push('/')
        },
       
    },

    mounted(){
        this.getAllTasks();
    }
}


</script>