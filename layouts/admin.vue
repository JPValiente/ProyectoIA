<template>
<v-app id="inspire" >
  <v-main>
    <v-container fluid fill-height id='container' class="pa-0">
      <v-layout>
        <v-navigation-drawer
          fixed
          app
          clipped
          v-model="drawer"
          hide-overlay
          class="Navigation darken1"
        >
          <v-list>
            <v-list-item class="NavigationHeader">
              <v-list-item-title class="NavigationHeaderText">
                Ingreso de Datos (Forms)
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
                <v-btn dark class="generate-button" color="#A241ED" > Generar Horario </v-btn>
            <v-divider/>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="goToForm(item.url)"
            >
              <v-list-item-action>
                <v-icon> {{ item.icon }} </v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-navigation-drawer>
        <v-flex>
          <nuxt/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</v-app>
</template>
<style lang="scss">
.Navigation {
  .v-list {
    padding: 0;
  }
}
.NavigationHeader {
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #7C0FD1;
  font-weight: 600;
  justify-content: center;
  .v-list__item {
    height: auto;
    width: 100%;
    display: flex;
    &__title {
      height: auto;
      display: flex;
      justify-content: flex-start;
    }
  }
}
.NavigationHeaderText {
    color: white;
}
.Logo {
  height: auto;
  width: 128px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 100%;
  }
  &.mini {
    width: 32px;
    margin: 0 auto;
  }
}
.rounded-card {
    border-radius: 12px !important;
    margin-bottom: 2%;
    margin-top: 2%;
  }
.centered {
  position: fixed;
  top: 50%;
  left: 55%;
}
.createdDot {
  height: 15px;
  width: 15px;
  background-color: #5AF700;
  border-radius: 75%;
  display: inline-block;
}
.waitingDot {
  height: 15px;
  width: 15px;
  background-color: #F3FF00;
  border-radius: 75%;
  display: inline-block;
}
.respondedDot {
  height: 15px;
  width: 15px;
  background-color: #FF9E00;
  border-radius: 75%;
  display: inline-block;
}
.closedDot {
  height: 15px;
  width: 15px;
  background-color: #FF0000;
  border-radius: 75%;
  display: inline-block;
}
.generate-button {
    padding-top:10%;
    padding-bottom: 10%;
    margin: 10%;
}
</style>

<script>
  export default {
    data() {
      return {
        items: [
        {
          title: 'Form Cursos',
          icon: 'mdi-view-dashboard',
          url: 'https://docs.google.com/forms/d/1PzPgBsrtg99nfuS8WC25NTt8-4mEml2Qxxl1WQJizQA/edit'
        },
        {
          title: 'Form Docentes',
          icon: 'mdi-account-supervisor',
          url: 'https://docs.google.com/forms/d/1WCCrjTJVDjckGEIavVyy6sP71QwoaR4QaUghYPYdTZs/edit'
        },
        {
          title: 'Form Salones',
          icon: 'mdi-account',
          url: 'https://docs.google.com/forms/d/1sDRPPo0Li7Gt_49PmQw6piDSChm00l1eDckKcp6z3S8/edit'
        },
        ],
        drawer: true,
        mini: false
      }
    },
    async mounted() {
    },
    methods: {
        goToForm(url) {
            window.location.href = url
        }
    }
  }
</script>