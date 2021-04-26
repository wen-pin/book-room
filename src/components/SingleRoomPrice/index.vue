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
                normalDays: 0,
                holidays: 0,
            },
            today: new Date(),
        }
    },
    created() {
            if(this.today.getDay() === (1 || 2 || 3 || 4)){
                this.totalDays.normalDays = 1
            }else if(this.today.getDay() === (0 || 5 || 6)){
                this.totalDays.holidays = 1
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
