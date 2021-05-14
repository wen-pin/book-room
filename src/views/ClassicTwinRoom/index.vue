<template>
	<div class="singleRoom">
		<article class="bookRoom">
		<BackgroundImage />
		<i class="fas fa-times"></i>
		</article>
		<article class="roomDate">
		<RoomDate
			@chooseDateEmit="getChooseDate"
			@chooseDaytotalEmit="getChooseDaytotal"
		/>
		</article>
		<div class="orderGrid" :class="{ 'displayNone' : openBox === false }">
			<div class="orderGrid_orderBox">
				<div class="orderGrid_orderBox_form">
					<form action="" class="orderGrid_orderBox_form_context">
						<label for="forName" class="labelTitle">姓名</label>
						<input type="text" id="forName" class="labelInput" v-model="form.name">
						<label for="forTel" class="labelTitle">手機號碼</label>
						<input type="text" id="forTel" class="labelInput" v-model="form.tel">
						<label for="formCheckIn" class="labelTitle">入住日期</label>
						<input type="text" id="formCheckIn" class="labelInput" :value="chooseDate.startDate" disabled>
						<label for="formCheckOut" class="labelTitle">退房日期</label>
						<input type="text" id="formCheckOut" class="labelInput" :value="chooseDate.endDate" disabled>
						<span class="form_dayAndNight">總計：{{ bookDay.day }}天 ,平日：{{ bookDay.normalDay }}天,假日：{{ bookDay.holiday }}天</span>
						<div class="form_total">
							<span>總計</span>
							<span>{{ getRoomPrice() }}元</span>
						</div>
						<button class="form_submit" @click.prevent="controlOrder" >確定送出</button>
						<p class="form_remakes">此預約系統僅預約功能，並不會對您進行收費</p>
					</form>
				</div>
				<div class="orderGrid_orderBox_roomDate">
					<div class="orderGrid_orderBox_roomDate_cancel">
						<i class="fas fa-times fa-lg" @click="closeOrder"></i>
					</div>
					<div class="orderGrid_orderBox_roomDate_head orderBox">
						<h2>Classic Twin Room</h2>
						<div class="orderGrid_orderBox_roomDate_head_content">
							<span>1~1人·1床·附早餐·衛浴1間·18平方公尺</span>
							<span>平日（一～四）價格：2800 / 假日（五〜日）價格：3100</span>
						</div>
						<div class="orderGrid_orderBox_roomDate_head_icons" v-for="item in 10" :key="item">
							<img :src="require(`../SingleRoom/icons/icon${item}.svg`)" alt="">
						</div>
					</div>
					<div class="orderGrid_orderBox_roomDate_context orderBox">
						<h2>訂房資訊</h2>
						<ul>
							<li>入住時間：最早 15:00，最晚 19:00；退房時間：10:00，請自行確認行程安排。</li>
							<li>平日定義週一至週四；假日定義週五至週日及國定假日。</li>
							<li>好室旅店全面禁止吸菸。</li>
							<li>若您有任何問題，歡迎撥打 04-1234567 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
						</ul>
					</div>
					<div class="orderGrid_orderBox_roomDate_process orderBox">
						<h2>預約流程</h2>
						<div class="orderGrid_orderBox_roomDate_process_box">
							<div class="orderGrid_orderBox_roomDate_process_box_box">
								<div class="process_box_icon">
									<img src="./icons/process1.svg" alt="">
								</div>
								<div class="process_box_content">
									<span class="process_box_text">送出線上預約單</span>
								</div>
							</div>
							<div class="process_arrow">
								<img src="./icons/surface1.svg" alt="">
							</div>
							<div class="orderGrid_orderBox_roomDate_process_box_box">
								<div class="process_box_icon">
									<img src="./icons/process2.svg" alt="">
								</div>
								<div class="process_box_content">
									<span class="process_box_text">系統立即回覆是否預訂成功</span>
									<span class="process_box_text">並以簡訊發送訂房通知</span>
									<span class="process_box_text">(若未收到簡訊請來電確認)</span>
								</div>
							</div>
							<div class="process_arrow">
								<img src="./icons/surface1.svg" alt="">
							</div>
							<div class="orderGrid_orderBox_roomDate_process_box_box">
								<div class="process_box_icon">
									<img src="./icons/process3.svg" alt="">
								</div>
								<div class="process_box_content">
									<span class="process_box_text">入住當日憑訂房通知</span>
									<span class="process_box_text">以現金或刷卡付款即可</span>
									<span class="process_box_text">(僅接受VISA.JCB.銀聯卡)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="orderGrid_backgroundColor" :class="{ 'displayNone' : orderRoom }">
				<div class="orderGrid_checkOrder">
					<div class="checkOrder_cancel" @click.prevent="cancelOrder" >
						<i class="fas fa-times fa-lg"></i>
					</div>
					<div class="checkOrder_content">
						<div class="checkOrder_content_icon">
							<div class="hook">
								<img src="./icons/sucess1.svg" alt="">
							</div>
							<div class="order">
								<img class="order" src="./icons/sucess2.svg" alt="">
							</div>
						</div>
						<div class="checkOrder_content_title">
							<h3>預約成功</h3>
						</div>
						<div class="checkOrder_content_text">
							<p>請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，</p>
							<p>若未收到簡訊請來電確認，謝謝您</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import BackgroundImage from '../../components/ClassicTwinRoom/backgroundImage/index.vue'
import RoomDate from '../../components/ClassicTwinRoom/roomDate/index.vue'

export default {
	name: 'SingleRoom',
	components: {
		BackgroundImage,
		RoomDate,
	},
	data (){
		return{
			form: {
				name: '',
				tel: '',
			},
			bookDay: {
				day: '',
				normalDay: '',
				holiday: '',
			},
			openBox: false,
			chooseDate: {
				startDate: '',
				endDate: '',
			},
			orderRoom: true,
			dayTotal: {
				dayTotals: ''
			},
		}
	},
	provide(){
		return{
			provideDayTotals: this.dayTotal
		}
	},
	methods: {
		getRoomPrice () {
            return (this.bookDay.normalDay * 2800) + (this.bookDay.holiday * 3100)
        },
		closeOrder (){
			this.openBox = !this.openBox
		},
		getChooseDate (val){
			this.chooseDate.startDate = val[0]
			this.chooseDate.endDate = val[val.length - 1]
		},
		controlOrder (){
			this.orderRoom = !this.orderRoom
		},
		cancelOrder (){
			this.orderRoom = !this.orderRoom
		},
		getChooseDaytotal (val){
			this.dayTotal.dayTotals = val
		},
	},
	computed: {
		openOrder: function(){
			return this.$route.params?.booking ?? false
		},
		getDay: function(){
            if (this.$route.params.info) {
                return JSON.parse(this.$route.params.info)
            }
            return 0
        },
	},
	watch: {
		getDay: function(){
			for(const item in this.bookDay){
				this.bookDay[item] = this.getDay[item]
			}
		},
		openOrder: function (){
			this.openBox = this.openOrder
		},
	},
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>