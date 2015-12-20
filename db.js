if (Meteor.isClient) {
  // This code only runs on the client
  Template.mainPage.helpers({
    images: [{
      "Kategori": "Health",
      "Swedish": "Hjärta",
      "Arabic": "قلب ",
      "English": "Heart",
      "URL": "http://bildstod.se/image/get/5175",
      "File": "bilder/heart.jpg",
      "id": 0
    }, {
      "Kategori": "Health",
      "Swedish": "Ben",
      "Arabic": "رجل ",
      "English": "Leg",
      "URL": "http://bildstod.se/image/get/8103",
      "File": "bilder/leg.jpg",
      "id": 1
    }, {
      "Kategori": "Health",
      "Swedish": "Arm",
      "Arabic": "ذراع",
      "English": "Arm",
      "URL": "http://bildstod.se/image/get/4888",
      "File": "bilder/arm.jpg",
      "id": 2
    }, {
      "Kategori": "Health",
      "Swedish": "Mage",
      "Arabic": "معدة",
      "English": "Stomach",
      "URL": "http://bildstod.se/image/get/11627",
      "File": "bilder/stomach.jpg",
      "id": 3
    }, {
      "Kategori": "Health",
      "Swedish": "Bröst",
      "Arabic": "صدر",
      "English": "Chest",
      "URL": "http://bildstod.se/image/get/5407",
      "File": "bilder/chest.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Hals",
      "Arabic": "حنجرة ",
      "English": "Throat",
      "URL": "http://bildstod.se/image/get/5864",
      "File": "bilder/throat.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Öra",
      "Arabic": "اذن ",
      "English": "Ear, Ears",
      "URL": "http://bildstod.se/image/get/5425",
      "File": "bilder/ear_ears.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Öga",
      "Arabic": "عين",
      "English": "Eye, Eyes",
      "URL": "http://bildstod.se/image/get/6991",
      "File": "bilder/eye_eyes.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Huvud",
      "Arabic": "رأس",
      "English": "Head",
      "URL": "http://bildstod.se/image/get/4912",
      "File": "bilder/head.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Medicin",
      "Arabic": "دواء",
      "English": "Medicine",
      "URL": "http://bildstod.se/image/get/7721",
      "File": "bilder/medicine.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Tablett",
      "Arabic": "حبة",
      "English": "Pill",
      "URL": "http://bildstod.se/image/get/2868",
      "File": "bilder/pill.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Spruta",
      "Arabic": "حقنة , ابرة",
      "English": "Injection",
      "URL": "http://bildstod.se/image/get/5503",
      "File": "bilder/injection.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Blodtryck",
      "Arabic": "ضغط دم",
      "English": "Blood pressure",
      "URL": "http://bildstod.se/image/get/7793",
      "File": "bilder/blood_pressure.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Vikt",
      "Arabic": "وزن",
      "English": "Weight",
      "URL": "http://bildstod.se/image/get/4822",
      "File": "bilder/weight.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Hosta",
      "Arabic": "سعال ",
      "English": "Cough",
      "URL": "http://bildstod.se/image/get/5930",
      "File": "bilder/cough.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Läkare",
      "Arabic": "طبيب",
      "English": "Doctor",
      "URL": "http://bildstod.se/image/get/3670",
      "File": "bilder/doctor.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Sjuksköterska",
      "Arabic": "ممرضة",
      "English": "Nurse",
      "URL": "http://bildstod.se/image/get/8394",
      "File": "bilder/nurse.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Sjukhus",
      "Arabic": "مستشفى",
      "English": "Hospital",
      "URL": "http://bildstod.se/image/get/6941",
      "File": "bilder/hospital.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Hjälpmedel (ex. rullstol)",
      "Arabic": "مساعدات ",
      "English": "Aids",
      "URL": "http://bildstod.se/image/get/1329",
      "File": "bilder/aids.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Mäta längd",
      "Arabic": "قياس الطول ",
      "English": "Measure Length",
      "URL": "http://bildstod.se/image/get/6463",
      "File": "bilder/measure_length.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Gapa",
      "Arabic": "افتح فمك ",
      "English": "Open mouth",
      "URL": "http://bildstod.se/image/get/1566",
      "File": "bilder/open_mouth.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Plåster",
      "Arabic": "بلاستر , لاصق طبي ",
      "English": "Band aid",
      "URL": "http://bildstod.se/image/get/7869",
      "File": "bilder/band_aid.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Smärta",
      "Arabic": "ألم ",
      "English": "Pain",
      "URL": "http://bildstod.se/image/get/19300",
      "File": "bilder/pain.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Hål",
      "Arabic": "نخر في الاسنان ",
      "English": "Cavity",
      "URL": "http://bildstod.se/image/get/2375",
      "File": "bilder/cavity.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Feber",
      "Arabic": "حمى , ترفع حروري ",
      "English": "Fever",
      "URL": "http://bildstod.se/image/get/7053",
      "File": "bilder/fever.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Kräkas",
      "Arabic": "يستفرغ",
      "English": "Vomit",
      "URL": "http://bildstod.se/image/get/5332",
      "File": "bilder/vomit.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Illamående",
      "Arabic": "غثيان ",
      "English": "Nausia",
      "URL": "http://bildstod.se/image/get/24012",
      "File": "bilder/nausia.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Depression",
      "Arabic": "اكتئاب",
      "English": "Depression",
      "URL": "http://bildstod.se/image/get/4505",
      "File": "bilder/depression.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Sår",
      "Arabic": "جرح",
      "English": "Wound",
      "URL": "http://bildstod.se/image/get/5357",
      "File": "bilder/wound.jpg"
    }, {
      "Kategori": "Health",
      "Swedish": "Hälsoundersökning",
      "Arabic": "يفحص",
      "English": "Examine, check up",
      "URL": "http://bildstod.se/image/get/5171",
      "File": "bilder/examine_check_up.jpg"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Food",
      "Swedish": "Vatten",
      "Arabic": "ماء",
      "English": "Water",
      "URL": "http://bildstod.se/image/get/2652",
      "File": "bilder/water.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Mjölk",
      "Arabic": "حليب",
      "English": "Milk",
      "URL": "http://bildstod.se/image/get/3539",
      "File": "bilder/milk.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Juice",
      "Arabic": "عصير",
      "English": "Juice",
      "URL": "http://bildstod.se/image/get/879",
      "File": "bilder/juice.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Läsk",
      "Arabic": "مياه غازية",
      "English": "Soda",
      "URL": "http://bildstod.se/image/get/2778",
      "File": "bilder/soda.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Kaffe",
      "Arabic": "قهوة",
      "English": "Coffee",
      "URL": "http://bildstod.se/image/get/2737",
      "File": "bilder/coffee.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Te",
      "Arabic": "شاي",
      "English": "Tea",
      "URL": "http://bildstod.se/image/get/11723",
      "File": "bilder/tea.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Vin",
      "Arabic": "نبيذ",
      "English": "Wine",
      "URL": "http://bildstod.se/image/get/4553",
      "File": "bilder/wine.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Öl",
      "Arabic": "بيرة",
      "English": "Beer",
      "URL": "http://bildstod.se/image/get/2769",
      "File": "bilder/beer.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Mat",
      "Arabic": "أكل ,طعام ",
      "English": "Food",
      "URL": "http://bildstod.se/image/get/6013",
      "File": "bilder/food.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Bröd",
      "Arabic": "خبز",
      "English": "Bread",
      "URL": "http://bildstod.se/image/get/3830",
      "File": "bilder/bread.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Smör",
      "Arabic": "زبدة",
      "English": "Butter",
      "URL": "http://bildstod.se/image/get/3634",
      "File": "bilder/butter.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Ost",
      "Arabic": "جبنة",
      "English": "Cheese",
      "URL": "http://bildstod.se/image/get/4085",
      "File": "bilder/cheese.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Frukost",
      "Arabic": "فطور",
      "English": "Breakfast",
      "URL": "http://bildstod.se/image/get/6028",
      "File": "bilder/breakfast.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Lunch",
      "Arabic": "غداء",
      "English": "Lunch",
      "URL": "http://bildstod.se/image/get/6014",
      "File": "bilder/lunch.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Middag",
      "Arabic": "عشاء",
      "English": "Dinner",
      "URL": "http://bildstod.se/image/get/5995",
      "File": "bilder/dinner.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Fika",
      "Arabic": "استراحة قهوة",
      "English": "Coffee Break",
      "URL": "http://bildstod.se/image/get/11721",
      "File": "bilder/coffee_break.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Frukt",
      "Arabic": "فواكه ",
      "English": "Fruit",
      "URL": "http://bildstod.se/image/get/6055",
      "File": "bilder/fruit.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Grönsaker",
      "Arabic": "خضار ",
      "English": "Vegetables",
      "URL": "http://bildstod.se/image/get/11896",
      "File": "bilder/vegetables.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Kött",
      "Arabic": "لحمة",
      "English": "Meat",
      "URL": "http://bildstod.se/image/get/2756",
      "File": "bilder/meat.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Pasta",
      "Arabic": "معكرونة ",
      "English": "Pasta",
      "URL": "http://bildstod.se/image/get/8090",
      "File": "bilder/pasta.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Potatis",
      "Arabic": "بطاطا ",
      "English": "Potatoes",
      "URL": "http://bildstod.se/image/get/3885",
      "File": "bilder/potatoes.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Ris",
      "Arabic": "رز",
      "English": "Rice",
      "URL": "http://bildstod.se/image/get/7112",
      "File": "bilder/rice.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Godis",
      "Arabic": "حلويات",
      "English": "Candy",
      "URL": "http://bildstod.se/image/get/2629",
      "File": "bilder/candy.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Choklad",
      "Arabic": "شوكولا",
      "English": "Chocolate",
      "URL": "http://bildstod.se/image/get/2773",
      "File": "bilder/chocolate.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Fisk",
      "Arabic": "سمك",
      "English": "Fish",
      "URL": "http://bildstod.se/image/get/7396",
      "File": "bilder/fish.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Kyckling",
      "Arabic": "دجاج",
      "English": "Chicken",
      "URL": "http://bildstod.se/image/get/6254",
      "File": "bilder/chicken.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Äta",
      "Arabic": "يأكل ",
      "English": "Eat",
      "URL": "http://bildstod.se/image/get/14620",
      "File": "bilder/eat.jpg"
    }, {
      "Kategori": "Food",
      "Swedish": "Dricka",
      "Arabic": "يشرب",
      "English": "Drink",
      "URL": "http://bildstod.se/image/get/2696",
      "File": "bilder/drink.jpg"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Köpa",
      "Arabic": "يشتري",
      "English": "Buy",
      "URL": "http://bildstod.se/image/get/1714",
      "File": "bilder/buy.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Pengar",
      "Arabic": "مصاري",
      "English": "Money",
      "URL": "http://bildstod.se/image/get/6032",
      "File": "bilder/money.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Kläder",
      "Arabic": "ملابس",
      "English": "Clothes",
      "URL": "http://bildstod.se/image/get/7428",
      "File": "bilder/clothes.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Tröja",
      "Arabic": "قميص",
      "English": "Shirt",
      "URL": "http://bildstod.se/image/get/2749",
      "File": "bilder/shirt.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Byxor",
      "Arabic": "بنطلون",
      "English": "Pants",
      "URL": "http://bildstod.se/image/get/4258",
      "File": "bilder/pants.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Jacka",
      "Arabic": "سترة ,جاكيت",
      "English": "Jacket",
      "URL": "http://bildstod.se/image/get/2759",
      "File": "bilder/jacket.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Vantar",
      "Arabic": "قفازات , كفوف",
      "English": "Gloves",
      "URL": "http://bildstod.se/image/get/5470",
      "File": "bilder/gloves.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Mössa",
      "Arabic": "قبة ,طاقية ",
      "English": "Knit Cap",
      "URL": "http://bildstod.se/image/get/3344",
      "File": "bilder/knit_cap.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Skor",
      "Arabic": "احذية ,حذاء",
      "English": "Shoes",
      "URL": "http://bildstod.se/image/get/4600",
      "File": "bilder/shoes.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Affär",
      "Arabic": "محل ",
      "English": "Store",
      "URL": "http://bildstod.se/image/get/7034",
      "File": "bilder/store.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Mataffär",
      "Arabic": "دكان ,سوبر ماركت",
      "English": "Grocery Store",
      "URL": "http://bildstod.se/image/get/8183",
      "File": "bilder/grocery_store.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Växla pengar",
      "Arabic": "تصريف عملة ",
      "English": "Money Exchange",
      "URL": "http://bildstod.se/image/get/2070",
      "File": "bilder/money_exchange.jpg"
    }, {
      "Kategori": "Shopping",
      "Swedish": "Kvitto",
      "Arabic": "فاتورة",
      "English": "Receipt",
      "URL": "http://bildstod.se/image/get/8382",
      "File": "bilder/receipt.jpg"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Buss",
      "Arabic": "حافلة ,باص",
      "English": "Bus",
      "URL": "http://bildstod.se/image/get/2673",
      "File": "bilder/bus.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Bil",
      "Arabic": "سيارة",
      "English": "Car",
      "URL": "http://bildstod.se/image/get/2779",
      "File": "bilder/car.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Taxi",
      "Arabic": "سيارة اجرة , تاكسي",
      "English": "Cab",
      "URL": "http://bildstod.se/image/get/4350",
      "File": "bilder/cab.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Tåg",
      "Arabic": "قطار ",
      "English": "Train",
      "URL": "http://bildstod.se/image/get/4487",
      "File": "bilder/train.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Spårvagn",
      "Arabic": "ترام",
      "English": "Tram",
      "URL": "http://bildstod.se/image/get/4482",
      "File": "bilder/tram.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Flyg",
      "Arabic": "طائرة",
      "English": "Airplane",
      "URL": "http://bildstod.se/image/get/2678",
      "File": "bilder/airplane.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Båt",
      "Arabic": "قارب ",
      "English": "Boat",
      "URL": "http://bildstod.se/image/get/1136",
      "File": "bilder/boat.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Cykel",
      "Arabic": "دراجة",
      "English": "Bicycle",
      "URL": "http://bildstod.se/image/get/2702",
      "File": "bilder/bicycle.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Höger",
      "Arabic": "يمين",
      "English": "Right",
      "URL": "http://bildstod.se/image/get/8400",
      "File": "bilder/right.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Vänster",
      "Arabic": "يسار",
      "English": "Left",
      "URL": "http://bildstod.se/image/get/8401",
      "File": "bilder/left.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Rakt fram",
      "Arabic": "مباشر , على طول ",
      "English": "Straight Forward",
      "URL": "http://bildstod.se/image/get/2325",
      "File": "bilder/straight_forward.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Tillbaka",
      "Arabic": "وراء",
      "English": "Back",
      "URL": "http://bildstod.se/image/get/6860",
      "File": "bilder/back.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Bakom",
      "Arabic": "وراء",
      "English": "Behind",
      "URL": "http://bildstod.se/image/get/6401",
      "File": "bilder/behind.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Vägbeskrivning",
      "Arabic": "اتجاهات",
      "English": "Travel direction",
      "URL": "http://bildstod.se/image/get/3367",
      "File": "bilder/travel_direction.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Var ligger?",
      "Arabic": "اين ",
      "English": "Where is?",
      "URL": "http://bildstod.se/image/get/7277",
      "File": "bilder/where_is.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Tid",
      "Arabic": "وقت",
      "English": "Time",
      "URL": "http://bildstod.se/image/get/7279",
      "File": "bilder/time.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Försening",
      "Arabic": "تأخير ",
      "English": "Delay",
      "URL": "http://bildstod.se/image/get/23651",
      "File": "bilder/delay.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Inställt",
      "Arabic": "ملغىاة",
      "English": "Cancelled",
      "URL": "http://bildstod.se/image/get/6477",
      "File": "bilder/cancelled.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Gå",
      "Arabic": "يمشي ",
      "English": "Walk",
      "URL": "http://bildstod.se/image/get/6715",
      "File": "bilder/walk.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Pass",
      "Arabic": "جواز سفر",
      "English": "Passport",
      "URL": "http://bildstod.se/image/get/6784",
      "File": "bilder/passport.jpg"
    }, {
      "Kategori": "Transportation",
      "Swedish": "Biljett",
      "Arabic": "تذكرة",
      "English": "Ticket",
      "URL": "http://bildstod.se/image/get/677",
      "File": "bilder/ticket.jpg"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Daily life",
      "Swedish": "TV",
      "Arabic": "تلفاز",
      "English": "TV",
      "URL": "http://bildstod.se/image/get/7787",
      "File": "bilder/tv.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Dator",
      "Arabic": "جهاز حاسوب , كومبيوتر ",
      "English": "Computer",
      "URL": "http://bildstod.se/image/get/7410",
      "File": "bilder/computer.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Mobil",
      "Arabic": "هاتف محمول , موبايل ",
      "English": "Mobile",
      "URL": "http://bildstod.se/image/get/4028",
      "File": "bilder/mobile.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Laddare",
      "Arabic": "شاحن ",
      "English": "Charger",
      "URL": "http://bildstod.se/image/get/1914",
      "File": "bilder/charger.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Leka",
      "Arabic": "بلعب",
      "English": "Play",
      "URL": "http://bildstod.se/image/get/3504",
      "File": "bilder/play.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Äta",
      "Arabic": "يأكل ",
      "English": "Eat",
      "URL": "http://bildstod.se/image/get/14620",
      "File": "bilder/eat.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Dricka",
      "Arabic": "يشرب ",
      "English": "Drink",
      "URL": "http://bildstod.se/image/get/2696",
      "File": "bilder/drink.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Gå",
      "Arabic": "بمشي ",
      "English": "Walk",
      "URL": "http://bildstod.se/image/get/6715",
      "File": "bilder/walk.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Hur mår du?",
      "Arabic": "كيف حالك ",
      "English": "How are you?",
      "URL": "http://bildstod.se/image/get/391",
      "File": "bilder/how_are_you.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Park",
      "Arabic": "حديقة ",
      "English": "Park",
      "URL": "http://bildstod.se/image/get/3473",
      "File": "bilder/park.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Café",
      "Arabic": "مقهى",
      "English": "Café",
      "URL": "http://bildstod.se/image/get/9294",
      "File": "bilder/café.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Bio",
      "Arabic": "سينما",
      "English": "Cinema",
      "URL": "http://bildstod.se/image/get/6005",
      "File": "bilder/cinema.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Skola",
      "Arabic": "مدرسة",
      "English": "School",
      "URL": "http://bildstod.se/image/get/7260",
      "File": "bilder/school.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Rita",
      "Arabic": "يرسم ",
      "English": "Draw",
      "URL": "http://bildstod.se/image/get/660",
      "File": "bilder/draw.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Läsa",
      "Arabic": "يقرأ",
      "English": "Read",
      "URL": "http://bildstod.se/image/get/4279",
      "File": "bilder/read.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Skriva",
      "Arabic": "يكتب",
      "English": "Write",
      "URL": "http://bildstod.se/image/get/7646",
      "File": "bilder/write.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Läxa",
      "Arabic": "واجب مدرسي",
      "English": "Home Work",
      "URL": "http://bildstod.se/image/get/650",
      "File": "bilder/home_work.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Duscha",
      "Arabic": "يستحم",
      "English": "Shower",
      "URL": "http://bildstod.se/image/get/3102",
      "File": "bilder/shower.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Tvätta händerna",
      "Arabic": "بغسل يديه",
      "English": "Wash hands",
      "URL": "http://bildstod.se/image/get/3528",
      "File": "bilder/wash_hands.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Borsta tänderna",
      "Arabic": "تنظيف الاسنان ",
      "English": "Brush teeth",
      "URL": "http://bildstod.se/image/get/9260",
      "File": "bilder/brush_teeth.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Byta om",
      "Arabic": "يبدل ملابس",
      "English": "Change",
      "URL": "http://bildstod.se/image/get/5336",
      "File": "bilder/change.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Musik",
      "Arabic": "موسيقى ",
      "English": "Music",
      "URL": "http://bildstod.se/image/get/5323",
      "File": "bilder/music.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Toalett",
      "Arabic": "مرحاض ",
      "English": "Toilet",
      "URL": "http://bildstod.se/image/get/3449",
      "File": "bilder/toilet.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Sova",
      "Arabic": "نائم",
      "English": "Sleep",
      "URL": "http://bildstod.se/image/get/6897",
      "File": "bilder/sleep.jpg"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Kall",
      "Arabic": "بارد",
      "English": "Cold",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/cold_2.png",
      "File": "bilder/cold.png"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Varm",
      "Arabic": "ساخن",
      "English": "Hot",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/hot_2.png",
      "File": "bilder/hot.png"
    }, {
      "Kategori": "Daily life",
      "Swedish": "Migrationsverket",
      "Arabic": "مصلحة الھجرة",
      "English": "\nMigration Agency",
      "URL": "http://bildstod.se/image/get/8005",
      "File": "bilder/\nmigration_agency.jpg"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Glad",
      "Arabic": "سعيد",
      "English": "Happy",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/boy_1.png",
      "File": "bilder/happy.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Ledsen",
      "Arabic": "حزين",
      "English": "Sad",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/sad.png",
      "File": "bilder/sad.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Orolig",
      "Arabic": "قلق ",
      "English": "Worried",
      "URL": "http://bildstod.se/image/get/9549",
      "File": "bilder/worried.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Uttråkad",
      "Arabic": "يشعر بالملل",
      "English": "Bored",
      "URL": "http://bildstod.se/image/get/2649",
      "File": "bilder/bored.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Deprimerad",
      "Arabic": "مكتئب",
      "English": "Depressed",
      "URL": "http://bildstod.se/image/get/4505",
      "File": "bilder/depressed.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Rädd",
      "Arabic": "خائف",
      "English": "Afraid",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/to%20be%20frightened_2.png",
      "File": "bilder/afraid.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Trött",
      "Arabic": "تعب",
      "English": "Tired",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/tired_4.png",
      "File": "bilder/tired.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Förväntansfull",
      "Arabic": "مستمتع",
      "English": "Excited",
      "URL": "http://bildstod.se/image/get/8478",
      "File": "bilder/excited.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Hungrig",
      "Arabic": "جائع",
      "English": "Hungry",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/hungry.png",
      "File": "bilder/hungry.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Törstig",
      "Arabic": "عطشان",
      "English": "Thirsty",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/thirsty.png",
      "File": "bilder/thirsty.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Ensam",
      "Arabic": "وحيد",
      "English": "Lonely",
      "URL": "http://bildstod.se/image/get/7448",
      "File": "bilder/lonely.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Tacksam",
      "Arabic": "ممتن ,شاكر",
      "English": "Thankful",
      "URL": "http://bildstod.se/image/get/7686",
      "File": "bilder/thankful.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Nöjd",
      "Arabic": "يشعر بالرضى ",
      "English": "Satisfied",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/Designer/I%20am%20fine(F).jpg",
      "File": "bilder/satisfied.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Pigg",
      "Arabic": "منتبه",
      "English": "Alert",
      "URL": "http://bildstod.se/image/get/1807",
      "File": "bilder/alert.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Arg",
      "Arabic": "غاضب ",
      "English": "Angry",
      "URL": "http://bildstod.se/image/get/3120",
      "File": "bilder/angry.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Motiverad",
      "Arabic": "متحمس ,يشعربالحماس",
      "English": "Motivated",
      "URL": "http://bildstod.se/image/get/15020",
      "File": "bilder/motivated.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Fryser",
      "Arabic": "يشعر بالبرد",
      "English": "Cold",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/cold_3.png",
      "File": "bilder/cold.png"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Generad",
      "Arabic": "يشعر بالاحراج ,محرج ",
      "English": "Embarrassed",
      "URL": "http://bildstod.se/image/get/1073",
      "File": "bilder/embarrassed.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Älska",
      "Arabic": "يحب",
      "English": "Love",
      "URL": "http://bildstod.se/image/get/7427",
      "File": "bilder/love.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Roligt",
      "Arabic": "ممتع",
      "English": "Fun",
      "URL": "http://bildstod.se/image/get/17338",
      "File": "bilder/fun.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Saknar",
      "Arabic": "يشتاق ",
      "English": "Missing",
      "URL": "http://bildstod.se/image/get/222",
      "File": "bilder/missing.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Smärta",
      "Arabic": "ألم ",
      "English": "Pain",
      "URL": "http://bildstod.se/image/get/19300",
      "File": "bilder/pain.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Illamående",
      "Arabic": "غثيان ",
      "English": "Nausia",
      "URL": "http://bildstod.se/image/get/24012",
      "File": "bilder/nausia.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Depression",
      "Arabic": "اكتئاب",
      "English": "Depression",
      "URL": "http://bildstod.se/image/get/4505",
      "File": "bilder/depression.jpg"
    }, {
      "Kategori": "Feelings",
      "Swedish": "Varm",
      "Arabic": "دافئ",
      "English": "Warm",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/Designer/copyof-copyof-copyof-Hot%20sun.png",
      "File": "bilder/warm.png"
    }, {
      "Kategori": "",
      "Swedish": "",
      "Arabic": "",
      "English": "",
      "URL": "",
      "File": "bilder/"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Jag",
      "Arabic": "انا ",
      "English": "I",
      "URL": "http://bildstod.se/image/get/7048",
      "File": "bilder/i.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Till",
      "Arabic": "إلى",
      "English": "To",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/to.jpg",
      "File": "bilder/to.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "I",
      "Arabic": "في ",
      "English": "In",
      "URL": "http://bildstod.se/image/get/6397",
      "File": "bilder/in.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Du/Ni",
      "Arabic": "انت , انتم ",
      "English": "You",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/Designer/you_4.png",
      "File": "bilder/you.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Ja",
      "Arabic": "نعم",
      "English": "Yes",
      "URL": "http://bildstod.se/image/get/2318",
      "File": "bilder/yes.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Nej",
      "Arabic": "لا ",
      "English": "No",
      "URL": "http://bildstod.se/image/get/2577",
      "File": "bilder/no.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Har",
      "Arabic": "لديه , عنده ",
      "English": "Have",
      "URL": "http://bildstod.se/image/get/1285",
      "File": "bilder/have.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Gilla",
      "Arabic": "يحب",
      "English": "Like",
      "URL": "http://bildstod.se/image/get/8478",
      "File": "bilder/like.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Mig",
      "Arabic": "انا ",
      "English": "Me",
      "URL": "http://bildstod.se/image/get/7503",
      "File": "bilder/me.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Göra",
      "Arabic": "يعمل , يفعل ",
      "English": "Do",
      "URL": "http://bildstod.se/image/get/6682",
      "File": "bilder/do.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "På",
      "Arabic": "على ",
      "English": "On",
      "URL": "http://bildstod.se/image/get/6408",
      "File": "bilder/on.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Personer",
      "Arabic": "الناس ",
      "English": "People",
      "URL": "http://bildstod.se/image/get/7313",
      "File": "bilder/people.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Veta",
      "Arabic": "يعرف ",
      "English": "Know",
      "URL": "http://bildstod.se/image/get/8232",
      "File": "bilder/know.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Med",
      "Arabic": "مع",
      "English": "With",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-with.png",
      "File": "bilder/with.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "De",
      "Arabic": "هم",
      "English": "They",
      "URL": "http://bildstod.se/image/get/7228",
      "File": "bilder/they.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Vad",
      "Arabic": "ماذا ,ما ",
      "English": "What",
      "URL": "http://bildstod.se/image/get/483",
      "File": "bilder/what.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Inte",
      "Arabic": "لا ",
      "English": "Not",
      "URL": "http://bildstod.se/image/get/6477",
      "File": "bilder/not.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Hon",
      "Arabic": "هي ",
      "English": "She",
      "URL": "http://bildstod.se/image/get/7226",
      "File": "bilder/she.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Han",
      "Arabic": "هو",
      "English": "He",
      "URL": "http://bildstod.se/image/get/6067",
      "File": "bilder/he.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Vi",
      "Arabic": "نحن",
      "English": "We",
      "URL": "http://bildstod.se/image/get/8129",
      "File": "bilder/we.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Tänka",
      "Arabic": "يفكر",
      "English": "Think",
      "URL": "http://bildstod.se/image/get/8099",
      "File": "bilder/think.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "En",
      "Arabic": "واحد",
      "English": "One",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/one_1.png",
      "File": "bilder/one.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "När",
      "Arabic": "متى",
      "English": "When",
      "URL": "http://bildstod.se/image/get/2669",
      "File": "bilder/when.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Inte",
      "Arabic": "ليس",
      "English": "Not",
      "URL": "http://bildstod.se/image/get/7416",
      "File": "bilder/not.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Bra",
      "Arabic": "جيد",
      "English": "Well",
      "URL": "http://bildstod.se/image/get/2318",
      "File": "bilder/well.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Dålig",
      "Arabic": "سيئ",
      "English": "Bad",
      "URL": "http://bildstod.se/image/get/2577",
      "File": "bilder/bad.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Hur",
      "Arabic": "كيف",
      "English": "How",
      "URL": "http://bildstod.se/image/get/1021",
      "File": "bilder/how.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Eller",
      "Arabic": "أو",
      "English": "Or",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/which.png",
      "File": "bilder/or.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Tid",
      "Arabic": "وقت",
      "English": "Time",
      "URL": "http://bildstod.se/image/get/2203",
      "File": "bilder/time.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Detta",
      "Arabic": "هذا ",
      "English": "This",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-copyof-this%20one.png",
      "File": "bilder/this.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Använda",
      "Arabic": "يستعمل ",
      "English": "Use",
      "URL": "http://bildstod.se/image/get/1619",
      "File": "bilder/use.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Där",
      "Arabic": "هناك",
      "English": "There",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/there.png",
      "File": "bilder/there.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Jobba",
      "Arabic": "يعمل , يشتغل",
      "English": "Work",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/job_2.png",
      "File": "bilder/work.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Säga",
      "Arabic": "يقول ",
      "English": "Say",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/to%20say.png",
      "File": "bilder/say.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Från",
      "Arabic": "من",
      "English": "From",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/from.png",
      "File": "bilder/from.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Gå",
      "Arabic": "يمشي ",
      "English": "Walk",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/to%20walk_1.png",
      "File": "bilder/walk.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Kan",
      "Arabic": "يستطيع",
      "English": "Can",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/to%20be%20able%20to.png",
      "File": "bilder/can.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Mer",
      "Arabic": "أكثر",
      "English": "More",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/more_1.png",
      "File": "bilder/more.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Behöver",
      "Arabic": "يحتاج",
      "English": "Need",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/help_4.png",
      "File": "bilder/need.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Några",
      "Arabic": "بعض",
      "English": "Some",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-thumbnail.png",
      "File": "bilder/some.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "År",
      "Arabic": "سنة",
      "English": "Year",
      "URL": "http://bildstod.se/image/get/16207",
      "File": "bilder/year.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Månad",
      "Arabic": "شهر",
      "English": "Month",
      "URL": "http://bildstod.se/image/get/7358",
      "File": "bilder/month.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Dag",
      "Arabic": "يوم",
      "English": "Day",
      "URL": "http://bildstod.se/image/get/3538",
      "File": "bilder/day.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Timme",
      "Arabic": "ساعة",
      "English": "Hour",
      "URL": "http://bildstod.se/image/get/7326",
      "File": "bilder/hour.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Alla",
      "Arabic": "كل ",
      "English": "All",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/all%20-%20everything_1.png",
      "File": "bilder/all.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Hjälpa",
      "Arabic": "مساعدة",
      "English": "Help",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/help_4.png",
      "File": "bilder/help.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Få",
      "Arabic": "يستلم",
      "English": "Get",
      "URL": "http://bildstod.se/image/get/1557",
      "File": "bilder/get.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Tal",
      "Arabic": "كلام",
      "English": "Speech",
      "URL": "http://bildstod.se/image/get/5877",
      "File": "bilder/speech.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Mesta",
      "Arabic": "معظم",
      "English": "Most",
      "URL": "http://bildstod.se/image/get/10911",
      "File": "bilder/most.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Nu",
      "Arabic": "الأن",
      "English": "Now",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/now.png",
      "File": "bilder/now.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Vilken",
      "Arabic": "أي ؟",
      "English": "Which",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/which.png",
      "File": "bilder/which.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Vem",
      "Arabic": "من ؟",
      "English": "Who",
      "URL": "http://bildstod.se/image/get/2362",
      "File": "bilder/who.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Ut",
      "Arabic": "في الخارج",
      "English": "Out",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/out.png",
      "File": "bilder/out.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Deras",
      "Arabic": "-هم",
      "English": "Their",
      "URL": "http://bildstod.se/image/get/1292",
      "File": "bilder/their.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Varit",
      "Arabic": "كان",
      "English": "Been",
      "URL": "http://bildstod.se/image/get/5282",
      "File": "bilder/been.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Först",
      "Arabic": "الأول ",
      "English": "First",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-copyof-thumbnail.png",
      "File": "bilder/first.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Olika",
      "Arabic": "فرق",
      "English": "Different",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/different.png",
      "File": "bilder/different.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Verkligen?!",
      "Arabic": "هل هذا صحيح !؟",
      "English": "Really?!",
      "URL": "http://bildstod.se/image/get/4312",
      "File": "bilder/really.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Saker",
      "Arabic": "أشياء",
      "English": "Things",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/things.png",
      "File": "bilder/things.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Två",
      "Arabic": "اثنين",
      "English": "Two",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/number%20two_1.png",
      "File": "bilder/two.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Pojke",
      "Arabic": "ولد",
      "English": "Boy",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-copyof-copyof-boy_3.png",
      "File": "bilder/boy.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Flicka",
      "Arabic": "بنت",
      "English": "Girl",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-little%20girl.png",
      "File": "bilder/girl.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Kvinna",
      "Arabic": "إمرأة",
      "English": "Woman",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-person_6.png",
      "File": "bilder/woman.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Man",
      "Arabic": "رجل",
      "English": "Man",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-person_5.png",
      "File": "bilder/man.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Syster",
      "Arabic": "أخت",
      "English": "Sister",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/sister.png",
      "File": "bilder/sister.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Bror",
      "Arabic": "أخ",
      "English": "Brother",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/brother.png",
      "File": "bilder/brother.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Mamma",
      "Arabic": "أم",
      "English": "Mother",
      "URL": "http://bildstod.se/image/get/3616",
      "File": "bilder/mother.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Pappa",
      "Arabic": "أب",
      "English": "Dad",
      "URL": "http://bildstod.se/image/get/3848",
      "File": "bilder/dad.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Mormor/farmor",
      "Arabic": "جدة",
      "English": "Grandmother",
      "URL": "http://bildstod.se/image/get/3101",
      "File": "bilder/grandmother.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Morfar/farfar",
      "Arabic": "جد",
      "English": "Grandfather",
      "URL": "http://bildstod.se/image/get/2648",
      "File": "bilder/grandfather.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Barn",
      "Arabic": "أولاد",
      "English": "Children",
      "URL": "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-boys_2.png",
      "File": "bilder/children.png"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Familj",
      "Arabic": "أسرة",
      "English": "Family",
      "URL": "http://bildstod.se/image/get/3580",
      "File": "bilder/family.jpg"
    }, {
      "Kategori": "Core vocabulary",
      "Swedish": "Bebis",
      "Arabic": "وليد",
      "English": "Baby",
      "URL": "http://bildstod.se/image/get/6730",
      "File": "bilder/baby.jpg"
    }]

  });
}
