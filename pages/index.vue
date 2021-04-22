<template>
  <div class="page-container">
    <div>
      <h1 class="title-index">
        <v-spacer/> Horario Inteligente (I.A 1)<v-spacer/>
      </h1>
      <v-divider/>
      <div class="tables">
        <v-card class="rounded-card" elevation="10" outlined tile>
          <v-data-table
            :headers="classrooms.headers"
            :items="classrooms.data"
            :loading="loading"
          >
            <v-progress-linear :indeterminate="true" slot="progress" height="2"> </v-progress-linear>
            <template v-slot:items="props">
              <td class="text-xs-left"> {{props.item.numeroSalon}}</td>
              <td class="text-xs-left"> {{props.item.capacidad}}</td>
            </template>
          </v-data-table>
        </v-card >
        <v-divider/>
        <v-card class="rounded-card" elevation="10" outlined tile>
          <v-data-table
            :headers="teachers.headers"
            :items="teachers.data"
            :loading="loading"
          >
            <v-progress-linear :indeterminate="true" slot="progress" height="2"> </v-progress-linear>
            <template v-slot:items="props">
              <td class="text-xs-left"> {{props.item.carnet}}</td>
              <td class="text-xs-left"> {{props.item.nombre}}</td>
            </template>
          </v-data-table>
        </v-card>
        <v-divider/>
        <v-card class="rounded-card" elevation="10" outlined tile>
          <v-data-table
            :headers="subjects.headers"
            :items="subjects.data"
            :loading="loading"
          >
            <v-progress-linear :indeterminate="true" slot="progress" height="2"> </v-progress-linear>
            <template v-slot:items="props">
              <td class="text-xs-left"> {{props.item.codigo}}</td>
              <td class="text-xs-left"> {{props.item.nombre}}</td>
              <td class="text-xs-left"> {{props.item.ciclo}}</td>
              <td class="text-xs-left"> {{props.item.seccion}}</td>
              <td class="text-xs-left"> {{props.item.carrera}}</td>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      classrooms: {
        headers: [
          {
            text: 'Numero Salon',
            align: 'start',
            sortable: false,
            value: 'numeroSalon'
          },
          {
            text: 'Capacidad',
            value: 'capacidad'
          }
        ],
        data: []
      },
      teachers: {
        headers: [
          {
            text: 'Carnet',
            align: 'start',
            sortable: false,
            value: 'carnet' 
          },
          {
            text: 'Nombre',
            value: 'nombre'
          }
          ],
        data: []
      },
      subjects: {
        headers: [
          {
            text: 'Codigo',
            align: 'start',
            sortable: false,
            value: 'codigo' 
          },
          {
            text: 'Nombre',
            value: 'nombre'
          },
          {
            text: 'Ciclo',
            value: 'ciclo'
          },
          {
            text: 'Seccion',
            value: 'seccion'
          },
          {
            text: 'Carrera',
            value: 'carrera'
          }
        ],
        data: []
      }
    }
  },
  layout: 'admin'
}
</script>

<style>
.tables {
  margin-top: 2%;
  margin-bottom: 10%;
}
.page-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title-index {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
