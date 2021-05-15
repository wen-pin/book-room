<template>
    <div>
        <div class="bookRoom_bookingRoom_price">
            <span class="bookRoom_bookingRoom_price_money">{{ computeRoomPrice() }}</span>
            <span class="bookRoom_bookingRoom_price_day">{{ totalDay.day }}</span>
        </div>
        <button 
            class="bookRoom_bookingRoom_btn" 
            @click.prevent="bookingBtn" 
        >
            Booking Now 
        </button>
    </div>
</template>

<script>

export default {
    name: 'roomPrice',
    data (){
        return {
            totalDay: {
                day: 1,
                normalDay: 0,
                holiday: 0,
            },
            week: new Date().getDay(),
            filternormalWeek: [1, 2, 3, 4],
            openOrder: false,
            totalRooms: [
                { name: 'standardSingle',roomTitle: 'Standard Single Room', normalDayPrice: 1200, holidayPrice: 1500 },
				{ name: 'classicSingle',roomTitle: 'Classic Single Room', normalDayPrice: 1600, holidayPrice: 1900 },
                { name: 'deluxeSingle',roomTitle: 'Deluxe Single Room', normalDayPrice: 2000, holidayPrice: 2300 },
                { name: 'standardTwin',roomTitle: 'Standard Twin Room', normalDayPrice: 2400, holidayPrice: 2700 },
                { name: 'classicTwin',roomTitle: 'Classic Twin Room', normalDayPrice: 2800, holidayPrice: 3100 },
                { name: 'deluxeTwin',roomTitle: 'Deluxe Twin Room', normalDayPrice: 3200, holidayPrice: 3500 },
            ],
        }
    },
    inject: [
        'provideDayTotals'
    ],
    created() {
        if(this.filternormalWeek.includes(this.week)){
            this.totalDay.normalDay = 1
            this.totalDay.holiday = 0
        }else{
            this.totalDay.normalDay = 0
            this.totalDay.holiday = 1
        }
    },
    computed: {
        chooseRoom (){
            return this.totalRooms.find( (item) => item.name === this.$route.query.name)
        },
        filtertotalDay (){
            if (this.$route.params.info) {
                return JSON.parse(this.$route.params.info)
            }
            return 0
        },
    },
    watch: {
        filtertotalDay: function(){
            for(const item in this.totalDay){
                this.totalDay[item] = this.filtertotalDay[item]
            }
        },
        $route: function () {
            // console.log(this.$route.query.name);
            // console.log(this.chooseRoom);
        },
    },
    methods: {
        computeRoomPrice () {
            return (this.totalDay.normalDay * this.chooseRoom.normalDayPrice) + (this.totalDay.holiday * this.chooseRoom.holidayPrice)
        },
        bookingBtn (){
            if(this.provideDayTotals.dayTotals > 0){
            this.openOrder = !this.openOrder
            this.$router.replace({
                query: { name : this.$route.query.name }, 
                params: {booking: this.openOrder} })
            }else{
                alert("請先選擇日期")
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
