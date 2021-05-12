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
        filtertotalDay (){
            if (this.$route.params.info) {
                return JSON.parse(this.$route.params.info)
            }
            return 0
        },
        // totalDay (){
        //     return this.$route.params?.totalDays ?? 1
        // },
        // normalDay (){
        //     return this.$route.params?.normalDays ?? 0
        // },
        // holiday (){
        //     console.log(this.$route.params?.holidays)
        //     return this.$route.params?.holidays ?? 0
        // },
    },
    watch: {
        filtertotalDay: function(){
            for(const item in this.totalDay){
                this.totalDay[item] = this.filtertotalDay[item]
            }
        }
    },
    methods: {
        computeRoomPrice () {
            return (this.totalDay.normalDay * 1200) + (this.totalDay.holiday * 1500)
        },
        bookingBtn (){
            if(this.provideDayTotals.dayTotals > 0){
            this.openOrder = !this.openOrder
            this.$router.push({ params: {booking: this.openOrder} })
            }else{
                alert("請先選擇日期")
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
