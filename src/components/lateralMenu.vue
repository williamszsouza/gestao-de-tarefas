<template>
    <div id="container">
        <div id="menu-top">
            <ul>
                <li> Home</li>
                <li>Tasks</li>
                <li>Settings</li>
            </ul>
        </div>
        <div id="menu-bottom">
            <img src="" alt="">
            <img src="../assets/icone.png" alt="" srcset="">
        </div>
    </div>

</template>

<style>
    #container{
        height: 100vh;
        width: 200px;
        padding-left: 20px;
        padding-top: 40px;
        padding-bottom: 20px;
        color: white;
        background-color: rgb(19, 19, 19);
    }

    #menu-top,li{
        height: 75%;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: start;
    }

    #menu-top>ul>li{
        cursor: pointer;
    }
    

    #menu-bottom{
        height: 25%;
        width: 100%;
        display: flex;
        gap: 10px;
        padding-right: 20px;
    }

    #menu-bottom>button{
        height: 40px;
        width: 100px;
        border-radius: 9px;
        font-family: "inter",sans-serif;
        outline: none;
        color: white;
        background-color: rgb(45, 44, 44);
        border: none;
        font-weight: bold;
        
        cursor: pointer;
    }

    #menu-bottom>button:hover
    {
        border: 1px solid green;



    }


</style>