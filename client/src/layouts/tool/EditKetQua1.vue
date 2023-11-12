<!-- =========================================================================================
  Description: Data List - List View
  Item Name: Admin
  Author: Ares DN
  Author Telegram: @skydnz
========================================================================================== -->

<template>
  <div id="list-edit-result" class="data-list-container">
    <template>
      <div class="vx-row">
        <div class="w-full vx-col lg:w-1/2">
          <!-- <p>Người chơi</p>
          <p class="mb-4">
            Người chơi Cược BUY:
            <span class="mr-4 text-danger" style="font-size: 20px"
              >$ {{ price_play_buy }}</span
            ><br />
            Người chơi Cược SELL:
            <span class="text-danger" style="font-size: 20px"
              >$ {{ price_play_sell }}</span
            >
          </p> -->
          <table class="tbv">
            <tr>
              <th>Email</th>
              <th>Loại</th>
              <th>Mua/Bán</th>
              <th>Số Tiền Cược</th>
              <th>Phiên</th>
              <th>Thắng</th>
              <th>Thua</th>
            </tr>
            <tr :data="tr" :key="indextr" v-for="(tr, indextr) in productsFake">
              <template v-if="tr.mkt == 0">
                <td>{{ tr.e }}</td>
                <td>
                  <p class="bet-type">{{ tr.sv }}</p>
                </td>
                <td>
                  <p class="bet-buy_sell" v-if="tr.bet == 'buy'">
                    <span class="mr-2 text-success">MUA</span>
                    <feather-icon icon="TrendingUpIcon" svgClasses="w-5 h-5" />
                  </p>
                  <p class="bet-buy_sell" v-else>
                    <span class="mr-2 text-danger">BÁN</span>
                    <feather-icon
                      icon="TrendingDownIcon"
                      svgClasses="w-5 h-5"
                    />
                  </p>
                </td>
                <td>
                  <p class="bet-amount">
                    <IconCrypto
                      style="width: 20px"
                      coinname="usdt"
                      color="color"
                      format="svg"
                    />
                    <font class="ml-2" color="#006c27">{{
                      formatPrice(tr.amount, 2)
                    }}</font>
                  </p>
                </td>
                <td>
                  <!-- ghi chú: td của phiên. nhớ sửa col sv thành phiên -->
                  <p class="bet-type">{{ tr.sv }}</p>
                </td>
                <vs-td class="text-center whitespace-no-wrap">
                  <vx-tooltip style="float: left" text="Thắng">
                    <vs-button
                      color="#00ff37"
                      type=" loading-corners"
                      icon-pack="feather"
                      icon="icon-check"
                      >Thắng</vs-button
                    >
                  </vx-tooltip>
                  <span style="color: #00ff37">Thắng</span>
                </vs-td>
                <vs-td class="text-center whitespace-no-wrap">
                  <vx-tooltip style="float: left" text="Thua">
                    <vs-button
                      color="#ff6f6f"
                      type="line"
                      icon-pack="feather"
                      icon="icon-check"
                      >Thua</vs-button
                    >
                  </vx-tooltip>
                  <span style="color: #ff6f6f">Thua</span>
                </vs-td>
              </template>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import SETTINGS from "../../../settings.json";

export default {
  components: {},
  data() {
    return {
      AMOUNTBECAU_MIN: -30,
      AMOUNTBECAU_MAX: 400,
      PriceBOT: 0,
      checkOnOffBOT: true,
      checkOnOffAnGian: false,
      checkOnOffBOTGoTien: false,
      radioBC: "",
      productsFake: [
        // {e: 'admin@gmail.com', uid: 'DS9OR0KGJS', sv: 'BTC/USDT', bet: 'buy', amount: '10' }
      ],
      itemsPerPage: 10,
      isMounted: false,

      countDown: 0,
      typeOder: "Mở",

      price_buy: 0,
      price_sell: 0,
      price_buy_mkt: 0,
      price_sell_mkt: 0,
      price_total_mkt: 0,
      price_total: 0,

      price_play_buy: 0,
      price_play_sell: 0,
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
  watch: {},
  methods: {
    sbAmountBeCauMin() {
      this.sendMessage({
        type: "editGL",
        data: {
          type: "WRITE_AMOUNT_NEGA_AMOUNT_BREAK_BRIDGE",
          AMOUNT: this.AMOUNTBECAU_MIN,
        },
      });
      return this.$vs.notify({
        text: "Đã thay đổi thành " + this.AMOUNTBECAU_MIN,
        color: "success",
        position: "top-center",
        iconPack: "feather",
        icon: "icon-message-square",
      });
    },

    sbAmountBeCauMax() {
      this.sendMessage({
        type: "editGL",
        data: {
          type: "WRITE_AMOUNT_MAX_BREAK_BRIDGE",
          AMOUNT: this.AMOUNTBECAU_MAX,
        },
      });
      return this.$vs.notify({
        text: "Đã thay đổi thành " + this.AMOUNTBECAU_MAX,
        color: "success",
        position: "top-center",
        iconPack: "feather",
        icon: "icon-message-square",
      });
    },

    changeBOTOnOff() {
      this.sendMessage({ type: "editGL", data: { type: "BOT" } });

      if (this.checkOnOffBOT) {
        return this.$vs.notify({
          text: "BOT đã được TẮT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      } else {
        return this.$vs.notify({
          text: "BOT đã được BẬT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      }
    },

    changeBetOnOff() {
      this.radioBC = "off";

      this.checkOnOffBOTGoTien = false;

      if (this.checkOnOffAnGian) {
        this.sendMessage({ type: "editGL", data: { type: "BTC_OFF" } });

        return this.$vs.notify({
          text: "Đã thay đổi thành TẮT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      } else {
        this.sendMessage({ type: "editGL", data: { type: "BTC_LESS" } });

        return this.$vs.notify({
          text: "Đã thay đổi thành BẬT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      }
    },

    reloadAmTien() {
      this.sendMessage({ type: "editGL", data: { type: "GO_TIEN_OFF" } });
    },

    changeMode(val) {
      this.checkOnOffAnGian = false;

      if (val == "buy") {
        this.sendMessage({ type: "editGL", data: { type: "BTC_BUY" } });
        val = "MUA";
      }
      if (val == "sell") {
        this.sendMessage({ type: "editGL", data: { type: "BTC_SELL" } });
        val = "BÁN";
      }
      if (val == "off") {
        this.sendMessage({ type: "editGL", data: { type: "BTC_OFF" } });
        val = "TẮT";
      }

      return this.$vs.notify({
        text: "Đã thay đổi thành " + val,
        color: "success",
        position: "top-center",
        iconPack: "feather",
        icon: "icon-message-square",
      });
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    // getAmountDecimal(type, money){
    //   let cur = '$'
    //   let coin = type.toUpperCase()
    //   if(coin == 'BTC') return cur+money.toFixed(6)
    //   if(coin == 'ETH') return cur+money.toFixed(4)
    //   return cur+money.toFixed(2)
    // },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    changeRadioGetSV(dl) {
      this.radioBC = "";

      if (dl.BTC.BUY) {
        this.radioBC = "buy";
      } else if (dl.BTC.SELL) {
        this.radioBC = "sell";
      } else if (!dl.BTC.BUY && !dl.BTC.SELL) {
        this.radioBC = "off";
      }

      if (dl.LESS_WIN) {
        this.checkOnOffAnGian = true;
      } else {
        this.checkOnOffAnGian = false;
      }

      if (dl.PRICE_FUND_ON_OFF) {
        this.checkOnOffBOTGoTien = true;
      } else {
        this.checkOnOffBOTGoTien = false;
      }

      if (dl.BOT) {
        this.checkOnOffBOT = true;
      } else {
        this.checkOnOffBOT = false;
      }
    },

    changeBOTGoTienOnOff() {
      this.checkOnOffAnGian = false;
      this.radioBC = "off";

      this.sendMessage({ type: "editGL", data: { type: "BOT_GO_TIEN" } });

      if (this.checkOnOffBOTGoTien) {
        return this.$vs.notify({
          text: "BOT gỡ tiền đã được TẮT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      } else {
        return this.$vs.notify({
          text: "BOT gỡ tiền đã được BẬT",
          color: "success",
          position: "top-center",
          iconPack: "feather",
          icon: "icon-message-square",
        });
      }
    },

    sendInfoAdmin() {
      this.sendMessage({
        type: "accountDetail",
        data: { uid: "ADMIN_BO", email: "ad999999@gmail.com" },
      });
    },
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
    var _this = this;
    this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET);

    this.connection.onopen = function () {
      _this.sendInfoAdmin();
      console.log("Successfully connected to the echo websocket server...");
    };

    this.connection.onmessage = function (event) {
      let data = JSON.parse(event.data);
      let dl = data.data;

      if (data.type === "allData") {
        _this.countDown = dl.candleClose;
        _this.typeOder = dl.type == "order" ? "Mở" : "Đóng";

        // reset lại số tiền = 0 khi thời gian = 0;
        if (dl.candleClose == 0) {
          _this.price_buy = 0;
          _this.price_sell = 0;
        }
      }

      if (data.type === "getTruck") {
        _this.changeRadioGetSV(dl);
        _this.AMOUNTBECAU_MIN = data.min_am_go;
        _this.AMOUNTBECAU_MAX = data.max_amount_be;
      }

      if (data.type === "truck") {
        _this.productsFake = dl;
        _this.price_buy = _this.formatPrice(data.price_buy, 2);
        _this.price_sell = _this.formatPrice(data.price_sell, 2);
        _this.price_buy_mkt = _this.formatPrice(data.mktBUY, 2);
        _this.price_sell_mkt = _this.formatPrice(data.mktSELL, 2);
        _this.price_total_mkt = _this.formatPrice(
          data.mktBUY + data.mktSELL,
          2
        );

        let tt =
          data.price_buy + data.price_sell - (data.mktBUY + data.mktSELL);

        _this.price_play_buy = _this.formatPrice(
          data.price_buy - data.mktBUY,
          2
        );
        _this.price_play_sell = _this.formatPrice(
          data.price_sell - data.mktSELL,
          2
        );
        _this.price_total = _this.formatPrice(tt, 2);
      }
    };
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>

<style lang="scss">
#list-edit-result {
  .vs-switch {
    border: 1px solid #fff;
  }
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
<style scoped>
.tbv {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #000;
}
.tbv tr {
  background-color: #ffa11f;
}
.tbv td,
.tbv th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.tbv tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
