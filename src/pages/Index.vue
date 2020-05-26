<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="newTask" @keyup.enter="addTask" class="col" filled square
        bg-color="white" label="Adicionar item" dense>
          <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>

    <q-list class="bg-white" separator bordered>
      <q-item v-for="(task, index) in tasks" :key="task.title" @click="task.done = !task.done"
              :class="{ 'done bg-blue-1' : task.done }" clickable v-ripple>

        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index)" dense flat round color="primary" icon="delete" />
        </q-item-section>

      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon
        name="sentiment_very_dissatisfied"
        size="100px"
        color="primary"
      ></q-icon>
      <div class="text-h5 text-primary text-center">
        Sem itens
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newTask: '',
      tasks: [
        {
          title: 'Item 1',
          done: false
        },
        {
          title: 'Item 2',
          done: false
        },
        {
          title: 'Item 3',
          done: false
        },
        {
          title: 'Item 4',
          done: false
        },
        {
          title: 'Item 5',
          done: false
        }
      ]
    }
  },
  methods: {
    deleteTask (index) {
      this.$q.dialog({
        title: 'Excluir ' + this.tasks[index].title + '?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify(this.tasks[index].title + ' excluído!')
      })
    },
    addTask () {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
    }
  }
}
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}

  .no-tasks {
    opacity: 0.5;
  }
</style>
