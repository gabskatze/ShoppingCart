var items = [
	{
		id:1,
	    myimg: "images/shoes1.jpg",
	    myprice: 789,
	    mydetails: ['Man Made Material', 'FITTING TIPS: TRUE TO SIZE, WIDE WIDTH CUSTOMERS ORDER HALF SIZE UP', 'Heel height: 5" (approx)',
	    'Platform height: 1.25" (Approx)', 'Removabel ankle strap for classic slip on look', 'Finished with a slightly padded faux leather insole'
	    ]
	},
	{
		id:2,
	    myimg: "images/shoes2.jpg",
	    myprice: 542,
	    mydetails: ['string1', 'string2', 'string3']
	},
	{
		id:3,
	    myimg: "images/shoes3.jpg",
	    myprice: 623,
	    mydetails: ['string4', 'string5', 'string6']
	},
	{
		id:4,
	    myimg: "images/shoes4.jpg",
	    myprice: 840,
	    mydetails: ['string7', 'string8', 'string9']
	},
	{
		id:6,
	    myimg: "images/shoes5.jpg",
	    myprice: 450,
	    mydetails: ['string10', 'string11', 'string12']
	}
];

function getProductFromList(id){
	for(var i = 0; i < items.length; i++){
		if(items[i].id == id){
			return items[i];
		}
	}
	return null;
};
