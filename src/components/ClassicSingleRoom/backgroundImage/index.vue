<template>
    <div>
        <div class="banner"  :style="{ backgroundImage: backgroundList[buttonActiveNumber].imageUrl }">
            <div class="backPage">
                <BackPage />
            </div>
            <section class="bookRoom_bookingRoom">
                <SingleRoomPrice />
            </section>
            <div class="backgroundImage_other">
                <div 
                v-for="(item, index) in backgroundList"
                class="backgroundImage_other_button" 
                :class="{ 'active' : item.buttonActive }"
                :key="item.imageUrl"
                @click="backgroundController(index)"
                >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackPage from '../backPage/index'
import SingleRoomPrice from '../SingleRoomPrice/index'

export default {
    name: 'backgroundImage',
    components: {
        BackPage,
        SingleRoomPrice,
    },

    data () {
        return {
            buttonActiveNumber: 0,
            backgroundList:[
                {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room1.jpg')})`},
                {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room2.jpg')})`},
                {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room3.jpg')})`},
            ],
        }
    },
    methods: {
        backgroundController: function(index) {
            for(var vm of this.backgroundList){
                vm.buttonActive = false;
            }
            this.backgroundList[index].buttonActive = true;
            this.buttonActiveNumber = index;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>