<template>
<div id="task-container">
    <div id="color-status-task">

    </div>
    <div id="task-info">
        <h3>nome da tarefa</h3>
        <p>desc da tarefa</p>
        <h4>Data da tarefa 22/22/22</h4>
    </div>
    <div id="actions-task">
        <button>Editar</button>
        <button>Excluir</button>
    </div>
</div>

</template>

<style>

    #task-container{
        background-color: aliceblue;
        display: flex;
        width: 90%;
        margin-bottom:20px ;
        padding-right: 20px;
        height: 100px;
        color: #597575;
        background-color: #131313;
        
    }

    #task-container>#color-status-task{
        width: 2%;
        background-color: green;
        height: 100%;
        position: relative;
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
        font-weight: bold;
    }

    #actions-task{
        width: 10%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #actions-task>button{
        border-radius: 5px;
        padding: 8px;
        font-weight: bold;
        color: #597575;
        background-color: black;
        outline: none;
        border:none;
        cursor: pointer;
    }

    #actions-task>button:hover{
        border: 1px solid green;
    }

</style>


<script>



</script>