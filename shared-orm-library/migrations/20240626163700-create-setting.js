"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Settings", {
			config_name: {
				type: Sequelize.STRING,
				allowNull: false,
				index: true,
			},
			config_value: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
		});
    const settings = [];
    settings.push(
				{
					config_name: "isNotificationEnabled",
					config_value: "yes",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					config_name: "isNewDashboardEnabled",
					config_value: "yes",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					config_name: "timezone",
					config_value: "Asia/Kolkata",
					createdAt: new Date(),
					updatedAt: new Date(),
				}
    );
		await queryInterface.bulkInsert("Settings", settings, {});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Settings");
	},
};
