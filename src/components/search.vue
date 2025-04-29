<template>
    <div id="container-search">
        <input type="text" placeholder="Search for a task" id="search">
        <button id="addTask">+</button>
    </div>
</template>

<style>
    #search{
        width: 90%;
        padding: 10px;
        border-radius: 10px;
        background-color: rgb(19, 19, 19);
        outline: none;
        border: none;
        height: 50px;
        cursor: pointer;
        color: white;

    }

    #search:focus{
        border: 1px solid green;
    }

    #container-search{
        width: 100%;
        padding: 20px;
        display: flex;
        gap: 40px;
    }

    #addTask{
        width: 50px;
        height: auto;
        border-radius: 20px;
        font-size: 30px;
        background-color: rgb(19, 19, 19);
        color: green;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        transition: all ease-in-out 1s;
    }

    #addTask:hover{
        border:1px solid green;
        transition: all ease-in-out 0.6s;
    }
</style>