<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-history-exchange" class="data-list-container">
    <vs-prompt
      title="Export To Excel"
      class="export-options"
      @cancle="clearFields"
      @accept="exportToExcel"
      accept-text="Export"
      @close="clearFields"
      :active.sync="activePrompt"
    >
      <vs-input
        v-model="fileName"
        placeholder="Enter File Name.."
        class="w-full"
      />
      <v-select v-model="selectedFormat" :options="formats" class="my-4" />
      <div class="flex">
        <span class="mr-4">Cell Auto Width:</span>
        <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
      </div>
    </vs-prompt>
    <div id="loading-corners" class="vs-con-loading__container">
      <vs-table
        ref="table"
        multiple
        v-model="selectedUser"
        pagination
        :max-items="itemsPerPage"
        search
        :data="products"
      >
        <div
          slot="header"
          class="flex flex-wrap-reverse items-center justify-between flex-grow"
        >
          <div
            class="flex flex-wrap-reverse items-center data-list-btn-container"
          >
            <!-- ACTION - DROPDOWN -->
            <vs-dropdown
              vs-trigger-click
              class="mb-4 mr-4 cursor-pointer dd-actions"
            >
              <div
                class="flex items-center justify-center w-32 w-full p-4 text-lg font-medium rounded-lg cursor-pointer shadow-drop d-theme-dark-bg"
              >
                <span class="mr-2">{{ $t("DSAEQWD") || "DSAEQWD" }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>

              <vs-dropdown-menu>
                <vs-dropdown-item>
                  <span
                    v-if="showDeleteMultiBt"
                    class="flex items-center"
                    @click="deleteMultiple"
                  >
                    <feather-icon
                      icon="TrashIcon"
                      svgClasses="h-4 w-4"
                      class="mr-2"
                    />
                    <span>{{ $t("LKOS") || "LKOS" }}</span>
                  </span>
                </vs-dropdown-item>

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                  </span>
                </vs-dropdown-item> -->

                <vs-dropdown-item>
                  <span class="flex items-center" @click="activePrompt = true">
                    <feather-icon
                      icon="FileIcon"
                      svgClasses="h-4 w-4"
                      class="mr-2"
                    />
                    <span>{{ $t("WEWS") || "WEWS" }}</span>
                  </span>
                </vs-dropdown-item>

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Another Action</span>
                  </span>
                </vs-dropdown-item> -->
              </vs-dropdown-menu>
            </vs-dropdown>

            <!-- TRASH -->
            <div
              class="flex items-center justify-center p-3 mb-4 mr-4 text-base text-lg font-medium border border-solid rounded-lg cursor-pointer btn-add-new text-danger border-danger"
              @click="trashDataEx"
            >
              <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-danger">{{
                $t("DSAASDF") || "DSAASDF"
              }}</span>
            </div>
            <!-- RELOAD -->
            <div
              class="flex items-center justify-center p-3 mb-4 mr-4 text-base text-lg font-medium border border-solid rounded-lg cursor-pointer btn-add-new text-success border-success"
              @click="reloadList"
            >
              <feather-icon icon="ArrowLeftIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-sucess">{{
                $t("DSA") || "DSA"
              }}</span>
            </div>
          </div>

          <!-- ITEMS PER PAGE -->
          <vs-dropdown
            vs-trigger-click
            class="mb-4 mr-4 cursor-pointer items-per-page-handler"
          >
            <div
              class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg"
            >
              <span class="mr-2"
                >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
                {{
                  products.length - currentPage * itemsPerPage > 0
                    ? currentPage * itemsPerPage
                    : products.length
                }}
                of {{ queriedItems }}</span
              >
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="itemsPerPage = 4">
                <span>4</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <template slot="thead">
          <vs-th sort-key="email">{{ $t("DSATT") || "DSATT" }}</vs-th>
          <vs-th sort-key="describe">{{ $t("DSAQQ") || "DSAQQ" }}</vs-th>
          <vs-th sort-key="send">{{ $t("DSAEW") || "DSAEW" }}</vs-th>
          <vs-th sort-key="receive">{{ $t("DSAQ") || "DSAQ" }}</vs-th>
          <vs-th sort-key="status">{{ $t("DSAEQW") || "DSAEQW" }}</vs-th>
          <vs-th sort-key="datecreate">{{ $t("DSAQWE") || "DSAQWE" }}</vs-th>
          <vs-th>{{ $t("DSAEQWD") || "DSAEQWD" }}</vs-th>
        </template>

        <template slot-scope="{ data }">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                <p class="font-medium truncate de-email">
                  {{ tr.email }}<br />Biệt danh: {{ tr.nick_name }}
                </p>
              </vs-td>

              <vs-td>
                <p
                  class="font-medium truncate de-describe"
                  v-if="tr.from_e == 'paypal' && tr.to_e != 'paypal'"
                >
                  Từ:
                  <img
                    width="20"
                    :src="
                      require('@/assets/images/sky/icon_bank/paypal-mini.png')
                    "
                  />
                  {{ tr.from_e.toUpperCase() }}
                  <br />
                  Đến:
                  <IconCrypto
                    style="width: 20px"
                    :coinname="getIconType(tr.to_e)"
                    color="color"
                    format="svg"
                  />
                  {{ tr.to_e.toUpperCase() }}
                </p>
                <p
                  class="font-medium truncate de-describe"
                  v-else-if="tr.to_e == 'paypal' && tr.from_e != 'paypal'"
                >
                  Từ:
                  <IconCrypto
                    style="width: 20px"
                    :coinname="getIconType(tr.from_e)"
                    color="color"
                    format="svg"
                  />
                  {{ tr.from_e.toUpperCase() }}
                  <br />
                  Đến:
                  <img
                    width="20"
                    :src="
                      require('@/assets/images/sky/icon_bank/paypal-mini.png')
                    "
                  />
                  {{ tr.to_e.toUpperCase() }}
                </p>
                <p class="font-medium truncate de-describe" v-else>
                  Từ:
                  <IconCrypto
                    style="width: 20px"
                    :coinname="getIconType(tr.from_e)"
                    color="color"
                    format="svg"
                  />
                  {{ tr.from_e.toUpperCase() }}
                  <br />
                  Đến:
                  <IconCrypto
                    style="width: 20px"
                    :coinname="getIconType(tr.to_e)"
                    color="color"
                    format="svg"
                  />
                  {{ tr.to_e.toUpperCase() }}
                </p>
              </vs-td>

              <vs-td>
                <p class="de-send">
                  {{ getAmountDecimal(tr.from_e, tr.send) }}
                </p>
              </vs-td>

              <vs-td>
                <p class="de-receive" v-if="tr.status">
                  {{ getAmountDecimal(tr.to_e, tr.receive) }}
                </p>
                <p class="de-receive" v-else>0</p>
              </vs-td>

              <vs-td>
                <vs-chip
                  :color="getOrderStatusColor(tr.status)"
                  class="de-status"
                  >{{ getOrderStatusColorText(tr.status) | title }}</vs-chip
                >
              </vs-td>

              <vs-td>
                <p class="de-create">{{ formatDate(tr.created_at) }}</p>
              </vs-td>

              <vs-td class="text-center whitespace-no-wrap">
                <vx-tooltip
                  v-if="tr.delete_status == 0"
                  style="float: left"
                  color="danger"
                  text="Xóa"
                >
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-trash"
                    @click.stop="deleteEx(tr.id, indextr, 1)"
                  ></vs-button>
                </vx-tooltip>
                <vx-tooltip
                  v-else
                  style="float: left"
                  color="warning"
                  text="Thu hồi"
                >
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-arrow-up-left"
                    @click.stop="deleteEx(tr.id, indextr, 0)"
                  ></vs-button>
                </vx-tooltip>
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import AuthenticationService from "@/services/AuthenticationService";
import moment from "moment";
import Vue from "vue";

export default {
  components: {
    vSelect,
  },

  data() {
    return {
      showDeleteMultiBt: true,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats: ["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Tài khoản", "Loại", "Số Tiền", "Trạng Thái", "Ngày Nạp"],
      headerVal: ["account", "type", "amount", "status", "datecreate"],
      productsFake: [
        {
          id: 1,
          email: "ares@gmail.com",
          nick_name: "sky",
          from_e: "SYS",
          to_e: "USDT",
          send: 1000.0,
          receive: 1000.0,
          status: 1,
          created_at: "00:00:00 02-04-2021",
        },
        {
          id: 2,
          email: "ares@gmail.com",
          nick_name: "sky",
          from_e: "USDT",
          to_e: "SYS",
          send: 1000.0,
          receive: 1000.0,
          status: 1,
          created_at: "00:00:00 02-04-2021",
        },
        {
          id: 3,
          email: "ares@gmail.com",
          nick_name: "sky",
          from_e: "BTC",
          to_e: "SYS",
          send: 0.001,
          receive: 300.0,
          status: 0,
          created_at: "00:00:00 02-04-2021",
        },
        {
          id: 4,
          email: "ares@gmail.com",
          nick_name: "sky",
          from_e: "ETH",
          to_e: "SYS",
          send: 0.1,
          receive: 100.0,
          status: 1,
          created_at: "00:00:00 02-04-2021",
        },
        {
          id: 5,
          email: "ares@gmail.com",
          nick_name: "sky",
          from_e: "SYS",
          to_e: "BTC",
          send: 1000.0,
          receive: 0.001,
          status: 1,
          created_at: "00:00:00 02-04-2021",
        },
      ],
      itemsPerPage: 10,
      isMounted: false,
    };
  },
  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    products() {
      return this.productsFake;
    },
    queriedItems() {
      return this.$refs.table
        ? this.$refs.table.queriedResults.length
        : this.productsFake.length;
    },
  },
  methods: {
    deleteMultiple() {
      let token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);

      if (this.selectedUser.length == 0) {
        return this.$vs.notify({
          text: "Hãy chọn đối tượng cần xóa",
          color: "warning",
          iconPack: "feather",
          icon: "icon-check",
        });
      }
      for (var i = this.selectedUser.length - 1; i >= 0; i--) {
        let id = this.selectedUser[i]["id"];
        let obj = {
          id: id,
          val: 1,
        };
        AuthenticationService.deleteExTrash(obj).then((resp) => {
          if (!resp.data.success) {
            localStorage.removeItem("token");
            this.$router.push("/pages/login").catch(() => {});
          }
        });
        Vue.delete(this.productsFake, i);
      }
      this.selectedUser = [];
      return this.$vs.notify({
        text: "Đã xóa thành công",
        color: "success",
        iconPack: "feather",
        icon: "icon-check",
      });
    },

    deleteEx(id, index, val) {
      let token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);
      let obj = {
        id: id,
        val: val,
      };
      AuthenticationService.deleteExTrash(obj).then((resp) => {
        if (resp.data.success) {
          Vue.delete(this.productsFake, index);
          this.popupDeleteActive = false;
          return this.$vs.notify({
            text: "Đã xóa thành công",
            color: "success",
            iconPack: "feather",
            icon: "icon-check",
          });
        } else {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        }
      });
    },

    trashDataEx() {
      this.showDeleteMultiBt = false;
      let token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);

      AuthenticationService.getExListHisTrash().then((resp) => {
        if (!resp.data.success) {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        } else {
          this.productsFake = resp.data.data;
        }
      });
    },

    getOrderStatusColor(status) {
      if (status == 0) return "warning";
      if (status == 1) return "success";
      //if(status == 2) return "danger"
      return "warning";
    },
    getOrderStatusColorText(status) {
      if (status == 0) return "Đang xử lý";
      if (status == 1) return "Hoàn thành";
      //if(status == 2) return "danger"
      return "Đang xử lý";
    },

    getIconType(type) {
      let cur = type.toUpperCase();
      return cur;
    },

    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm:ss");
      }
    },

    getAmountDecimal(type, value) {
      let cur = "$";
      let coin = type.toUpperCase();
      let minimum = 2;
      if (coin == "BTC") minimum = 6;

      if (coin == "ETH") minimum = 4;

      if (coin == "USDT") minimum = 2;

      if (coin == "VN") minimum = 0;

      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });

      return cur + formatter.format(value);
    },

    reloadList() {
      this.showDeleteMultiBt = true;
      let token = localStorage.getItem("token");
      this.$store.dispatch("setToken", token);

      AuthenticationService.getExListHistory().then((resp) => {
        this.$vs.loading.close("#loading-corners > .con-vs-loading");

        if (!resp.data.success) {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        } else {
          this.productsFake = resp.data.data;
        }
      });
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    // export ra file
    //==================================================================
    exportToExcel() {
      // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if (this.selectedUser.length == 0) {
        return this.$vs.notify({
          title: "Xuất dữ liệu",
          text: "Vui lòng chọn nội dung để hoàn thành",
          color: "danger",
          iconPack: "feather",
          icon: "icon-heart",
        });
      }
      import("@/vendor/Export2Excel").then((excel) => {
        const list = this.selectedUser;
        const data = this.formatJson(this.headerVal, list);
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat,
        });
        this.clearFields();
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          // Add col name which needs to be translated
          // if (j === 'timestamp') {
          //   return parseTime(v[j])
          // } else {
          //   return v[j]
          // }

          return v[j];
        })
      );
    },
    clearFields() {
      this.fileName = "";
      this.cellAutoWidth = true;
      this.selectedFormat = "xlsx";
    },

    openLoadingInDiv() {
      this.$vs.loading({
        container: "#loading-corners",
        type: "corners",
        scale: 0.6,
      });
    },

    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
  },
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }

    //this.$store.registerModule('dataList', this.productsFake);

    //this.$store.dispatch("dataList/fetchDataListItems")
    //console.log(this.productsFake);
    //console.log(this.$store.state.dataList);
    this.reloadList();
  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  },
};
</script>

<style lang="scss">
#list-history-deposit {
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          padding: 20px;
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
