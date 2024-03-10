<template>
  <div id="tool-edit-commisstion" class="data-list-container">

    <template>

        <div class="vx-row">

            <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12 mb-base">
                <div class="mb-4 centerx labelx">
                    <vs-button type="filled" @click.prevent="addItem" class="block mt-5">Thêm Cấp</vs-button>
                </div>  

                <div class="relative mb-4 centerx labelx" v-for="(item, index) in items" :key="item.lvl">
                    <span class="closeItem" @click="deleteItem(index)"></span>
                    <vs-input type="number" class="w-full" icon-pack="feather" icon="icon-x" icon-after :label="`% Cấp ${index + 1}`" vs-placeholder="Nombre" v-model="item.value" />
                    <p><b>$ 10 = {{ (10 / 100) * item.value }}</b></p>
                </div>

                <div class="mb-4 centerx labelx">
                    <vs-button type="filled" @click.prevent="saveItem" class="block mt-5">{{ $t("GRSFS") || "GRSFS" }}</vs-button>
                </div>

            </div>

        </div>



    </template>
  </div>

</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
    data() {
        return {
            items: [{
                id: 1,
                value: ''
            }],
        }
    },
    methods: {

        deleteItem(index) {
            this.items.splice(index, 1);
        },

        addItem(){
            //this.html +='Cấp 1<input style="width: 100%"/>'
            this.items.push({
                id: 1,
                value: ''
            });
        },

        saveItem(){
            AuthenticationService.saveRateCommission(this.items)
            .then((res) => {
                return this.$vs.notify({
                    text: 'Đã lưu',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                })
            })
        },

        getItem(){
            AuthenticationService.getRateCommission()
            .then((res) => {
                this.items = res.data.data
            })
        }
    },

    mounted() {
        this.getItem()
    },
}
</script>

<style scoped>
.closeItem{
    position: absolute;
    height: 20px;
    width: 20px;
    cursor: pointer;
    right: 8px;
    top: 30px;
    z-index: 999;
}
</style>