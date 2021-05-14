<template>
    <div class="banner">
        <transition appear appear-active-class="fade-out_in" mode="out-in" name="fade">
            <div class="fullScreen"  :class="[ isAnimation ? 'fade-out_in' : 'fade-leave_to']" :style="{ backgroundImage: backgroundList[show].imageUrl}"></div>
        </transition>
        <div class="container homepageConfiguration_main">
            <div class="homepageConfiguration_main_head col-3">
                <div class="homepageConfiguration_main_head_logo">
                    <img :src="require('../Home/images/logo (1).png')" alt="">
                </div>
                <div class="homepageConfiguration_main_head_title">
                    <span>好室旅居</span>
                    <span>彰化縣秀水鄉福陵路1號</span>
                    <span>04-1234567</span>
                    <span>house@house.com</span>
                </div>
            </div>
            <div class="homepageConfiguration_main_context col-9">
                <div class="homepageConfiguration_main_context_thumbnail">
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room1.png')" alt="">
                        <router-link to="/SingleRoom">
                            <div class="txt">
                                <h2>Standard Single Room</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room2.png')" alt="">
                        <router-link to="/ClassicSingleRoom">
                            <div class="txt">
                                <h2>Classic Single Room</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room3.png')" alt="">
                        <router-link to="/DeluxeSingleRoom">
                            <div class="txt">
                                <h2>Deluxe Single Room</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room4.png')" alt="">
                        <router-link to="/StandardTwinRoom">
                            <div class="txt">
                                <h2>Standard Twin Room</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room5.png')" alt="">
                        <router-link to="/ClassicTwinRoom">
                            <div class="txt">
                                <h2>Classic Twin Room</h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="thumbnail col-4">
                        <img :src="require('../Home/images/room6.png')" alt="">
                        <router-link to="/DeluxeTwinRoom">
                            <div class="txt">
                                <h2>Deluxe Twin Room</h2>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="homepageConfiguration_other">
            <div 
                v-for="(item, key) in backgroundList"
                class="homepageConfiguration_other_button" 
                :class="{ 'active' : buttonActive===key }"
                :key="item.imageUrl"
                @click.prevent="backgroundController(key)"
            >
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data (){
        return{
            isAnimation: true,
            show: 0,
            buttonActive: 0,
            backgroundList:[
                {imageUrl: `url(${require('../Home/images/BG1.png')})`},
                {imageUrl: `url(${require('../Home/images/BG2.png')})`},
                {imageUrl: `url(${require('../Home/images/BG3.png')})`},
                {imageUrl: `url(${require('../Home/images/BG4.png')})`},
            ],
        }
    },
    methods: {
        backgroundController(key){
            const vm = this;
            vm.buttonActive = key;
            vm.show=key;
            vm.isAnimation = !vm.isAnimation;
            vm.backgroundList[vm.show].buttonActive="true"; 
        }
    },
    mounted() {
        const vm = this;
        setInterval(() => {
            vm.show++
            vm.buttonActive++
            vm.isAnimation = !vm.isAnimation;
            if (vm.show === vm.backgroundList.length) {
                vm.show = 0
                vm.buttonActive = 0
            }
        }, 5000)
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>