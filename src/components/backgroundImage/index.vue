<template>
    <div>
        <div class="banner"  :style="{ backgroundImage: chooseRoom.backgroundList[buttonActiveNumber].imageUrl }">
            <div class="backPage">
                <BackPage />
            </div>
            <section class="bookRoom_bookingRoom">
                <SingleRoomPrice />
            </section>
            <div class="backgroundImage_other">
                <div 
                v-for="(item, index) in chooseRoom.backgroundList"
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
            totalRooms: [
                {
                    name: 'standardSingle', 
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room1.png')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room2.png')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room3.png')})`},
                ]},
				{ 
                    name: 'classicSingle',
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room4.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room5.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room6.jpg')})`},
                ]},
				{ 
                    name: 'deluxeSingle',
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room7.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room8.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room9.jpg')})`},
                ]},
				{ 
                    name: 'standardTwin',
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room10.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room11.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room12.jpg')})`},
                ]},
				{ 
                    name: 'classicTwin',
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room13.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room14.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room15.jpg')})`},
                ]},
				{ 
                    name: 'deluxeTwin',
                    backgroundList:[
                    {buttonActive: true , imageUrl: `url(${require('../backgroundImage/images/room16.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room17.jpg')})`},
                    {buttonActive: false, imageUrl: `url(${require('../backgroundImage/images/room18.jpg')})`},
                ]},
            ],
        }
    },
    methods: {
        backgroundController: function(index) {
            for(var vm of this.chooseRoom.backgroundList){
                vm.buttonActive = false;
            }
            this.chooseRoom.backgroundList[index].buttonActive = true;
            this.buttonActiveNumber = index;
        }
    },
    computed: {
        chooseRoom: function(){
            return this.totalRooms.find( (item) => item.name === this.$route.query.name)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>