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
            <tr :data="tr" :key="indextr" v-for="(tr, indextr) in listBetOpen">
              <td>{{ tr.email }}</td>
              <td>{{ tr.currency }}</td>
              <td>{{ tr.buy_sell }}</td>
              <td>{{ tr.amount_bet }}</td>
              <td>{{ tr.session }}</td>
              <vs-td>
                <button @click="actionBeCau({ action: 'win', data: tr })">
                  Thắng
                </button>
              </vs-td>
              <vs-td>
                <button @click="actionBeCau({ action: 'lose', data: tr })">
                  Thua
                </button>
              </vs-td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

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
      listBetOpen: [],
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
  computed: {},
  watch: {},
  methods: {
    actionBeCau(val) {
      console.log(val);
      AuthenticationService.beCau({
        id: val.data.betId,
        wl: val.action,
      })
        .then((result) => {
          return this.$vs.notify({
            text: "Đã bẻ cầu thành " + val.action,
            color: "success",
            position: "top-center",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        })
        .catch((err) => {
          return this.$vs.notify({
            text: "Lỗi hệ thống",
            color: "success",
            position: "top-center",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        });
    },
  },
  created() {
    AuthenticationService.getListBetOpen().then((resp) => {
      this.listBetOpen = resp.data.data;
      console.log(this.listBetOpen);
    });
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
