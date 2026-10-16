-- Update existing mountain destinations with location values
-- Then add sample data for other categories

-- Update existing destinations to include location
update destinations set location = 'iloilo_province' where category = 'mountain';

-- Add Foods & Dine-ins
insert into destinations (name, address, latitude, longitude, photo_url, description, category, location) values
(
  'La Paz Batchoy',
  'La Paz, Iloilo City',
  10.6917,
  122.5667,
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  'The famous Iloilo noodle soup dish originating from La Paz district. A must-try local delicacy served in various eateries throughout the city.',
  'food',
  'iloilo_city'
),
(
  'Netong''s Batchoy',
  'La Paz, Iloilo City',
  10.6920,
  122.5670,
  'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80',
  'One of the most well-known batchoy houses in Iloilo, serving the authentic La Paz batchoy recipe passed down through generations.',
  'food',
  'iloilo_city'
),
(
  'Ted''s Oldtimer Batchoy',
  'Jaro, Iloilo City',
  10.7333,
  122.5500,
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80',
  'A historic batchoyan that has been serving Iloilo''s favorite soup dish for decades, known for its rich broth and generous toppings.',
  'food',
  'iloilo_city'
),
(
  'Mama''s Kitchen',
  'Arevalo, Iloilo City',
  10.7000,
  122.5333,
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  'A home-style restaurant serving traditional Ilonggo dishes including kBL (kadyos, baboy, langka) and other local favorites.',
  'food',
  'iloilo_city'
),
(
  'Breakthrough Restaurant',
  'Villa de Arevalo, Iloilo City',
  10.7000,
  122.5333,
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'A seafood restaurant along the coast famous for its fresh oysters, grilled fish, and other seafood dishes overlooking the sea.',
  'food',
  'iloilo_city'
);

-- Add Walking Areas
insert into destinations (name, address, latitude, longitude, photo_url, description, category, location) values
(
  'Iloilo Esplanade',
  'Diversion Road, Iloilo City',
  10.7000,
  122.5500,
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'A scenic riverside walkway stretching along the Iloilo River, perfect for walking, jogging, and enjoying river views with the city skyline.',
  'walking',
  'iloilo_city'
),
(
  'SM City Iloilo Rooftop Garden',
  'Mandurriao, Iloilo City',
  10.7167,
  122.5500,
  'https://images.unsplash.com/photo-1498429089284-41f8cf3b3947?w=800&q=80',
  'A rooftop garden at SM City Iloilo providing a peaceful walking space with plants, seating areas, and city views from above.',
  'walking',
  'iloilo_city'
),
(
  'Casa Mariquit',
  'Jaro, Iloilo City',
  10.7333,
  122.5500,
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  'A heritage house with beautiful gardens that visitors can walk through, showcasing Spanish colonial architecture and history.',
  'walking',
  'iloilo_city'
);

-- Add Nature & Parks
insert into destinations (name, address, latitude, longitude, photo_url, description, category, location) values
(
  'Iloilo River Esplanade 1-5',
  'Diversion Road, Iloilo City',
  10.7000,
  122.5500,
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  'Multiple segments of the esplanade along the Iloilo River, each with unique features like gardens, art installations, and viewing decks.',
  'nature',
  'iloilo_city'
),
(
  'Garita Farm',
  'Oton, Iloilo',
  10.7083,
  122.4667,
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  'A farm resort with gardens, animals, and nature trails where visitors can experience rural life and enjoy fresh air.',
  'nature',
  'iloilo_province'
),
(
  'San Joaquin Campo Santo',
  'San Joaquin, Iloilo',
  10.6167,
  122.1333,
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
  'A historic cemetery with ancient trees and peaceful grounds, surrounded by natural beauty and Spanish colonial architecture.',
  'nature',
  'iloilo_province'
);

-- Add Festivals
insert into destinations (name, address, latitude, longitude, photo_url, description, category, location) values
(
  'Dinagyang Festival',
  'Iloilo City',
  10.6917,
  122.5667,
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  'Iloilo''s most famous festival held every January, featuring street dancing, colorful costumes, and religious devotion to the Santo Niño.',
  'festival',
  'iloilo_city'
),
(
  'Paraw Regatta Festival',
  'Iloilo City',
  10.7000,
  122.5500,
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  'The oldest traditional sailing event in Asia, celebrating the paraw (native sailboat) with races along the Iloilo Strait every February.',
  'festival',
  'iloilo_city'
),
(
  'Tultugan Festival',
  'Maasin, Iloilo',
  10.7833,
  122.4667,
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  'A cultural festival in Maasin featuring bamboo instrument performances, showcasing the town''s bamboo craftsmanship and musical traditions.',
  'festival',
  'iloilo_province'
);

-- Add Heritage Sites
insert into destinations (name, address, latitude, longitude, photo_url, description, category, location) values
(
  'Miag-ao Church',
  'Miag-ao, Iloilo',
  10.6500,
  122.2333,
  'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
  'A UNESCO World Heritage Site and one of the Baroque Churches of the Philippines, known for its fortress-like design and intricate facade.',
  'heritage',
  'iloilo_province'
),
(
  'Molo Church',
  'Molo, Iloilo City',
  10.7083,
  122.5667,
  'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&q=80',
  'A Gothic Renaissance church known as the "Feminist Church" due to its statues of female saints, featuring beautiful stained glass windows.',
  'heritage',
  'iloilo_city'
),
(
  'Jaro Cathedral',
  'Jaro, Iloilo City',
  10.7333,
  122.5500,
  'https://images.unsplash.com/photo-1544397539-0a4b8f9d3a5c?w=800&q=80',
  'The seat of the Archdiocese of Jaro, featuring a distinctive Baroque architecture and a separate belfry across the street.',
  'heritage',
  'iloilo_city'
),
(
  'Calle Real',
  'Downtown, Iloilo City',
  10.6917,
  122.5667,
  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
  'The historic downtown street lined with heritage buildings from the Spanish and American colonial periods, now a cultural and shopping district.',
  'heritage',
  'iloilo_city'
);
