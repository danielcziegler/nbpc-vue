<template>
  <div>
    <v-row>
      <v-col cols="4" v-for="(person, i) in peopleList" :key="'concillor' + i">
        <v-card outlined>
          <v-card-text class="text-center">
            <div>
              <v-icon color="blue darken-4" x-large>mdi-account</v-icon>
            </div>
            <div class="text-h6 black--text">{{ person.name }}</div>
            {{ person.role }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Councillors',
  data () {
    return {
      peopleList: [
        {
          name: 'Joshua Ziegler',
          role: 'Chair'
        },
        {
          name: 'Tina Strutton',
          role: 'Vice-Chair'
        },
        {
          name: 'Alan Francis',
          role: 'Parish Councillor'
        },
        {
          name: 'Daniel Ziegler',
          role: 'Parish Councillor'
        },
        {
          name: 'Fern Bunton',
          role: 'Parish Councillor'
        }
      ]
    }
  }
}
</script>
