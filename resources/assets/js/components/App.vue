<template>
    <!--<q-layout view="lHh Lpr fff">
        <q-layout-header>
            <router-view name="top-menu"></router-view>
        </q-layout-header>
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
        <router-view name="app-footer"></router-view>
    </q-layout>-->

    <v-app>
      <!--<v-navigation-drawer app></v-navigation-drawer>-->
      <v-toolbar app>
    <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title>
            <img class="brand-logo" alt="Brand" src="/img/logo.jpg">
            <v-menu open-on-hover offset-y>
              <v-btn
                tag="a" 
                to="/"
                slot="activator"
                flat>
                Alumnos
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="">
                  <v-list-tile-title>Inscribir</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title>Lista de alumnos</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-menu open-on-hover offset-y>
              <v-btn
                tag="a" 
                :to="{name: 'admin.montos'}"
                slot="activator"
                flat>
                Configuración
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="">
                  <v-list-tile-title>Editar montos de cobranza</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title>Agregar grupo</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title>Agregar maestro</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title>Materias</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-btn flat tag="a" to="/">Calificar Alumno</v-btn>
            <v-menu open-on-hover offset-y>
              <v-btn
                tag="a" 
                to="/"
                slot="activator"
                flat>
                Boletas
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="">
                  <v-list-tile-title>Temple de boleta</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-menu open-on-hover offset-y>
              <v-btn
                tag="a" 
                to="/"
                slot="activator"
                flat>
                Tareas
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="">
                  <v-list-tile-title>Crear tarea</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title>Editar tarea</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  class="hidden-sm-and-down">
          <v-menu open-on-hover offset-y>
              <v-btn
                tag="a" 
                to="/"
                slot="activator"
                flat>
                <v-icon>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="">
                  <v-list-tile-title>Cerrar Sesión</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          <v-btn v-if="false" flat :to="{name: 'public.login'}">Iniciar Sesión</v-btn>
          <v-btn v-if="false" flat>Registrarse</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <!--<v-footer app></v-footer>-->
    </v-app>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: "app",
        data () {
        return {
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' }
              ]
          }
        },
        watch: {
            auth(value) {
                if (value) {
                    this.getUserInfo();
                }
            }
        },
        computed: {
            ...mapState('auth', ['auth'])
        },
        methods: {
            ...mapActions('auth', ['getUserInfo'])
        }
    }
</script>

<style scoped>

</style>