
import  friendsScuba   from "../assets/images/friendsScuba.jpg";
import honeymoon from '../assets/images/Tourism-Honeymoon.jpg'
import fam from '../assets/images/fam.jpg'
import { bangaram, couple, groupScuba, kayaking, minicoy, scubaActivity, snorkeling, thinnakkara } from "../assets/Index";


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
    image: honeymoon,
    bgvideo:couple,
    offer: "15%",
    specification:" permit,5 star Accomadation, Local Guide,professional Photography Section,Snorkeling,",
    days:"4 Days 3 Nights",
    activitys:"Snorkeling,Scuba dive",
    places:"Thinnakkara, Bangaram",
    price:"25000 per couple",
    description: "Embark on a romantic getaway with our exclusive Couple Package, offering a 15% discount for a limited time. This 4-day, 3-night adventure is priced at ₹25,000 per couple and promises an unforgettable experience in the stunning locales of Thinnakkara and Bangaram.",
    plan:[
      {
        day:1,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:[{
          placeName:"bangaram island",
          placeImage:bangaram
        },
        {
          placeName:"Kavarathy",
          placeImage:thinnakkara
        },
        {
          placeName:"minicoy",
          placeImage:minicoy
        }

      ],
      activities:[{
        activityName:"Snorkeling",
        activityImage:snorkeling
      },
      {
        activityName:"kayaking",
        activityImage:kayaking
      },
      {
        activityName:"Scuba Dive",
        activityImage:scubaActivity
      }
      


    ],

      },
      {
        day:2,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Resort",
        placesVistiting:[{
          placeName:"bangaram island",
          placeImage:bangaram
        },
        {
          placeName:"Kavarathy",
          placeImage:thinnakkara
        }
      ],
        activities:[{
          activityName:"Snorkeling",
          activityImage:snorkeling
        },
        {
          placeName:"kayaking",
          placeImage:kayaking
        }
      ],

      },
      {
        day:3,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Resort",
        placesVistiting:[{
          placeName:"bangaramd",
          placeImage:bangaram
        },
        {
          placeName:"Kavarathy",
          placeImage:thinnakkara
        }
      ],
      activities:[{
        activityName:"Snorkeling",
        activityImage:snorkeling
      },
      {
        placeName:"kayaking",
        placeImage:kayaking
      }
    ],

      }
    ],
  },
  {
    id: "friends",
    title: "Friends Adventure",
    description: "4 Nights 3-Day, food_and_Resort, water-sports, explore islands",
    image: friendsScuba,
    bgvideo:groupScuba,
    offer: "13%",
    specification:" permit,5 star Accomadation, Local Guide, Photography,Snorkeling,",
    days:"4 Days 3 Nights",
    activitys:"Snorkeling,Scuba dive",
    places:"Thinnakkara, Bangaram",
    price:"25000 per couple",
    description: "4 Nights 3-Day, food_and_Resort, couple-photography, water-adventure",
    plan:[
      {
        day:1,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      },
      {
        day:2,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      },
      {
        day:3,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      }
    ],
  },
  {
    id: "family",
    title: "My Fam",
    image: fam,
    offer: "10%",
    description: "4 Nights 3-Day, food_and_Resort,explore islads, local guide",
    specification:" permit,5 star Accomadation, Local Guide, Photography,Snorkeling,",
    days:"4 Days 3 Nights",
    activitys:"Snorkeling,Scuba dive",
    places:"Thinnakkara, Bangaram",
    price:"25000 per couple",
    description: "4 Nights 3-Day, food_and_Resort, couple-photography, water-adventure",
    plan:[
      {
        day:1,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      },
      {
        day:2,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      },
      {
        day:3,
        food:"Breakfast, Lunch, Dinner ",
        accomadation:"5 star Accomadation",
        placesVistiting:"bangaram island, Permit varification",
        activities:"Snorkeling,campfire,"

      }
    ],
  },
];

export const featers = [
    {
      id: "vehicle",
      title: "vehicle",
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
        title: "Snorkeling",
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