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
            <span v-if="person.interests === null">&nbsp;</span>
            <!-- <a v-if="person.interests !== null" style="color: #666666 !important; text-decoration: none"
              :href="person.interests">Declaration of Interests</a> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card outlined class="mt-5">
      <v-card-title
        >Are you interested in becoming a Parish Councillor?</v-card-title
      >
      <v-card-text>
        <p>
          If you have an interest in New Bradwell, want to make it better for
          you and fellow residents, and have a few hours a month free to
          volunteer then why not put yourself forward? To be eligable you must..
        </p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>
            Be a British citizen, an eligible Commonwealth citizen or a citizen
            of any other member state of the European Union
          </li>
          <li>
            Meet at least one of the following criteria..
            <ul>
              <li>
                You have occupied any land or other premises as owner or tenant
                in New Bradwell, or live within 3 miles
              </li>
              <li>Your main or only place of work is in New Bradwell</li>
            </ul>
          </li>
        </ul>
        <p class="mt-3">
          <strong
            >If you are interested, please drop us an email on
            <a href="mailto:contact@newbradwell-pc.gov.uk"
              >contact@newbradwell-pc.gov.uk</a
            >
            with your details and we will get back to you with the next
            steps!</strong
          >
        </p>
        <p>
          Unfortunatly you will not be eligable if you have been declared
          bankrupt within the last 5 years, or have been convicted of a criminal
          offence and sentanced to 3 months imprisonment or more within the last
          5 years, or are disqualified for any other reason under the
          Representation of the People Act 1983 or the Audit Commission Act.
        </p>
      </v-card-text>
    </v-card>
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
          name: "Daniel Ziegler",
          role: "Vice-Chair",
          interests: "/docs/councillor-interests/dziegler.pdf",
        },
        {
          name: "Janette Chapman",
          role: "Parish Councillor",
          interests: null,
        },
        {
          name: "Nicola Coxon",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/ncoxon.pdf",
        },
        {
          name: "Hannah Clawson (Vincent)",
          role: "Parish Councillor",
          interests: null,
        },
        {
          name: "Simon Clawson",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/sclawson.pdf",
        },
        {
          name: "Alan Francis",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/afrancis.pdf",
        },
        {
          name: "Sue Rees",
          role: "Parish Councillor",
          interests: null,
        },
        {
          name: "Tina Strutton",
          role: "Parish Councillor",
          interests: "/docs/councillor-interests/tstrutton.pdf",
        },
      ],
    };
  },
};
</script>
