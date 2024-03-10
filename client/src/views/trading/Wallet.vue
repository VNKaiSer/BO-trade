<template>
  <div id="wallet">
    <div class="vx-row">
      <div class="w-full h-48 subBanner">
        <div class="container flex items-center h-full info">
          <div class="relative flex flex-col justify-center">
            <p class="text-lg">
              {{ $t("TotalBalance") || "TotalBalance" }} (USD)
            </p>
            <p>
              <span
                class="mr-2 price"
                v-if="getSetSys.typeCurrUseSys == 'usdt'"
              >
                {{ formatPrice(balanceForUser * getSetSys.quotePriceUSDT, 2) }}
              </span>
              <span class="mr-2 price" v-if="getSetSys.typeCurrUseSys == 'btc'">
                {{ formatPrice(balanceForUser * getSetSys.quotePriceBTC, 2) }}
              </span>
              <span class="mr-2 price" v-if="getSetSys.typeCurrUseSys == 'eth'">
                {{ formatPrice(balanceForUser * getSetSys.quotePriceETH, 2) }}
              </span>
              <span
                :class="`icon ${getSetSys.typeCurrUseSys} inline-block`"
              ></span>
              <!--<span class="text-lg basePrice">~ ${{ formatPrice(balanceUser, 2) }}</span> -->
            </p>
          </div>
        </div>
      </div>
      <div class="w-full" style="padding: 0 4rem">
        <div class="container">
          <vs-tabs>
            <vs-tab
              v-bind:label="$t('MainWallet') || 'MainWallet'"
              @click="getListHisTrade(), (showVC = true), (showVGD = false)"
            ></vs-tab>
            <vs-tab
              v-bind:label="$t('MainWallet1') || 'MainWallet1'"
              @click="getListHisTradeWGD(), (showVGD = true), (showVC = false)"
            ></vs-tab>
          </vs-tabs>
          <div class="showV" :class="{ block: showVC }">
            <div class="box-coin-wrapper">
              <div
                class="flex flex-col items-baseline justify-between lg:flex-row"
              >
                <h4 class="mb-3 text-2xl font-bold color-white">
                  {{ $t("MainAccount") || "MainAccount" }}
                </h4>
                <!-- <h6 class="mb-0 italic colorGray"><span >Giá trị ước tính: {{ giaTriUocTinh }} USD</span></h6> -->
              </div>
              <div class="vx-row">
                <div
                  class="w-full mb-3 vx-col lg:w-1/2"
                  v-if="getSetSys.isActiveWalletUSDT"
                >
                  <div class="boxCoin">
                    <div class="boxCoin-body">
                      <div class="flex flex-col leftBox sm:flex-row">
                        <div class="flex items-center">
                          <span class="curency-icon USDT"></span>
                          <span class="block font-bold uppercase sm:hidden"
                            >USDT</span
                          >
                        </div>
                        <div class="flex flex-col">
                          <span class="font-bold uppercase">USDT</span>
                          <span class="capitalize colorGray">USD</span>
                        </div>
                      </div>
                      <div class="rightBox">
                        <div class="flex flex-col items-end">
                          <span class="font-bold">{{
                            formatPrice(balanceUSDT, 2)
                          }}</span>
                          <span class="colorGray"
                            >~${{
                              formatPrice(
                                balanceUSDT * getSetSys.quotePriceUSDT,
                                2
                              )
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="boxCoinFooter">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAABHNCSVQICAgIfAhkiAAAAiJJREFUWIXt1jF22kAQgOF/9uWFZ1fKCaIbBJeCRj5ByAkin8DQgZq4Ajp8A5MbOCcwLpDK2DewTxDoXGlSrCEWkkASkJci02nfrvbb1e6MhGNGHAaofkPFwdDDG06LuspRIfPwF4Kzfj55/4Gzq0VeV3M0RNz3UwiAl5dmUffjQSrGf8hm/DOQdzt7xH0XlY+ocZDEnvjW6P7vQaLwEiVAsSddlPVtj8KtV/EwkGjQASaAW5xltHdIRBYShwHKzY4xz7RG14dEpCHlEAC3mZZoMAHpoix2pfL1XAkTBAdlSnt4YTd/HjYRfpazay+1I3ljhQtInlBzl25PzsG4mQUrZ3ZHRCely45I+myYxEE3soByA/I9uwYJgK+ZdpM4hnnYBPHLKYAEN/XsjWegOddZshPmtak+4o1nBiEojbDxOdNy0uig+ljxPRZx2vABDGhhRcwNoUkcpvFnVwtOG34lzArxmgYMKp8qQQASJvaT1sRsICxk85+hTNgxd7UwOQgLQZeVIXUxBYhXCA+1IGUwb2/TFoR9VRReA5e1MQDKAjinPcwuKu77qDi0RtmMnIJUyqo1MSXC2IF5CalirD5T3Hd39s2FAKh094ZYzBJv/FQf0h4+2EK1T+gSpVN39J9q5Q2noL36CPHrno80BLDlXb8AzxUQ94g290HAttofDbooAVJQApQfGG53/gTtDVmFvQUuKg6iNhl549khJn8bvwEod96NMQX8+QAAAABJRU5ErkJggg=="
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(),
                              (getSetSys.isDepositOpen = true),
                              (getSetSys.isWithdraOpen = false)
                          "
                          >{{ $t("Recharge") || "Recharge" }}</a
                        >
                      </div>
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAhJJREFUSInFlk160lAUht+TZC6uQFyB2YFxymNqdtAoYVy6gtIVFMdCDStoBB+nhRVIV2DdAcwhxwGW34RwA9VvlOfc79z33txzf4QTS2sNFye9Ayogbel3rrN88gzQe5DKKqixDLofnw2cCd0DPwl4LzQHfjT4IGgG/CiwEXQLXhqsQVgltX8aQVe6tsqCSZ1wF6o9lNFmiEtguuU7d/L61VrDxdZzwEW0CtKTfqe1MqSPyPq4tSf9bqh+NNwCj5mLh6ND4MUiJg87YH0feQhXiHqrqIDirvtkcBurH1WAANJYBrdx3iTkx5ex1hoetrYQnWDPmxtrrP6nELG+5nWANXstSfyY2w6oHw0R3i4DKe/ke2e47bPWEpp7oQCpc7e33UAWLH/vzQF+V/3oXoOwTCVvaLHGou2Dt7Tgkdq/1K8nIAn2bCRJPDEFW+rXA0TemKVJBZEQIWHmuMX+DDBCUCbxWFmoVP8PeL30/yn49FovtCnObJwNVv19FEbSzaWyZyHKN5QRqmFexTsgY+BVebB1ASyPy7+gwoK1IE1KQxdy1Y+apkkWdpqwc20ZSrjRs/qFEViSeILSKrYW0l8auZ8+1I8ShA+lmKoPMuganWCr7bSoxtEeby4Ue+4VGze1czPoWdQCrg6kfpZ+17iwMsGwfMg1UQJEtrfaFDTGmreLHgXG4K1BVJ5uoKyXRFn9AQcq1fTcDi0cAAAAAElFTkSuQmCC"
                          alt=""
                        />
                        <a
                          href="javascript:;"
                          @click.stop="
                            showPopNapRutTien(),
                              (getSetSys.isDepositOpen = false),
                              (getSetSys.isWithdraOpen = true)
                          "
                          >{{ $t("Withdrawal") || "Withdrawal" }}</a
                        >
                      </div>
                      <!--<div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAABHNCSVQICAgIfAhkiAAAAaxJREFUSIm11cFt2zAUxvH/EyRdK2/ADeINmkwQd4IoE9gB4qK3IrcCMRB1A3eCJBPE2cDZgCPIx1pqXg9V7CqWRDZh30kQHvijyE+kEKDMfJuj3CBagnyy1+m6qy8KgQEFQgZiUB7MfDv+f5hquXsWsj4wDCYyATYuUIJgQDPwCviwe6mUCCcve+jEzOd6gv46QyVziqIGxLTe/QXGztnq8y2I5xp0NDVLCoxce9aZqn8uIQNXQKrkDuXp3Zjy44/pUeaLGurauDu1QDh6DdlFmntjXhO63C4RzvoggMGAeEPzbQHDEIQ7rqYuCHq+zMw0I66+AmOQK7tIVg7sEfg4BHViZqYZSfXAS+xVx8BokKqSCXGVI5R2kS772loBOYD2g41sISXvrN2e9ULwPQQEzZf1QgPr/yZsACpBCr9R9L7vdm5jlz/vEDl901Rbk5MTV2qjIBAAz8eujgjV+zBY5PoXianTnLhaHRygsEblwsuJY2u/iXW17dPYDS7tdXruBXpUBGALKamT4467K28O2XCYA5wSqFqnfg+4IVAdXDF7UK+apDoj7Vu/AfL4ub5VTGABAAAAAElFTkSuQmCC" alt="">
                                            <router-link to="/user/exchange" class="cursor-pointer">Đổi Tiền</router-link>
                                        </div>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="history lg:mb-4">
                <h4 class="mb-3 history-title">
                  {{ $t("History") || "History" }}
                </h4>
                <div
                  class="relative history-body"
                  :class="{ 'ld-loading': isLoading }"
                >
                  <div class="loading">
                    <div class="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style="enable-background: new 0 0 100 100"
                        xml:space="preserve"
                      >
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                        ></path>
                      </svg>
                    </div>
                    <div class="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style="enable-background: new 0 0 100 100"
                        xml:space="preserve"
                      >
                        <path
                          d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <vs-tabs>
                    <vs-tab
                      label="USDT"
                      class="p-0"
                      @click="
                        getListHisTrade(),
                          (showHisUSD = true),
                          (showHisHH = false)
                      "
                    >
                    </vs-tab>
                    <vs-tab
                      v-bind:label="$t('Rose') || 'Rose'"
                      @click="
                        getListHisTradeHH(),
                          (showHisHH = true),
                          (showHisUSD = false)
                      "
                    >
                    </vs-tab>
                  </vs-tabs>
                  <div class="showHisM" :class="{ block: showHisUSD }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{ $t("Time") || "Time" }}</span>
                              </div>
                              <div class="text-right block-col amount">
                                <span>{{ $t("Value") || "Value" }}</span>
                              </div>
                              <div class="block-col type">
                                <span>{{ $t("Type") || "Type" }}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <span>{{ $t("Describe") || "Describe" }}</span>
                              </div>
                              <div class="block-col note">
                                <span>{{ $t("Note") || "Note" }}</span>
                              </div>
                              <div class="block-col status">
                                <span>{{ $t("Note") || "Note" }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="item" v-if="dataHisWallet.length == 0">
                            <div class="w-full text-center">
                              <span>{{ $t("NoData") || "NoData" }}</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWallet"
                          >
                            <div
                              class="flex"
                              style="padding: 0 1.5rem"
                              @click="popupBill(tr)"
                            >
                              <div class="block-col time">
                                <span>{{
                                  formatDateWallet(tr.created_at)
                                }}</span>
                              </div>
                              <div class="text-right block-col amount">
                                <div
                                  v-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.from_u.toUpperCase()
                                  "
                                >
                                  <span
                                    class="red"
                                    v-if="
                                      tr.type_key == 'rt' ||
                                      tr.type_key == 'ct' ||
                                      tr.type_key == 'ctsa' ||
                                      tr.type_key == 'nn' ||
                                      tr.type_key == 'mv'
                                    "
                                    >-{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                  <span class="green" v-else
                                    >+{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                </div>
                                <div
                                  v-else-if="
                                    blObj.displayName.toUpperCase() ==
                                    tr.to_u.toUpperCase()
                                  "
                                >
                                  <span class="green"
                                    >+{{ formatPrice(tr.amount, 2) }}</span
                                  >
                                </div>
                              </div>
                              <div class="block-col type">
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'rt'"
                                  >{{ $t("Withdrawal") || "Withdrawal" }}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'nt'"
                                  >{{ $t("Recharge") || "Recharge" }}
                                  {{ tr.paypal_order_id ? "Paypal" : "" }}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="
                                    tr.type_key == 'ct' ||
                                    tr.type_key == 'ctsa' ||
                                    tr.type_key == 'ctas'
                                  "
                                  >{{
                                    $t("TransferMoney") || "TransferMoney"
                                  }}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'nn'"
                                  >{{
                                    $t("FastLoading") || "FastLoading"
                                  }}</span
                                >
                                <span
                                  class="deitalType transfer_in"
                                  v-if="tr.type_key == 'mv'"
                                  >{{ $t("BuyVIP") || "BuyVIP" }}</span
                                >
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <p class="text-left">
                                  <span class="item-txid-desc"
                                    >{{
                                      tr.type_key == "ctsa" ||
                                      tr.type_key == "ctas"
                                        ? ""
                                        : tr.from_u + ":"
                                    }}
                                    {{ tr.type }}</span
                                  >
                                </p>
                              </div>
                              <div class="block-col note">
                                <span>{{ tr.note ? tr.note : "-" }}</span>
                              </div>
                              <div class="text-center block-col status">
                                <span v-if="tr.status">
                                  <span class="green">
                                    <feather-icon
                                      icon="CheckIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{ $t("Done") || "Done" }}
                                </span>
                                <span v-if="!tr.status">
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{ $t("Wait") || "Wait" }}
                                </span>
                              </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRUSDT > 0"
                            class="mt-4 mb-2"
                            :total="totalRUSDT"
                            v-model="currentxUSDT"
                            @input="clickPageUSDT"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="showHisM" :class="{ block: showHisHH }">
                    <div class="history-content">
                      <div class="box-result">
                        <ul class="nav nav-tabs">
                          <li class="box-result-header">
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{ $t("Time") || "Time" }}</span>
                              </div>
                              <div class="text-right block-col amount">
                                <span>{{ $t("Value") || "Value" }}</span>
                              </div>
                              <div class="block-col type">
                                <span>{{ $t("Type") || "Type" }}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <span>{{ $t("Describe") || "Describe" }}</span>
                              </div>
                              <div class="block-col note">
                                <span>{{ $t("Note") || "Note" }}</span>
                              </div>
                              <div class="block-col status">
                                <span>{{ $t("Status") || "Status" }}</span>
                              </div>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-if="dataHisWalletHoaHong.length == 0"
                          >
                            <div class="w-full text-center">
                              <span>{{ $t("NoData") || "NoData" }}</span>
                            </div>
                          </li>
                          <li
                            class="item"
                            v-else
                            :key="indextr"
                            v-for="(tr, indextr) in dataHisWalletHoaHong"
                          >
                            <div class="flex" style="padding: 0 1.5rem">
                              <div class="block-col time">
                                <span>{{
                                  formatDateWallet(tr.created_at)
                                }}</span>
                              </div>
                              <div class="text-right block-col amount">
                                <!-- <span class="red" v-if="tr.type_key == 'mv'">-{{ formatPrice(tr.amount, 2) }}</span> -->
                                <span class="green"
                                  >+{{
                                    formatPrice(
                                      tr.pending_commission + tr.vip_commission,
                                      2
                                    )
                                  }}</span
                                >
                              </div>
                              <div class="block-col type">
                                <span class="deitalType trading_commission">{{
                                  tr.vip_commission > 0
                                    ? $t("BuyVIP")
                                    : $t("Trade")
                                }}</span>
                              </div>
                              <div class="block-col" style="flex: 2 1 0%">
                                <p class="text-left">
                                  <span class="item-txid-desc">{{
                                    tr.vip_commission > 0
                                      ? $t("VIPRoses")
                                      : $t("TradingCommission")
                                  }}</span>
                                </p>
                              </div>
                              <div class="block-col note">
                                <span>{{
                                  tr.vip_commission > 0
                                    ? tr.ref_id + $t("BoughtVIP")
                                    : "-"
                                }}</span>
                              </div>
                              <div class="text-center block-col status">
                                <span v-if="tr.status == 1">
                                  <span class="green">
                                    <feather-icon
                                      icon="CheckIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{ $t("Done") || "Done" }}
                                </span>
                                <span v-else-if="tr.status == 0">
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{ $t("Wait") || "Wait" }}
                                </span>
                                <span v-else>
                                  <span class="red">
                                    <feather-icon
                                      icon="AlertCircleIcon"
                                      svgClasses="w-4 h-4"
                                    />
                                  </span>
                                  {{ $t("Cancel") || "Cancel" }}
                                </span>
                              </div>
                            </div>
                          </li>
                          <vs-pagination
                            v-if="totalRHH > 0"
                            class="mt-4 mb-2"
                            :total="totalRHH"
                            v-model="currentxHH"
                            @input="clickPageHH"
                          ></vs-pagination>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="showV" :class="{ block: showVGD }">
            <div class="contentBox">
              <div class="vx-row">
                <div class="w-full mt-4 vx-col lg:w-1/2">
                  <div class="background backgroundImg backgroundLive">
                    <div
                      class="flex flex-col items-center justify-center content"
                    >
                      <span class="text-lg font-bold color-gray sm:mb-3">{{
                        $t("RealAccount") || "RealAccount"
                      }}</span>
                      <span class="flex items-center mb-2 price mb:sm-3">
                        <span class="text-3xl font-bold"
                          >${{ formatPrice(blObj.blLive, 2) }}</span
                        >
                      </span>
                      <button
                        @click="popupTransferActive = true"
                        type="button"
                        class="w-9/12 cursor-pointer btn button wbtn btn-large btn-radius"
                      >
                        <span class="iconSubmit iconSubmitLive"></span>
                        <span>{{
                          $t("TransferMoney") || "TransferMoney"
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-4 vx-col lg:w-1/2">
                  <div class="background backgroundImg backgroundDemo">
                    <div
                      class="flex flex-col items-center justify-center content"
                    >
                      <span class="text-lg font-bold color-gray sm:mb-3">{{
                        $t("DemoAccount") || "DemoAccount"
                      }}</span>
                      <span class="flex items-center mb-2 price mb:sm-3">
                        <span class="text-3xl font-bold"
                          >${{ formatPrice(blObj.blDemo, 2) }}</span
                        >
                      </span>
                      <button
                        @click="clickReloadMoneyDemo"
                        type="button"
                        class="w-9/12 cursor-pointer btn button wbtn btn-large btn-radius"
                      >
                        <span class="iconSubmit iconSubmitDemo"></span>
                        <span>{{
                          $t("RechargeAgain") || "RechargeAgain"
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sectionTable lg:pb-4">
                <div class="balance">
                  <div class="wrapBalance">
                    <div class="boxBalance">
                      <div class="history">
                        <h4 class="mb-3 history-title">
                          {{ $t("History") || "History" }}
                        </h4>
                        <div class="history-body">
                          <div class="history-content">
                            <div class="box-result">
                              <ul class="nav nav-tabs">
                                <li class="box-result-header">
                                  <div class="flex" style="padding: 0 1.5rem">
                                    <div class="block-col time">
                                      <span>{{ $t("Time") || "Time" }}</span>
                                    </div>
                                    <div class="text-right block-col amount">
                                      <span>{{ $t("Value") || "Value" }}</span>
                                    </div>
                                    <div class="block-col type">
                                      <span>{{ $t("Type") || "Type" }}</span>
                                    </div>
                                    <div class="block-col" style="flex: 2 1 0%">
                                      <span>{{
                                        $t("Describe") || "Describe"
                                      }}</span>
                                    </div>
                                    <!-- <div class="block-col note">
                                                                        <span>Ghi chú</span>
                                                                    </div> -->
                                    <div class="block-col status">
                                      <span>{{
                                        $t("Status") || "Status"
                                      }}</span>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  class="item"
                                  v-if="dataHisWalletWGD.length == 0"
                                >
                                  <div class="w-full text-center">
                                    <span>{{ $t("NoData") || "NoData" }}</span>
                                  </div>
                                </li>
                                <li
                                  class="item"
                                  v-else
                                  :key="indextr"
                                  v-for="(tr, indextr) in dataHisWalletWGD"
                                >
                                  <div class="flex" style="padding: 0 1.5rem">
                                    <div class="block-col time">
                                      <span>{{
                                        formatDateWallet(tr.created_at)
                                      }}</span>
                                    </div>
                                    <div class="text-right block-col amount">
                                      <span
                                        class="red"
                                        v-if="tr.type_key == 'ctas'"
                                        >-{{ formatPrice(tr.amount, 2) }}</span
                                      >
                                      <span class="green" v-else
                                        >+{{ formatPrice(tr.amount, 2) }}</span
                                      >
                                    </div>
                                    <div class="block-col type">
                                      <span
                                        class="deitalType transfer_in"
                                        v-if="tr.type_key == 'ctas'"
                                        >{{
                                          $t("MovedOut") || "MovedOut"
                                        }}</span
                                      >
                                      <span
                                        class="deitalType transfer_in"
                                        v-else
                                        >{{ $t("MovedIn") || "MovedIn" }}</span
                                      >
                                    </div>
                                    <div class="block-col" style="flex: 2 1 0%">
                                      <p class="text-left">
                                        <span
                                          class="item-txid-desc"
                                          v-if="tr.type_key == 'ctas'"
                                          >Ra: {{ tr.to_u }}</span
                                        >
                                        <span class="item-txid-desc" v-else
                                          >{{ $t("Enter") || "Enter" }}
                                          {{ tr.to_u }}</span
                                        >
                                      </p>
                                    </div>
                                    <div class="text-center block-col status">
                                      <span v-if="tr.status">
                                        <span class="green">
                                          <feather-icon
                                            icon="CheckIcon"
                                            svgClasses="w-4 h-4"
                                          />
                                        </span>
                                        {{ $t("Done") || "Done" }}
                                      </span>
                                      <span v-if="!tr.status">
                                        <span class="red">
                                          <feather-icon
                                            icon="AlertCircleIcon"
                                            svgClasses="w-4 h-4"
                                          />
                                        </span>
                                        {{ $t("Wait") || "Wait" }}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <vs-pagination
                                  v-if="totalRWGD > 0"
                                  class="mt-4 mb-2"
                                  :total="totalRWGD"
                                  v-model="currentxWGD"
                                  @input="clickPageWGD"
                                ></vs-pagination>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-popup
      class="text-center"
      :title="$t('TransferMoney') || 'TransferMoney'"
      :active.sync="popupTransferActive"
    >
      <div class="flex header">
        <div class="flex flex-col items-center leftHeader">
          <span
            class="mb-2 text-sm font-bold white"
            v-html="textWalletHtml"
          ></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAcc, 2)
          }}</span>
        </div>
        <div class="flex flex-col items-center rightHeader">
          <span
            class="mb-2 text-sm font-bold white"
            v-html="textAccLive"
          ></span>
          <span class="text-3xl font-bold">{{
            formatPrice(amountAccLive, 2)
          }}</span>
        </div>
        <div @click="changeTransMoney" class="cursor-pointer changeAmount">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            class="iconTransfer"
          >
            <g
              id="Group_10897"
              data-name="Group 10897"
              transform="translate(-559.431 -202.553)"
            >
              <g
                id="Group_4613"
                data-name="Group 4613"
                transform="translate(559.431 202.553)"
              >
                <g
                  id="Rectangle_2919"
                  data-name="Rectangle 2919"
                  transform="translate(0)"
                  fill="#e9f0fa"
                  stroke="#e5e5e5"
                  stroke-width="1"
                >
                  <rect width="30" height="30" rx="15" stroke="none"></rect>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="14.5"
                    fill="none"
                  ></rect>
                </g>
              </g>
              <g id="conversion" transform="translate(567.976 210.905)">
                <path
                  id="Path_13963"
                  data-name="Path 13963"
                  d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                  transform="translate(-1 -1.172)"
                  fill="#031219"
                ></path>
                <path
                  id="Path_13964"
                  data-name="Path 13964"
                  d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                  transform="translate(-1 -20.395)"
                  fill="#031219"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-center content">
        <div class="relative w-3/4 mb-3 inputGroup">
          <vs-input
            class="w-full text-left inputx"
            :placeholder="$t('EnterTheAmount') || 'EnterTheAmount'"
            v-model="enterAmount"
          />
          <div class="input-append">
            <button
              type="button"
              class="cursor-pointer btn"
              @click="enterAllMoney"
            >
              {{ $t("All") || "All" }}
            </button>
          </div>
        </div>
        <vs-button
          @click="clickTransMoney"
          color="rgb(62, 201, 214)"
          type="filled"
          >{{ $t("TransferMoney") || "TransferMoney" }}</vs-button
        >
      </div>
    </vs-popup>

    <vs-popup
      class="text-center"
      :title="$t('Information') || 'Information'"
      :active.sync="popupBillActive"
    >
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Time") || "Time" }}:</span>
        <span>{{ timeShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Value") || "Value" }}:</span>
        <span>{{ valueShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Type") || "Type" }}:</span>
        <span>{{ typeShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Describe") || "Describe" }}:</span>
        <span>{{ descriptShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Note") || "Note" }}:</span>
        <span>{{ noteShow }}</span>
      </div>
      <div
        class="flex justify-between mb-2 text-white"
        style="border-bottom: 1px solid #213f62; padding-bottom: 5px"
      >
        <span>{{ $t("Status") || "Status" }}:</span>
        <span>{{ statusShow }}</span>
      </div>
    </vs-popup>

    <!--<nap-tien :isSidebarActive="addSidebarNapTien" @closeSidebar="toggleDataSidebarNapTien"/>
    <rut-tien :isSidebarActive="addSidebarRutTien" @closeSidebar="toggleDataSidebarRutTien"/> -->

    <vs-prompt title="" :active.sync="popupActiveNRTien" :buttons-hidden="true">
      <nap-rut-tien />
    </vs-prompt>
  </div>
</template>

<script>
var connectionNAP = false;
//import NapTien from '@/pages/trade/slidebar/NapTien.vue'
//import RutTien from '@/pages/trade/slidebar/RutTienS.vue'
import NapRutTien from "@/pages/trade/slidebar/NapRutTien.vue";
import getData from "@/pages/trade/navbar/components/data.json";
import AuthenticationService from "@/services/AuthenticationService";
import getSetSys from "@/services/settingSys.json";
import moment from "moment";
import SETTINGS from "../../../settings.json";

export default {
  components: {
    //NapTien,
    //RutTien,
    NapRutTien,
  },
  data() {
    return {
      typeShow: "",
      timeShow: "",
      valueShow: "",
      descriptShow: "",
      noteShow: "",
      statusShow: "",

      getSetSys: getSetSys,

      popupActiveNRTien: false,
      popupBillActive: false,

      showVC: true,
      showVGD: false,
      showHisUSD: true,
      showHisHH: false,

      blObj: getData,
      textWalletHtml:
        '<span class="mr-1 uppercase color-blue green">USDT</span> <span>Wallet</span>',
      textAccLive: "Tài khoản Thực",
      amountAcc: 0,
      amountAccLive: 0,
      typeChange: false, // false: Wall to Live, true: Live to Wallet
      enterAmount: "",
      popupTransferActive: false,
      currentxUSDT: 1,
      currentxHH: 1,
      currentxWGD: 1,
      email: "",
      password: "",
      error: null,
      addSidebarNapTien: false,
      addSidebarRutTien: false,
      balanceUser: 0,

      balanceUSDT: 0,
      balanceETH: 0,
      balanceBTC: 0,
      balancePaypal: 0,

      isLoading: false,
      dataHisWallet: [],
      totalRUSDT: 0,
      dataHisWalletHoaHong: [],
      totalRHH: 0,
      dataHisWalletWGD: [],
      totalRWGD: 0,
    };
  },
  computed: {
    //   giaTriUocTinh(){
    //       return this.formatPrice(getSetSys.quotePriceUSDT + getSetSys.quotePriceETH + getSetSys.quotePriceBTC + getSetSys.quotePricePAYPAL, 2)
    //   },
    balanceForUser() {
      return getData.balance;
    },
  },
  methods: {
    popupBill(tr) {
      this.popupBillActive = true;

      this.timeShow = this.formatDateWallet(tr.created_at);

      if (getData.displayName.toUpperCase() == tr.from_u.toUpperCase()) {
        this.valueShow =
          tr.type_key == "rt" ||
          tr.type_key == "ct" ||
          tr.type_key == "ctsa" ||
          tr.type_key == "nn" ||
          tr.type_key == "mv"
            ? "-$" + this.formatPrice(tr.amount, 2)
            : "+$" + this.formatPrice(tr.amount, 2);
      } else if (getData.displayName.toUpperCase() == tr.to_u.toUpperCase()) {
        this.valueShow = "+$" + this.formatPrice(tr.amount, 2);
      }

      switch (tr.type_key) {
        case "rt":
          this.typeShow = "Rút tiền";
          break;
        case "nt":
          this.typeShow = "Nạp tiền" + tr.paypal_order_id ? "Paypal" : "";
          break;
        case "nn":
          this.typeShow = "Nạp nhanh";
          break;
        case "mv":
          this.typeShow = "Mua VIP";
          break;
        default:
      }

      if (
        tr.type_key == "ct" ||
        tr.type_key == "ctsa" ||
        tr.type_key == "ctas"
      ) {
        this.typeShow = "Chuyển tiền";
      }

      this.descriptShow =
        tr.type_key == "ctsa" || tr.type_key == "ctas" ? "" : tr.from_u + ": ";
      this.descriptShow = this.descriptShow + tr.type;
      this.noteShow = tr.note ? tr.note : "-";
      if (tr.status == 1) {
        this.statusShow = "Hoàn tất";
      } else if (tr.status == 0) {
        this.statusShow = "Đợi";
      } else if (tr.status == 0) {
        this.statusShow = "Hủy";
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

    showPopNapRutTien() {
      this.popupActiveNRTien = true;
    },

    // viewNapTien(){
    //   this.toggleDataSidebarNapTien(true)
    // },

    // viewRutTien(){
    //   this.toggleDataSidebarRutTien(true)
    // },

    toggleDataSidebarNapTien(val = false) {
      this.addSidebarNapTien = val;
    },

    toggleDataSidebarRutTien(val = false) {
      this.addSidebarRutTien = val;
    },

    changeTransMoney() {
      if (this.typeChange) {
        // Live to Wallet
        this.typeChange = false;

        let b = this.textWalletHtml;
        let a = this.textAccLive;
        let d = getData.balance;
        let c = getData.blLive;

        this.textAccLive = b;
        this.textWalletHtml = a;
        this.amountAcc = d;
        this.amountAccLive = c;
      } else {
        // Live to Wallet
        this.typeChange = true;

        let a = this.textWalletHtml;
        let b = this.textAccLive;
        let c = getData.balance;
        let d = getData.blLive;

        this.textAccLive = a;
        this.textWalletHtml = b;
        this.amountAcc = d;
        this.amountAccLive = c;
      }
    },

    clickReloadMoneyDemo() {
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          this.blObj.blDemo = 1000;

          return this.$vs.notify({
            text: "Tài khoản Demo đã nạp.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
            position: "top-right",
          });
        }
      });
    },

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    clickTransMoney() {
      let amount = this.enterAmount.toString();
      amount = this.replaceAll(amount, ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (!this.isNumber(amount) || amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (this.typeChange) {
        // nếu true thì live to wallet

        // gửi tiền từ live tới tài khoản chính
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyLiveToUsdt(obj).then((res) => {
          if (res.data.success) {
            getData.blLive -= amount;
            getData.balance += amount;

            this.amountAcc = getData.blLive;
            this.amountAccLive = getData.balance;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Chuyển tiền thành công",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Số dư của bạn không đủ",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      } else {
        // wallet to live

        // gửi tiền từ tài khoản chính tới live
        let obj = {
          email: getData.email,
          m: amount,
        };

        AuthenticationService.sendMoneyUsdtToLive(obj).then((res) => {
          if (res.data.success) {
            getData.blLive += amount;
            getData.balance -= amount;

            this.amountAcc = getData.balance;
            this.amountAccLive = getData.blLive;

            // reload lại lịch sử
            this.getListHisTradeWGD();

            return this.$vs.notify({
              text: "Chuyển tiền thành công",
              color: "success",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-check",
            });
          } else {
            return this.$vs.notify({
              text: "Số dư của bạn không đủ",
              color: "danger",
              position: "top-right",
              iconPack: "feather",
              icon: "icon-x-circle",
            });
          }
        });
      }
    },

    getListHisTrade() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWallet().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
          let c = (res.data.count / 10).toString();
          //this.totalRUSDT = Number(c.split(".")[0])
          this.totalRUSDT = Math.ceil(c);
        }
      });
    },

    clickPageUSDT(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWallet = res.data.data;
        }
      });
    },

    getListHisTradeHH() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHH().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
          let c = (res.data.count / 10).toString();
          //this.totalRHH = Number(c.split(".")[0])
          this.totalRHH = Math.ceil(c);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletHHNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletHoaHong = res.data.data;
        }
      });
    },

    getListHisTradeWGD() {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGD().then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
          let c = (res.data.count / 10).toString();
          this.totalRWGD = Number(c.split(".")[0]);
        }
      });
    },

    clickPageWGD(page) {
      this.isLoading = true;
      AuthenticationService.getListHisTradeWalletWGDNumber(page).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.dataHisWalletWGD = res.data.data;
        }
      });
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    formatDateWallet(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY HH:mm:ss");
      }
    },

    getBalanceWallet() {
      AuthenticationService.getBalanceWallet().then((res) => {
        let d = res.data;
        if (d.success == 3 || d.success == 4) {
          localStorage.removeItem("token");
          this.$router.push("/login").catch(() => {});
          return;
        }
        if (d.success) {
          let mU = d.data.usdt;
          let mE = d.data.eth;
          let mB = d.data.btc;
          let mP = d.data.paypal;

          this.balanceUSDT = mU;
          this.balanceETH = mE;
          this.balanceBTC = mB;
          this.balancePaypal = mP;

          // mặc định hiển thị tiền đầu vào
          this.getAmount = this.balancePaypal;
        }
      });
    },

    getSysWallet() {
      AuthenticationService.getSetupWallet().then((res) => {
        let g = res.data.data;
        getSetSys.quotePriceUSDT = this.replaceAll(
          this.formatPrice(g.qUSDT, 2),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceETH = this.replaceAll(
          this.formatPrice(g.qETH, 4),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePriceBTC = this.replaceAll(
          this.formatPrice(g.qBTC, 6),
          ",",
          ""
        ); // giá sấp sĩ USD
        getSetSys.quotePricePAYPAL = this.replaceAll(
          this.formatPrice(g.qPaypal, 2),
          ",",
          ""
        ); //  giá sấp sĩ USD

        getSetSys.typeCurrUseSys = g.tCUseSys; // đồng tiền tệ sử dụng trong hệ thống

        getSetSys.minDepositBTC = g.mDBTC; // nạp tiền tối thiểu
        getSetSys.minDepositETH = g.mDETH; // nạp tiền tối thiểu
        getSetSys.minDepositUSDT = g.mDUSDT; // nạp tiền tối thiểu
        getSetSys.minDepositPaypal = g.mDPaypal; // nạp tiền tối thiểu

        getSetSys.minWithdrawalBTC = g.mWBTC; // rút tiền tối thiểu
        getSetSys.minWithdrawalETH = g.mWETH; // rút tiền tối thiểu
        getSetSys.minWithdrawalUSDT = g.mWUSDT; // rút tiền tối thiểu
        getSetSys.minWithdrawalPaypal = g.mWPaypal; // rút tiền tối thiểu

        getSetSys.isActiveWalletPaypal = g.iAWPaypal; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletETH = g.iAWETH; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletUSDT = g.iAWUSDT; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống
        getSetSys.isActiveWalletBTC = g.iAWBTC; // Bật / tắt đồng COIN sử dụng nạp và gửi tiền trong hệ thống

        getSetSys.feeRutPaypalNoiBo = g.fDPaypalNB;
        getSetSys.feeRutPaypalAcc = g.fDPaypalAcc;
        getSetSys.feeRutBTCNoiBo = g.fDBTCNB;
        getSetSys.feeRutBTCAcc = g.fDBTCAcc;
        getSetSys.feeRutETHNoiBo = g.fDETHNB;
        getSetSys.feeRutETHERC20 = g.fDETHERC20;
        getSetSys.feeRutUSDTNoiBo = g.fDUSDTNB;
        getSetSys.feeRutUSDTBEP20 = g.fDUSDTBEP20;
        getSetSys.feeRutUSDTERC20 = g.fDUSDTERC20;
      });
    },

    sendMessage(message) {
      this.connectionNAP.send(JSON.stringify(message));
    },

    getInfoUser() {
      this.sendMessage({
        type: "accountDetail",
        data: { email: getData.email },
      });
    },
    onWindowLoad() {
      this.getInfoUser();
    },
  },
  mounted() {
    this.getSysWallet();

    this.getListHisTrade();
    setTimeout(() => {
      this.getListHisTrade();
    }, 1000);
    this.getListHisTradeWGD();
    this.getBalanceWallet();
  },

  created() {
    this.amountAcc = getData.balance;
    this.amountAccLive = getData.blLive;

    if (!connectionNAP) {
      connectionNAP = true;
      this.connectionNAP = new WebSocket(SETTINGS.BASE_URL_SOCKET_NAP);

      this.connectionNAP.onopen = function () {
        //console.log("Successfully connected to the echo websocket server...")
        this.onWindowLoad();
      }.bind(this);

      this.connectionNAP.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.type === "mess") {
          let dl = data.data;

          this.amountAcc += dl.usd * 1;
          getData.balance += dl.usd * 1;
          this.balanceUSDT += dl.usd * 1;

          return this.$vs.notify({
            text: dl.mess,
            color: dl.style,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      }.bind(this);
    }
  },
};
</script>

<style scoped>
#wallet {
  color: #fff;
}

.showV,
.showHisM {
  display: none;
}

.content .inputGroup .input-append button {
  width: 60px;
  height: 38px;
  background: transparent;
  border: none;
}

.content .inputGroup .input-append {
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.content {
  padding: 2rem;
}

.header {
  position: relative;
  background-color: #181c21;
}

.header .leftHeader {
  border-right: 1px solid rgba(255, 255, 255, 0.17);
}

.header .leftHeader,
.header .rightHeader {
  padding: 2rem;
  flex: 1 auto;
  max-width: 50%;
}

.header .iconTransfer {
  width: 40px;
  height: 40px;
}

.header .changeAmount {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.sectionTable {
  padding-top: 6rem;
}

.contentBox .background.backgroundLive {
  background-color: #2e3c4c;
  background-image: url("~@/assets/images/sky/livebanner.png");
}

.contentBox .background.backgroundDemo {
  background-color: #2e3c4c;
  background-image: url("~@/assets/images/sky/winbanner.png");
}

.backgroundImg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.contentBox .background {
  position: relative;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/*.contentBox .background:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 32.08661%;
}

.contentBox .background > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.contentBox .background .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}*/

.contentBox .background .content {
  border-radius: 5px;
}

.contentBox .wbtn.btn-radius {
  border: 1px solid transparent;
  border-radius: 3px !important;
}

.button.wbtn.btn-large {
  padding: 11px 2.5rem;
}

.button.wbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2177ff;
  color: #fff;
  font-weight: 400;
}

.iconSubmit {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.iconSubmit.iconSubmitLive {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS45ODEiIGhlaWdodD0iMjEuOTg2IiB2aWV3Qm94PSIwIDAgMjEuOTgxIDIxLjk4NiI+CiAgPGcgaWQ9ImNvbnZlcnNpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjk4MSAxMC45OTMpIHJvdGF0ZSgxMzUpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQzIiBkYXRhLW5hbWU9IlBhdGggMjYyNDMiIGQ9Ik0xNC41NzEsNi44SC45NzFBLjkxOC45MTgsMCwwLDEsMCw1LjgyOWEuOTE4LjkxOCwwLDAsMSwuOTcxLS45NzFIMTIuMjRMOS4wMzQsMS42NTFhLjkzOS45MzksMCwwLDEsMC0xLjM2LjkzOS45MzksMCwwLDEsMS4zNiwwbDQuODU3LDQuODU3YS44ODcuODg3LDAsMCwxLC4xOTQsMS4wNjlBLjkzNC45MzQsMCwwLDEsMTQuNTcxLDYuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzI2MjQ0IiBkYXRhLW5hbWU9IlBhdGggMjYyNDQiIGQ9Ik01LjgyOCwxNS44YS44ODIuODgyLDAsMCwxLS42OC0uMjkxTC4yOTEsMTAuNjUxQS44ODcuODg3LDAsMCwxLC4xLDkuNTgzLjkzNC45MzQsMCwwLDEsLjk3MSw5aDEzLjZhLjkxOC45MTgsMCwwLDEsLjk3MS45NzEuOTE4LjkxOCwwLDAsMS0uOTcxLjk3MUgzLjNsMy4yMDYsMy4yMDZhLjkzOS45MzksMCwwLDEsMCwxLjM2QS44ODIuODgyLDAsMCwxLDUuODI4LDE1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjI1NykiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=);
}

.iconSubmit.iconSubmitDemo {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy43OTUiIGhlaWdodD0iMTguNDg4IiB2aWV3Qm94PSIwIDAgMTcuNzk1IDE4LjQ4OCI+CiAgPGcgaWQ9InJlZnJlc2gtMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIDAuMDgxKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yNjI1OSIgZGF0YS1uYW1lPSJQYXRoIDI2MjU5IiBkPSJNMTguOCw3LjM2NiwxNy41NTUtLjA4MSwxNC45OTMsMi40ODFhOC44LDguOCwwLDEsMCwyLjksMTAuNjQxLjguOCwwLDAsMC0xLjQ2OC0uNjQyLDcuMjE1LDcuMjE1LDAsMSwxLTIuNTczLTguODU0bC0yLjUsMi41WiIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.history .box-result-header {
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .block-col.amount {
  flex: 0 0 85px;
  max-width: 85px;
}

.history .box-result .block-col.status {
  flex: 0 0 90px;
  max-width: 90px;
}

.history .box-result .block-col p > span {
  line-height: 30px;
}

.history .box-result .item svg {
  width: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.history .box-result .block-col.amount span {
  padding: 0 10px;
}

.history .box-result .item span {
  font-size: 14px;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col.note span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}

.history .item-txid-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  white-space: nowrap;
  display: block !important;
}

.history-nav .nav-tabs {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.history .box-result .block-col > span {
  line-height: 30px;
}

.history .box-result .block-col {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
}

.history .box-result .block-col.time {
  flex: 0 0 110px;
  max-width: 110px;
}

.history-body {
  background: #02142b;
  border-radius: 5px;
  border: none;
  padding: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.boxCoin img,
.boxCoin .curency-icon {
  max-width: 44px;
  margin-right: 0.5rem;
}

.boxCoin .boxCoinFooter {
  border-color: rgba(255, 255, 255, 0.1);
}

.boxCoin .boxCoinFooter img {
  width: 18px;
  margin-right: 5px;
}

.boxCoin .boxCoinFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-top: 1px solid #ddd;
  font-size: 0.8rem;
}

.boxCoinFooter a {
  color: #fff;
}

.boxCoin .boxCoin-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
}

.subBanner {
  color: rgba(255, 255, 255, 0.3);
  height: 160px;
  width: 100%;
  background-color: #2e3c4c;
}

.subBanner .price {
  color: #fff;
  font-size: 2.75rem;
  font-weight: 700;
}

.subBanner .icon {
  display: inline-block;
  background-size: cover;
  width: 36px;
  height: 35px;
}

.boxCoin .curency-icon.PAYPAL,
.subBanner .icon.PAYPAL {
  background-image: url(data:image/png;base64,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);
}

.boxCoin .curency-icon.USDT,
.subBanner .icon.USDT {
  background-image: url(data:image/png;base64,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);
}

.boxCoin .curency-icon.ETH,
.subBanner .icon.ETH {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNSIgeDI9IjAuNSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjE3N2ZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwNWZjMyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzQ2MjUiIGRhdGEtbmFtZT0iR3JvdXAgNDYyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgPGcgaWQ9Ikdyb3VwXzQ2MTQiIGRhdGEtbmFtZT0iR3JvdXAgNDYxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfNDYwNCIgZGF0YS1uYW1lPSJHcm91cCA0NjA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS4wNzYgNi4xMjMpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjIiIGRhdGEtbmFtZT0iUGF0aCAxMzkyMiIgZD0iTTE2LjUsNHY4Ljc4TDIzLjkxOSwxNi4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMDc2IC00KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIzIiBkYXRhLW5hbWU9IlBhdGggMTM5MjMiIGQ9Ik0xNi40MjIsNCw5LDE2LjFsNy40MjItMy4zMTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOSAtNCkiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjQiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNCIgZD0iTTE2LjUsMjEuOTI0djUuOTY2bDcuNDI2LTEwLjI3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjA3NiAtNC4xMzgpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjUiIGRhdGEtbmFtZT0iUGF0aCAxMzkyNSIgZD0iTTE2LjQyMiwyNy44ODlWMjEuOTIzTDksMTcuNjE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgLTQuMTM4KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8xMzkyNiIgZGF0YS1uYW1lPSJQYXRoIDEzOTI2IiBkPSJNMTYuNSwyMC40OTVsNy40MjEtNC4zMDlMMTYuNSwxMi44NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4wNzYgLTQuMDkpIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMTM5MjciIGRhdGEtbmFtZT0iUGF0aCAxMzkyNyIgZD0iTTksMTYuMTg2bDcuNDIyLDQuMzA5VjEyLjg3MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05IC00LjA5KSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjYpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);
}

.boxCoin .curency-icon.BTC,
.subBanner .icon.BTC {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuNTUiIHgyPSIwLjU0OSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmE5NDFhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q4N2QwMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzE1MDEyIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIgLTE1KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDYxMyIgZGF0YS1uYW1lPSJHcm91cCA0NjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMiAxNSkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzI5MTkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDI5MTkiIHdpZHRoPSIzNyIgaGVpZ2h0PSIzNiIgcng9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJQYXRoXzEzOTIxIiBkYXRhLW5hbWU9IlBhdGggMTM5MjEiIGQ9Ik01MDIuNjI5LDM1Ni45NDljLjMzMy0yLjIyNy0xLjM2My0zLjQyNC0zLjY4MS00LjIyMmwuNzUzLTMuMDE2LTEuODM3LS40NTctLjczNCwyLjkzN2MtLjQ4Mi0uMTItLjk3OC0uMjM0LTEuNDcxLS4zNDZsLjczNi0yLjk1Ni0xLjgzNS0uNDU4LS43NTEsMy4wMTUtMy43LS45MTctLjQ4OSwxLjk2MXMxLjM2Mi4zMTIsMS4zMzQuMzMyYS45NzcuOTc3LDAsMCwxLC44NTYsMS4wNjhsLTIuMDYsOC4yNjNhLjY2Ny42NjcsMCwwLDEtLjg0MS40MzVjLjAxOC4wMjctMS4zMzUtLjMzNS0xLjMzNS0uMzM1bC0uOTEyLDIuMSwzLjcuOTM0LS43NiwzLjA1MSwxLjgzNC40NTcuNzUzLTMuMDE4Yy41LjEzNi45ODcuMjYxLDEuNDYzLjM3OWwtLjc1LDMsMS44MzYuNDU3Ljc2LTMuMDQ1YzMuMTMxLjU5Miw1LjQ4Ni4zNTMsNi40NzYtMi40NzYuOC0yLjI4LS4wMzktMy42LTEuNjg3LTQuNDUzYTIuOTMsMi45MywwLDAsMCwyLjM0NS0yLjdtLTQuMiw1Ljg4MmMtLjU2OSwyLjI4LTQuNDA3LDEuMDQ4LTUuNjUyLjczOGwxLjAwOC00LjA0MmMxLjI0NS4zMTEsNS4yMzYuOTI2LDQuNjQ0LDMuM20uNTY5LTUuOTE1Yy0uNTE4LDIuMDc1LTMuNzEzLDEuMDIxLTQuNzUuNzYybC45MTMtMy42NjdjMS4wMzcuMjU5LDQuMzc2Ljc0MSwzLjgzNiwyLjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjQuMTY1IC0zMjYuMDI2KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.boxCoin .curency-icon {
  width: 44px;
  height: 44px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.boxCoin {
  color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(112, 112, 112, 0.3);
  background-color: #02142b;
}

@media only screen and (max-width: 768px) {
  .history-body {
    overflow-x: auto;
  }
  .subBanner .info {
    justify-content: center;
  }
  .showHisM {
    overflow-x: auto;
    width: 860px;
  }
}
</style>

<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}
</style>
