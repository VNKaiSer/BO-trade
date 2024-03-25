<template>
  <div id="tool-add-money" class="data-list-container">
    <template>
      <div class="vx-row">
        <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
          <div class="mb-4 centerx labelx">
            <vs-input
              style="width: 100%"
              :label="$t('DALDSAL') || 'DALDSAL'"
              v-model="nickName"
            />
          </div>
          <p></p>
          <div class="mb-4 centerx labelx">
            <vs-input
              type="number"
              style="width: 100%"
              :label="$t('DALACL') || 'DALACL'"
              v-model="amountUSDT"
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

      <vs-button type="filled" @click.prevent="addMoney" class="block mt-5">{{
        $t("DALZL") || "DALZL"
      }}</vs-button>
    </template>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      nickName: "",
      amountUSDT: 0,
      amountBTC: 0,
      amountETH: 0,
      amountPAYPAL: 0,
      amountVND: 0,
    };
  },
  methods: {
    addMoney() {
      if (this.nickName == "") {
        return this.$vs.notify({
          text: "Biệt danh không được rỗng!",
          color: "warning",
          iconPack: "feather",
          icon: "icon-check",
        });
      }
      let obj = {
        nick: this.nickName,
        aUSDT: this.amountUSDT,
      };

      AuthenticationService.minusMoneyMember(obj).then((res) => {
        let d = res.data;
        if (!d.success) {
          localStorage.removeItem("token");
          this.$router.push("/pages/login").catch(() => {});
        } else {
          // tránh tình trạng click nhìu lần sinh ra + nhiều
          this.amountUSDT = 0;
          this.amountBTC = 0;

          return this.$vs.notify({
            text: `Trừ tiền cho tài khoản ${this.nickName} thành công.`,
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },
  },
};
</script>
