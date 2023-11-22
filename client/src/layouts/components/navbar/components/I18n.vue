<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="flex items-center cursor-pointer i18n-locale">
      <img class="w-5 h-4" :src="i18n_locale_img" :alt="$i18n.locale" />
      <span class="hidden ml-2 sm:block">{{ getCurrentLocaleData.lang }}</span>
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <vs-dropdown-item @click="updateLocale('vi')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/vi.png"
          alt="vi"
        />
        &nbsp;Tiếng Việt</vs-dropdown-item
      >
      <vs-dropdown-item @click="updateLocale('en')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/en.png"
          alt="en"
        />
        &nbsp;English</vs-dropdown-item
      >
      <vs-dropdown-item @click="updateLocale('fr')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/fr.png"
          alt="fr"
        />
        &nbsp;French</vs-dropdown-item
      >
      <vs-dropdown-item @click="updateLocale('de')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/de.png"
          alt="de"
        />
        &nbsp;German</vs-dropdown-item
      >
      <vs-dropdown-item @click="updateLocale('pt')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/pt.png"
          alt="pt"
        />
        &nbsp;Portuguese</vs-dropdown-item
      >
      <vs-dropdown-item @click="updateLocale('cn')"
        ><img
          class="w-5 h-4 mr-1"
          src="@/assets/images/flags/pt.png"
          alt="pt"
        />
        &nbsp;China</vs-dropdown-item
      >
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
export default {
  computed: {
    i18n_locale_img() {
      return require(`@/assets/images/flags/${this.$i18n.locale}.png`);
    },
    getCurrentLocaleData() {
      const locale = this.$i18n.locale;
      if (locale == "vi") return { flag: "vi", lang: "Tiếng Việt" };
      else if (locale == "en") return { flag: "us", lang: "English" };
      else if (locale == "pt") return { flag: "br", lang: "Portuguese" };
      else if (locale == "fr") return { flag: "fr", lang: "French" };
      else if (locale == "de") return { flag: "de", lang: "German" };
      else if (locale == "cn") return { flag: "cn", lang: "China" };
    },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
