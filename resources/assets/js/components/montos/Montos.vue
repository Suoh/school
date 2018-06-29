<template>
    <!--<q-page>
        <h1>{{ $t('welcome.greetings') }}</h1>
    </q-page>-->
    <div>
        <!--<v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-1">
                <v-card-title primary-title>
                    <div class="title">Montos a Ingresar</div>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="person" name="login" label="E-mail" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" class="white--text">Guardar</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>-->
		<v-layout align-center justify-center>
	        <v-flex xs12 sm8 md4>
	          	<v-card class="elevation-1">
	                <v-card-title primary-title>
	                    <div class="title">Montos a Ingresar</div>
	                </v-card-title>
	                <v-card-text>
	                    <v-form>
	                         <v-layout row>
					      		<v-flex xs4>
					        		<h4>Concepto</h4>
					      		</v-flex>
						      	<v-flex xs8>
						        	<h4>Monto</h4>
						      	</v-flex>
						    </v-layout>

	    				<v-layout row>
					    	<v-flex xs4>
					        	<v-subheader>Inscripción</v-subheader>
					      	</v-flex>
					      	<v-flex xs8>
					        	<v-text-field
					            	prefix="$"
					            	solo>
					            </v-text-field>
					      	</v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Agosto</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>
					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Septiembre</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Octubre</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Noviembre</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Diciembre</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Enero</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Seguro Escolar Contra Accidentes</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

					    <v-layout row>
					      <v-flex xs4>
					        <v-subheader>Credencialización</v-subheader>
					      </v-flex>
					      <v-flex xs8>
					        <v-text-field
					            prefix="$"
					            solo
					          ></v-text-field>
					      </v-flex>
					    </v-layout>

	                    </v-form>
	                </v-card-text>
	                <v-card-actions>
	                    <v-spacer></v-spacer>
	                    <v-btn color="success" class="white--text">Guardar</v-btn>
	                </v-card-actions>
	            </v-card>

	     

			</v-flex>
		</v-layout>
    </div>
</template>

<script>
    export default {
        name: "montos"
    }
</script>

<style scoped>

</style>