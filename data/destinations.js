const destinations = [
    {
        id: 1,
        city: "Paris",
        country: "France",
        sketchySpots: [
            "The friendship bracelet trick around Sacré-Cœur (vendors tying strings on your wrist and demanding cash).",
            "Fake petition signers near the Eiffel Tower who pickpocket you while you look down.",
            "Unregulated taxis outside major airports charging triple price."
        ]
    },
    {
        id: 2,
        city: "Rome",
        country: "Italy",
        sketchySpots: [
            "Gladiator impersonators outside the Colosseum demanding €20+ for a quick photo.",
            "Extremely crowded bus routes (like Bus 64) notorious for highly skilled pickpockets.",
            "Restaurants right next to major monuments with no prices on the menu (tourist traps)."
        ]
    },
    {
        id: 3,
        city: "New York",
        country: "USA",
        sketchySpots: [
            "Times Square costumed characters forcing photos and getting aggressive about tips.",
            "People handing out 'free' music CDs then harassing you for a donation.",
            "Fake pedicab (bike taxi) drivers charging astronomical per-minute rates."
        ]
    },
    {
        id: 4,
        city: "Tokyo",
        country: "Japan",
        sketchySpots: [
            "Street promoters in nightlife districts (like Roppongi or Kabukicho) promising cheap drinks but hitting you with massive hidden cover charges.",
            "Extremely overpriced themed cafes that charge hidden seat fees per minute."
        ]
    },
    {
        id: 5,
        city: "London",
        country: "UK",
        sketchySpots: [
            "Three-card monte / shell games on Westminster Bridge (staged tricks designed to steal your money).",
            "Unlicensed rickshaws around West End charging over £100 for a 5-minute ride.",
            "Fake ticket sellers outside major West End theatres."
        ]
    },
    {
        id: 6,
        city: "Bangkok",
        country: "Thailand",
        sketchySpots: [
            "The 'Grand Palace is closed today' scam where Tuk-Tuk drivers take you to overpriced gem shops instead.",
            "Tuk-Tuk drivers refusing to use meters and demanding flat, inflated rates.",
            "Jet ski rental spots claiming you damaged the watercraft to demand huge cash payouts."
        ]
    },
    {
        id: 7,
        city: "Barcelona",
        country: "Spain",
        sketchySpots: [
            "Heavy pickpocketing crowds along Las Ramblas and inside Metro stations.",
            "Street vendors selling drinks laid out on cardboard boxes over sewage grates.",
            "Staged distraction scams (someone spilling something on your shoes to pickpocket you while cleaning it)."
        ]
    },
    {
        id: 8,
        city: "Cairo",
        country: "Egypt",
        sketchySpots: [
            "Aggressive camel or horse operators at the Pyramids quoting low prices to get on, but charging massive fees to let you down.",
            "Unofficial tour guides grabbing your entry ticket and forcing a guided tour you didn't ask for."
        ]
    },
    {
        id: 9,
        city: "Rio de Janeiro",
        country: "Brazil",
        sketchySpots: [
            "Copacabana beach vendors charging dynamic 'tourist prices' for basic items if you don't check a menu.",
            "Distraction thieves operating in large crowds during festival events or street blocks."
        ]
    },
    {
        id: 10,
        city: "Sydney",
        country: "Australia",
        sketchySpots: [
            "Overpriced inner-city souvenir shops selling counterfeit or non-authentic indigenous art pieces.",
            "Unofficial airport rideshare drivers soliciting passengers directly inside the terminal arrivals hall."
        ]
    },
    {
        id: 11,
        city: "Amsterdam",
        country: "Netherlands",
        sketchySpots: [
            "Aggressive bicycle rental riders if you accidentally walk inside marked, designated bike lanes.",
            "Fake 'street dealers' selling completely fake or dangerous substances to tourists.",
            "Unlicensed water taxi operators charging inflated flat rates during late-night hours."
        ]
    },
    {
        id: 12,
        city: "Agra",
        country: "India",
        sketchySpots: [
            "Aggressive rickshaw drivers dropping you off far from the Taj Mahal entrance to force you onto expensive golf carts.",
            "Fake 'official guides' claiming the main gates are closed to redirect you to specific handicraft souvenir emporiums."
        ]
    },
    {
        id: 13,
        city: "Bali",
        country: "Indonesia",
        sketchySpots: [
            "Money changers utilizing hidden desk drawers or sleight of hand tricks to shortchange you on cash payouts.",
            "Monkey forest areas where local macaques aggressively steal sunglasses, phones, and snacks to hold for a 'ransom' of food."
        ]
    },
    {
        id: 14,
        city: "Istanbul",
        country: "Turkey",
        sketchySpots: [
            "The shoe-shine brush drop (the cleaner drops their brush, you pick it up, they thank you with a 'free' shine that they violently demand payment for).",
            "Friendly strangers inviting you to a specific local bar, ordering drinks, and leaving you with a €500 bill backed by heavy security."
        ]
    },
    {
        id: 15,
        city: "Marrakesh",
        country: "Morocco",
        sketchySpots: [
            "Henna artists in Jemaa el-Fnaa grabbing your hand, applying rapid designs, and aggressively demanding massive payments.",
            "Snake charmers placing animals onto your shoulders without asking and forcing you to pay for the photo."
        ]
    },
    {
        id: 16,
        city: "Prague",
        country: "Czech Republic",
        sketchySpots: [
            "Currency exchange booths right in tourist centers showing great rates on signs, but burying a 28% commission fee in the fine print.",
            "Street vendors selling traditional chimney cakes (Trdelník) who overcharge by weighing the food dynamically."
        ]
    },
    {
        id: 17,
        city: "Las Vegas",
        country: "USA",
        sketchySpots: [
            "Club promoters handing out VIP passes that actually have highly restrictive fine print (like requiring equal guy-to-girl ratios or long wait lines).",
            "Independent ATM machines placed inside secondary gift shops that charge massive $10+ processing fees."
        ]
    },
    {
        id: 18,
        city: "Athens",
        country: "Greece",
        sketchySpots: [
            "The 'bars / rose' scam around Monastiraki where street sellers drop flowers on your table or lap and demand immediate cash.",
            "Pickpocketing rings operating heavily near the crowded entrances of the ancient Acropolis site."
        ]
    },
    {
        id: 19,
        city: "Berlin",
        country: "Germany",
        sketchySpots: [
            "The cup-and-ball gambling game setups along the East Side Gallery (run by coordinated teams to take your cash).",
            "Fake charity collectors pretending to be deaf or mute asking for signatures and immediate cash donations."
        ]
    },
    {
        id: 20,
        city: "Hanoi",
        country: "Vietnam",
        sketchySpots: [
            "Fruit vendors putting their shoulder carrying-baskets onto you for a photo opportunity, then demanding you buy overpriced fruit.",
            "Fake taxi meters that jump up in cost every few seconds instead of tracking distance accurately."
        ]
    },
    {
        id: 21,
        city: "Cancun",
        country: "Mexico",
        sketchySpots: [
            "Timeshare presentation agents disguised as official airport helpful information or concierge desks.",
            "Jet ski operators claiming structural fiberglass damage after you return to force large cash penalties."
        ]
    },
    {
        id: 22,
        city: "Vienna",
        country: "Austria",
        sketchySpots: [
            "People dressed up in historical Mozart-era costumes outside concert venues selling tickets to low-tier, overpriced performances.",
            "High-priced cafés around central plazas that add unexpected bread/cover charges directly to the final bill."
        ]
    },
    {
        id: 23,
        city: "Venice",
        country: "Italy",
        sketchySpots: [
            "Water taxi operators charging undocumented premium night-rates if you don't negotiate a solid total beforehand.",
            "Pigeon food sellers forcing birdseed into your hands in St. Mark's Square then demanding €5 to €10."
        ]
    },
    {
        id: 24,
        city: "Dublin",
        country: "Ireland",
        sketchySpots: [
            "Extremely crowded pub districts (like Temple Bar) charging double the standard national price for food and drinks.",
            "Unlicensed tour buses outside major train hubs promising direct routes to scenic countryside spots."
        ]
    },
    {
        id: 25,
        city: "Reykjavik",
        country: "Iceland",
        sketchySpots: [
            "Overpriced airport convenience shops selling standard bottled tap water under fancy labels (Icelandic tap water is perfectly clean for free!).",
            "Low-tier Northern Lights tour companies refusing to refund tickets when weather conditions offer zero visibility."
        ]
    },
    {
        id: 26,
        city: "Toronto",
        country: "Canada",
        sketchySpots: [
            "Fake parking ticket scams placed on rental cars in popular inner-city entertainment districts.",
            "Overpriced pop-up museum exhibitions that look good on social media but take 5 minutes to walk through."
        ]
    },
    {
        id: 27,
        city: "Lisbon",
        country: "Portugal",
        sketchySpots: [
            "Aggressive pickpockets targeting crowded historic transport lanes (specifically Tram 28).",
            "Restaurants placing unrequested cheese, olives, and ham appetizers on your table, then charging massive individual fees if you touch them."
        ]
    },
    {
        id: 28,
        city: "Dubrovnik",
        country: "Croatia",
        sketchySpots: [
            "Unregulated private boat excursions charging premium prices but skipping promised island stops due to 'sea conditions.'",
            "Souvenir shops near Old Town walls selling generic items labeled as authentic local imports."
        ]
    },
    {
        id: 29,
        city: "Singapore",
        country: "Singapore",
        sketchySpots: [
            "Electronic shops in secondary tech malls quoting low prices, then adding massive hidden warranty or sales fees before giving you the item.",
            "Street food stands without clearly visible price cards charging surge prices to tourists during peak weekend hours."
        ]
    },
    {
        id: 30,
        city: "Cape Town",
        country: "South Africa",
        sketchySpots: [
            "Fake 'car guards' demanding cash up front to look after your vehicle parked on public street spots.",
            "Scam artists operating around central public ATMs offering unsolicited 'help' to switch card inputs and steal your PIN code."
        ]
    },

    {
        id: 31,
        city: "Budapest",
        country: "Hungary",
        sketchySpots: [
            "Certain non-franchise taxis running 'turbo meters' that double the fare price while you aren't looking.",
            "Menus at specific downtown strip clubs or bars that hide massive service fees in microscopic print."
        ]
    },
    {
        id: 32,
        city: "Seoul",
        country: "South Korea",
        sketchySpots: [
            "Fake 'religious cult' recruiters around Hongdae or Itaewon who invite foreigners to a 'traditional cultural ceremony' to demand high cash donations.",
            "Unregulated street food stalls in major shopping districts that don't display prices and charge tourists double."
        ]
    },
    {
        id: 33,
        city: "Istanbul",
        country: "Turkey",
        sketchySpots: [
            "The 'dropped shoe-shine brush' hustle—if you pick it up, they give you a 'free' shoe shine and then aggressively demand a huge payment.",
            "Overpriced spice vendors in tourist markets who trick you by weighing items using hidden heavier objects on the scale."
        ]
    },
    {
        id: 34,
        city: "Bangkok",
        country: "Thailand",
        sketchySpots: [
            "The infamous 'The Palace is closed today' trick where Tuk-Tuk drivers try to take you to high-pressure jewelry or tailor shops instead.",
            "Jet ski rental operators on nearby beaches who accuse you of causing pre-existing scratches to extort hundreds of dollars."
        ]
    },
    {
        id: 35,
        city: "Kuala Lumpur",
        country: "Malaysia",
        sketchySpots: [
            "Unlicensed airport drivers waiting outside arrivals who bypass the official queue to charge inflated flat rates.",
            "Pickpockets operating in tight crowds around the Petaling Street night market."
        ]
    },
    {
        id: 36,
        city: "Hanoi",
        country: "Vietnam",
        sketchySpots: [
            "Street vendors who force a fruit carrying pole onto your shoulders for a 'free photo,' then demand you buy the fruit at astronomical prices.",
            "Unregistered taxi companies using clone look-alike logos of reputable companies with rigged meters."
        ]
    },
    {
        id: 37,
        city: "Marrakesh",
        country: "Morocco",
        sketchySpots: [
            "Aggressive henna artists in the main square who grab your hand, draw a design without permission, and demand cash.",
            "Fake local guides who intentionally tell you a street or attraction is 'closed' so they can lead you into their family's rug shop."
        ]
    },
    {
        id: 38,
        city: "Cairo",
        country: "Egypt",
        sketchySpots: [
            "Camel ride operators at the Pyramids who quote a very low price to get on the camel, but demand a massive fee to let you back down.",
            "Aggressive street sellers who hand you a 'free gift' or souvenir, then refuse to take it back and demand payment."
        ]
    },
    {
        id: 39,
        city: "Nairobi",
        country: "Kenya",
        sketchySpots: [
            "Fake safari booking agents operating out of unofficial storefronts selling non-existent tours.",
            "Con artists pretending to be police or city officials issuing fake fines for minor things like walking in the wrong spot."
        ]
    },
    {
        id: 40,
        city: "Cape Town",
        country: "South Africa",
        sketchySpots: [
            "Aggressive 'car guards' on public streets who demand money upfront to 'protect' your parked car.",
            "Distraction scams around public ATMs where strangers offer unsolicited help to switch out your card or peek at your PIN."
        ]
    },
    {
        id: 41,
        city: "Dubai",
        country: "UAE",
        sketchySpots: [
            "Fake luxury watch or designer bag sellers in the old souk alleyways who lead you to hidden apartments to buy counterfeit goods.",
            "Unlicensed private car owners posing as official luxury taxis outside major malls charging inflated prices."
        ]
    },
    {
        id: 42,
        city: "Sydney",
        country: "Australia",
        sketchySpots: [
            "Souvenir shops in highly touristy areas selling cheap mass-produced items falsely labeled as authentic, locally made indigenous art.",
            "Pop-up ticket vendors near Circular Quay selling inflated ferry tours that cost triple the price of the official regular public ferry."
        ]
    },
    {
        id: 43,
        city: "Auckland",
        country: "New Zealand",
        sketchySpots: [
            "Campervan rental scams online listing incredibly cheap vehicles that don't exist, demanding wire transfer deposits.",
            "Highly inflated inner-city parking lots that hide extreme hourly surge rates on confusingly worded signs."
        ]
    },
    {
        id: 44,
        city: "Rio de Janeiro",
        country: "Brazil",
        sketchySpots: [
            "Beach vendors charging an unlisted 'gringo tax' (triple price) for chairs and umbrellas if you don't ask for a written menu first.",
            "Distraction groups who cause a loud scene or drop items on the sidewalk to pickpocket you while you look away."
        ]
    },
    {
        id: 45,
        city: "Buenos Aires",
        country: "Argentina",
        sketchySpots: [
            "The 'mustard/spill' scam—someone accidentally drops a substance on your jacket, and a friendly helper steps in to clean it while secretly taking your wallet.",
            "Counterfeit cash given back as change by fast-moving taxi drivers during late-night rides."
        ]
    },
    {
        id: 46,
        city: "Lima",
        country: "Peru",
        sketchySpots: [
            "Unofficial airport taxis that do not have proper decals, sometimes driving passengers to remote money-changing spots to overcharge them.",
            "Fake tour companies in transit hubs selling low-quality, unsafe transit options up to Machu Picchu."
        ]
    },
    {
        id: 47,
        city: "Cancun",
        country: "Mexico",
        sketchySpots: [
            "Aggressive timeshare salespeople at airport arrivals disguised as helpful official tourist information or complimentary shuttle desks.",
            "Gas station attendants who use sleight-of-hand tricks with cash bills to make it look like you underpaid them."
        ]
    },
    {
        id: 48,
        city: "Toronto",
        country: "Canada",
        sketchySpots: [
            "Fake apartment or short-term vacation rental listings on secondary sites targeting travelers with upfront deposit scams.",
            "Independent street-level ATMs in entertainment districts that charge massive hidden transaction fees up to $10."
        ]
    },
    {
        id: 49,
        city: "Vancouver",
        country: "Canada",
        sketchySpots: [
            "Overpriced private tour buses operating outside major transit stations charging massive premiums for basic city routes.",
            "Scalpers selling completely fake or duplicate digital entry tickets to popular seasonal festivals outside venues."
        ]
    },
    {
        id: 50,
        city: "Reykjavik",
        country: "Iceland",
        sketchySpots: [
            "Souvenir shops selling expensive bottled 'Glacial Water' which is literally just regular Icelandic tap water (which is completely clean and free everywhere).",
            "Low-tier tour operators who refuse to cancel or reschedule Northern Lights trips even when official meteorological data shows 100% cloud cover."
        ]
    }
];