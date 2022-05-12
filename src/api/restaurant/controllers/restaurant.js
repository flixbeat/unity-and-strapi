'use strict';

/**
 *  restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) =>  ({
	async GetData(ctx){
		// var data = await strapi.service('api::restaurant.restaurant').find({name:""});
		// console.log(data);
		// var modList = [];

		// data.results.forEach((test) => {
		// 	modList.push({
		// 		name: test.name,
		// 		description: test.description
		// 	});
		// });
		// return modList;
		const entry = await strapi.db.query('api::restaurant.restaurant').findOne({
			orderBy: {id:'desc'},
		  });
		
		return entry;
	},

	async GetIdByName(ctx)
	{
		const entry = await strapi.db.query('api::restaurant.restaurant').findOne({
			orderBy: {id:'desc'},
		  });
		
		return entry;
	},

	async GetAllRecords(ctx)
	{
		const entries = await strapi.db.query("api::restaurant.restaurant").findMany({
			select: "*",
			populate: {category: true}
		});

		return entries;
	},

	async GetFirstRecord(ctx)
	{
		const firstRecord = await strapi.db.query("api::restaurant.restaurant").findOne({
			select: ["name", "description"],
			where: {id: 1},
			populate: { category: true }
		});

		return firstRecord;
	},

	async CreateRecord(ctx)
	{
		const { name, description} = ctx.request.body;
		
		const entry = await strapi.db.query("api::restaurant.restaurant").create({
		data: {
				name: name,
				description: description
			}
		});

		return ctx.response.status=200;
	},

	async UpdateRecord(ctx)
	{
		const { id, name, description} = ctx.request.body;

		const entry = await strapi.db.query("api::restaurant.restaurant").update({
			where: { id: id },
			data: 
			{
				name: name,
				description: description
			}
		});

		return ctx.response.status=200;
	},

	async DeleteRecord(ctx){
		const { id } = ctx.request.body;

		const entry = await strapi.db.query("api::restaurant.restaurant").delete({
			where: { id: id },
		});

		return ctx.response.status=200;
	}

}));
