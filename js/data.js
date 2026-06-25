/* =====================================================
   Desian Vision Furniture (DVF) — Product Data
   Updated: 25/06/2026, 20:14:55
   ===================================================== */

const PRODUCTS = [
  {
    "id": 1,
    "name": "L-Shaped Sofa",
    "cat": "sofas",
    "price": 75000,
    "oldPrice": 90000,
    "imgs": [
      "IMG-20260610-WA0009.jpg",
      "IMG-20260609-WA0024.jpg"
    ],
    "badge": "popular",
    "rating": 4.8,
    "reviews": 24,
    "desc": "Premium L-shaped sofa with gold cup holders. Spacious, comfortable, built to last. Perfect centrepiece for your living room.",
    "colors": [
      "Beige",
      "White",
      "Grey"
    ],
    "specs": {
      "material": "Premium Fabric",
      "seating": "5-6 Seaters",
      "size": "280cm × 180cm",
      "delivery": "7-14 days"
    },
    "stock": true
  },
  {
    "id": 2,
    "name": "7 Seater Sofa Set",
    "cat": "sofas",
    "price": 120000,
    "oldPrice": 0,
    "imgs": [
      "IMG-20260610-WA0002.jpg"
    ],
    "badge": "popular",
    "rating": 4.9,
    "reviews": 18,
    "desc": "Complete 7-seater sofa set (3+2+2). Perfect for large living rooms and family entertaining.",
    "colors": [
      "Blue",
      "Grey"
    ],
    "specs": {
      "material": "Premium Fabric",
      "seating": "7 Seaters",
      "size": "Custom",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 3,
    "name": "Classic Sofa Set",
    "cat": "sofas",
    "price": 45000,
    "oldPrice": 55000,
    "imgs": [
      "IMG-20260609-WA0033.jpg"
    ],
    "badge": "new",
    "rating": 4.7,
    "reviews": 12,
    "desc": "Classic sofa combining comfort, style, and quality. A timeless addition to any home.",
    "colors": [
      "Orange",
      "Brown",
      "Grey"
    ],
    "specs": {
      "material": "Chenille Fabric",
      "seating": "3-4 Seaters",
      "size": "220cm × 90cm",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 4,
    "name": "Supreme Comfort Sectional",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 75000,
    "imgs": [
      "IMG-20260609-WA0025.jpg"
    ],
    "badge": "new",
    "rating": 4.8,
    "reviews": 9,
    "desc": "Soft touch, supreme comfort. Deep seating with plush cushions for ultimate relaxation.",
    "colors": [
      "Cream",
      "Beige"
    ],
    "specs": {
      "material": "Velvet",
      "seating": "5-6 Seaters",
      "size": "270cm × 200cm",
      "delivery": "7-14 days"
    },
    "stock": true
  },
  {
    "id": 5,
    "name": "Bold Comfort Sectional",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "imgs": [
      "IMG-20260609-WA0037.jpg"
    ],
    "badge": "new",
    "rating": 4.9,
    "reviews": 7,
    "desc": "Bold comfort, beautiful living. A pop of colour that transforms any space.",
    "colors": [
      "Orange",
      "Beige"
    ],
    "specs": {
      "material": "Premium Fabric",
      "seating": "4-5 Seaters",
      "size": "260cm × 180cm",
      "delivery": "7-14 days"
    },
    "stock": true
  },
  {
    "id": 6,
    "name": "Grey Gold-Trim Sectional",
    "cat": "sofas",
    "price": 85000,
    "oldPrice": 100000,
    "imgs": [
      "IMG-20260608-WA0033.jpg"
    ],
    "badge": "",
    "rating": 4.9,
    "reviews": 15,
    "desc": "Premium grey sectional with elegant gold trim accents. Luxury meets comfort.",
    "colors": [
      "Grey"
    ],
    "specs": {
      "material": "Premium Fabric + Gold Trim",
      "seating": "6-7 Seaters",
      "size": "300cm × 200cm",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 7,
    "name": "Teal U-Shaped Sofa",
    "cat": "sofas",
    "price": 90000,
    "oldPrice": 110000,
    "imgs": [
      "1780924105500.jpg"
    ],
    "badge": "",
    "rating": 4.7,
    "reviews": 11,
    "desc": "Statement teal sofa with built-in cup holders. Makes your living room unforgettable.",
    "colors": [
      "Teal",
      "Blue"
    ],
    "specs": {
      "material": "Velvet",
      "seating": "7-8 Seaters",
      "size": "320cm × 220cm",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 8,
    "name": "Luxury Bed Couch",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "imgs": [
      "IMG-20260608-WA0019.jpg"
    ],
    "badge": "",
    "rating": 4.6,
    "reviews": 8,
    "desc": "Versatile bed couch — sofa by day, bed by night. Premium suede upholstery.",
    "colors": [
      "Brown",
      "Beige"
    ],
    "specs": {
      "material": "Premium Suede",
      "seating": "2-3 Seaters",
      "size": "200cm × 100cm",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 9,
    "name": "Grey Recliner Sofa",
    "cat": "sofas",
    "price": 55000,
    "oldPrice": 65000,
    "imgs": [
      "IMG-20260608-WA0024.jpg"
    ],
    "badge": "",
    "rating": 4.7,
    "reviews": 14,
    "desc": "Premium grey recliner with gold cup holder accents. Sink in and relax.",
    "colors": [
      "Grey",
      "Brown"
    ],
    "specs": {
      "material": "Suede",
      "seating": "3-4 Seaters",
      "size": "240cm × 95cm",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 10,
    "name": "Chesterfield Tufted Bed",
    "cat": "beds",
    "price": 75000,
    "oldPrice": 85000,
    "imgs": [
      "IMG-20260608-WA0028.jpg"
    ],
    "badge": "hot",
    "rating": 4.9,
    "reviews": 22,
    "desc": "Luxurious Chesterfield-style tufted bed with nail head detailing. Sleep like royalty.",
    "colors": [
      "Beige",
      "Grey"
    ],
    "specs": {
      "material": "Velvet + Solid Wood",
      "size": "5×6 ft",
      "type": "King Size",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 11,
    "name": "Mocket Bed 5×6",
    "cat": "beds",
    "price": 40000,
    "oldPrice": 50000,
    "imgs": [
      "bed.jpg"
    ],
    "badge": "",
    "rating": 4.6,
    "reviews": 31,
    "desc": "Solid, durable Mocket bed. No box spring needed. Built to last.",
    "colors": [
      "Brown",
      "Black"
    ],
    "specs": {
      "material": "Mahogany Wood",
      "size": "5×6 ft",
      "type": "King Size",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 12,
    "name": "White Modern Bed",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "imgs": [
      "IMG-20260608-WA0026.jpg"
    ],
    "badge": "",
    "rating": 4.5,
    "reviews": 16,
    "desc": "Clean, modern white bed frame with upholstered headboard. Minimalist elegance.",
    "colors": [
      "White"
    ],
    "specs": {
      "material": "MDF + Fabric",
      "size": "5×6 ft",
      "type": "King Size",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 13,
    "name": "Mahogany Bed",
    "cat": "beds",
    "price": 70000,
    "oldPrice": 85000,
    "imgs": [
      "bed2.jpg"
    ],
    "badge": "",
    "rating": 4.8,
    "reviews": 19,
    "desc": "Premium mahogany wood bed — built to last generations. A true heirloom piece.",
    "colors": [
      "Mahogany",
      "Dark Brown"
    ],
    "specs": {
      "material": "Solid Mahogany",
      "size": "4×6 to 5×6 ft",
      "type": "King/Queen",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 14,
    "name": "Grey Panel Headboard Bed",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "imgs": [
      "IMG-20260608-WA0027.jpg"
    ],
    "badge": "",
    "rating": 4.6,
    "reviews": 8,
    "desc": "Contemporary grey panel headboard — modern, clean design for the minimalist bedroom.",
    "colors": [
      "Grey",
      "White"
    ],
    "specs": {
      "material": "Fabric + MDF",
      "size": "5×6 ft",
      "type": "King Size",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 15,
    "name": "Premium Baby Bed",
    "cat": "beds",
    "price": 65000,
    "oldPrice": 75000,
    "imgs": [
      "IMG-20260611-WA0028.jpg"
    ],
    "badge": "new",
    "rating": 4.9,
    "reviews": 13,
    "desc": "Sweet dreams for your little one. Safe, comfortable, beautifully styled.",
    "colors": [
      "White",
      "Pink",
      "Blue"
    ],
    "specs": {
      "material": "Premium Wood",
      "size": "Baby/Toddler",
      "type": "Custom",
      "delivery": "7-14 days"
    },
    "stock": true
  },
  {
    "id": 16,
    "name": "Dining Set 8 Seater",
    "cat": "dining",
    "price": 180000,
    "oldPrice": 200000,
    "imgs": [
      "Screenshot_20260609_123144_Chrome.jpg"
    ],
    "badge": "",
    "rating": 4.8,
    "reviews": 11,
    "desc": "Elegant 8-seater dining set for family gatherings and dinner parties. Built to impress.",
    "colors": [
      "Brown",
      "Dark"
    ],
    "specs": {
      "material": "Mahogany + Leather",
      "seating": "8 Seaters",
      "size": "Custom",
      "delivery": "14-21 days"
    },
    "stock": true
  },
  {
    "id": 17,
    "name": "TV Unit & Display Cabinet",
    "cat": "storage",
    "price": 25000,
    "oldPrice": 30000,
    "imgs": [
      "1780923972950.jpg"
    ],
    "badge": "",
    "rating": 4.5,
    "reviews": 9,
    "desc": "Stylish TV unit with integrated display cabinet. Organise in style.",
    "colors": [
      "White/Grey",
      "Brown"
    ],
    "specs": {
      "material": "MDF + Mirror",
      "size": "Custom",
      "delivery": "7-10 days"
    },
    "stock": true
  },
  {
    "id": 18,
    "name": "Custom Wardrobe",
    "cat": "storage",
    "price": 35000,
    "oldPrice": 0,
    "imgs": [
      "cabinet.jpg"
    ],
    "badge": "custom",
    "rating": 4.7,
    "reviews": 14,
    "desc": "Built-to-order wardrobe crafted for your exact space and storage needs.",
    "colors": [
      "White",
      "Brown",
      "Grey"
    ],
    "specs": {
      "material": "MDF + Laminate",
      "size": "Custom",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "id": 19,
    "name": "Custom Dressing Table",
    "cat": "bedroom",
    "price": 0,
    "oldPrice": 0,
    "imgs": [
      "Screenshot_20260609_113755_Chrome.jpg"
    ],
    "badge": "custom",
    "rating": 4.8,
    "reviews": 7,
    "desc": "Elegant custom dressing table with mirror. Your personal luxury sanctuary.",
    "colors": [
      "White",
      "Brown",
      "Grey"
    ],
    "specs": {
      "material": "MDF + Mirror + Wood",
      "size": "Custom",
      "delivery": "10-14 days"
    },
    "stock": true
  },
  {
    "name": "Cream White L-Shaped Sectional Sofa",
    "cat": "sofas",
    "price": 45000,
    "oldPrice": 47000,
    "rating": 5,
    "reviews": 12,
    "badge": "Hot",
    "imgs": [
      "sofa-dvf-299205.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 20
  },
  {
    "name": "Emerald Green Velvet Sectional Sofa",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-992818.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 21
  },
  {
    "name": "Navy Blue Velvet Sectional Sofa",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Sale",
    "imgs": [
      "sofa-dvf-020368.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 22
  },
  {
    "name": "Light Grey Textured L-Shaped Sofa",
    "cat": "sofas",
    "price": 45000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Best Seller",
    "imgs": [
      "sofa-dvf-378745.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 23
  },
  {
    "name": "Brown Reclining Sofa with Cupholders",
    "cat": "sofas",
    "price": 90000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Hot",
    "imgs": [
      "sofa-dvf-691810.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 24
  },
  {
    "name": "Grey Suede Reclining Sectional Sofa",
    "cat": "sofas",
    "price": 90000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-214256.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 25
  },
  {
    "name": "Grey Tufted Sectional Sofa with Navy Trim",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Hot",
    "imgs": [
      "sofa-dvf-278725.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 26
  },
  {
    "name": "Mustard Yellow L-Shaped Sofa",
    "cat": "sofas",
    "price": 47000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-767625.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 27
  },
  {
    "name": "Tan & Cream Carved Wood Loveseat",
    "cat": "sofas",
    "price": 85000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Best Seller",
    "imgs": [
      "sofa-dvf-935146.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 28
  },
  {
    "name": "Slate Blue Tufted Sectional Sofa",
    "cat": "sofas",
    "price": 47000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Best Seller",
    "imgs": [
      "sofa-dvf-270963.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 29
  },
  {
    "name": "Grey Sectional Sofa & Armchair Set",
    "cat": "sofas",
    "price": 47000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Hot",
    "imgs": [
      "sofa-dvf-299042.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 30
  },
  {
    "name": "7seater",
    "cat": "sofas",
    "price": 85000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-486108.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 31
  },
  {
    "name": "Luxury Corner Sofa Set",
    "cat": "sofas",
    "price": 90000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Best Seller",
    "imgs": [
      "sofa-dvf-565820.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 32
  },
  {
    "name": "5-Seater Family Sofa",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-612357.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 33
  },
  {
    "name": "Modern 3+2 Sofa Combination",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Today's Special",
    "imgs": [
      "sofa-dvf-645352.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 34
  },
  {
    "name": "Executive Lounge Sectional",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Sale",
    "imgs": [
      "sofa-dvf-674075.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 35
  },
  {
    "name": "Custom L-Shape Sofa — Premium Fabric",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Today's Special",
    "imgs": [
      "sofa-dvf-615956.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 36
  },
  {
    "name": "Premium L-Shaped Sectional Sofa",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-831450.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 37
  },
  {
    "name": "Luxury Corner Sofa Set",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Hot",
    "imgs": [
      "sofa-dvf-883295.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 38
  },
  {
    "name": "5-Seater Family Sofa",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Custom Made",
    "imgs": [
      "sofa-dvf-941273.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 39
  },
  {
    "name": "Modern 3+2 Sofa Combination",
    "cat": "sofas",
    "price": 65000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Custom Made",
    "imgs": [
      "sofa-dvf-987754.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 40
  },
  {
    "name": "Executive Lounge Sectional",
    "cat": "sofas",
    "price": 50000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Best Seller",
    "imgs": [
      "sofa-dvf-728791.jpg"
    ],
    "desc": "Handcrafted premium sectional sofa made to order in Nairobi. Built with high-density foam for lasting comfort. Available in a wide range of fabric colors and custom sizes. Perfect for modern living rooms and lounge spaces. Free delivery and full assembly included within Nairobi.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 41
  },
  {
    "name": "Premium Divan Bed Frame",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-975525.jpg"
    ],
    "desc": "Custom luxury bed crafted with precision. Premium upholstered headboard, durable hardwood base, and your choice of fabric. Sizes available: 5×6 ft and 6×6 ft or to your specifications. Free delivery and installation in Nairobi.",
    "colors": [
      "Cream Beige",
      "Chocolate Brown",
      "Dark Grey",
      "Walnut Brown",
      "Ivory White",
      "Dusty Rose"
    ],
    "specs": {
      "material": "Premium Fabric Frame",
      "sizes": "5×6 ft or 6×6 ft (custom)",
      "headboard": "Upholstered Padded",
      "base": "Solid Hardwood",
      "delivery": "7–14 Working Days"
    },
    "id": 42
  },
  {
    "name": "King Size Upholstered Bed",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Sale",
    "imgs": [
      "sofa-dvf-041030.jpg"
    ],
    "desc": "Beautifully handcrafted bed frame made to order in Nairobi. Features a premium padded headboard, solid frame, and optional storage base. Available in 5×6 and 6×6 sizes. Choose your fabric color and we build it to perfection. Free delivery and assembly within Nairobi.",
    "colors": [
      "Cream Beige",
      "Chocolate Brown",
      "Dark Grey",
      "Walnut Brown",
      "Ivory White",
      "Dusty Rose"
    ],
    "specs": {
      "material": "Premium Fabric Frame",
      "sizes": "5×6 ft or 6×6 ft (custom)",
      "headboard": "Upholstered Padded",
      "base": "Solid Hardwood",
      "delivery": "7–14 Working Days"
    },
    "id": 43
  },
  {
    "name": "Premium Platform Bed with Headboard",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-076363.jpg"
    ],
    "desc": "Custom luxury bed crafted with precision. Premium upholstered headboard, durable hardwood base, and your choice of fabric. Sizes available: 5×6 ft and 6×6 ft or to your specifications. Free delivery and installation in Nairobi.",
    "colors": [
      "Cream Beige",
      "Chocolate Brown",
      "Dark Grey",
      "Walnut Brown",
      "Ivory White",
      "Dusty Rose"
    ],
    "specs": {
      "material": "Premium Fabric Frame",
      "sizes": "5×6 ft or 6×6 ft (custom)",
      "headboard": "Upholstered Padded",
      "base": "Solid Hardwood",
      "delivery": "7–14 Working Days"
    },
    "id": 44
  },
  {
    "name": "Custom Storage Bed",
    "cat": "beds",
    "price": 35000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "New",
    "imgs": [
      "sofa-dvf-112948.jpg"
    ],
    "desc": "Custom luxury bed crafted with precision. Premium upholstered headboard, durable hardwood base, and your choice of fabric. Sizes available: 5×6 ft and 6×6 ft or to your specifications. Free delivery and installation in Nairobi.",
    "colors": [
      "Cream Beige",
      "Chocolate Brown",
      "Dark Grey",
      "Walnut Brown",
      "Ivory White",
      "Dusty Rose"
    ],
    "specs": {
      "material": "Premium Fabric Frame",
      "sizes": "5×6 ft or 6×6 ft (custom)",
      "headboard": "Upholstered Padded",
      "base": "Solid Hardwood",
      "delivery": "7–14 Working Days"
    },
    "id": 45
  },
  {
    "name": "5-Seater Family Sofa",
    "cat": "sofas",
    "price": 85000,
    "oldPrice": 0,
    "rating": 5,
    "reviews": 12,
    "badge": "Today's Special",
    "imgs": [
      "sofa-dvf-577742.jpg"
    ],
    "desc": "Luxurious custom sofa crafted by DVF artisans. Features premium fabric upholstery, solid hardwood frame, and high-resilience foam cushions. Order in your chosen color and size — built exactly to your specifications. Free delivery to any Nairobi location.",
    "colors": [
      "Cream Beige",
      "Charcoal Grey",
      "Forest Green",
      "Chocolate Brown",
      "Navy Blue",
      "Burgundy Red",
      "Stone Grey",
      "Caramel"
    ],
    "specs": {
      "material": "Premium Fabric / Leather Options",
      "seating": "5–7 Persons",
      "dimensions": "Custom to your space",
      "foam": "High-Density (D35)",
      "frame": "Hardwood Reinforced",
      "delivery": "7–14 Working Days"
    },
    "id": 47
  }
];

const CATEGORIES = [
  {
    "id": "sofas",
    "name": "Sofas & Sectionals",
    "icon": "🛋️",
    "img": "IMG-20260610-WA0009.jpg"
  },
  {
    "id": "beds",
    "name": "Beds & Headboards",
    "icon": "🛏️",
    "img": "bed.jpg"
  },
  {
    "id": "dining",
    "name": "Dining Sets",
    "icon": "🍽️",
    "img": "Screenshot_20260609_123144_Chrome.jpg"
  },
  {
    "id": "storage",
    "name": "Wardrobes & Storage",
    "icon": "🗄️",
    "img": "1780923972950.jpg"
  },
  {
    "id": "bedroom",
    "name": "Bedroom Accessories",
    "icon": "🪞",
    "img": "Screenshot_20260609_113755_Chrome.jpg"
  }
];

const TESTIMONIALS = [
  {
    "name": "Ben Kisilu",
    "text": "I highly recommend their services. They understood my vision and executed the design perfectly. The quality exceeded my expectations!",
    "stars": 5
  },
  {
    "name": "Inrafted Enterprises",
    "text": "Durable dining sets that bring elegance to the home. True Kenyan craftsmanship at its finest. Worth every shilling.",
    "stars": 5
  },
  {
    "name": "The Turn Business Complex",
    "text": "Best place for modern home furnishings in Githurai 45. Diverse fabrics and designs for all tastes and budgets.",
    "stars": 5
  },
  {
    "name": "SILVA Packers and Movers",
    "text": "Exceptional customer care and high quality products. The dressing table is both functional and stylish — love it!",
    "stars": 5
  }
];

const GALLERY_IMGS = [
  "sofa.jpg",
  "IMG-20260608-WA0019.jpg",
  "IMG-20260608-WA0020.jpg",
  "IMG-20260608-WA0021.jpg",
  "IMG-20260608-WA0024.jpg",
  "IMG-20260608-WA0025.jpg",
  "IMG-20260608-WA0026.jpg",
  "IMG-20260608-WA0027.jpg",
  "IMG-20260608-WA0028.jpg",
  "IMG-20260608-WA0030.jpg",
  "IMG-20260608-WA0031.jpg",
  "IMG-20260608-WA0032.jpg",
  "IMG-20260608-WA0033.jpg",
  "IMG-20260609-WA0024.jpg",
  "IMG-20260609-WA0025.jpg",
  "IMG-20260609-WA0033.jpg",
  "IMG-20260609-WA0037.jpg",
  "IMG-20260610-WA0002.jpg",
  "IMG-20260610-WA0009.jpg",
  "1780923820434.jpg",
  "1780923972950.jpg",
  "1780924052578.jpg",
  "1780924105500.jpg",
  "IMG-20260613-WA0009.jpg",
  "bed.jpg",
  "bed2.jpg",
  "cabinet.jpg"
];

const WA_NUMBER = "254702894439";
const BUSINESS = {
  "name": "Desian Vision Furniture",
  "phone": "0702 894 439",
  "wa": "254702894439",
  "address": "Githurai 45 – Mwihoko Road, Near Fountain Jouner Academy, Nairobi, Kenya",
  "hours": "Mon–Sat: 8AM–7PM | Sun: 10AM–5PM",
  "facebook": "https://www.facebook.com/profile.php?id=61550647002330",
  "instagram": "https://www.instagram.com/desian_visionfurnitures",
  "tiktok": "https://www.tiktok.com/@desianvis0702894439davis"
};