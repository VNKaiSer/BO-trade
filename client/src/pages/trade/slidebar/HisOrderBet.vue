<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Ares
  Author URL:
========================================================================================== -->

<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="flex items-center justify-between px-6 mt-6">
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <!-- <vs-divider class="mb-0"></vs-divider> -->

    <VuePerfectScrollbar
      style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px)"
      class="scroll-area--data-list-add-new"
    >
      <div class="p-4 tablist">
        <vs-tabs alignment="fixed">
          <vs-tab
            label="MỞ"
            @click="getListBET(), (isCloseTab = true), (isOpenTab = false)"
          ></vs-tab>
          <vs-tab
            label="ĐÓNG"
            @click="getListOrder(), (isCloseTab = false), (isOpenTab = true)"
          ></vs-tab>
          <div
            class="tabClose"
            :class="{ hidden: !isCloseTab, block: isCloseTab }"
          >
            <div class="con-tab-ejemplo">
              <div
                v-if="listItemOpen.length == 0"
                class="flex flex-col items-center justify-center h-a"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4Mi4wODMiIGhlaWdodD0iODIuMTA0IiB2aWV3Qm94PSIwIDAgODIuMDgzIDgyLjEwNCI+CiAgPGcgaWQ9ImNvbnZlcnNpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyLjA5MSA0MS4wNDUpIHJvdGF0ZSgxMzUpIiBvcGFjaXR5PSIwLjIiPgogICAgPHBhdGggaWQ9IlBhdGhfMjYyNDMiIGRhdGEtbmFtZT0iUGF0aCAyNjI0MyIgZD0iTTU0LjQxNCwyNS4zOTNIMy42MjhBMy40MjcsMy40MjcsMCwwLDEsMCwyMS43NjZhMy40MjcsMy40MjcsMCwwLDEsMy42MjgtMy42MjhoNDIuMDhMMzMuNzM3LDYuMTY3YTMuNTA3LDMuNTA3LDAsMCwxLDAtNS4wNzksMy41MDcsMy41MDcsMCwwLDEsNS4wNzksMEw1Ni45NTMsMTkuMjI2YTMuMzExLDMuMzExLDAsMCwxLC43MjYsMy45OUEzLjQ4NiwzLjQ4NiwwLDAsMSw1NC40MTQsMjUuMzkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMTEgMCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ0IiBkYXRhLW5hbWU9IlBhdGggMjYyNDQiIGQ9Ik0yMS43NzYsMzQuMzkzQTMuMjkzLDMuMjkzLDAsMCwxLDE5LjIzNywzMy4zTDEuMSwxNS4xNjdhMy4zMTEsMy4zMTEsMCwwLDEtLjcyNi0zLjk5QTMuNDg2LDMuNDg2LDAsMCwxLDMuNjM4LDlINTQuNDI1YTMuNDI3LDMuNDI3LDAsMCwxLDMuNjI4LDMuNjI4LDMuNDI3LDMuNDI3LDAsMCwxLTMuNjI4LDMuNjI4SDEyLjM0NUwyNC4zMTYsMjguMjI2YTMuNTA3LDMuNTA3LDAsMCwxLDAsNS4wNzlBMy4yOTMsMy4yOTMsMCwwLDEsMjEuNzc2LDM0LjM5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjMuNjQ5KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg=="
                  alt=""
                  class="imageLandScape"
                />
                <p class="mt-3 text-sm text-center color-grey">
                  Bạn chưa có lệnh nào đang mở
                </p>
              </div>
              <div v-else class="flex flex-col justify-center">
                <div :key="indextr" v-for="(oknha, indextr) in listItemOpen">
                  <p class="mt-3 mb-3 font-16 color-gray">
                    {{ fromatTimzoneD(oknha.time) }}
                  </p>
                  <div class="mb-2 text-sm transactionBox">
                    <div class="flex justify-between mb-2">
                      <span class="text-sm font-bold text-white"
                        >{{ oknha.currencyType }}
                        <span class="text-xs accType">{{
                          oknha.acc_type ? "LIVE" : "DEMO"
                        }}</span>
                      </span>
                      <span
                        :class="
                          oknha.classIcon === 'iconBitcoin'
                            ? 'icon iconBitcoin'
                            : oknha.classIcon
                        "
                      ></span>
                    </div>
                    <div class="flex justify-between mb-2 text-white">
                      <span class="flex trendGroup align-items-center">
                        <span
                          class="mr-2 trendIcon"
                          :class="{
                            trendUp: oknha.type == 'buy',
                            trendDown: oknha.type == 'sell',
                          }"
                        ></span>
                        <span class="uppercase">{{ oknha.type }}</span>
                      </span>
                      <span>${{ formatPrice(oknha.amt, 2) }}</span>
                    </div>
                    <div class="flex justify-between bet-time">
                      <span class="colorGray">Thời gian</span>
                      <span class="text-sm font-bold">{{
                        fromatTimzoneH(oknha.time)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tabOpen"
            :class="{ hidden: !isOpenTab, block: isOpenTab }"
          >
            <div class="con-tab-ejemplo">
              <div
                v-if="listItem.length == 0"
                class="flex flex-col items-center justify-center h-a"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4Mi4wODMiIGhlaWdodD0iODIuMTA0IiB2aWV3Qm94PSIwIDAgODIuMDgzIDgyLjEwNCI+CiAgPGcgaWQ9ImNvbnZlcnNpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyLjA5MSA0MS4wNDUpIHJvdGF0ZSgxMzUpIiBvcGFjaXR5PSIwLjIiPgogICAgPHBhdGggaWQ9IlBhdGhfMjYyNDMiIGRhdGEtbmFtZT0iUGF0aCAyNjI0MyIgZD0iTTU0LjQxNCwyNS4zOTNIMy42MjhBMy40MjcsMy40MjcsMCwwLDEsMCwyMS43NjZhMy40MjcsMy40MjcsMCwwLDEsMy42MjgtMy42MjhoNDIuMDhMMzMuNzM3LDYuMTY3YTMuNTA3LDMuNTA3LDAsMCwxLDAtNS4wNzksMy41MDcsMy41MDcsMCwwLDEsNS4wNzksMEw1Ni45NTMsMTkuMjI2YTMuMzExLDMuMzExLDAsMCwxLC43MjYsMy45OUEzLjQ4NiwzLjQ4NiwwLDAsMSw1NC40MTQsMjUuMzkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMTEgMCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ0IiBkYXRhLW5hbWU9IlBhdGggMjYyNDQiIGQ9Ik0yMS43NzYsMzQuMzkzQTMuMjkzLDMuMjkzLDAsMCwxLDE5LjIzNywzMy4zTDEuMSwxNS4xNjdhMy4zMTEsMy4zMTEsMCwwLDEtLjcyNi0zLjk5QTMuNDg2LDMuNDg2LDAsMCwxLDMuNjM4LDlINTQuNDI1YTMuNDI3LDMuNDI3LDAsMCwxLDMuNjI4LDMuNjI4LDMuNDI3LDMuNDI3LDAsMCwxLTMuNjI4LDMuNjI4SDEyLjM0NUwyNC4zMTYsMjguMjI2YTMuNTA3LDMuNTA3LDAsMCwxLDAsNS4wNzlBMy4yOTMsMy4yOTMsMCwwLDEsMjEuNzc2LDM0LjM5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjMuNjQ5KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg=="
                  alt=""
                  class="imageLandScape"
                />
                <p class="mt-3 text-sm text-center color-grey">
                  Bạn chưa có lệnh đóng nào
                </p>
              </div>
              <div v-else class="flex flex-col justify-center">
                <div :key="indextr" v-for="(oknha, indextr) in listItem">
                  <!-- <p class="mt-3 mb-3 font-16 color-gray"></p> -->
                  <div class="mb-2 text-sm transactionBox">
                    <div class="flex justify-between mb-2">
                      <span class="text-sm font-bold text-white"
                        >{{ oknha.c }}
                        <span class="text-xs accType">{{
                          oknha.t ? "LIVE" : "DEMO"
                        }}</span>
                      </span>
                      <span
                        :class="
                          oknha.classIcon === 'iconBitcoin'
                            ? 'icon iconBitcoin'
                            : oknha.classIcon
                        "
                      ></span>
                    </div>
                    <div class="flex justify-between mb-2 text-white">
                      <span class="flex trendGroup align-items-center">
                        <span
                          class="mr-2 trendIcon"
                          :class="{
                            trendUp: oknha.bs == 'buy',
                            trendDown: oknha.bs == 'sell',
                          }"
                        ></span>
                        <span class="uppercase">{{ oknha.bs }}</span>
                      </span>
                      <span>${{ formatPrice(oknha.ab, 2) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-xs time">{{
                        formatDay(oknha.d) + " " + formatHours(oknha.d)
                      }}</span>
                      <span
                        class="font-bold totalWin"
                        :class="{ winUp: oknha.aw > 0, winDown: oknha.aw == 0 }"
                      >
                        <span class="uppercase"></span>
                        <span>{{ oknha.aw > 0 ? "+" : "" }}</span
                        >${{ oknha.aw > 0 ? formatPrice(oknha.aw, 2) : 0 }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vs-tabs>
      </div>
    </VuePerfectScrollbar>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AuthenticationService from "@/services/AuthenticationService";
import moment from "moment";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    // isSidebarActive(val) {
    //   if(!val) return
    //   if(Object.entries(this.data).length === 0) {
    //     //this.initValues()
    //     this.$validator.reset()
    //   }else {
    //     let { token } = JSON.parse(JSON.stringify(this.data))
    //     this.token = token
    //     //this.initValues()
    //   }
    //   // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    // }
  },
  data() {
    return {
      isCloseTab: true,
      isOpenTab: false,

      isDate: "",

      lastDate: "",
      listItem: [],
      listItemOpen: [],
      colorxChangePass: "#def1d1",
      popupActiveChangePass: false,
      // Data Sidebar
      SidebarHSSetting: false,
      sidebarDataSetting: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },

  //   filters: {
  //     currencydecimal (val) {
  //       if(val == 'BTC') return val.toFixed(6)
  //       if(val == 'ETH') return val.toFixed(4)
  //       return val.toFixed(2)
  //     }
  //   },
  computed: {
    isSidebarActiveLocal: {
      get() {
        if (!!this.isCloseTab) {
          this.getListBET();
        }
        if (!!this.isOpenTab) {
          this.getListOrder();
        }
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },
  },
  methods: {
    fromatTimzoneD(value) {
      if (value) {
        return moment(new Date(value)).format("DD/MM/YYYY");
      }
    },

    fromatTimzoneH(value) {
      if (value) {
        return moment(new Date(value)).format("HH:mm:ss");
      }
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    formatDay(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },

    formatHours(value) {
      if (value) {
        return moment(String(value)).format("HH:mm:ss");
      }
    },

    getListBET() {
      let list = JSON.parse(localStorage.getItem("stateOpen"));
      if (list) {
        this.listItemOpen = list.l.bet[0].items.reverse();
      } else {
        this.listItemOpen = [];
      }
    },

    getListOrder() {
      AuthenticationService.getListHitoryOrder().then((res) => {
        if (res.data.success) {
          this.listItem = res.data.data;
        }
      });
    },

    showHoSoSetting(data) {
      //let id = data
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.SidebarHSSetting = val;
    },
  },
  components: {
    VuePerfectScrollbar,
  },
};
</script>

<style>
.tablist .con-vs-tabs {
  height: calc(var(--vh, 1vh) * 100 - 16px - 75px - 10px);
}

.tablist .con-vs-tabs .con-slot-tabs {
  height: calc(var(--vh, 1vh) * 100 - 16px - 100px - 10px);
  overflow-y: auto;
}
</style>

<style scoped>
.transactionBox {
  padding: 0.5rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.14);
}

.transactionBox .accType {
  background-color: #2177ff;
  border-radius: 5px;
  font-size: 14px;
  padding: 3px 5px;
  line-height: 20px;
  vertical-align: middle;
}

.transactionBox .accType.live {
  background-color: #ea5455;
}

.transactionBox .icon {
  display: inline-block;
  width: 19px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
}

.transactionBox .icon.iconBitcoin {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkuMjQyIiBoZWlnaHQ9IjE4LjM2NyIgdmlld0JveD0iMCAwIDE5LjI0MiAxOC4zNjciPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjU1IiB4Mj0iMC41NDkiIHkyPSIxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZhOTQxYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkODdkMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF8xMTk0NiIgZGF0YS1uYW1lPSJHcm91cCAxMTk0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMi45NzUgLTgzNS4wMDEpIj4KICAgIDxnIGlkPSJHcm91cF80NjEzIiBkYXRhLW5hbWU9Ikdyb3VwIDQ2MTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMi45NzUgODM1LjAwMSkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIxOS4yNDIiIGhlaWdodD0iMTguMzY3IiByeD0iOS4xODQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogICAgPC9nPgogICAgPHBhdGggaWQ9IlBhdGhfMTM5MjEiIGRhdGEtbmFtZT0iUGF0aCAxMzkyMSIgZD0iTTQ5NC44MDcsMzUyLjc3NmMuMTctMS4xMzYtLjctMS43NDctMS44NzgtMi4xNTRsLjM4NC0xLjUzOS0uOTM3LS4yMzMtLjM3NCwxLjVjLS4yNDYtLjA2MS0uNS0uMTItLjc1LS4xNzdsLjM3Ni0xLjUwOC0uOTM2LS4yMzMtLjM4MywxLjUzOC0xLjg4OS0uNDY4LS4yNDksMXMuNy4xNTkuNjguMTY5YS41LjUsMCwwLDEsLjQzNy41NDVsLTEuMDUxLDQuMjE2YS4zNC4zNCwwLDAsMS0uNDI5LjIyMmMuMDA5LjAxNC0uNjgxLS4xNzEtLjY4MS0uMTcxbC0uNDY1LDEuMDc0LDEuODg3LjQ3Ni0uMzg4LDEuNTU3LjkzNi4yMzMuMzg0LTEuNTRjLjI1Ni4wNjkuNS4xMzMuNzQ2LjE5NGwtLjM4MywxLjUzMy45MzcuMjMzLjM4OC0xLjU1NGMxLjYuMywyLjguMTgsMy4zLTEuMjYzYTEuNjQ0LDEuNjQ0LDAsMCwwLS44NjEtMi4yNzIsMS41LDEuNSwwLDAsMCwxLjItMS4zNzZtLTIuMTQsM2MtLjI5LDEuMTYzLTIuMjQ4LjUzNS0yLjg4NC4zNzdsLjUxNC0yLjA2MmMuNjM1LjE1OCwyLjY3MS40NzIsMi4zNjksMS42ODVtLjI5LTMuMDE4Yy0uMjY0LDEuMDU5LTEuODk1LjUyMS0yLjQyNC4zODlsLjQ2Ni0xLjg3MWMuNTI5LjEzMiwyLjIzMy4zNzgsMS45NTcsMS40ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OC4wNzUgNDkwLjQ5MSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=);
}

.transactionBox .icon.iconETH {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAFNUExURQAAAF9722J+6WJ+61572F582mJ+6mJ+7GB84l974GB84V973mJ+6WJ+6mJ+6mJ+6mJ+6mJ+6mJ+6WJ+6WJ+6mJ+6mJ+6mJ+6GJ+6mJ+6mJ+6mJ+6mJ+6mF96miD63aP7WB86pmr8b7K9muG63KL7ODm+9jf+pOm8bPB9f///9fe+rnF9nmR7Yed7/P1/dbe+sHM96W182aC62mE68/Y+f7+/9Pb+cDL94me76Gy8vv8/vL0/drh+qa286S087rH9nCK7HWO7dXc+cXQ+Jap8YCX7oqg76Cx8o2i8GN/6p+w8rrG9sLN95eq8YGY7nuT7XSN7GR/6m2H7Jqs8b/K95ir8X2V7XyT7WF+6tbd+qKy85Ck8IKZ7m+J7GSA6rzI9vz9/8zV+Jiq8bG/9bvH9n2U7nGK7Nng+pCj8Iac7+/y/dnf+qOz88XP93GL7FXevKcAAAAcdFJOUwAAAAAAAAAAAAAAACJywe3+wHIHZdT8BxCU+SKFNPORAAAAAWJLR0QpyreFJAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+cLBQMQCMHEZIMAAAEsSURBVBjTXZFnX8IwEMbPFM9V2kIHtCYITlpRQVRcKCgouMBd997j+7+UhOoL3+R39889yd1zAB2ESHJYUTVNjURliZAQQCeibpgWpZRRaplGDDEEBOO200I0McBPx44jAaLbPKHJ1OAQ44EdI9BliDo2PDI6Jm4dQwLZFCFNu954RpSaMkQtIZ6YdKeyuWkeW1FQhDg/487OZQvzolQBVcCFxaXl4spqusSpChpn5TVvvVCpbmzW6q1Ua8PS1vZOdre612juC8jl7OCwVjw6Pmk2TutCHuFv+qmz84vLciV3xcRHYdHS9c3t3f3D4xNnVhj6RfPs+cX1Cq80aF5qj5l8e//4TPjBmBgYwopf321DdAIYWOfnM7/WIXT/M1lH7AHoxb91KHwd2Ac/pP00jdFNxFwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTEtMDVUMDM6MTU6NTcrMDA6MDDqEuUaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTExLTA1VDAzOjE1OjU3KzAwOjAwm09dpgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0xMS0wNVQwMzoxNjowOCswMDowMJnFufcAAAAASUVORK5CYII=);
}

.transactionBox .icon.iconUSDT {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMTQuOTAxOTYxJSw2My4xMzcyNTUlLDQ4LjIzNTI5NCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMCAxMCBDIDIwIDE1LjUyMzQzOCAxNS41MjM0MzggMjAgMTAgMjAgQyA0LjQ3NjU2MiAyMCAwIDE1LjUyMzQzOCAwIDEwIEMgMCA0LjQ3NjU2MiA0LjQ3NjU2MiAwIDEwIDAgQyAxNS41MjM0MzggMCAyMCA0LjQ3NjU2MiAyMCAxMCBaIE0gMjAgMTAgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMS4yMDMxMjUgMTAuODYzMjgxIEMgMTEuMTMyODEyIDEwLjg2NzE4OCAxMC43NzczNDQgMTAuODkwNjI1IDkuOTg4MjgxIDEwLjg5MDYyNSBDIDkuMzU1NDY5IDEwLjg5MDYyNSA4LjkxMDE1NiAxMC44NzEwOTQgOC43NTM5MDYgMTAuODYzMjgxIEMgNi4zMjQyMTkgMTAuNzU3ODEyIDQuNTExNzE5IDEwLjMzNTkzOCA0LjUxMTcxOSA5LjgyODEyNSBDIDQuNTExNzE5IDkuMzI0MjE5IDYuMzI0MjE5IDguODk4NDM4IDguNzUzOTA2IDguNzkyOTY5IEwgOC43NTM5MDYgMTAuNDQ1MzEyIEMgOC45MTQwNjIgMTAuNDUzMTI1IDkuMzcxMDk0IDEwLjQ4MDQ2OSAxMCAxMC40ODA0NjkgQyAxMC43NTM5MDYgMTAuNDgwNDY5IDExLjEyODkwNiAxMC40NDkyMTkgMTEuMjAzMTI1IDEwLjQ0NTMxMiBMIDExLjIwMzEyNSA4Ljc5Mjk2OSBDIDEzLjYyNSA4LjkwMjM0NCAxNS40Mzc1IDkuMzI0MjE5IDE1LjQzNzUgOS44MjgxMjUgQyAxNS40Mzc1IDEwLjMzNTkzOCAxMy42MjUgMTAuNzU3ODEyIDExLjIwMzEyNSAxMC44NjMyODEgTSAxMS4yMDMxMjUgOC42MjEwOTQgTCAxMS4yMDMxMjUgNy4xNDA2MjUgTCAxNC41ODU5MzggNy4xNDA2MjUgTCAxNC41ODU5MzggNC44ODY3MTkgTCA1LjM3MTA5NCA0Ljg4NjcxOSBMIDUuMzcxMDk0IDcuMTQwNjI1IEwgOC43NTM5MDYgNy4xNDA2MjUgTCA4Ljc1MzkwNiA4LjYyMTA5NCBDIDYuMDAzOTA2IDguNzQ2MDk0IDMuOTM3NSA5LjI5Mjk2OSAzLjkzNzUgOS45NDUzMTIgQyAzLjkzNzUgMTAuNTk3NjU2IDYuMDAzOTA2IDExLjE0MDYyNSA4Ljc1MzkwNiAxMS4yNjU2MjUgTCA4Ljc1MzkwNiAxNi4wMDc4MTIgTCAxMS4yMDMxMjUgMTYuMDA3ODEyIEwgMTEuMjAzMTI1IDExLjI2NTYyNSBDIDEzLjk0NTMxMiAxMS4xNDA2MjUgMTYuMDExNzE5IDEwLjU5Mzc1IDE2LjAxMTcxOSA5Ljk0NTMxMiBDIDE2LjAxMTcxOSA5LjI5Mjk2OSAxMy45NDUzMTIgOC43NDYwOTQgMTEuMjAzMTI1IDguNjIxMDk0ICIvPgo8L2c+Cjwvc3ZnPgo=);
}

.transactionBox .icon.iconBNB {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoOTUuMjk0MTE4JSw3Mi45NDExNzYlLDE4LjQzMTM3MyUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMCAxMCBDIDIwIDE1LjUyMzQzOCAxNS41MjM0MzggMjAgMTAgMjAgQyA0LjQ3NjU2MiAyMCAwIDE1LjUyMzQzOCAwIDEwIEMgMCA0LjQ3NjU2MiA0LjQ3NjU2MiAwIDEwIDAgQyAxNS41MjM0MzggMCAyMCA0LjQ3NjU2MiAyMCAxMCBaIE0gMjAgMTAgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3LjU3NDIxOSA5LjAwMzkwNiBMIDEwIDYuNTc0MjE5IEwgMTIuNDI5Njg4IDkuMDAzOTA2IEwgMTMuODM5ODQ0IDcuNTg5ODQ0IEwgMTAgMy43NSBMIDYuMTYwMTU2IDcuNTg5ODQ0IFogTSAzLjc1IDEwIEwgNS4xNjQwNjIgOC41ODU5MzggTCA2LjU3NDIxOSAxMCBMIDUuMTY0MDYyIDExLjQxNDA2MiBaIE0gNy41NzQyMTkgMTAuOTk2MDk0IEwgMTAgMTMuNDI1NzgxIEwgMTIuNDI5Njg4IDEwLjk5NjA5NCBMIDEzLjgzOTg0NCAxMi40MDYyNSBMIDEwIDE2LjI1IEwgNi4xNTYyNSAxMi40MDYyNSBaIE0gMTMuNDI1NzgxIDEwIEwgMTQuODM1OTM4IDguNTg1OTM4IEwgMTYuMjUgMTAgTCAxNC44MzU5MzggMTEuNDE0MDYyIFogTSAxMS40MzM1OTQgMTAgTCAxMCAxMS40MzM1OTQgTCA4LjU2NjQwNiAxMC4wMDM5MDYgTCA4LjU2NjQwNiAxMCBMIDEwIDguNTY2NDA2IFogTSAxMS40MzM1OTQgMTAgIi8+CjwvZz4KPC9zdmc+Cg==);
}

.transactionBox .icon.iconXRP {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMCAzLjQzNzUgQyA2LjM3NSAzLjQzNzUgMy40Mzc1IDYuMzc1IDMuNDM3NSAxMCBDIDMuNDM3NSAxMy42MjUgNi4zNzUgMTYuNTYyNSAxMCAxNi41NjI1IEMgMTMuNjI1IDE2LjU2MjUgMTYuNTYyNSAxMy42MjUgMTYuNTYyNSAxMCBDIDE2LjU2MjUgNi4zNzUgMTMuNjI1IDMuNDM3NSAxMCAzLjQzNzUgWiBNIDE0LjM1MTU2MiAxNC4xNzk2ODggQyAxNC4zMDA3ODEgMTQuMjk2ODc1IDE0LjE4NzUgMTQuMzc1IDE0LjA2MjUgMTQuMzc1IEwgMTIuNSAxNC4zNzUgQyAxMi40MTc5NjkgMTQuMzc1IDEyLjMzNTkzOCAxNC4zNDM3NSAxMi4yNzczNDQgMTQuMjg1MTU2IEwgMTAuMjIyNjU2IDEyLjIyNjU2MiBDIDEwLjE2NDA2MiAxMi4xNjQwNjIgMTAuMDgyMDMxIDEyLjEzMjgxMiAxMCAxMi4xMzI4MTIgQyA5LjkxNzk2OSAxMi4xMzI4MTIgOS44MzU5MzggMTIuMTY0MDYyIDkuNzc3MzQ0IDEyLjIyNjU2MiBMIDcuNzIyNjU2IDE0LjI4NTE1NiBDIDcuNjY0MDYyIDE0LjM0Mzc1IDcuNTgyMDMxIDE0LjM3NSA3LjUgMTQuMzc1IEwgNS45Mzc1IDE0LjM3NSBDIDUuODEyNSAxNC4zNzUgNS42OTkyMTkgMTQuMjk2ODc1IDUuNjQ4NDM4IDE0LjE3OTY4OCBDIDUuNjAxNTYyIDE0LjA2NjQwNiA1LjYyODkwNiAxMy45Mjk2ODggNS43MTQ4NDQgMTMuODM5ODQ0IEwgOC44OTQ1MzEgMTAuNjY0MDYyIEMgOS4xODc1IDEwLjM2NzE4OCA5LjU4NTkzOCAxMC4yMDMxMjUgMTAgMTAuMjAzMTI1IEMgMTAuNDE0MDYyIDEwLjIwMzEyNSAxMC44MTI1IDEwLjM2NzE4OCAxMS4xMDU0NjkgMTAuNjY0MDYyIEwgMTQuMjg1MTU2IDEzLjgzOTg0NCBDIDE0LjM3MTA5NCAxMy45Mjk2ODggMTQuMzk4NDM4IDE0LjA2NjQwNiAxNC4zNTE1NjIgMTQuMTc5Njg4IFogTSAxNC4yODUxNTYgNi4xNjAxNTYgTCAxMS4xMDU0NjkgOS4zMzU5MzggQyAxMC44MTI1IDkuNjMyODEyIDEwLjQxNDA2MiA5Ljc5Njg3NSAxMCA5Ljc5Njg3NSBDIDkuNTg1OTM4IDkuNzk2ODc1IDkuMTg3NSA5LjYzMjgxMiA4Ljg5NDUzMSA5LjMzNTkzOCBMIDUuNzE0ODQ0IDYuMTYwMTU2IEMgNS42Mjg5MDYgNi4wNzAzMTIgNS42MDE1NjIgNS45MzM1OTQgNS42NDg0MzggNS44MjAzMTIgQyA1LjY5OTIxOSA1LjcwMzEyNSA1LjgxMjUgNS42MjUgNS45Mzc1IDUuNjI1IEwgNy41IDUuNjI1IEMgNy41ODIwMzEgNS42MjUgNy42NjQwNjIgNS42NTYyNSA3LjcyMjY1NiA1LjcxNDg0NCBMIDkuNzc3MzQ0IDcuNzczNDM4IEMgOS44MzU5MzggNy44MzU5MzggOS45MTc5NjkgNy44NjcxODggMTAgNy44NjcxODggQyAxMC4wODIwMzEgNy44NjcxODggMTAuMTY0MDYyIDcuODM1OTM4IDEwLjIyMjY1NiA3Ljc3MzQzOCBMIDEyLjI3NzM0NCA1LjcxNDg0NCBDIDEyLjMzNTkzOCA1LjY1NjI1IDEyLjQxNzk2OSA1LjYyNSAxMi41IDUuNjI1IEwgMTQuMDYyNSA1LjYyNSBDIDE0LjE4NzUgNS42MjUgMTQuMzAwNzgxIDUuNzAzMTI1IDE0LjM1MTU2MiA1LjgyMDMxMiBDIDE0LjM5ODQzOCA1LjkzMzU5NCAxNC4zNzEwOTQgNi4wNzAzMTIgMTQuMjg1MTU2IDYuMTYwMTU2IFogTSAxNC4yODUxNTYgNi4xNjAxNTYgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA5LjMzNTkzOCAxMS4xMDU0NjkgTCA2LjY5MTQwNiAxMy43NSBMIDcuMzcxMDk0IDEzLjc1IEwgOS4zMzU5MzggMTEuNzg1MTU2IEMgOS43MDMxMjUgMTEuNDE3OTY5IDEwLjI5Njg3NSAxMS40MTc5NjkgMTAuNjY0MDYyIDExLjc4NTE1NiBMIDEyLjYyODkwNiAxMy43NSBMIDEzLjMwODU5NCAxMy43NSBMIDEwLjY2NDA2MiAxMS4xMDU0NjkgQyAxMC4yOTY4NzUgMTAuNzQyMTg4IDkuNzAzMTI1IDEwLjc0MjE4OCA5LjMzNTkzOCAxMS4xMDU0NjkgWiBNIDkuMzM1OTM4IDExLjEwNTQ2OSAiLz4KPHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDEwIDEuNTYyNSBDIDUuMzM5ODQ0IDEuNTYyNSAxLjU2MjUgNS4zMzk4NDQgMS41NjI1IDEwIEMgMS41NjI1IDE0LjY2MDE1NiA1LjMzOTg0NCAxOC40Mzc1IDEwIDE4LjQzNzUgQyAxNC42NjAxNTYgMTguNDM3NSAxOC40Mzc1IDE0LjY2MDE1NiAxOC40Mzc1IDEwIEMgMTguNDM3NSA1LjMzOTg0NCAxNC42NjAxNTYgMS41NjI1IDEwIDEuNTYyNSBaIE0gMTAgMTcuMTg3NSBDIDYuMDMxMjUgMTcuMTg3NSAyLjgxMjUgMTMuOTY4NzUgMi44MTI1IDEwIEMgMi44MTI1IDYuMDMxMjUgNi4wMzEyNSAyLjgxMjUgMTAgMi44MTI1IEMgMTMuOTY4NzUgMi44MTI1IDE3LjE4NzUgNi4wMzEyNSAxNy4xODc1IDEwIEMgMTcuMTg3NSAxMy45Njg3NSAxMy45Njg3NSAxNy4xODc1IDEwIDE3LjE4NzUgWiBNIDEwIDE3LjE4NzUgIi8+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMC42NjQwNjIgOC4yMTQ4NDQgQyAxMC4yOTY4NzUgOC41ODIwMzEgOS43MDMxMjUgOC41ODIwMzEgOS4zMzU5MzggOC4yMTQ4NDQgTCA3LjM3MTA5NCA2LjI1IEwgNi42OTE0MDYgNi4yNSBMIDkuMzM1OTM4IDguODk0NTMxIEMgOS43MDMxMjUgOS4yNTc4MTIgMTAuMjk2ODc1IDkuMjU3ODEyIDEwLjY2NDA2MiA4Ljg5NDUzMSBMIDEzLjMwODU5NCA2LjI1IEwgMTIuNjI4OTA2IDYuMjUgWiBNIDEwLjY2NDA2MiA4LjIxNDg0NCAiLz4KPC9nPgo8L3N2Zz4K);
}

.transactionBox .icon.iconADA {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTYiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMzQ2OGQxOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPjwvZGVmcz48ZyBkYXRhLW5hbWU9ImNhcmRhbm8gYWRhIiBpZD0iY2FyZGFub19hZGEiPjxnIGRhdGEtbmFtZT0iY2FyZGFubyBhZGEiIGlkPSJjYXJkYW5vX2FkYS0yIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjEyOCIgY3k9IjEyOCIgZGF0YS1uYW1lPSLQrdC70LvQuNC/0YEgNiIgaWQ9ItCt0LvQu9C40L/RgV82IiByPSIxMjgiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNjUuNzI3LDcxNy43MzVhMTIuNjUyLDEyLjY1MiwwLDEsMS0xMi42NTQsMTIuNjUyQTEyLjY1NCwxMi42NTQsMCwwLDEsMjY1LjcyNyw3MTcuNzM1Wm0zMC41NDYsMGExMi42NTIsMTIuNjUyLDAsMSwxLTEyLjY1NSwxMi42NTJBMTIuNjU0LDEyLjY1NCwwLDAsMSwyOTYuMjczLDcxNy43MzVabTAsNTMuMjI2YTEyLjY1MiwxMi42NTIsMCwxLDEtMTIuNjU1LDEyLjY1MkExMi42NTMsMTIuNjUzLDAsMCwxLDI5Ni4yNzMsNzcwLjk2MVptLTMwLjU0NiwwYTEyLjY1MiwxMi42NTIsMCwxLDEtMTIuNjU0LDEyLjY1MkExMi42NTMsMTIuNjUzLDAsMCwxLDI2NS43MjcsNzcwLjk2MVptLTE1LjcwOS0yNi4xNzdhMTIuNjUyLDEyLjY1MiwwLDEsMS0xMi42NTQsMTIuNjUyQTEyLjY1NCwxMi42NTQsMCwwLDEsMjUwLjAxOCw3NDQuNzg0Wm02MS45NjQsMGExMi42NTIsMTIuNjUyLDAsMSwxLTEyLjY1NSwxMi42NTJBMTIuNjUzLDEyLjY1MywwLDAsMSwzMTEuOTgyLDc0NC43ODRabTE0LjQtMjEuODEzYTcuODUzLDcuODUzLDAsMSwxLTcuODU1LDcuODUzQTcuODUzLDcuODUzLDAsMCwxLDMyNi4zODIsNzIyLjk3MVptMCw1Mi4zNTJhNy44NTMsNy44NTMsMCwxLDEtNy44NTUsNy44NTNBNy44NTMsNy44NTMsMCwwLDEsMzI2LjM4Miw3NzUuMzIzWm0tOTAuNzY0LDBhNy44NTMsNy44NTMsMCwxLDEtNy44NTQsNy44NTNBNy44NTQsNy44NTQsMCwwLDEsMjM1LjYxOCw3NzUuMzIzWm0wLTUyLjM1MmE3Ljg1Myw3Ljg1MywwLDEsMS03Ljg1NCw3Ljg1M0E3Ljg1NCw3Ljg1NCwwLDAsMSwyMzUuNjE4LDcyMi45NzFaTTI4MSw2OTYuNzk0YTcuODUzLDcuODUzLDAsMSwxLTcuODU1LDcuODUzQTcuODUzLDcuODUzLDAsMCwxLDI4MSw2OTYuNzk0Wk0yODEsODAxLjVhNy44NTMsNy44NTMsMCwxLDEtNy44NTUsNy44NTNBNy44NTMsNy44NTMsMCwwLDEsMjgxLDgwMS41Wm0zMy42LDcuODUzYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ2LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDMxNC42LDgwOS4zNTNabS02Ny4yLDBhNi41NDQsNi41NDQsMCwxLDEtNi41NDYsNi41NDRBNi41NDQsNi41NDQsMCwwLDEsMjQ3LjQsODA5LjM1M1ptMC0xMTcuNzk0YTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ2LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDI0Ny40LDY5MS41NTlabTY3LjIsMGE2LjU0NCw2LjU0NCwwLDEsMS02LjU0Niw2LjU0NEE2LjU0NCw2LjU0NCwwLDAsMSwzMTQuNiw2OTEuNTU5Wm0zNC4wMzYsNTguNDYxYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ1LDYuNTQ0QTYuNTQ1LDYuNTQ1LDAsMCwxLDM0OC42MzYsNzUwLjAyWm0tMTM1LjI3MywwYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ1LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDIxMy4zNjMsNzUwLjAyWm0tNC44LTQwLjEzOGE1LjIzNiw1LjIzNiwwLDEsMS01LjIzNiw1LjIzNUE1LjIzNiw1LjIzNiwwLDAsMSwyMDguNTYzLDcwOS44ODJabTAsODMuNzY1YTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM2LDUuMjM1QTUuMjM2LDUuMjM2LDAsMCwxLDIwOC41NjMsNzkzLjY0N1ptMTQ0Ljg3MywwYTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM2LDUuMjM1QTUuMjM2LDUuMjM2LDAsMCwxLDM1My40MzYsNzkzLjY0N1ptMC04My43NjVhNS4yMzYsNS4yMzYsMCwxLDEtNS4yMzYsNS4yMzVBNS4yMzYsNS4yMzYsMCwwLDEsMzUzLjQzNiw3MDkuODgyWk0yODEsNjY4YTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM3LDUuMjM1QTUuMjM1LDUuMjM1LDAsMCwxLDI4MSw2NjhabTAsMTY3LjUyOWE1LjIzNiw1LjIzNiwwLDEsMS01LjIzNyw1LjIzNkE1LjIzNiw1LjIzNiwwLDAsMSwyODEsODM1LjUyOVptNDYuMjU0LTMuNDlhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMzI3LjI1NCw4MzIuMDM5Wm0tOTIuNTA5LDBhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMjM0Ljc0NSw4MzIuMDM5Wm0wLTE1OC44YTQuMzYzLDQuMzYzLDAsMSwxLTQuMzYzLDQuMzYzQTQuMzYzLDQuMzYzLDAsMCwxLDIzNC43NDUsNjczLjIzNVptOTIuNTA5LDBhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMzI3LjI1NCw2NzMuMjM1Wm00NS4zODIsNzkuNEE0LjM2Myw0LjM2MywwLDEsMSwzNjguMjczLDc1Nyw0LjM2Myw0LjM2MywwLDAsMSwzNzIuNjM2LDc1Mi42MzdabS0xODMuMjczLDBBNC4zNjMsNC4zNjMsMCwxLDEsMTg1LDc1Nyw0LjM2Myw0LjM2MywwLDAsMSwxODkuMzYzLDc1Mi42MzdaIiBkYXRhLW5hbWU9ItCt0LvQu9C40L/RgSA2INC60L7Qv9C40Y8gMjkiIGlkPSLQrdC70LvQuNC/0YFfNl/QutC+0L/QuNGPXzI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUyIC02MjkpIi8+PC9nPjwvZz48L3N2Zz4=);
}

.transactionBox .icon.iconDOGE {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTYiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMzQ2OGQxOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPjwvZGVmcz48ZyBkYXRhLW5hbWU9ImNhcmRhbm8gYWRhIiBpZD0iY2FyZGFub19hZGEiPjxnIGRhdGEtbmFtZT0iY2FyZGFubyBhZGEiIGlkPSJjYXJkYW5vX2FkYS0yIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjEyOCIgY3k9IjEyOCIgZGF0YS1uYW1lPSLQrdC70LvQuNC/0YEgNiIgaWQ9ItCt0LvQu9C40L/RgV82IiByPSIxMjgiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNjUuNzI3LDcxNy43MzVhMTIuNjUyLDEyLjY1MiwwLDEsMS0xMi42NTQsMTIuNjUyQTEyLjY1NCwxMi42NTQsMCwwLDEsMjY1LjcyNyw3MTcuNzM1Wm0zMC41NDYsMGExMi42NTIsMTIuNjUyLDAsMSwxLTEyLjY1NSwxMi42NTJBMTIuNjU0LDEyLjY1NCwwLDAsMSwyOTYuMjczLDcxNy43MzVabTAsNTMuMjI2YTEyLjY1MiwxMi42NTIsMCwxLDEtMTIuNjU1LDEyLjY1MkExMi42NTMsMTIuNjUzLDAsMCwxLDI5Ni4yNzMsNzcwLjk2MVptLTMwLjU0NiwwYTEyLjY1MiwxMi42NTIsMCwxLDEtMTIuNjU0LDEyLjY1MkExMi42NTMsMTIuNjUzLDAsMCwxLDI2NS43MjcsNzcwLjk2MVptLTE1LjcwOS0yNi4xNzdhMTIuNjUyLDEyLjY1MiwwLDEsMS0xMi42NTQsMTIuNjUyQTEyLjY1NCwxMi42NTQsMCwwLDEsMjUwLjAxOCw3NDQuNzg0Wm02MS45NjQsMGExMi42NTIsMTIuNjUyLDAsMSwxLTEyLjY1NSwxMi42NTJBMTIuNjUzLDEyLjY1MywwLDAsMSwzMTEuOTgyLDc0NC43ODRabTE0LjQtMjEuODEzYTcuODUzLDcuODUzLDAsMSwxLTcuODU1LDcuODUzQTcuODUzLDcuODUzLDAsMCwxLDMyNi4zODIsNzIyLjk3MVptMCw1Mi4zNTJhNy44NTMsNy44NTMsMCwxLDEtNy44NTUsNy44NTNBNy44NTMsNy44NTMsMCwwLDEsMzI2LjM4Miw3NzUuMzIzWm0tOTAuNzY0LDBhNy44NTMsNy44NTMsMCwxLDEtNy44NTQsNy44NTNBNy44NTQsNy44NTQsMCwwLDEsMjM1LjYxOCw3NzUuMzIzWm0wLTUyLjM1MmE3Ljg1Myw3Ljg1MywwLDEsMS03Ljg1NCw3Ljg1M0E3Ljg1NCw3Ljg1NCwwLDAsMSwyMzUuNjE4LDcyMi45NzFaTTI4MSw2OTYuNzk0YTcuODUzLDcuODUzLDAsMSwxLTcuODU1LDcuODUzQTcuODUzLDcuODUzLDAsMCwxLDI4MSw2OTYuNzk0Wk0yODEsODAxLjVhNy44NTMsNy44NTMsMCwxLDEtNy44NTUsNy44NTNBNy44NTMsNy44NTMsMCwwLDEsMjgxLDgwMS41Wm0zMy42LDcuODUzYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ2LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDMxNC42LDgwOS4zNTNabS02Ny4yLDBhNi41NDQsNi41NDQsMCwxLDEtNi41NDYsNi41NDRBNi41NDQsNi41NDQsMCwwLDEsMjQ3LjQsODA5LjM1M1ptMC0xMTcuNzk0YTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ2LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDI0Ny40LDY5MS41NTlabTY3LjIsMGE2LjU0NCw2LjU0NCwwLDEsMS02LjU0Niw2LjU0NEE2LjU0NCw2LjU0NCwwLDAsMSwzMTQuNiw2OTEuNTU5Wm0zNC4wMzYsNTguNDYxYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ1LDYuNTQ0QTYuNTQ1LDYuNTQ1LDAsMCwxLDM0OC42MzYsNzUwLjAyWm0tMTM1LjI3MywwYTYuNTQ0LDYuNTQ0LDAsMSwxLTYuNTQ1LDYuNTQ0QTYuNTQ0LDYuNTQ0LDAsMCwxLDIxMy4zNjMsNzUwLjAyWm0tNC44LTQwLjEzOGE1LjIzNiw1LjIzNiwwLDEsMS01LjIzNiw1LjIzNUE1LjIzNiw1LjIzNiwwLDAsMSwyMDguNTYzLDcwOS44ODJabTAsODMuNzY1YTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM2LDUuMjM1QTUuMjM2LDUuMjM2LDAsMCwxLDIwOC41NjMsNzkzLjY0N1ptMTQ0Ljg3MywwYTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM2LDUuMjM1QTUuMjM2LDUuMjM2LDAsMCwxLDM1My40MzYsNzkzLjY0N1ptMC04My43NjVhNS4yMzYsNS4yMzYsMCwxLDEtNS4yMzYsNS4yMzVBNS4yMzYsNS4yMzYsMCwwLDEsMzUzLjQzNiw3MDkuODgyWk0yODEsNjY4YTUuMjM2LDUuMjM2LDAsMSwxLTUuMjM3LDUuMjM1QTUuMjM1LDUuMjM1LDAsMCwxLDI4MSw2NjhabTAsMTY3LjUyOWE1LjIzNiw1LjIzNiwwLDEsMS01LjIzNyw1LjIzNkE1LjIzNiw1LjIzNiwwLDAsMSwyODEsODM1LjUyOVptNDYuMjU0LTMuNDlhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMzI3LjI1NCw4MzIuMDM5Wm0tOTIuNTA5LDBhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMjM0Ljc0NSw4MzIuMDM5Wm0wLTE1OC44YTQuMzYzLDQuMzYzLDAsMSwxLTQuMzYzLDQuMzYzQTQuMzYzLDQuMzYzLDAsMCwxLDIzNC43NDUsNjczLjIzNVptOTIuNTA5LDBhNC4zNjMsNC4zNjMsMCwxLDEtNC4zNjMsNC4zNjNBNC4zNjMsNC4zNjMsMCwwLDEsMzI3LjI1NCw2NzMuMjM1Wm00NS4zODIsNzkuNEE0LjM2Myw0LjM2MywwLDEsMSwzNjguMjczLDc1Nyw0LjM2Myw0LjM2MywwLDAsMSwzNzIuNjM2LDc1Mi42MzdabS0xODMuMjczLDBBNC4zNjMsNC4zNjMsMCwxLDEsMTg1LDc1Nyw0LjM2Myw0LjM2MywwLDAsMSwxODkuMzYzLDc1Mi42MzdaIiBkYXRhLW5hbWU9ItCt0LvQu9C40L/RgSA2INC60L7Qv9C40Y8gMjkiIGlkPSLQrdC70LvQuNC/0YFfNl/QutC+0L/QuNGPXzI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUyIC02MjkpIi8+PC9nPjwvZz48L3N2Zz4=);
}

.transactionBox .trendGroup .trendIcon {
  display: inline-block;
  width: 19px;
  height: 19px;
  background-repeat: no-repeat;
  background-size: contain;
}

.transactionBox .trendGroup .trendIcon.trendUp,
.transactionBox .trendGroup .trendIcon.UP {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5Ij4KICA8ZyBpZD0iR3JvdXBfMTE5MzkiIGRhdGEtbmFtZT0iR3JvdXAgMTE5MzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY1IC0xODcpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzc3NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzc3NCIgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NSAxODcpIiBmaWxsPSIjMzFCQUEwIi8+CiAgICA8ZyBpZD0idHJpYW5nbGUtaGVhZC1hcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2Ny41MjMgMTk2LjIxKSByb3RhdGUoLTQ1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ1IiBkYXRhLW5hbWU9IlBhdGggMjYyNDUiIGQ9Ik0xMC4wNyw1LjI2OCw2Ljg5NCwyLjA5MmEuMzE4LjMxOCwwLDAsMC0uNTQyLjIyNVY0LjU0SC4zMThBLjMxOC4zMTgsMCwwLDAsMCw0Ljg1OHYxLjI3YS4zMTguMzE4LDAsMCwwLC4zMTguMzE4SDYuMzUyVjguNjY5YS4zMTguMzE4LDAsMCwwLC41NDIuMjI1TDEwLjA3LDUuNzE4YS4zMTguMzE4LDAsMCwwLDAtLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==);
}

.transactionBox .trendGroup .trendIcon.trendDown,
.transactionBox .trendGroup .trendIcon.DOWN {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5Ij4KICA8ZyBpZD0iR3JvdXBfMTE5NDIiIGRhdGEtbmFtZT0iR3JvdXAgMTE5NDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY1IC0xODcpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzc3NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzc3NCIgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2NSAxODcpIiBmaWxsPSIjZmM1ZjVmIi8+CiAgICA8ZyBpZD0idHJpYW5nbGUtaGVhZC1hcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3NS4yOTEgMTg5LjAyMykgcm90YXRlKDQ1KSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ1IiBkYXRhLW5hbWU9IlBhdGggMjYyNDUiIGQ9Ik0xMC4wNyw1LjI2OCw2Ljg5NCwyLjA5MmEuMzE4LjMxOCwwLDAsMC0uNTQyLjIyNVY0LjU0SC4zMThBLjMxOC4zMTgsMCwwLDAsMCw0Ljg1OHYxLjI3YS4zMTguMzE4LDAsMCwwLC4zMTguMzE4SDYuMzUyVjguNjY5YS4zMTguMzE4LDAsMCwwLC41NDIuMjI1TDEwLjA3LDUuNzE4YS4zMTguMzE4LDAsMCwwLDAtLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==);
}

.transactionBox .time {
  color: rgba(255, 255, 255, 0.5);
}

.transactionBox .totalWin.winUp {
  color: #31baa0;
}

.transactionBox .totalWin.winDown {
  color: #ea5455;
}

.h-a {
  height: calc(100vh - 160px);
}
</style>

<style lang="scss" scoped>
.pro-c-avatar__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.pro-c-avatar_size_extra-large .pro-c-avatar__placeholder {
  padding: 1rem;
}
.pro-c-avatar__placeholder {
  fill: currentColor;
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
}
.vs-sidebar--background {
  background: rgba(0, 0, 0, 0.5);
}
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 230px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
