<template>
    <div>
        <!-- Authors Table -->
        <a-row :gutter="24" type="flex">
            <!-- Authors Table Column -->
                <a-col :span="24" class="mb-24">
                    <!-- Authors Table Card -->
                    <CardSuperMarchant
                        :data="tableSuperMarchantData"
                        :columns="tableSuperMarchantColumns"
				    ></CardSuperMarchant>
                    <!-- /Authors Table Card -->
                </a-col>
            <!-- /Authors Table Column -->
        </a-row>
        <!-- /Authors Table -->
    </div>
</template>

<script>
    // "Authors" table component.
	import CardSuperMarchant from '../components/Cards/CardSuperMarchant' ;

    // "Authors" table list of rows and their properties.
	const tableSuperMarchantData = [
		{
			key: '1',
			author: {
				avatar: 'images/face-2.jpg',
				name: 'Michael John',
				email: 'michael@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 1,
			employed: '23/04/18',
		},
		{
			key: '2',
			author: {
				avatar: 'images/face-3.jpg',
				name: 'Alexa Liras',
				email: 'alexa@mail.com',
			},
			func: {
				job: 'Programator',
				department: 'Developer',
			},
			status: 0,
			employed: '23/12/20',
		},
		{
			key: '3',
			author: {
				avatar: 'images/face-1.jpg',
				name: 'Laure Perrier',
				email: 'laure@mail.com',
			},
			func: {
				job: 'Executive',
				department: 'Projects',
			},
			status: 1,
			employed: '13/04/19',
		},
		{
			key: '4',
			author: {
				avatar: 'images/face-4.jpg',
				name: 'Miriam Eric',
				email: 'miriam@mail.com',
			},
			func: {
				job: 'Marketing',
				department: 'Organization',
			},
			status: 1,
			employed: '03/04/21',
		},
		{
			key: '5',
			author: {
				avatar: 'images/face-5.jpeg',
				name: 'Richard Gran',
				email: 'richard@mail.com',
			},
			func: {
				job: 'Manager',
				department: 'Organization',
			},
			status: 0,
			employed: '23/03/20',
		},
		{
			key: '6',
			author: {
				avatar: 'images/face-6.jpeg',
				name: 'John Levi',
				email: 'john@mail.com',
			},
			func: {
				job: 'Tester',
				department: 'Developer',
			},
			status: 0,
			employed: '14/04/17',
		},
	];
	
	// "Authors" table list of columns and their properties.
	const tableSuperMarchantColumns = [
		{
			title: 'AUTHOR',
			dataIndex: 'author',
			scopedSlots: { customRender: 'author' },
		},
		{
			title: 'FUNCTION',
			dataIndex: 'func',
			scopedSlots: { customRender: 'func' },
		},
		{
			title: 'STATUS',
			dataIndex: 'status',
			scopedSlots: { customRender: 'status' },
		},
		{
			title: 'EMPLOYED',
			dataIndex: 'employed',
			class: 'text-muted',
		},
		{
			title: '',
			scopedSlots: { customRender: 'editBtn' },
			width: 50,
		},
	];

    export default ({
		components: {
			CardSuperMarchant,
		},
		data() {
			return {
				// Associating "Authors" table data with its corresponding property.
				tableSuperMarchantData: tableSuperMarchantData,

				// Associating "Authors" table columns with its corresponding property.
				tableSuperMarchantColumns: tableSuperMarchantColumns,

			}
		},
	})

</script>
<style lang="scss">
</style>
