<template>
  <div>
    <v-card elevation="0" shaped class="mb-5">
      <v-img
        src="../assets/newbradwell_skyshot.jpg"
        height="300px"
        class="white--text align-end"
      >
        <v-card-title>
          <div
            class="text-h4 font-weight-bold textstrokeblack"
            style="word-break: break-word"
          >
            Welcome to the New Bradwell Parish Council Webpage
          </div>
          <div
            class="text-subtitle-1 textstrokeblack"
            style="word-break: break-word"
          >
            New Bradwell is a mainly Edwardian era village, modern district and
            civil parish in north-west Milton Keynes, Buckinghamshire, England.
            With the Grand Union Canal passing through to our local stores and
            school, there's something for all of our 3000 plus residents in New
            Bradwell.
          </div>
        </v-card-title>
      </v-img>
    </v-card>
    <v-row>
      <v-col cols="12" sm="12" md="7" lg="7" xl="7">
        <v-card outlined elevation="0">
          <v-card-title primary-title> Address and Opening Hours </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <p class="text-body-2">
                  New Bradwell Parish Council<br />
                  Unit 10, New Bradwell Workspace<br />
                  St. James Street<br />
                  New Bradwell<br />
                  Milton Keynes<br />
                  MK13 0BL<br />
                </p>
              </v-col>
              <v-col cols="auto">
                <v-divider vertical></v-divider>
              </v-col>
              <v-col class="text-center" cols="auto">
                <p class="text-body-2">
                  01908 313602<br />
                  <a href="mailto:contact@newbradwell-pc.gov.uk" target="_blank"
                    >contact@newbradwell-pc.gov.uk</a
                  ><br /><br />
                  Mon: 10AM - 1PM<br />
                  Tue: 10AM - 1PM<br />
                  Wed: 10AM - 1PM<br />
                  Thu: 10AM - 1PM<br />
                  Fri: Closed
                </p>
              </v-col>
            </v-row>
            <v-card shaped elevation="0" class="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4905.655719036036!2d-0.792417!3d52.064658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa350b42125ccc0e1!2sNew%20Bradwell%20Parish%20Council!5e0!3m2!1sen!2suk!4v1636378199728!5m2!1sen!2suk"
                width="100%"
                height="500"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="5" lg="5" xl="5">
        <v-card outlined elevation="0">
          <v-card-title primary-title>
            Role of the Parish Council
          </v-card-title>
          <v-card-text>
            <p class="text-body-2">
              Local or Parish Councils are the first tier of local government
              and play a vital role in engaging with local people and helping to
              shape their communities. They are generally referred to as local
              councils or parish and town councils and are uniquely placed to
              make a major contribution to localism.
            </p>
            <p class="text-body-2">
              Milton Keynes has 48 parishes each with its own governing body.
              These include 32 Parish Councils, 7 Town Councils, 2 Community
              Councils and 7 Parish Meetings.
            </p>
            <p class="text-body-2">
              Each Local Council is a corporate body, a legal entity separate
              from that of its members. It is an elected body in the first tier
              of local government and the decisions are the responsibility of
              the whole body. Local councils have the legal power to take
              action, but they have very few duties and greater freedom to
              choose the communities they serve and improve the quality of life
              and the local environment. Furthermore they influence other
              decision makers and can, in many cases, deliver services to meet
              local needs.
            </p>
          </v-card-text>
        </v-card>
        <v-card outlined elevation="0" class="mt-5">
          <v-card-title primary-title> How are we funded? </v-card-title>
          <v-card-text>
            <p class="text-body-2">
              The council has been granted powers by Parliament including the
              important authority to raise money through taxation (the precept)
              and a range of powers to spend public money. Part of your council
              tax goes to your local parish or town council. The parish council
              must prepare a budget each year which will cover all necessary
              expenditure and then the parish council set their precept, which
              is the total amount they raise through council tax to meet their
              budget needs. Information on your council tax can be found on the
              <a
                href="https://www.milton-keynes.gov.uk/benefits-council-tax/council-tax/council-tax-information-and-bands"
                target="_blank"
                >Council Tax information page</a
              >.
            </p>
            <p class="text-body-2">
              Local councils may also apply for a range of grants from various
              sources such as lottery funding for a number of specific purposes.
              Grants can be a useful addition to council income, or can enable
              projects that may not otherwise be possible. These could range
              from a grant towards a new playground or the village hall, to a
              large Heritage Lottery Fund application to purchase and restore a
              significant community asset.
            </p>
            <p class="text-body-2">
              Parish and town councils represent the community, deliver some
              services to meet local needs and improving quality of life and
              community well-being. By providing and maintaining a variety of
              local services including allotments, car parks, events and
              festivals, leisure and sports facilities, tourist activities,
              youth projects and community centres / halls to name a few may
              also raise additional income and many parish and town councils
              raise income derived from rents and leases of property they may
              own. Raising income is a financial responsibility of parishes to
              reduce the burden on the tax payer and placing it directly on end
              users.
            </p>
          </v-card-text>
        </v-card>
        <v-card outlined elevation="0" class="mt-5">
          <v-card-title primary-title>What do we do?</v-card-title>
          <v-card-text>
            <p class="text-body-2">
              Parish and town councils make all kinds of decisions on issues
              that affect the local community. Central Government is encouraging
              local councils to deliver more services and play a greater part in
              their communities. Parish and town councils have a variety of
              <a href="/docs/powers-of-local-councils.pdf" target="_blank"
                >powers and duties</a
              >
              given to them by Acts of Parliament. However not all parish and
              town councils use all of their powers. Each parish or town council
              is an individual governing body.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.textstrokeblack {
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
}
</style>
