import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

import one from "../assets/images/fakeImages/one.jpg";
import two from "../assets/images/fakeImages/two.jpg";
import three from "../assets/images/fakeImages/three.jpg";
import four from "../assets/images/fakeImages/four.jpg";
import five from "../assets/images/fakeImages/five.jpg";
import six from "../assets/images/fakeImages/six.jpg";
import seven from "../assets/images/fakeImages/seven.jpg";
import eight from "../assets/images/fakeImages/eight.jpg";
import nine from "../assets/images/fakeImages/nine.jpg";
import ten from "../assets/images/fakeImages/ten.jpg";

/**
 * Generates mock places dynamically based on a type and current location.
 * @param {string} type 
 * @param {{lat: number, lng: number}} currentLocation 
 * @param {number} count 
 * @returns {Place[]}
 */

export const generateMockPlaces = (type, currentLocation, count = 20) => {
  const fakeNames = [
    "Prime Gym",
    "Fitness Hub",
    "Yoga Bliss",
    "Body Sculpt Studio",
    "Powerhouse Gym",
    "Flex Zone",
    "Pulse Fitness",
    "Zen Retreat",
    "Core Strength",
    "Ultimate Fit",
    "Fit Factory",
    "Health Haven",
    "The Training Ground",
    "Vitality Center",
    "Iron Paradise",
    "Peak Performance",
    "Balance Studio",
    "Athletic Club",
    "CrossFit Max",
    "Sweatbox",
  ];

  const fakeAddresses = [
    "123, Main Street, Alder Court, CF11 9AA",
    "456, Elm Street, Pine City, CF12 3BB",
    "789, Pine Avenue, Birch Town, CF13 5CC",
    "101, Maple Road, Maple City, CF14 7DD",
    "202, Oak Lane, Alder Court, CF15 9EE",
    "303, Cedar Way, Pine City, CF16 1FF",
    "404, Birch Blvd, Birch Town, CF17 2GG",
    "505, Ash Drive, Maple City, CF18 3HH",
    "606, Walnut Court, Alder Court, CF19 4II",
    "707, Cherry Plaza, Pine City, CF20 5JJ",
    "808, Willow Crescent, Birch Town, CF21 6KK",
    "909, Palm Street, Maple City, CF22 7LL",
    "123, Spruce Circle, Alder Court, CF23 8MM",
    "234, Magnolia Square, Pine City, CF24 9NN",
    "345, Redwood Parkway, Birch Town, CF25 0OO",
    "456, Poplar Avenue, Maple City, CF26 1PP",
    "567, Cypress Street, Alder Court, CF27 2QQ",
    "678, Dogwood Lane, Pine City, CF28 3RR",
    "789, Hickory Trail, Birch Town, CF29 4SS",
    "890, Alder Court, Maple City, CF30 5TT",
  ];

  const fakeOpeningHours = [
    "Mon-Fri: 9am - 6pm",
    "Mon-Fri: 8am - 8pm",
    "Mon-Sun: 10am - 7pm",
    "Closed on weekends",
  ];

  const fakeImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ];

  const getRandomCoordinate = (center, radius = 0.01) => {
    return center + (Math.random() - 0.5) * radius * 2;
  };

  const mockPlaces = [];
  for (let i = 0; i < count; i++) {
    const randomName = faker.helpers.arrayElement(fakeNames);
    const randomAddress = faker.helpers.arrayElement(fakeAddresses);
    const [number, street, city, postcode] = randomAddress.split(", ");

    const latitude = getRandomCoordinate(currentLocation.lat);
    const longitude = getRandomCoordinate(currentLocation.lng);

    const randomOpeningHours = fakeOpeningHours[Math.floor(Math.random() * fakeOpeningHours.length)];

    mockPlaces.push({
      id: parseInt(uuidv4().replace(/-/g, ''), 16),
      name: randomName,
      address: `${number} ${street}`.trim() || "Unknown Address",
      city: city || "Unknown City",
      postcode: postcode || "Unknown Postcode",
      typeId: type, 
      type: type,
      latitude: latitude,
      longitude: longitude,
      description: faker.lorem.sentence(),
      rating: faker.number.int({ min: 1, max: 5 }),
      phone: faker.phone.number({ style: 'international' }), 
      openingHours: faker.helpers.arrayElement(fakeOpeningHours),
      photo: faker.helpers.arrayElement(fakeImages),
      website: faker.internet.url(),
    });
  }

  return mockPlaces;
};
