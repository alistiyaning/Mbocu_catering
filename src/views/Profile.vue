<!-- 
	This is the user profile page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>
<br><br>
		<!-- Header Background Image -->
		<div>
		<!-- / Header Background Image -->

		<!-- User Profile Card -->
		<a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
			<template #title>
				<a-row type="flex" align="middle">
					<a-col :span="24" :md="12" class="col-info">
						<a-avatar :size="74" shape="square" src="images/face-1.jpg" />
						<div class="avatar-info">
							<h4 class="font-semibold m-0">Sarah Jacob</h4>
							<p>CEO / Co-Founder</p>
						</div>
					</a-col>
				</a-row>
				<hr class="my-25">
								<a-descriptions title="Profil Information" :column="1">
									<a-descriptions-item label="Username">
										Sarah Emily Jacob
									</a-descriptions-item>
									<a-descriptions-item label="Email">
										(44) 123 1234 123
									</a-descriptions-item>
									<a-descriptions-item label="No Telfon">
										sarahjacob@mail.com
									</a-descriptions-item>
								</a-descriptions>
			</template>
		</a-card>
		<!-- User Profile Card -->
		</div>
		<a-row>
			<!-- Platform Settings Column -->
			<a-col :span="24" :md="8" class="mb-24">

			</a-col>
			<!-- / Platform Settings Column -->

		</a-row>

	</div>
</template>

<script>
	import CardProfileInformation from "../components/Cards/CardProfileInformation"
	import CardConversations from "../components/Cards/CardConversations"

	export default ({
		components: {
			CardProfileInformation,
			CardConversations,
		},
		data() {
			return {
				// Active button for the "User Profile" card's radio button group.
				profileHeaderBtns: 'overview',

				// Associating Conversation's list data with its corresponding property.
				conversationsData,

				// Project cards data
				projects,
			}
		},
	})

</script>

<style lang="scss">
</style>