<template>
  <div id="app">
    <v-app>
      <v-app-bar app flat color="blue lighten-5">
        <v-toolbar-title
          class="text-h4 font-weight-bold blue--text text--darken-4"
          >{{ activeMenuItem.text }}</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue darken-4"
              @click="externalLink(externalLinks.facebook)"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </template>
          <span>Go to our Facebook page</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue darken-4"
              @click="externalLink(externalLinks.email)"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </template>
          <span>Send us an Email</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue darken-4"
              @click="externalLink(externalLinks.telephone)"
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </template>
          <span>Phone us</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue darken-4"
              @click="externalLink(externalLinks.map)"
            >
              <v-icon>mdi-google-maps</v-icon>
            </v-btn>
          </template>
          <span>Locate us on Google Maps</span>
        </v-tooltip>
      </v-app-bar>

      <v-navigation-drawer
        app
        permanent
        elevation="0"
        :expand-on-hover="smallDevice"
      >
        <v-list dense color="blue lighten-5">
          <v-list-item class="px-2">
            <v-img src="./assets/logo_transp_sm.png"></v-img>
          </v-list-item>
          <v-list-item link class="text-center">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <span class="blue--text text--darken-4">New Bradwell</span>
              </v-list-item-title>
              <v-list-item-subtitle
                ><span class="indigo--text text--darken-4"
                  >Parish Council</span
                ></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            link
            :to="{ [item.routeTarget]: item.route }"
            :class="menuItemsClasses[item.route]"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app color="blue lighten-5">
        <span class="text-caption"
          ><span class="font-weight-bold"
            >Copyright 2018-2021 New Bradwell Parish Council</span
          ><br />Unit 10, New Bradwell Workspace, St James Street, New Bradwell,
          Milton Keynes, MK13 0BL<br />01908 313602 -
          <a href="mailto:contact@newbradwell-pc.gov.uk"
            >contact@newbradwell-pc.gov.uk</a
          ></span
        >
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      externalLinks: {
        facebook: "https://www.facebook.com/newbradwellparishcouncil",
        email: "mailto:contact@newbradwell-pc.gov.uk",
        telephone: "tel:01908313602",
        map: "https://www.google.com/maps/place/New+Bradwell+Parish+Council/@52.064658,-0.792417,16z/data=!4m5!3m4!1s0x0:0xa350b42125ccc0e1!8m2!3d52.064511!4d-0.7928642?hl=en-GB",
      },
      menuItems: [
        {
          text: "About Us",
          icon: "mdi-information",
          route: "about",
          routeTarget: "path",
        },
        {
          text: "News and Events",
          icon: "mdi-newspaper",
          route: "feed",
          routeTarget: "name",
        },
        {
          text: "Report an Issue",
          icon: "mdi-alert",
          route: "report",
          routeTarget: "name",
        },
        {
          text: "Policies, Guides and Docs",
          icon: "mdi-folder-text",
          route: "policies",
          routeTarget: "name",
        },
        {
          text: "Newsletters",
          icon: "mdi-email-newsletter",
          route: "newsletters",
          routeTarget: "name",
        },
        {
          text: "Allotments",
          icon: "mdi-flower",
          route: "allotments",
          routeTarget: "name",
        },
        {
          text: "Coronavirus",
          icon: "mdi-virus",
          route: "coronavirus",
          routeTarget: "name",
        },
        {
          text: "Platinum Jubilee",
          icon: "mdi-party-popper",
          route: "platinumjubilee",
          routeTarget: "name",
        },
        {
          text: "Councillors",
          icon: "mdi-shield-account",
          route: "councillors",
          routeTarget: "name",
        },
        {
          text: "Staff",
          icon: "mdi-badge-account",
          route: "staff",
          routeTarget: "name",
        },
      ],
    };
  },
  computed: {
    smallDevice: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
      return false;
    },
    activeMenuItem: function () {
      if (this.$route.name === null) {
        return this.menuItems[0];
      }
      const item = this.menuItems.filter(
        (dat) => dat.route === this.$route.name
      );
      if (item.length !== 1) {
        return this.menuItems[0];
      }
      return item[0];
    },
    menuItemsClasses: function () {
      const out = {};
      let item;
      for (item of this.menuItems) {
        if (this.activeMenuItem.route === item.route) {
          out[item.route] = "v-list-item--active";
        } else {
          out[item.route] = "";
        }
      }
      return out;
    },
  },
  methods: {
    externalLink(href, target = "_blank") {
      console.debug(`externalLink: ${href} (${target})`);
      window.open(href, target).focus();
    },
    checkIncomingRoute() {
      if (this.$route.name === null && this.$route.path !== "/") {
        console.debug(
          `checkIncomingRoute: unknown route (${this.$route.path}), pushing to about`
        );
        this.$router.push({
          path: "about",
        });
      }
    },
  },
  created() {
    this.checkIncomingRoute();
  },
};
</script>

<style></style>
