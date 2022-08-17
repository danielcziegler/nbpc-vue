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
        <v-card outlined height="100%">
          <v-card-text class="text-center">
            <div>
              <v-icon color="blue darken-4" x-large>mdi-account</v-icon>
            </div>
            <div class="text-h6 black--text">{{ person.name }}</div>
            <div>{{ person.role }}</div>
            <div v-if="person.role_desc !== null">{{ person.role_desc }}</div>
            <div>
              <a :href="'mailto:' + person.email">{{ person.email }}</a> -
              {{ person.telephone }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Staff",
  data() {
    return {
      peopleList: [
        {
          name: "Germaine Newnham",
          role: "Parish Clerk",
          role_desc: null,
          email: "clerk@newbradwell-pc.gov.uk",
          telephone: "01909 313602",
        },
        {
          name: "David Barnes",
          role: "Environmental Officer",
          role_desc:
            "Our Environmental Officer periodically patrols around New Bradwell, looking for any environment issues like fly tipping, issues with waste and recycling, dog litter etc. Please get in touch if you see any concerns.",
          email: "envofficer@newbradwell-pc.gov.uk",
          telephone: "07909 520793",
        },
      ],
    };
  },
};
</script>
