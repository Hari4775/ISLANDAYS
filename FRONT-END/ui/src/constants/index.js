
import  friendsScuba   from "../assets/images/friendsScuba.jpg";
import honeymoon from '../assets/images/Tourism-Honeymoon.jpg'
import fam from '../assets/images/fam.jpg'
import { bangaram, couple, groupScuba, kayaking, map, minicoy, scubaActivity, snorkeling, thinnakkara, wifi } from "../assets/Index";


export const PackageData = [
  {
    id: "couple",
    title: "Couple Package",
    image: honeymoon,
    offer: "15%",
    description: "4 Nights 3-Day, food_and_Resort, couple-photography, water-adventure",
  },
  {
    id: "friends",
    title: "Friends Adventure",
    description: "4 Nights 3-Day, food_and_Resort, water-sports, explore islands",
    image: friendsScuba,
    offer: "13%",
  },
  {
    id: "family",
    title: "My Fam",
    image: fam,
    offer: "10%",
    description: "4 Nights 3-Day, food_and_Resort,explore islads, local guide",
  },
];

export const PackageDetail = [
  {
    id: "couple",
    title: "Couple Package",
    subtitle: "3-Night/4-Day 2-Night in Kavaratti 3-Night in Agatti",
    image: [honeymoon, honeymoon, honeymoon, honeymoon],
    trip_Plan: {
      points: [
        "Accommodation & All meals: Breakfast | Lunch | Dinner | Evening Tea or Coffee",
        "Agatti Island Tour",
        "Kalpitty Island - Rocky Island Tour"
      ],
     plan:[
        {
          day: 1,
          day_Heading:"Arrival at Agatti Airport",
          description:"Upon arrival at Agatti Airport, you'll be escorted to the Eastern Jetty for a speedboat transfer to Kavaratti Island (2-2.5 hours). At the hotel, you'll receive a warm welcome with a refreshing drink, followed by a briefing on the Holiday Home facilities. Spend your evening relaxing on the serene beaches of Kavaratti. Note: The above itinerary is subject to weather conditions and may be adjusted for your convenience & based on Ferry schedules.",
         images:[honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon],
          travel: [
            {
              mode: "Flight",
              from: "Kerala",
              to: "Lakshadweep",
              duration: "07h 15m",
              flight:[ 
                {
                number: "6E-2069",
                from: "New Delhi",
                to: "Lakshadweep",
                duration: "07h 15m",
                start_time: "05:45",
                start_date: "Tue, 01 Oct",
                reach_time: "09:45",
                reach_date: "Tue, 01 Oct",
                weight: "7 Kgs (1 piece only)"
              },
              {

                number: "6E-20644",
                from: "goa",
                to: "Lakshadweep",
                duration: "02h 15m",
                start_time: "05:45",
                start_date: "Tue, 01 Oct",
                reach_time: "09:45",
                reach_date: "Tue, 01 Oct",
                weight: "7 Kgs (1 piece only)"
              }
            ]
            },
          
          
          ],
          accommodation:[
           
             {
            type:"resort",
            hotel_name: "Dweep Mahal - Holidays Collections",
            hotel_image: honeymoon,
            rating: "****",
            location: "Kavaratti",
            booking_date: "1 October - 3 October",
            duration:"2 Night 1 day"
          }
        ],

          activity:[ 
            {
              name: "Beach Relaxation",
              description: "Spend the evening relaxing on the serene beaches of Kavaratti Island.",
              images: [honeymoon, honeymoon],
              duration:"2 hours",
              time:"afternoon"
            },
            {
              name: "Welcome Drink & Hotel Briefing",
              description: "Receive a warm welcome with a refreshing drink at the hotel, followed by a briefing on the facilities.",
              duration:"4 hours",
              time:"morning"

            }
          ],

          food:  ["breakfast", "lunch", "dinner- biriyani"]
          
        },


        {
          day: 2,
          day_Heading:"Arrival at Agatti Airport",
          description:"Upon arrival at Agatti Airport, you'll be escorted to the Eastern Jetty for a speedboat transfer to Kavaratti Island (2-2.5 hours). At the hotel, you'll receive a warm welcome with a refreshing drink, followed by a briefing on the Holiday Home facilities. Spend your evening relaxing on the serene beaches of Kavaratti. Note: The above itinerary is subject to weather conditions and may be adjusted for your convenience & based on Ferry schedules.",
         images:[honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon],
        
          accommodation:[ {
            hotel_name: "Dweep Mahal - Holidays Collections",
            hotel_image: honeymoon,
            stars: "****",
            location: "Kavaratti",
            booking_date: "1 October - 3 October, 2 Nights"
          }
        ],

          activity:[ 
            {
              name: "Beach Relaxation",
              description: "Spend the evening relaxing on the serene beaches of Kavaratti Island.",
              images: [honeymoon, honeymoon]
            },
            {
              name: "Welcome Drink & Hotel Briefing",
              description: "Receive a warm welcome with a refreshing drink at the hotel, followed by a briefing on the facilities."
            }
          ],

          food:  ["breakfast", "lunch", "dinner- biriyani"]
          
        },

        {
          day: 3,
          day_Heading:"Arrival at Agatti Airport",
          description:"Upon arrival at Agatti Airport, you'll be escorted to the Eastern Jetty for a speedboat transfer to Kavaratti Island (2-2.5 hours). At the hotel, you'll receive a warm welcome with a refreshing drink, followed by a briefing on the Holiday Home facilities. Spend your evening relaxing on the serene beaches of Kavaratti. Note: The above itinerary is subject to weather conditions and may be adjusted for your convenience & based on Ferry schedules.",
         images:[honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon,honeymoon],
          travel: [
            {
              mode: "Flight",
              from: "Kerala",
              to: "Lakshadweep",
              duration: "07h 15m",
              flight:[ 
                {
                number: "6E-2069",
                from: "New Delhi",
                to: "Lakshadweep",
                duration: "07h 15m",
                start_time: "05:45",
                start_date: "Tue, 01 Oct",
                reach_time: "09:45",
                reach_date: "Tue, 01 Oct",
                weight: "7 Kgs (1 piece only)"
              },
              {

                number: "6E-20644",
                from: "goa",
                to: "Lakshadweep",
                duration: "02h 15m",
                start_time: "05:45",
                start_date: "Tue, 01 Oct",
                reach_time: "09:45",
                reach_date: "Tue, 01 Oct",
                weight: "7 Kgs (1 piece only)"
              }
            ]
            },
          
          
          ],
          accommodation:[ {
            hotel_name: "Dweep Mahal - Holidays Collections",
            hotel_image: honeymoon,
            stars: "****",
            location: "Kavaratti",
            booking_date: "1 October - 3 October, 2 Nights"
          }
        ],

          activity:[ 
            {
              name: "Beach Relaxation",
              description: "Spend the evening relaxing on the serene beaches of Kavaratti Island.",
              images: [honeymoon, honeymoon]
            },
            {
              name: "Welcome Drink & Hotel Briefing",
              description: "Receive a warm welcome with a refreshing drink at the hotel, followed by a briefing on the facilities."
            }
          ],

          food:  ["breakfast", "lunch", "dinner- biriyani"]
          
        }
      ],
    
  }
}
]


export const featers = [
    {
      id: "vehicle",
      title: "vehicle",
      image:map
    },
    {
      id: "Resort",
      title: "5 star accomadation",
    },
    {
      id: "Food",
      title: "Food",
    },
    {
        id: "Local Guide",
        title: "Guide",
      },
      {
        id: "Pic up ",
        title: "pic up",
      },
      {
        id: "Snorkeling",
        title: map,
      },
      {
        id: "Scuba Dive",
        title: "Scuba Dive",
      },
      {
        id: "Perimit",
        title: "island Permit",
      },
      
  ];