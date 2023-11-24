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
        <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div class="mb-4 centerx labelx">
            <vs-input
              v-model="bank_owner"
              style="width: 100%"
              label="Chủ Tài Khoản"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              v-model="bank_tell"
              type="text"
              style="width: 100%"
              label="Tên ngân hàng"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              v-model="bank_number"
              type="text"
              style="width: 100%"
              label="Số tài khoản"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              v-model="bank_desc"
              type="text"
              style="width: 100%"
              label="Nội dung mẫu"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              v-model="exchangeVNDUSDT"
              type="text"
              style="width: 100%"
              label="Tỉ giá VND/USDT"
            />
          </div>
          <!-- <div class="mb-4 centerx labelx">
            <vs-input
              type="number"
              style="width: 100%"
              label="Số tiền BTC"
              v-model="amountBTC"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              type="number"
              style="width: 100%"
              label="Số tiền ETH"
              v-model="amountETH"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              type="number"
              style="width: 100%"
              label="Số tiền PAYPAL"
              v-model="amountPAYPAL"
            />
          </div>
          <div class="mb-4 centerx labelx">
            <vs-input
              type="number"
              style="width: 100%"
              label="Số tiền VNĐ"
              v-model="amountVND"
            />
          </div> -->
        </div>
      </div>

      <vs-button
        @click="actionChangeBank()"
        type="filled"
        class="block mt-5 mb-12"
        >Xác Nhận</vs-button
      >
    </template>
    <template>
      <div class="vx-row">
        <div class="w-full vx-col lg:w-1/2">
          <table class="tbv">
            <tr>
              <th>Chủ Tài Khoản</th>
              <th>Tên ngân hàng</th>
              <th>Số tài khoản</th>
              <th>Nội dung mẫu</th>
              <th>Tỉ giá VND/USDT</th>
            </tr>
            <tr>
              <!-- thêm class td-check -->
              <td>{{ bank_owner }}</td>
              <td>{{ bank_tell }}</td>
              <td>{{ bank_number }}</td>
              <td>{{ bank_desc }}</td>
              <td>{{ exchangeVNDUSDT }}</td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
const fs = require("fs");

export default {
  components: {},
  data() {
    return {
      bank_tell: "",
      bank_number: "",
      bank_owner: "",
      bank_desc: "",
      exchangeVNDUSDT: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    actionChangeBank() {
      const dataToSave = {
        bank_tell: this.bank_tell,
        bank_number: this.bank_number,
        bank_owner: this.bank_owner,
        bank_desc: this.bank_desc,
        exchangeVNDUSDT: this.exchangeVNDUSDT,
      };

      AuthenticationService.updateBankingAdmin(dataToSave)
        .then((result) => {
          return this.$vs.notify({
            text: "Cập nhật tài khoản thành công",
            color: "success",
            position: "top-center",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        })
        .catch((err) => {
          return this.$vs.notify({
            text: "Lỗi hệ thống rồi" + err,
            color: "danger",
            position: "top-center",
            iconPack: "feather",
            icon: "icon-message-square",
          });
        });
    },
  },
  created() {
    AuthenticationService.getBankingAdmin()
      .then((result) => {
        const data = result.data.data[0];
        this.bank_tell = data.banking_tell;
        this.bank_number = data.banking_number;
        this.bank_owner = data.banking_owner;
        this.bank_desc = data.banking_desc;
        this.exchangeVNDUSDT = data.exchangeVNDUSDT;
      })
      .catch((err) => {});
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
      /* margin-left: 1.5rem;
      margin-right: 1.5rem; */
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;
        /* sửa padding với giảm font-size */
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
      padding: 0 0.8rem;

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
  /* sửa */
  padding: 8px;
  /* thêm fz */
}
.tbv tr:nth-child(even) {
  background-color: #dddddd;
}
@media only screen and (max-width: 600px) {
  th,
  td {
    font-size: 12px;
  }
}
</style>
