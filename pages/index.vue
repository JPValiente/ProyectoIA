<template>
  <div class="page-container">
    <div>
      <h1 class="title-index">
        <v-spacer /> Horario Inteligente (I.A 1)<v-spacer />
      </h1>
      <v-divider />
      <v-text-field
        label="URL de la API"
        placeholder="ngrok"
        v-model="url"
      ></v-text-field>
      <v-btn dark color="#A241ED" @click="loadData()"> Buscar horario </v-btn>
      <div v-if="!loading">
          <v-select
            :items="horarios"
            v-model="horarioSeleccionado"
            :item-text="(item) => `ID: ${item.id} - ${item.porcentaje}%`"
            return-object
            label="Horario"
          ></v-select>
          <h1>
            Horario con una puntuación de: {{ horarioSeleccionado.porcentaje }}
          </h1>
          <v-btn dark color="#A241ED" @click="vista = !vista"> {{vistaHorario}} </v-btn>
          <div v-if="vista">
            <div
              class="tables"
              v-for="salon in horarioSeleccionado.salones.salon"
              :key="salon.numeroDeSalon"
            >
              <h1>Salon {{ salon.numeroDeSalon }}</h1>
              <v-card class="rounded-card" elevation="10" outlined tile>
                <v-data-table
                  :headers="classrooms.headers"
                  :items="salon.cursos.curso"
                  :loading="loading"
                  :hide-default-footer="true"
                >
                  <v-progress-linear
                    :indeterminate="true"
                    slot="progress"
                    height="2"
                  >
                  </v-progress-linear>
                  <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.codigo }}</td>
                    <td class="text-xs-left">{{ props.item.nombre }}</td>
                    <td class="text-xs-left">{{ props.item.carrera }}</td>
                    <td class="text-xs-left">{{ props.item.ciclo }}</td>
                    <td class="text-xs-left">{{ props.item.seccion }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </div>
          </div>
        <div v-else>
          <h1>Horario General</h1>
          
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    <b>Numero de Salon</b>
                  </th>
                  <th v-for="index in horarioSeleccionado.salones.salon[0].cursos.curso.length" :key="index" class="text-center">
                    <b>Periodo {{index}}</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template>
                  <tr v-for="salon in horarioSeleccionado.salones.salon" :key="salon.numeroDeSalon">
                    <td>{{ salon.numeroDeSalon }}</td>
                    <td 
                      v-for="curso in salon.cursos.curso"
                      :key="curso.codigo"
                    > {{ curso.nombre }} Seccion: {{curso.seccion}}</td>
                    </tr>
                </template>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    vistaHorario() {
      if(this.vista) 
        return "Cambiar a vista general"
      return "Cambiar a vista por clase"
    }
  },
  data() {
    return {
      loading: false,
      porcentaje: 0,
      classrooms: {
        headers: [
          { text: "Codigo", value: "codigo", sortable: false, align: "center" },
          { text: "Nombre", value: "nombre", sortable: false, align: "center" },
          {
            text: "Carrera",
            value: "carrera",
            sortable: false,
            align: "center",
          },
          { text: "Ciclo", value: "ciclo", sortable: false, align: "center" },
          {
            text: "Seccion",
            value: "seccion",
            sortable: false,
            align: "center",
          },
        ],
        headers2: [
          {text:'Numero de salon',value:"numeroDeSalon",sortable: false, align: "center"}
        ],
      },
      url: "",
      loading: true,
      salones: [],
      vista: true,
      horarioSeleccionado: null,
    };
  },
  layout: "admin",
  async mounted() {
    this.loading = true;

  },
  methods: {
    itemText(id, porcentaje) {
      return id + porcentaje;
    },
    async loadData() {
    this.horario = await this.$axios.$get(this.url);
    this.horarios = this.horario.cromosoma;
    let i = 1;
    this.horarios.forEach((horario) => {
      horario.id = i;
      i++;
    });
    this.horario = this.horario.cromosoma[0];
    this.horarioSeleccionado = this.horarios[0];
    console.log(this.horarioSeleccionado.salones.salon[0].cursos.curso);

    this.loading = false;
    }
  },
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
