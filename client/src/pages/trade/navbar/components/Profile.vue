<template>
  <div
    class="flex items-center the-navbar__user-meta text-acc"
    v-if="activeUserInfo.displayName != ''"
  >
    <!--<div class="flex items-center the-navbar__user-meta"> -->
    <!-- <div class="hidden leading-tight text-right sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
     <small>Available</small>
    </div> -->
    <div
      class="ml-3 mr-3 con-img"
      style="border-radius: 3px; padding: 0.375rem 0.75rem"
    >
      <vs-dropdown vs-custom-content vs-trigger-click>
        <div class="text-left cursor-pointer" style="font-weight: bold">
          <p class="text-sm" style="color: #c1c1c1">
            {{ isAcc ? $t("RealAccount") : $t("DemoAccount") }}
          </p>
          <p>
            <span class="text-money"
              >$
              {{
                isAcc
                  ? this.formatPrice(blObj.blLive, 2)
                  : this.formatPrice(blObj.blDemo, 2)
              }}</span
            >
            <span class="float-right">
              <feather-icon
                icon="ChevronDownIcon"
                svgClasses="w-6 h-6 text-down"
              />
            </span>
          </p>
        </div>
        <vs-dropdown-menu class="dropdown-account" style="width: 160px">
          <div class="mb-3 accLive">
            <span style="font-size: 12px; color: #d6d6d6">{{
              $t("RealAccount") || "RealAccount"
            }}</span>
            <div class="cursor-pointer balance" @click="changeAccount(1)">
              <span style="color: #e8e8e8; font-weight: bold; font-size: 16px"
                >$ {{ formatPrice(blObj.blLive, 2) }}</span
              >
              <span
                class="absolute reloadBalance"
                style="right: 10px; z-index: 99999"
                @click="clickShowPopTrans()"
              >
                <feather-icon
                  icon="LinkIcon"
                  class="w-4 cursor-pointer"
                ></feather-icon>
              </span>
            </div>
          </div>
          <hr style="border-color: #b4c2d2" />
          <div class="mt-3 accDemo">
            <span style="font-size: 12px; color: #d6d6d6">{{
              $t("DemoAccount") || "DemoAccount"
            }}</span>
            <div class="cursor-pointer balance" @click="changeAccount(0)">
              <span style="color: #e8e8e8; font-weight: bold; font-size: 16px"
                >$ {{ formatPrice(blObj.blDemo, 2) }}</span
              >
              <span class="absolute z-10 reloadBalance" style="right: 10px">
                <feather-icon
                  icon="RefreshCwIcon"
                  @click.stop="reloadBalanceDemo()"
                  class="w-4 cursor-pointer"
                ></feather-icon>
              </span>
            </div>
          </div>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <div class="ml-3 mr-3 con-img">
      <vs-button
        color="success"
        icon-pack="feather"
        icon="icon-dollar-sign"
        type="relief"
        @click="(popupActiveNapNhanh = true), getBalanceWalletClick()"
        >{{ $t("FastLoading") || "FastLoading" }}</vs-button
      >
      <!-- <vs-button type="line" icon-pack="feather" :color="colorNT" icon="icon-dollar-sign" @click.stop="viewNapTien()">Nạp nhanh</vs-button> -->
    </div>
    <!--<div class="ml-3 con-img">
      <vs-button type="line" icon-pack="feather" :color="colorRT" icon="icon-dollar-sign" @click.stop="viewRutTien()">Rút tiền</vs-button>
    </div> -->
    <!-- <div class="ml-3 mr-3 cursor-pointer con-img msetting">
      <a href="https://t.me/daiphat2879" class="contactsss"
        ><feather-icon
          icon="CodeIcon"
          svgClasses="w-5 h-5"
          class="block h-5 text-center"
        />
        <span>Liên Hệ</span></a
      >
    </div> -->
    <div
      class="ml-3 mr-3 cursor-pointer con-img msetting"
      @click="popupActiveCaiDat = true"
    >
      <a
        href.prevent
        @click="popupActiveCaiDat = true"
        class="cursor-pointer nav-link"
      >
        <span class="mb-2">
          <feather-icon
            style="color: #fff"
            icon="SettingsIcon"
            svgClasses="w-5 h-5"
            class="block h-5 text-center"
        /></span>
        <span class="textLink">{{ $t("Settings") || "Settings" }}</span>
      </a>
    </div>
    <vs-popup
      class="setting"
      :title="$t('Settings') || 'Settings'"
      :active.sync="popupActiveCaiDat"
    >
      <div class="relative flex flex-col wrap">
        <div class="flex mb-3 line line-language-pc line-pc align-center">
          <div class="flex flex-1 type align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
            >
              <g id="globe" transform="translate(-0.324 -0.324)" opacity="0.5">
                <line
                  id="Line_1450"
                  data-name="Line 1450"
                  y2="18"
                  transform="translate(9.824 0.824)"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></line>
                <line
                  id="Line_1451"
                  data-name="Line 1451"
                  x2="18"
                  transform="translate(0.824 9.824)"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></line>
                <ellipse
                  id="Ellipse_1795"
                  data-name="Ellipse 1795"
                  cx="5.042"
                  cy="8.824"
                  rx="5.042"
                  ry="8.824"
                  transform="translate(4.782 1)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></ellipse>
                <line
                  id="Line_1452"
                  data-name="Line 1452"
                  x2="14.931"
                  transform="translate(2.359 5.118)"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></line>
                <line
                  id="Line_1453"
                  data-name="Line 1453"
                  x2="14.931"
                  transform="translate(2.359 14.53)"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></line>
                <circle
                  id="Ellipse_1796"
                  data-name="Ellipse 1796"
                  cx="9"
                  cy="9"
                  r="9"
                  transform="translate(0.824 0.824)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="1"
                ></circle>
              </g>
            </svg>
            <span class="white">{{ $t("LG") || "LG" }}</span>
          </div>
          <div class="flex flex-1 control align-center">
            <i18n />
          </div>
        </div>
        <div class="flex mb-3 line align-center">
          <div class="flex flex-1 type align-center">
            <svg
              version="1.1"
              width="19"
              height="19"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 19 19"
              xml:space="preserve"
            >
              <g id="sound" transform="translate(0.5 -0.5)">
                <g id="Path_30736" fill="#887F9E">
                  <path
                    d="M13.7,19.3c-0.2,0-0.4-0.1-0.6-0.2l-6.9-4.6H0.5c-0.6,0-1-0.4-1-1V6.3c0-0.6,0.4-1,1-1h5.7l6.9-4.6c0.3-0.2,0.7-0.2,1,0c0.3,0.2,0.5,0.5,0.5,0.9v16.8c0,0.4-0.2,0.7-0.5,0.9C14,19.3,13.9,19.3,13.7,19.3z M1.5,12.5h5c0.2,0,0.4,0.1,0.6,0.2l5.6,3.8V3.4L7.1,7.1C6.9,7.2,6.7,7.3,6.5,7.3h-5V12.5z"
                    class="st0"
                  ></path>
                </g>
                <g id="Path_30737" fill="#887F9E">
                  <path
                    d="M16.8,15.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c1.9-2,1.9-5.1-0.1-7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c2.8,2.7,2.8,7.1,0.1,9.9c0,0-0.1,0.1-0.1,0.1C17.2,15,17,15.1,16.8,15.1z"
                    class="st0"
                  ></path>
                </g>
              </g>
            </svg>
            <span class="white">{{ $t("ATT") || "ATT" }}</span>
          </div>
          <div class="flex flex-1 control align-center">
            <div class="flex toggleButtonWrapper">
              <span class="uppercase white">Off</span>
              <vs-switch
                color="success"
                style="border: 1px solid #4e4e4e; min-width: 60px"
                v-model="switchAmThanh"
                @change="OnOffSound"
              />
              <span class="uppercase white">On</span>
            </div>
          </div>
        </div>
      </div>
    </vs-popup>
    <div
      class="ml-3 mr-3 cursor-pointer con-img mhoso"
      @click.stop="viewHoSo()"
    >
      <feather-icon
        icon="UserIcon"
        svgClasses="w-5 h-5"
        class="block h-5 text-center"
      />
      <span>{{ $t("Profile") || "Profile" }}</span>
    </div>
    <div class="relative ml-3 mr-3 text-center cursor-pointer con-img mTT">
      <notification-drop-down />
    </div>

    <!-- <div class="menuMobileTopMobile">
        <div class="icon" @click="isMenuMobie = !isMenuMobie">
          <feather-icon icon="ListIcon" svgClasses="w-8 h-8"/>
        </div>
    </div>
    <div class="flex items-center justify-center tabMenuMobileTOP" :class="{'open': isMenuMobie}">
      <div class="ml-3 mr-3 cursor-pointer con-img" @click="popupActiveCaiDat = true">
        <feather-icon icon="SettingsIcon" svgClasses="w-5 h-5" class="block h-5 text-center"/>
        <span>Cài Đặt</span>
      </div>
      <div class="ml-3 mr-3 cursor-pointer con-img" @click.stop="viewHoSo()">
        <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block h-5 text-center"/>
        <span>Hồ Sơ</span>
      </div>
    </div> -->

    <ho-so-user-info
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <!-- <his-order-bet :isSidebarActive="addSidebarHisOrder" @closeSidebar="toggleDataSidebarHisOrder"/> -->

    <!-- <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="ml-3 con-img">
        <feather-icon icon="UserIcon" svgClasses="w-8 h-8" />
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="block rounded-full shadow-md cursor-pointer" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Đăng xuất</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>-->
    <vs-popup
      class="qDeposit"
      :title="$t('FastLoading') || 'FastLoading'"
      :active.sync="popupActiveNapNhanh"
    >
      <div class="relative">
        <vs-button
          color="#38495d"
          type="filled"
          class="w-full text-left"
          @click="showPopWalSL = !showPopWalSL"
        >
          <span class="icon USDT"></span>
          <span class="white">{{ balanceUSDT }}</span>
          <feather-icon
            class="right-0 material-icons"
            icon="ChevronDownIcon"
            svgClasses="w-4 h-4"
            style="top: -3px; position: absolute !important"
          />
        </vs-button>
        <div class="w-full listWallShow" :class="{ block: showPopWalSL }">
          <span
            class="block w-full cursor-pointer drop"
            @click="selectWallet('usdt')"
          >
            <span class="icon USDT"></span>
            <span class="white">{{ balanceUSDT }}</span>
          </span>
        </div>
        <p class="mt-4 mb-2 text-xs white">
          {{ $t("RealAccount") || "RealAccount" }}
        </p>
        <div class="relative">
          <vs-input
            class="w-full"
            :placeholder="$t('VLNSTN') || 'VLNSTN'"
            @keyup="ttThucNhan"
            v-model="enterMoneyDeposit"
          />
          <span class="cursor-pointer allIn" @click="allEnterWallet()">
            <span class="uppercase">{{ $t("All") || "All" }}</span>
          </span>
        </div>

        <p class="mt-4 mb-4 text-right noticeDeposit">
          <small>{{ $t("GHT") || "GHT" }} $11</small>
        </p>
        <div class="sizeLarge">
          <p class="mb-2 white title">*{{ $t("TTN") || "TTN" }}</p>
          <p title="0.00" class="mb-2 text-3xl receiveAmount white">
            ${{ ttNhan }}
          </p>
        </div>

        <vs-button
          class="w-full"
          color="success"
          icon-pack="feather"
          type="relief"
          @click="(popupActiveNapNhanh = false), submitDeposit()"
          >{{ $t("NTN") || "NTN" }}</vs-button
        >

        <!-- <p class="mt-2 text-center noticeDeposit">
          <small>*Giá báo có thể thay đổi</small>
        </p> -->
      </div>
    </vs-popup>
    <vs-popup
      class="text-center"
      title="Chuyển tiền"
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
            placeholder="Nhập số tiền"
            v-model="enterAmount"
          />
          <div class="input-append">
            <button
              type="button"
              class="cursor-pointer btn"
              @click="enterAllMoney"
            >
              Tất cả
            </button>
          </div>
        </div>
        <vs-button
          @click="clickTransMoney"
          color="rgb(62, 201, 214)"
          type="filled"
          >Chuyển Tiền</vs-button
        >
      </div>
    </vs-popup>
  </div>
</template>

<script>
import HoSoUserInfo from "@/pages/trade/slidebar/HoSoUser";
//import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue'
import getData from "./data.json";
import AuthenticationService from "@/services/AuthenticationService";
import I18n from "./i18n";
import NotificationDropDown from "@/pages/user/NotifiDropDown.vue";
//import { gsap } from "gsap"

export default {
  components: {
    I18n,
    HoSoUserInfo,
    NotificationDropDown,
    //HisOrderBet
  },
  data() {
    return {
      popupTransferActive: false,
      textWalletHtml:
        '<span class="mr-1 uppercase color-blue green">USDT</span> <span>Wallet</span>',
      textAccLive: "Tài khoản Thực",
      amountAcc: 0,
      amountAccLive: 0,
      enterAmount: "",

      isMenuMobie: false,
      switchAmThanh: true,
      popupActiveCaiDat: false,
      popupActiveNapNhanh: false,
      numberTween: 1000,
      counter: false,
      isAcc: 0,
      blObj: getData,
      colorNT: "#0094ff",
      colorRT: "#fff",

      // Data Sidebar
      addNewDataSidebar: false,
      addSidebarHisOrder: false,
      sidebarData: {},
      interval: false,
      showPopWalSL: false,
      walletIsSelect: "usdt",
      balanceUSDT: 0,
      enterMoneyDeposit: "",
      ttNhan: 0.0,
    };
  },
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    activeUserInfo() {
      return getData.displayName;
    },
  },
  watch: {
    number() {
      clearInterval(this.counter);
      if (this.number === this.numberTween) {
        return;
      }
      this.counter = setInterval(
        function () {
          if (Math.floor(this.numberTween) !== Math.floor(this.number)) {
            var change = (this.number - this.numberTween) / 5;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.numberTween = this.numberTween + change;
          } else {
            this.numberTween = this.number;
            clearInterval(this.counter);
          }
        }.bind(this),
        20
      );
    },
  },
  methods: {
    clickShowPopTrans() {
      this.popupTransferActive = true;

      this.amountAcc = getData.balance;
      this.amountAccLive = getData.blLive;
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
            getData.blLive = getData.blLive + amount;
            getData.balance = getData.balance - amount;

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

    enterAllMoney() {
      if (this.typeChange) {
        // nếu true thì live to wallet

        this.enterAmount = getData.blLive;
      } else {
        // wallet to live

        this.enterAmount = getData.balance;
      }
    },

    // numberTo(start, end, duration, currency = false){

    //   console.log()
    //   this.blanceStart = end

    //   clearInterval(mm);
    //   var range = end - start;
    //   var minTimer = 50;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   stepTime = Math.max(stepTime, minTimer);
    //   var startTime = new Date().getTime();
    //   var endTime = startTime + duration;

    //   var mm = setInterval(() => {
    //       var now = new Date().getTime();
    //       var remaining = Math.max((endTime - now) / duration, 0);
    //       var value = (end - (remaining * range))>>0;
    //       var blance = currency ? this.formatPrice(value, 2) : value;
    //       this.isAcc ? getData.blLive = blance : getData.blDemo = blance
    //       if (value == end) {
    //         clearInterval(mm);
    //       }
    //   }, stepTime);
    // },

    OnOffSound() {
      if (this.switchAmThanh) {
        localStorage.setItem("SOUND", true);
      } else {
        localStorage.setItem("SOUND", false);
      }
    },

    ttThucNhan(e) {
      let amount = e.currentTarget.value;
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

      this.ttNhan = this.formatPrice(amount, 2);
    },

    submitDeposit() {
      let amount = this.ttNhan;

      amount = this.replaceAll(amount.toString(), ",", "");
      amount = this.replaceAll(amount.toString(), "-", "");

      if (amount <= 0) {
        return this.$vs.notify({
          text: "Giá trị không hợp lệ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      if (amount < 11) {
        return this.$vs.notify({
          text: "Số tiền tối thiểu không đủ",
          color: "danger",
          position: "top-right",
          iconPack: "feather",
          icon: "icon-x-circle",
        });
      }

      let obj = {
        money: amount,
        id: getData.uidLive,
      };

      AuthenticationService.depositWallet(obj).then((res) => {
        if (res.data.success == 1) {
          getData.balance -= amount;
          getData.blLive += amount;

          this.$vs.notify({
            text: "Nạp tiền thành công.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        } else if (res.data.success == 3) {
          this.$vs.notify({
            text: "Số dư bạn không đủ.",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        } else {
          this.$vs.notify({
            text: "Giá trị không hợp lệ",
            color: "danger",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-x-circle",
          });
        }
      });
    },

    allEnterWallet() {
      this.ttNhan = this.formatPrice(getData.balance, 2);
      this.enterMoneyDeposit = this.formatPrice(getData.balance, 2);
    },

    selectWallet(val) {
      this.walletIsSelect = val;
      this.showPopWalSL = false;
    },

    reloadBalanceDemo() {
      $(".dropdown-account").hide();
      AuthenticationService.reloadMoneyDemo().then((res) => {
        if (res.data.success) {
          getData.blDemo = 1000;

          this.$vs.notify({
            text: "Tài khoản Demo đã nạp.",
            iconPack: "feather",
            icon: "icon-check",
            color: "success",
          });
        }
      });
    },

    getBalanceWalletClick() {
      AuthenticationService.getBalanceWallet().then((res) => {
        if (res.data.success) {
          let mU = res.data.data.usdt;
          this.balanceUSDT = this.formatPrice(mU, 2);
        }
      });
    },

    changeAccount(val) {
      if (val) {
        localStorage.setItem("BO_BALANCE_TYPE", "LIVE");
        this.isAcc = getData.isAccount = 1;
      } else {
        localStorage.setItem("BO_BALANCE_TYPE", "DEMO");
        this.isAcc = getData.isAccount = 0;
      }
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },

    viewHoSo() {
      this.toggleDataSidebar(true);
    },

    viewHisOrder() {
      this.toggleDataSidebarHisOrder(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },

    toggleDataSidebarHisOrder(val = false) {
      this.addSidebarHisOrder = val;
    },

    logout() {
      // // if user is logged in via auth0
      // if (this.$auth.profile) this.$auth.logOut();

      // // if user is logged in via firebase
      // const firebaseCurrentUser = firebase.auth().currentUser

      // if (firebaseCurrentUser) {
      //     firebase.auth().signOut().then(() => {
      //         this.$router.push('/pages/login').catch(() => {})
      //     })
      // }
      // // If JWT login
      // if(localStorage.getItem("accessToken")) {
      //   localStorage.removeItem("accessToken")
      //   this.$router.push('/pages/login').catch(() => {})
      // }

      // // Change role on logout. Same value as initialRole of acj.js
      // this.$acl.change('admin')
      // localStorage.removeItem('userInfo')
      localStorage.removeItem("tokenUser");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/login").catch(() => {});
    },
  },
  created() {
    // if(!getData.displayName){
    //   AuthenticationService.getInfoUser()
    //   .then((res) => {
    //        if(res.data.success == 4){
    //           localStorage.removeItem('INFO')
    //           localStorage.removeItem('tokenUser')
    //            window.location.href = window.location.origin + '/login'
    //       }
    //   })
    // }
    let checkSound = localStorage.hasOwnProperty("SOUND");
    if (!checkSound) {
      localStorage.setItem("SOUND", true);
    } else {
      let getS = localStorage.getItem("SOUND");
      if (getS === "false") {
        this.switchAmThanh = false;
      }
    }

    this.blanceStart = this.isAcc ? getData.blLive : getData.blDemo;

    let acc = localStorage.getItem("BO_BALANCE_TYPE");
    if (acc == "LIVE") {
      this.isAcc = getData.isAccount = 1;
    } else {
      this.isAcc = getData.isAccount = 0;
    }
  },
};
</script>

<style scoped>
.reloadBalance {
  right: 10px;
  background: #fa2843;
  width: 40px;
  height: 25px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
}

.menuMobileTopMobile {
  display: none;
}

.tabMenuMobileTOP {
  visibility: hidden;
  position: fixed;
  height: 60px;
  left: 0;
  right: 0;
  top: -60px;
  background: #02142b;
  z-index: 999;
  transform: translate3d(0, 0, 0);
  transition-property: -webkit-transform visibility;
  transition-property: transform visibility;
  transition-property: transform visibility, -webkit-transform visibility;
  transition-duration: 0.2s;
}

.notification-dropdown-button-number {
  position: absolute;
  top: -7px;
  left: calc(50% + 2px);
  display: inline-block;
  overflow: hidden;
  background: #e22a67;
  color: #fff;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 9px;
  border: 2px solid #02142b;
  padding: 0 2px;
}

.toggleButtonWrapper span {
  display: inline-block;
  line-height: 25px;
  padding-left: 5px;
  padding-right: 5px;
}
/*
.setting .wrap .line .type svg,
.setting .wrap .line .control svg {
  margin-right: 5px;
}

.setting .wrap .line-language-pc {
  padding: 15px;
  border-bottom: 1px solid #4a3c6f;
}

.setting .wrap .line {
  padding: 15px;
} */

.qDeposit .allIn {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  color: #00ffe9;
}

.qDeposit .listWallShow {
  position: absolute;
  z-index: 1000;
  display: none;
  background-color: #38495d;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.qDeposit .listWallShow .drop {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.contactsss {
  color: #c2c6dc;
}

.icon.USDT {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
}

.icon.ETH {
  background: url("~@/assets/images/sky/eth.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

.icon.BTC {
  background: url("~@/assets/images/sky/bitcoin.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}

@media screen and (max-width: 600px) {
  .msetting,
  .mhoso,
  .ttM {
    display: none !important;
  }

  .mTT svg {
    width: 1.7rem !important;
    height: 1.7rem !important;
  }

  .mTT .notification-dropdown-button-number {
    top: -10px;
    min-width: 22px;
    height: 22px;
    line-height: 18px;
    font-size: 12px;
  }

  .menuMobileTopMobile {
    position: fixed;
    right: 0;
    top: 60px;
    background: #02142b;
    padding: 0px 10px;
    border-bottom-left-radius: 20px;
    display: block;
    cursor: pointer;
  }

  .tabMenuMobileTOP.open {
    visibility: visible;
    transform: translate3d(0, 100%, 0);
  }
}

@media screen and (max-width: 425px) {
  .text-acc {
    zoom: 0.9;
  }
}

@media screen and (max-width: 376px) {
  .text-acc {
    zoom: 0.8;
  }
  .text-down {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
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
</style>
<style>
.content .inputGroup input {
  background: #fff;
  color: #545454;
}

@media screen and (max-width: 376px) {
  .vs-tabs--li button.vs-tabs--btn {
    font-size: 12px;
  }
}

.navbar-floating .vx-navbar {
  padding: 0.3rem 1rem;
}

.setting .vs-popup {
  width: 390px !important;
}

.qDeposit .vs-popup {
  width: 300px !important;
}
.qDeposit .vs-button--text {
  width: 100%;
}
.qDeposit .vs-button--text > span.icon,
.qDeposit .listWallShow .drop > span.icon {
  width: 20px;
  height: 20px;
  overflow: hidden;
  margin-right: 4px;
}

.qDeposit .vs-button--text > span,
.qDeposit .listWallShow .drop > span {
  line-height: 20px;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {
  padding: 0.75rem 1rem;
}
</style>
