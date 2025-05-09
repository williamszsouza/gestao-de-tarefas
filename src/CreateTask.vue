<template>
<div id="create-task-container">
    <RouterView></RouterView>
    <div id="task-inputs">
        <form @submit.prevent="CreateTask">   
        <h1>Insira as informações da tarefa</h1>
        <label for="">Nome da tarefa</label>
        <input type="text" v-model="form.nametask" placeholder="jogar o lixo fora...">
        <label for="">Descrição da tarefa</label>
        <input type="text" v-model="form.infotask" placeholder="Não esquecer do lixo do banheiro">
        <label for="">Data de entrega</label>
        <input type="date" name="" id="" v-model="form.datetask">
        <button type="submit">Criar</button>
        </form>
    </div>
</div>

</template>

<style>

*{
    font-family: 'Inter',sans-serif;
}

#create-task-container{
    overflow:hidden;
    width: 100%;
    height: 100dvh;
    position: absolute;
    z-index: 1111111111111111111111;
    background-color: rgba(78, 76, 76, 0.39);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

#task-inputs>form{
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 8px;
    height: 400px;
    padding: 30px;
    border-radius: 20px;
    background-color: black;
}

#task-inputs>form>h1{
    text-align: center;
    font-size: 20px;
}

#task-inputs>form>input,button{
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    background-color: rgb(41, 40, 40);
    outline: none;
    border: none;
    height: 50px;
    cursor: pointer;
    color: white;
}

#task-inputs>form>input:hover,button:hover{
    border: 3px solid green;
}

</style>

<script>
export default{
    
    data(){
    return{
    form:{
        nametask:'',
        infotask:'',
        datetask:''
    }
    }
},
methods:{
 async CreateTask(){
    try{
        const res = await fetch('http://localhost:3000/routes/tasks',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.form)
        });
        const data = await res.json();
        console.log(data.message);
    }
    catch(err){
        console.log(err)
    }
    this.$router.push('/')
 },
}

}





</script>