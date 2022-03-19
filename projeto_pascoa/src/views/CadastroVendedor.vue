<template>
    <v-container>
        <h1 class="form-container">Seja um Vendedor(a) Luna</h1>
         <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>


            <v-text-field 
            type="password"
            v-model="senha"
            :counter="20"
            :rules="SenhaRules"
            label="Cadastre uma senha"
            required
            ></v-text-field>

            <v-text-field
            v-model="nome"
            :counter="30"
            :rules="nameRules"
            label="Nome da sua loja"
            required
            ></v-text-field>

            <v-text-field 
            v-model="cidade"
            label="Identifique sua cidade"
            required
            ></v-text-field>


            <v-text-field 
            v-model="endereco"
            label="Endereço da sua Loja"
            required
            ></v-text-field>

                        <v-file-input
            accept="image/*"
            label="Insira foto do seu produto"
            >
            </v-file-input>

            
            <v-slider
                v-model="value"
                :rules="rules"
                label="Preço do seu produto?"
                step="1"
                max="200"
                thumb-label="always"
                ticks
            ></v-slider>

            <v-checkbox
            v-model="checkbox"
            label="Você aceita receber atualizações por e-mail?"
            ></v-checkbox>

            <v-dialog
            v-model="dialog"
            width="500"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="cyan lighten-3"
                dark
                v-bind="attrs"
                v-on="on"
                class="mr-5"
                >
                Cadastrar
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 text-black text-center">
                Digite o código enviado para o seu celular
                </v-card-title>

                <div class="ma-auto" style="max-width: 260px">
                    <v-otp-input
                    v-model="otp"
                    type="password"
                    length="5"
                    dark
                    ></v-otp-input>
                </div>
            </v-card>
        </v-dialog>
            <v-btn
            color="pink lighten-4"
            class="mr-4"
            @click="reset"
            >
            Refazer Formulário
            </v-btn>

        </v-form>
         
    </v-container>
    
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 30) || 'O nome deve ter menos de 30 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ],
      SenhaRules: [
        v => !!v || 'senha é obrigatória',
        v => (v && v.length <= 20) || 'A senha deve ter no máximo 20 caracteres',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>