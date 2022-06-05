addLayer("$", {
    name: "dollar", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "$", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	upgrades: {
		11: {
			title: "Dollar Production",
    		description: "Starts.",
    		cost: new Decimal(1),
        },
		12: {
			title: "+2",
    		description: "whats this",
    		cost: new Decimal(20),
        },
		13: {
			title: "Triple  Gain",
    		description: "triple?",
    		cost: new Decimal(30),
        },
		14: {
			title: "Triple  Gain",
    		description: "another triple?",
    		cost: new Decimal(30),
        },
		15: {
			title: "x10 Mulit",
    		description: "x10 this known",
    		cost: new Decimal(1000),
        },
		21: {
			title: "x20 Mulit",
    		description: "did alerting",
    		cost: new Decimal(1e7),
        },
		22: {
			title: "Increasing for Mulit",
    		description: "x1e7 this known",
    		cost: new Decimal(1e12),
        },
		23: {
			title: "x15 mulit",
    		description: "x15 this known?",
    		cost: new Decimal(1e17),
        },
		24: {
			title: "Powe^2 of mulit",
    		description: "x1e10 this known?",
    		cost: new Decimal(1e25),
        },
		31: {
			title: "Tertate of Mulit",
    		description: "what dosent xee12519?",
    		cost: new Decimal("1e400"),
        },
		32: {
			title: "Ultimate Upgrade!?!?!?!?",
    		description: "to win for double",
    		cost: new Decimal("eeee308"),
        },
    },
})
