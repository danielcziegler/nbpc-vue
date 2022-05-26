<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        v-for="(item, i) in policyItemsSorted"
        :key="'policy' + i"
      >
        <v-card outlined :href="item.link" target="_blank">
          <v-card-title primary-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.desc }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Policies",
  data() {
    return {
      policyItems: [
        {
          title: "Parish Council Meeting Minutes",
          desc: "Here is an archive of all our modern Minutes taken from Parish Council meetings.",
          link: "https://newbradwellpc-my.sharepoint.com/:f:/g/personal/dziegler_newbradwell-pc_gov_uk/EsddybRU9wBJme4X1HA8ykoBj2aSkxWVAFXgIqDDMv5ZtA?e=j9ZoV3",
        },
        {
          title: "Parish Council Meeting Agendas",
          desc: "This archive contains agenda (and any applicable resources) documents.",
          link: "https://newbradwellpc-my.sharepoint.com/:f:/g/personal/dziegler_newbradwell-pc_gov_uk/EsddybRU9wBJme4X1HA8ykoBj2aSkxWVAFXgIqDDMv5ZtA?e=j9ZoV3",
        },
        {
          title: "Parish Council Meeting dates 2022",
          desc: "This contains all the agreed Parish Council meeting dates for 2022.",
          link: "/docs/meeting-dates-2022.pdf",
        },
        {
          title: "Grants Policy and Guidance",
          desc: "This document contains our most recent Grants policy, and offers guidance for what would and would not be considered.",
          link: "/docs/grants-sep19.pdf",
        },
        {
          title: "Grants Application Form (Paper)",
          desc: "If you wish to submit a grant application form in person, you can download complete and print the form here.",
          link: "/docs/grants-applicationform-sep19.docx",
        },
        {
          title: "Grants Application Form (Online)",
          desc: "You can complete the Grant Application form online.",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=uoh7Kkbp8EueurjT0B43iCN69r2iEq1Ho-QzlAVcsV5URDZIOFBCMzNLV0xZVDdQUks4VTBMQUJSOS4u&fsw=0",
        },
        {
          title: "2020-2021 Governance Statement",
          desc: "See our Governance Statement for 2020 - 2021.",
          link: "/docs/agar-2020-2021.pdf",
        },
        {
          title: "Asset Register",
          desc: "We have all our asset items listed and registered.",
          link: "/docs/assets.pdf",
        },
        {
          title: "Dog Waste Exemptions",
          desc: "This is a list of all our Dog Waste exemptions.",
          link: "/docs/dog-waste-exemptions.pdf",
        },
        {
          title: "Model Standing Orders",
          desc: "Here are our Model Standing Orders, last updated June 2021.",
          link: "/docs/standing-orders-jun21.pdf",
        },
        {
          title: "MKC My Council",
          desc: "Click here to go to the MK Council portal for reporting, requesting and applying.",
          link: "https://mycouncil.milton-keynes.gov.uk/MyServices",
        },
        {
          title: "Waste Collection Pilot",
          desc: "You can find all the information about the Waste Collection Pilot here from MKC.",
          link: "https://www.milton-keynes.gov.uk/waste-recycling/recycling-pilot",
        },
        {
          title: "Website Accessibility Statement",
          desc: "Our statement on our website's accessibility.",
          link: "/docs/web-accessibility-statement.pdf",
        },
      ],
    };
  },
  computed: {
    policyItemsSorted: function () {
      const out = [];
      const map = {};
      const names = [];
      for (const item of this.policyItems) {
        names.push(item.title);
        map[item.title] = item;
      }
      names.sort();
      for (const name of names) {
        out.push(map[name]);
      }
      return out;
    },
  },
};
</script>
