-- Insert sample hotels and condominiums in Iloilo Province
-- These are representative accommodations for the MVP

insert into accommodations (name, address, phone, email, photo_url, description, type) values
(
  'Hotel del Rio',
  'M.H. del Pilar Street, Iloilo City',
  '+63 33 337 3031',
  'info@hoteldelrio.com',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'A historic hotel in Iloilo City offering comfortable rooms, a restaurant, and easy access to the city center and tourist attractions.',
  'hotel'
),
(
  'Richmond Hotel',
  'General Luna Street, Iloilo City',
  '+63 33 335 8888',
  'reservations@richmondhotel.ph',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  'A modern hotel in the heart of Iloilo City featuring well-appointed rooms, an infinity pool, and proximity to shopping and dining.',
  'hotel'
),
(
  'Seda Atria',
  'Atria Park District, San Miguel, Iloilo City',
  '+63 33 320 9888',
  'sedaiatrate@sedahotels.com',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  'A contemporary hotel located in the Atria Park District, offering stylish accommodations, a rooftop bar, and modern amenities.',
  'hotel'
),
(
  'Grand Xing Imperial Hotel',
  'Iznart Street, Iloilo City',
  '+63 33 337 9999',
  'info@grandxingimperial.com',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
  'A luxury hotel in downtown Iloilo City with elegant rooms, fine dining, and a central location perfect for business and leisure travelers.',
  'hotel'
),
(
  'Injap Tower Hotel',
  'Diversion Road, Mandurriao, Iloilo City',
  '+63 33 501 8888',
  'reservations@injaptowerhotel.com',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  'A high-rise hotel near SM City Iloilo offering modern rooms, a gym, and convenient access to shopping malls and the airport.',
  'hotel'
),
(
  'Sheraton Iloilo',
  'Diversion Road, Mandurriao, Iloilo City',
  '+63 33 337 8888',
  'reservations.sheratoniloilo@marriott.com',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
  'An international standard hotel featuring spacious rooms, multiple dining options, a pool, and premium amenities in Iloilo City.',
  'hotel'
),
(
  'Citi Residences',
  'Gen. Hughes Street, Iloilo City',
  '+63 33 337 1111',
  'info@citiresidences.com',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  'A modern condominium offering serviced apartments for short and long-term stays, with full kitchen and living areas.',
  'condominium'
),
(
  'The Venue',
  'Diversion Road, Mandurriao, Iloilo City',
  '+63 33 501 2222',
  'info@thevenueiloilo.com',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  'A condominium complex with studio and one-bedroom units, offering a swimming pool, gym, and proximity to business districts.',
  'condominium'
);
