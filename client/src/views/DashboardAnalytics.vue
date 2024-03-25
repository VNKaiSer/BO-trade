<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <!-- CARD 1: CONGRATS -->
      <!-- <div class="w-full vx-col lg:w-1/2 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="@/assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="@/assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
          <feather-icon icon="AwardIcon" class="inline-flex p-6 mb-8 text-white rounded-full shadow bg-primary" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">Xin chúc mừng {{ checkpointReward.userName }},</h1>
          <p class="w-4/5 mx-auto text-white xl:w-3/4 lg:w-4/5 md:w-2/3">Bạn đã làm <strong>{{ checkpointReward.progress }}</strong> more sales today. Check your new badge in your profile.</p>
        </vx-card>
      </div> -->
      <!-- CARD 7: Sales Stats -->
      <div class="w-full vx-col lg:w-1/4 mb-base">
        <vx-card :title="$t('DSAD') || 'DSAD'">
          <template slot="actions">
            <feather-icon
              icon="MoreVerticalIcon"
              svgClasses="w-6 h-6 text-grey"
            ></feather-icon>
          </template>
          <div class="flex">
            <!-- <span class="flex items-center"><div class="w-3 h-3 mr-1 rounded-full bg-primary"></div><span>Ngoại tuyến</span></span> -->
            <span class="flex items-center ml-4"
              ><div class="w-3 h-3 mr-1 rounded-full bg-success"></div>
              <span>{{ $t("SAWD") || "SAWD" }}</span></span
            >
          </div>
          <div slot="no-body-bottom">
            <!-- <vue-apex-charts type=radar height=385 :options="analyticsData.statisticsRadar.chartOptions" :series="salesRadar.series" /> -->
          </div>
        </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card :title="$t('SAWD') || 'SAWD'">
          <h2 class="mb-1 font-bold">{{ dataGet.nNDK | k_formatter }}</h2>
        </vx-card>
        <!-- <statistics-card-line icon="UsersIcon" :statistic="dataGet.nNDK" statisticTitle="Người đăng ký" :chartData="subscribersGained.series" type='area'></statistics-card-line> -->
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card :title="$t('DASVS') || 'DASVS'">
          <h2 class="mb-1 font-bold">{{ dataGet.nNDXM | k_formatter }}</h2>
        </vx-card>
        <!-- <statistics-card-line icon="UsersIcon" :statistic="dataGet.nNDXM" statisticTitle="Đã xác minh" :chartData="ordersRecevied.series" color='success' type='area'></statistics-card-line> -->
      </div>

      <!-- CARD 4: ĐẠI LÝ -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card :title="$t('KGOS') || 'KGOS'">
          <h2 class="mb-1 font-bold">{{ dataGet.nDL | k_formatter }}</h2>
        </vx-card>
        <!-- <statistics-card-line icon="UsersIcon" :statistic="dataGet.nDL" statisticTitle="Đại lý" :chartData="ordersRecevied.series" color='warning' type='area'></statistics-card-line> -->
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 4: SESSION -->
      <div class="w-full vx-col md:w-1/2 mb-base">
        <div id="loading-corners" class="vs-con-loading__container">
          <vx-card>
            <div
              class="flex-col-reverse vx-row md:flex-col-reverse sm:flex-row lg:flex-row"
            >
              <!-- LEFT COL -->
              <div
                class="flex flex-col justify-between w-full vx-col md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2"
                v-if="salesBarSession.analyticsData"
              >
                <div>
                  <h2 class="mb-1 font-bold">
                    {{ dataGet.tsNNT | k_formatter }}
                  </h2>
                  <span class="font-medium">{{ $t("OLII") || "OLII" }}</span>

                  <!-- Previous Data Comparison -->
                  <p class="mt-2 text-xl font-medium">
                    <span
                      :class="
                        dataGet.tsTN7N >= 0 ? 'text-success' : 'text-danger'
                      "
                    >
                      <span v-if="dataGet.tsTN7N > 0">+</span>
                      <span>{{ dataGet.tsTN7N }}</span>
                    </span>
                    <span> {{ $t("WUJSD") || "WUJSD" }} </span>
                    <!-- <span>{{ salesBarSession.analyticsData.comparison.str }}</span> -->
                  </p>
                </div>
                <!-- <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="w-full mt-4 shadow-md lg:mt-0">Xem chi tiết</vs-button> -->
              </div>

              <!-- RIGHT COL -->
              <!-- <div class="flex flex-col w-full vx-col md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 lg:mb-0 md:mb-base sm:mb-0 mb-base">
              <change-time-duration-dropdown class="self-end" />
              <vue-apex-charts type=bar height=200 :options="analyticsData.salesBar.chartOptions" :series="salesBarSession.series" v-if="salesBarSession.series" />
            </div> -->
            </div>
            <vs-divider class="my-6"></vs-divider>

            <vs-radio
              class="mr-2"
              v-model="isCheckShowDT"
              vs-value="all"
              @change="changeDT('all')"
              >{{ $t("All") || "All" }}</vs-radio
            >
            <vs-radio
              class="mr-2"
              v-model="isCheckShowDT"
              vs-value="today"
              @change="changeDT('today')"
              >{{ $t("WRTR") || "WRTR" }}</vs-radio
            >
            <vs-radio
              class="mr-2"
              v-model="isCheckShowDT"
              vs-value="lastweek"
              @change="changeDT('lastweek')"
              >{{ $t("WFSA") || "WFSA" }}</vs-radio
            >
            <vs-radio
              class="mr-2"
              v-model="isCheckShowDT"
              vs-value="lastmonth"
              @change="changeDT('lastmonth')"
              >{{ $t("GVVVV") || "GVVVV" }}</vs-radio
            >
            <vs-radio
              class="mr-2"
              v-model="isCheckShowDT"
              vs-value="threelastmonth"
              @change="changeDT('threelastmonth')"
              >{{ $t("FFDS") || "FFDS" }}</vs-radio
            >

            <div class="vx-row">
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("TYHH") || "TYHH" }}:<br />
                  <span class="font-bold"
                    >${{ formatPrice(dataGet.tsTNUSD, 4) }}</span
                  >
                </p>
                <!--<vs-progress class="block mt-1" :percent="(dataGet.tsTNUSD/(dataGet.tsTNUSD + dataGet.tsTNFEE))*100" color="primary"></vs-progress>-->
              </div>
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("LOSOD") || "LOSOD" }}:<br />
                  <span class="font-bold">{{
                    formatPrice(dataGet.tsTNThuc, 4)
                  }}</span>
                </p>
                <!--<vs-progress class="block mt-1" :percent="rateTNFE" color="danger"></vs-progress>-->
              </div>
              <!-- <div class="w-1/2 mb-3 vx-col">
              <p>Tổng thu nhập người dùng:<br> <span class="font-bold">${{ formatPrice(dataGet.tsTNND, 2)  }}</span></p>
              <vs-progress class="block mt-1" :percent="20" color="warning"></vs-progress>
            </div> -->
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("OLSO") || "OLSO" }}:<br />
                  <span class="font-bold">{{
                    formatPrice(dataGet.tsFee, 10)
                  }}</span>
                </p>
                <!--<vs-progress class="block mt-1" :percent="100 - rateTNFE" color="success"></vs-progress>-->
              </div>
              <!--<div class="w-1/2 mb-3 vx-col">
              <p>Tổng BNB:<br> <span class="font-bold">{{ formatPrice(dataGet.tsFee + dataGet.tsTNThuc, 10)  }}</span></p>
               <vs-progress class="block mt-1" :percent="100 - rateTNFE" color="success"></vs-progress>
            </div>-->
            </div>
          </vx-card>
        </div>
      </div>

      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <vx-card :title="$t('GTHS') || 'GTHS'">
          <div class="vx-row">
            <div class="w-1/2 mb-3 vx-col">
              <p>
                {{ $t("YUTR") || "YUTR" }}:<br />
                <span class="font-bold"
                  >${{ formatPrice(dataGet.tsTNPAYPALN, 2) }}</span
                >
              </p>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>
                {{ $t("OKTY") || "OKTY" }}:<br />
                <span class="font-bold"
                  >${{ formatPrice(dataGet.tsTNBTCN, 6) }}</span
                >
              </p>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>
                {{ $t("LOASD") || "LOASD" }}:<br />
                <span class="font-bold"
                  >${{ formatPrice(dataGet.tsTNETHN, 4) }}</span
                >
              </p>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>
                {{ $t("DKSI") || "DKSI" }}:<br />
                <span class="font-bold"
                  >${{ formatPrice(dataGet.tsTNUSDN, 2) }}</span
                >
              </p>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>
                {{ $t("OLD") || "OLD" }}:<br />
                <span class="font-bold"
                  >${{ formatPrice(dataGet.tsTNVNN, 0) }}</span
                >
              </p>
            </div>
          </div>
        </vx-card>
      </div>

      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <div id="loading-corners2" class="vs-con-loading__container">
          <vx-card :title="$t('FGTD') || 'FGTD'">
            <div class="vx-row">
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("VFGB") || "VFGB" }}<br />
                  <span class="font-bold"
                    >${{ formatPrice(dataGet.tsLose, 4) }}</span
                  >
                </p>
              </div>
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("WEWD") || "WEWD" }}<br />
                  <span class="font-bold"
                    >${{ formatPrice(dataGet.tsWin, 4) }}</span
                  >
                </p>
              </div>
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("SACZ") || "SACZ" }}<br />
                  <span class="font-bold"
                    >${{ formatPrice(dataGet.tsHHong, 4) }}</span
                  >
                </p>
              </div>
              <div class="w-1/2 mb-3 vx-col">
                <p>
                  {{ $t("RWAS") || "RWAS" }}<br />
                  <span class="font-bold"
                    >${{
                      formatPrice(
                        dataGet.tsLose - dataGet.tsWin - dataGet.tsHHong,
                        4
                      )
                    }}</span
                  >
                </p>
              </div>
            </div>
          </vx-card>
        </div>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
      <!-- <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
          <vx-card title="Support Tracker">

              <template slot="actions">
                  <change-time-duration-dropdown />
              </template>

              <div slot="no-body" v-if="supportTracker.analyticsData">
                  <div class="text-center vx-row">


                      <div class="flex flex-col justify-between order-last w-full mb-4 vx-col lg:w-1/5 md:w-full sm:w-1/5 lg:order-first md:order-last sm:order-first">
                          <div class="lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6">
                              <h1 class="text-5xl font-bold">{{ supportTracker.analyticsData.openTickets }}</h1>
                              <small>Tickets</small>
                          </div>
                      </div>


                      <div class="justify-center w-full mx-auto mt-6 vx-col lg:w-4/5 md:w-full sm:w-4/5 lg:mt-0 md:mt-6 sm:mt-0">
                          <vue-apex-charts type=radialBar height=385 :options="analyticsData.supportTrackerRadialBar.chartOptions" :series="supportTracker.series" />
                      </div>
                  </div>


                  <div class="flex flex-row justify-between px-8 pb-4 mt-4">
                      <p class="text-center" v-for="(val, key) in supportTracker.analyticsData.meta" :key="key">
                        <span class="block">{{ key }}</span>
                        <span class="text-2xl font-semibold">{{ val }}</span>
                      </p>
                  </div>
              </div>
          </vx-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      isCheckShowDT: "all",
      checkpointReward: {},
      subscribersGained: {},
      ordersRecevied: {},
      salesBarSession: {},
      supportTracker: {},
      productsOrder: {},
      salesRadar: {},

      dataGet: {},

      rateTNFE: 0,

      timelineData: [
        {
          color: "primary",
          icon: "PlusIcon",
          title: "Client Meeting",
          desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
          time: "25 mins Ago",
        },
        {
          color: "warning",
          icon: "MailIcon",
          title: "Email Newsletter",
          desc: "Cupcake gummi bears soufflé caramels candy",
          time: "15 Days Ago",
        },
        {
          color: "danger",
          icon: "UsersIcon",
          title: "Plan Webinar",
          desc: "Candy ice cream cake. Halvah gummi bears",
          time: "20 days ago",
        },
        {
          color: "success",
          icon: "LayoutIcon",
          title: "Launch Website",
          desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
          time: "25 days ago",
        },
        {
          color: "primary",
          icon: "TvIcon",
          title: "Marketing",
          desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
          time: "28 days ago",
        },
      ],

      analyticsData: analyticsData,
      dispatchedOrders: [],
    };
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VxTimeline,
  },
  methods: {
    openLoadingInDiv() {
      this.$vs.loading({
        container: "#loading-corners",
        type: "corners",
        scale: 0.6,
      });
      this.$vs.loading({
        container: "#loading-corners2",
        type: "corners",
        scale: 0.6,
      });
    },
    closeLoadingInDiv() {
      this.$vs.loading.close("#loading-corners > .con-vs-loading");
      this.$vs.loading.close("#loading-corners2 > .con-vs-loading");
    },

    formatPrice(value, minimum) {
      if (void 0 === value) value = 0;
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },
    changeDT(val) {
      this.openLoadingInDiv();
      let obj = {
        type: val,
      };
      AuthenticationService.getShowDT(obj).then((res) => {
        let g = res.data;
        this.closeLoadingInDiv();

        if (g.success == 1) {
          this.dataGet.tsTNUSD = g.data.dtUSD;
          this.dataGet.tsTNThuc = g.data.dtBNB;
          this.dataGet.tsFee = g.data.freeBNB;

          this.dataGet.tsWin = g.data.tsWin;
          this.dataGet.tsLose = g.data.tsLose;
          this.dataGet.tsHHong = g.data.tsHHong;
        }
      });
    },
  },
  created() {
    AuthenticationService.getAnalytics()
      .then((res) => {
        this.closeLoadingInDiv();

        if (res.data.success == 1) {
          let obj = res.data.data;

          this.dataGet = obj;

          //let tt = obj.tsTNFEE + obj.tsFee

          //this.rateTNFE = (obj.tsTNFEE/tt)*100
        } else if (res.data.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // //  User Reward Card
    // this.$http.get("/api/users/analytics")
    //   .then((response) => { this.checkpointReward = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Subscribers gained - Statistics
    // this.$http.get("/api/card/card-statistics/subscribers")
    //   .then((response) => { this.subscribersGained = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Orders - Statistics
    // this.$http.get("/api/card/card-statistics/orders")
    //   .then((response) => { this.ordersRecevied = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Sales bar - Analytics
    this.$http
      .get("/api/card/card-analytics/sales/bar")
      .then((response) => {
        this.salesBarSession = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // // Support Tracker
    // this.$http.get("/api/card/card-analytics/support-tracker")
    //   .then((response) => { this.supportTracker = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Products Order
    // this.$http.get("/api/card/card-analytics/products-orders")
    //   .then((response) => { this.productsOrder = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Sales Radar
    // this.$http.get("/api/card/card-analytics/sales/radar")
    //   .then((response) => { this.salesRadar = response.data })
    //   .catch((error)   => { console.log(error) })

    // // Dispatched Orders
    // this.$http.get("/api/table/dispatched-orders")
    //   .then((response) => { this.dispatchedOrders = response.data })
    //   .catch((error)   => { console.log(error) })
  },
  mounted() {
    this.openLoadingInDiv();
  },
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
