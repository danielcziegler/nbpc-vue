<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        v-for="(person, i) in peopleList"
        :key="'concillor' + i"
      >
        <v-card outlined>
          <v-card-text class="text-center">
            <div>
              <v-icon color="blue darken-4" x-large>mdi-account</v-icon>
            </div>
            <div class="text-h6 black--text">{{ person.name }}</div>
            {{ person.role }}<br />
            <a
              style="color: #666666 !important; text-decoration: none"
              :href="person.interests"
              >Declaration of Interests</a
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Councillors",
  data() {
    return {
      peopleList: [
        {
          name: "Joshua Ziegler",
          role: "Chair",
          interests: "/docs/councillor-interests/jziegler.pdf",
        },
        {
          name: "Tina Strutton",
          role: "Vice-Chair",
          interests: "/docs/councillor-interests/tstrutton.pdf",
        },
        {
          name: "Alan Francis",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/afrancis.pdf",
        },
        {
          name: "Daniel Ziegler",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/dziegler.pdf",
        },
        // {
        //   name: "Fern Bunton",
        //   role: "Parish Councillor",
        //   interests: "/docs/councillor-interests/fbunton.pdf",
        // },
        {
          name: "Simon Clawson",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/sclawson.pdf",
        },
      ],
    };
  },
};
</script>
