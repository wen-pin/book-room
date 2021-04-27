<template>
    <div>
        <div class="banner">
            <h1>Standard Double Room</h1>
            <span>1~1人·1床·附早餐·衛浴1間·18平方公尺</span>
            <div class="roomData_text1">
                <p>平日（一～四）價格：1200 / 假日（五〜日）價格：1500</p>
                <p>入住時間：15:00（最早）/ 19:00（最晚）</p>
                <p>退房時間：10:00</p>
            </div>
            <div class="roomData_text2">
                <ul>
                    <li>單人間僅供一位客人使用。</li>
                    <li>臥室配有單人床和私人浴室。</li>
                    <li> 您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。 </li>
                    <li> 房間裡有AC，當然還有WiFi。</li>
                </ul>
            </div>
            <div class="roomData_icons">
                <div class="roomData_icons_box" v-for="item in 12" :key="item">
                    <img :src="require(`../roomDate/icons/icon${item}.svg`)" alt="">
                    <div class="roomData_icons_box_own">
                        <img src="./icons/icon98.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="roomData_monthly">
                <p class="roomData_monthly_title">空房狀態查詢</p>
                <div class="roomData_monthly_date">
                    <v-date-picker
                        color="green"
                        v-model="range"
                        is-range
                        :columns="$screens({ default: 1, lg: 2 })"
                        is-expanded
                        :min-date='new Date()'
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            range: new Date(),
        }
    },
    computed: {
        chooseDaytotal: function (){
            if(!this.range.end || !this.range.start){
                return 0
            }else{
                let i = 0
                let totalDay = []
                let endTime = this.range.end.getTime()
                let startTime = this.range.start.getTime()
                while((endTime-startTime) >= 0){
                    totalDay[i] = startTime
                    startTime += 86400000
                    i +=1
                }return totalDay.length
            }
        },
        distinguishNormalDay: function (){
            if(!this.range.end || !this.range.start){
                return 0
            }else{
                let i = 0
                let date = ''
                let week = ''
                let normalDay = []
                let allWeek = []
                let endTime = this.range.end.getTime()
                let startTime = this.range.start.getTime()
                while((endTime-startTime) >= 0){
                    date = new Date(startTime)
                    week = date.getDay().toString()
                    allWeek[i] = week
                    startTime += 86400000
                    i +=1
                }
                normalDay = allWeek.filter(function(week){
                    return week.match(/[1-4]/)
                })
                return normalDay.length
            }
        },
        distinguishholiday: function (){
            if(!this.range.end || !this.range.start){
                return 0
            }else{
                let i = 0
                let date = ''
                let week = ''
                let holiday = []
                let allWeek = []
                let endTime = this.range.end.getTime()
                let startTime = this.range.start.getTime()
                while((endTime-startTime) >= 0){
                    date = new Date(startTime)
                    week = date.getDay().toString()
                    allWeek[i] = week
                    startTime += 86400000
                    i +=1
                }
                holiday = allWeek.filter(function(week){
                    return week.match(/[0|5|6]/)
                })
                return holiday.length
            }
        },
        // chooseDayTotal: function (){
        //     if(!this.range.end || !this.range.start) return 0
        //     const endTime = this.range.end.getTime()
        //     const startTime = this.range.start.getTime()
        //     return Math.floor((endTime - startTime) / (24*3600*1000)) + 1
        // },
    },
    watch: {
        'range.start': function(){
            const vm = this
            const info = {
                day: vm.chooseDaytotal,
                normalDay: vm.distinguishNormalDay,
                holiday: vm.distinguishholiday,
            }
            this.$router.push({ 
                params: {
                    info: JSON.stringify(info),
                },
            });
        }
        // chooseDaytotal: function (val){
        //     this.$router.push({ params: {totalDays: val} });
        // },
        // distinguishNormalDay: function(val){
        //     this.$router.push({ params: {normalDays: val} });
        // },
        // distinguishholiday: function (val){
        //     this.$router.push({ params: {holidays: val} });
        // },
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>