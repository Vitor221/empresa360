export default {
  data: () => ({
    dados: []
  }),
  methods: {
    getDadosApi(url) {
      fetch(url) //Passando a url como parâmetro, que irá pegar os parâmetros passados dos arquivos Lead.vue e Leads.vue
      .then(response => response.json())
      .then(response => {
        this.dados = response
      })
    }
  }
}