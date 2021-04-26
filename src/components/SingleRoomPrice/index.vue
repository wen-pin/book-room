<template>
    <div>
        <div class="bookRoom_bookingRoom_price">
            <span class="bookRoom_bookingRoom_price_money">{{ computeRoomPrice() }}</span>
            <span class="bookRoom_bookingRoom_price_day">{{ totalDays.days }}</span>
        </div>
        <button class="bookRoom_bookingRoom_btn">
            Booking Now
        </button>
    </div>
</template>

<script>

export default {
    data (){
        return {
            totalDays: {
                days: 1,
                normalDays: 1,
                holidays: 0,
            },
            today: new Date,
        }
    },
    computed: {
        totalDay (){
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
        totalDay: function(){
            this.totalDays.days = this.totalDay.day
            this.totalDays.normalDays = this.totalDay.normalDay
            this.totalDays.holidays = this.totalDay.holiday
        }
    },
    methods: {
        computeRoomPrice () {
            return (this.totalDays.normalDays * 1300) + (this.totalDays.holidays * 1500)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
