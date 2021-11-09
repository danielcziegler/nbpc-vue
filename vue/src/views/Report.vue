<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        v-for="(issue, i) in reportItemsSorted"
        :key="'issue' + i"
      >
        <v-card outlined :href="issue.link" target="_blank">
          <v-card-title primary-title>
            {{ issue.title }}
          </v-card-title>
          <v-card-text>
            {{ issue.desc }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      reportItems: [
        {
          title: 'Litter / Dog Bins',
          desc: 'Please contact us to report an overflowing or damaged Dog Litter bin.',
          link: 'mailto:contact@newbradwell-pc.gov.uk'
        },
        {
          title: 'Shrubs, Flower Begs and Grass Cutting',
          desc: 'Let MK Council know if any of our shrubs, flower beds or grass areas are in need of attention.',
          link: 'https://www.milton-keynes.gov.uk/leisure-tourism-and-culture/parks-and-open-spaces/landscape-maintenance/private-trees-shrubs-overhanging-the-highway'
        },
        {
          title: 'Trees and Hedges',
          desc: 'Please tell MK Council if there are any Trees or Hedges that require our attention.',
          link: 'https://www.milton-keynes.gov.uk/leisure-tourism-and-culture/parks-and-open-spaces/landscape-maintenance/private-trees-shrubs-overhanging-the-highway'
        },
        {
          title: 'Play Areas',
          desc: 'Please report any incidents or damage to local play areas.',
          link: 'https://www.milton-keynes.gov.uk/leisure-tourism-and-culture/parks-and-open-spaces/play-areas'
        },
        {
          title: 'Street Lighting',
          desc: 'Please report any street lights in need of repair.',
          link: 'https://www.milton-keynes.gov.uk/highways-and-transport-hub/highway-maintenance-hub/street-lighting'
        },
        {
          title: 'Highways and Parking',
          desc: 'Find out who to report different types of issues to.',
          link: 'https://www.milton-keynes.gov.uk/highways-and-transport-hub/report-it-highways-and-transport/report-problems-on-roads-footways-and-redways'
        },
        {
          title: 'Fly Tipping',
          desc: 'Please let MK Council know if you see any fly tipping. Better still if you witness it being done.',
          link: 'https://www.milton-keynes.gov.uk/waste-recycling/report-or-request-it'
        },
        {
          title: 'Public Footway issues',
          desc: 'Report any issues to MK Council.',
          link: 'https://www.milton-keynes.gov.uk/highways-and-transport-hub/report-it-highways-and-transport/report-problems-on-roads-footways-and-redways'
        },
        {
          title: 'Planning Applications',
          desc: 'Click here to see all recent plannng applications.',
          link: 'https://www.milton-keynes.gov.uk/planning-and-building/planning-apply-pay-view/view-and-comment-on-planning-applications'
        },
        {
          title: 'Watercourses',
          desc: 'See a problem with a stream or pond?',
          link: 'https://www.milton-keynes.gov.uk/leisure-tourism-and-culture/parks-and-open-spaces/landscape-maintenance/private-trees-shrubs-overhanging-the-highway'
        },
        {
          title: 'Environmental Officer',
          desc: 'Get in touch with our Environmental Officer by phone on 07909 520793 or by emailing envofficer@newbradwell-pc.gov.uk.',
          link: 'mailto:envofficer@newbradwell-pc.gov.uk'
        }
      ]
    }
  },
  computed: {
    reportItemsSorted: function () {
      const out = []
      const map = {}
      const names = []
      for (const item of this.reportItems) {
        names.push(item.title)
        map[item.title] = item
      }
      names.sort()
      for (const name of names) {
        out.push(map[name])
      }
      return out
    }
  }
}
</script>
