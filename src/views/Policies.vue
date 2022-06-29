<template>
  <div>
    <p>
      See our Policies, Guides and Documents here pertaining to all aspects of
      the Parish Council. The list is reguarly updated so check back often. You
      can also use the search if you cannot immediatly see what you are looking
      for.
    </p>
    <v-row class="mb-3">
      <v-col cols="3">
        <v-text-field
          v-model="search"
          label="Search"
          dense
          hide-details
          outlined
          clearable
          prepend-inner-icon="mdi-magnify"
        />
      </v-col>
      <v-col>&nbsp;</v-col>
    </v-row>
    <v-data-table
      dense
      :headers="policyItemsHeaders"
      :items="policyItems"
      :sort-by="['title']"
      :items-per-page="15"
      :search="search"
      @click:row="openDoc"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "Policies",
  data() {
    return {
      search: null,
      policyItemsHeaders: [
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Format",
          value: "format",
        },
        {
          text: "Description",
          value: "desc",
        },
      ],
      policyItems: [
        {
          title: "Parish Council Meeting Minutes",
          desc: "Here is an archive of all our modern Minutes taken from Parish Council meetings.",
          link: "https://newbradwellpc-my.sharepoint.com/:f:/g/personal/dziegler_newbradwell-pc_gov_uk/EsddybRU9wBJme4X1HA8ykoBj2aSkxWVAFXgIqDDMv5ZtA?e=j9ZoV3",
          format: "Form",
        },
        {
          title: "Parish Council Meeting Agendas",
          desc: "This archive contains agenda (and any applicable resources) documents.",
          link: "https://newbradwellpc-my.sharepoint.com/:f:/g/personal/dziegler_newbradwell-pc_gov_uk/EsddybRU9wBJme4X1HA8ykoBj2aSkxWVAFXgIqDDMv5ZtA?e=j9ZoV3",
          format: "Form",
        },
        {
          title: "Parish Council Meeting dates 2022",
          desc: "This contains all the agreed Parish Council meeting dates for 2022.",
          link: "/docs/meeting-dates-2022.pdf",
          format: "PDF",
        },
        {
          title: "Grants Policy and Guidance",
          desc: "This document contains our most recent Grants policy, and offers guidance for what would and would not be considered.",
          link: "/docs/grants-sep19.pdf",
          format: "PDF",
        },
        {
          title: "Grants Application Form (Paper)",
          desc: "If you wish to submit a grant application form in person, you can download complete and print the form here.",
          link: "/docs/grants-applicationform-sep19.docx",
          format: "Word Doc",
        },
        {
          title: "Grants Application Form (Online)",
          desc: "You can complete the Grant Application form online.",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=uoh7Kkbp8EueurjT0B43iCN69r2iEq1Ho-QzlAVcsV5URDZIOFBCMzNLV0xZVDdQUks4VTBMQUJSOS4u&fsw=0",
          format: "Form",
        },
        {
          title: "2020-2021 Governance Statement",
          desc: "See our Governance Statement for 2020 - 2021.",
          link: "/docs/agar-2020-2021.pdf",
          format: "PDF",
        },
        {
          title: "Asset Register",
          desc: "We have all our asset items listed and registered.",
          link: "/docs/assets.pdf",
          format: "PDF",
        },
        {
          title: "Dog Waste Exemptions",
          desc: "This is a list of all our Dog Waste exemptions.",
          link: "/docs/dog-waste-exemptions.pdf",
          format: "PDF",
        },
        {
          title: "Model Standing Orders",
          desc: "Here are our Model Standing Orders, last updated June 2021.",
          link: "/docs/standing-orders-jun21.pdf",
          format: "PDF",
        },
        {
          title: "MKC My Council",
          desc: "Click here to go to the MK Council portal for reporting, requesting and applying.",
          link: "https://mycouncil.milton-keynes.gov.uk/MyServices",
          format: "PDF",
        },
        {
          title: "Waste Collection Pilot",
          desc: "You can find all the information about the Waste Collection Pilot here from MKC.",
          link: "https://www.milton-keynes.gov.uk/waste-recycling/recycling-pilot",
          format: "PDF",
        },
        {
          title: "Website Accessibility Statement",
          desc: "Our statement on our website's accessibility.",
          link: "/docs/web-accessibility-statement.pdf",
          format: "PDF",
        },
        {
          title: "Complaints Procedure",
          desc: "Our policy for dealing with complaints about NBPC administration or procedures.",
          link: "/docs/complaints-procedure.pdf",
          format: "PDF",
        },
        {
          title: "Data Protection Policy",
          desc: "Policy providing guidance on how we proect Personal Data.",
          link: "/docs/data-protection-policy.pdf",
          format: "PDF",
        },
        {
          title: "Equality & Diversity Policy",
          desc: "Our policy on Equality and Diversity.",
          link: "/docs/equality-diversity-policy.pdf",
          format: "PDF",
        },
        {
          title: "Staff Grievance Policy",
          desc: "Our policy on handling Staff Grievances.",
          link: "/docs/staff-grievance-policy.pdf",
          format: "PDF",
        },
        {
          title: "Freedom of Information Policy",
          desc: "Policy describing our approach to Freedom of Information.",
          link: "/docs/freedom-information-policy.pdf",
          format: "PDF",
        },
        {
          title: "Model Publication Scheme Policy",
          desc: "This guidance gives examples of the kinds of information that we provide in order to meet their commitments under the model publication scheme.",
          link: "/docs/model-publication-scheme-policy.pdf",
          format: "PDF",
        },
        {
          title: "Staff Disciplinary Policy",
          desc: "Policy that describes how NBPC would handle internal disciplinary issues.",
          link: "/docs/staff-disciplinary-policy.pdf",
          format: "PDF",
        },
        {
          title: "AGAR Report 2021-2022",
          desc: "View a snapshot of our AGAR report for 21-22.",
          link: "/docs/agar-public-2021-2022.pdf",
          format: "PDF",
        },
        {
          title: "Financial Risk Assesment (Feb '22)",
          desc: "View our Financial Risk Assesment from Feb 2022",
          link: "/docs/financial-risk-assesment-22-02.pdf",
          format: "PDF",
        },
        {
          title: "Health and Safety Policy",
          desc: "Our policy on our Health and Safety comittments to staff, councillors and members of the public",
          link: "/docs/health-and-safety-policy.pdf",
          format: "PDF",
        },
      ],
    };
  },
  computed: {},
  methods: {
    openDoc(doc) {
      window.open(doc.link, "_blank").focus();
    },
  },
};
</script>
