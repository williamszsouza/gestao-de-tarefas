<!-- delTask.vue -->
<template>
  <div id="delete-task-container">
    <div id="delete-confirmation">
      <h1>Você tem certeza que deseja deletar esta tarefa?</h1>
      <p>Essa ação não pode ser desfeita.</p>
      <div id="buttons">
        <button @click="deleteTask">Sim, deletar</button>
        <button @click="$router.push('/')">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async deleteTask() {
      const id = this.$route.params.id;
      try {
        const res = await fetch(`http://localhost:3000/routes/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await res.json();
        console.log(data.message);
        this.$router.push('/');
      } catch (err) {
        console.error('Erro ao deletar tarefa:', err);
      }
    }
  }
}
</script>

<style>
#delete-task-container {
  overflow: hidden;
  width: 100%;
  height: 100dvh;
  position: absolute;
  z-index: 9999;
  background-color: rgba(78, 76, 76, 0.39);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

#delete-confirmation {
  background-color: black;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
}

#buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}

#buttons button {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: rgb(41, 40, 40);
  color: white;
}

#buttons button:hover {
  border: 2px solid green;
}
</style>
