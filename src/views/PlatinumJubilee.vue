<template>
  <div>
    <v-card outlined elevation="0" class="mb-5">
      <v-card-text>
        <p class="text-body-1">
          In 2022, Her Majesty The Queen will become the first British Monarch
          to celebrate a Platinum Jubilee, seventy years of service. An extended
          bank holiday is being held from 2-5 June 2022 so people across the
          nation can come together to celebrate this historic milestone.
        </p>
        <p class="text-body-1">
          New Bradwell Parish Council wants to encourage residents to hold local
          events and celebrations. To assist where we can, we are offering
          grants to provide financial support, and can provide information to
          help plan and run your event.
        </p>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col
        v-for="(link, i) in links"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card
          outlined
          elevation="0"
          :href="link.href"
          :target="link.target"
          style="height: 100%"
        >
          <v-card-title primary-title>{{ link.title }}</v-card-title>
          <v-card-text>
            <p class="text-body-2" v-html="link.desc"></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PlatinumJubilee",
  data() {
    return {
      links: [
        {
          title: "New Bradwell Parish Council Grant Form (Online)",
          desc: "Complete our Grants Application form and your request will be reviewed by the Parish Council. If you need assistance completing the form, please contact our team.",
          href: "https://forms.office.com/Pages/ResponsePage.aspx?id=uoh7Kkbp8EueurjT0B43iCN69r2iEq1Ho-QzlAVcsV5URDZIOFBCMzNLV0xZVDdQUks4VTBMQUJSOS4u&fsw=0",
          target: "_blank",
        },
        {
          title: "Milton Keynes Council info",
          desc: "Milton Keynes Council has plenty of information and resources for planning your event. Click here to go to their webpage.",
          href: "https://www.milton-keynes.gov.uk/your-council-and-elections/queens-platinum-jubilee",
          target: "_blank",
        },
        {
          title: "Road Closure Application Form",
          desc: "If you need to apply for a road closure, or other temporary traffic regulation in order to hold your event, please click here to be taken to the application form. The form should be emailed to <a href='mailto:troteam@milton-keynes.gov.uk'>TROteam@milton-keynes.gov.uk</a> at least 3 weeks before your event.",
          href: "https://www.milton-keynes.gov.uk/assets/attach/49620/Application-Form-Section-21-3-.pdf",
          target: "_blank",
        },
        {
          title: "The Queen’s Green Canopy",
          desc: "The Queen’s Green Canopy initiative asks people around the UK to ‘plant a tree for the Jubilee’ to create a living, green legacy. If you’d like to plant a tree in your garden, there’s useful advice on The Queen’s Green Canopy website.",
          href: "https://queensgreencanopy.org/",
          target: "_blank",
        },
        {
          title: "Get your Big Lunch pack - Eden Project Communities",
          desc: "The Big Lunch is our chance to celebrate community connections and get to know one another a little better, and in 2022 we also have The Big Jubilee Lunch to celebrate The Queen's Platinum Jubilee weekend so there are more reasons than ever to get together!",
          href: "http://www.edenprojectcommunities.com/",
          target: "_blank",
        },
      ],
    };
  },
};
</script>
