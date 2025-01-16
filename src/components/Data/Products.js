const products = {
    mobiles: [

        {
            id: 'mob1',
            type: 'mobile',
            title: "OPPO A31",
            description: 'OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage)',
            price: 9999,
            imageUrl: 'https://m.media-amazon.com/images/I/61CnyJ-IbML._SX679_.jpg',
            pageInfo: {
                imageUrl: `https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg`,
                title: "OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                rating: 4.5,
                descriptionOne: `12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera
                16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density
                Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)
                Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob2',
            type: 'mobile',
            title: "Tecno Pop 5 LTE",
            description: 'Tecno Pop 5 LTE(Ice Blue 2G+32GB)| 6.52" HD+Dot Notch | 5000mAh | 8MP Dual Camera | Front Flash| IPX2 Splash Resistant',
            price: 6799,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/816VTQXz8-L._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/81ikixf0AxL._SY741_.jpg`,
                title: `Tecno Pop 5 LTE(Ice Blue 2G+32GB)| 6.52" HD+Dot Notch | 5000mAh | 8MP Dual Camera | Front Flash| IPX2 Splash ResistantAdditional Exchange Offers`,
                rating: 3.8,
                descriptionOne: `Vibrant 6.52" Dot Notch HD+ display for perfect viewing experience | 90% screen to body ratio | 480nits max. brightness | No support for Africa's frequency bands
                5000mAh battery for unstoppable entertainment | Ultra Power Saving Mode | 48Hours of Video Playback | Battery Lab
                8MP Portrait Dual rear Camera for clear images | Excellent Image Processing | Dual Flashlight`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob9',
            type: 'mobile',
            title: "Oppo A54",
            description: 'Oppo A54 (Starry Blue, 4GB RAM, 64GB Storage) with No Cost EMI & Additional Exchange Offers',
            price: 12490,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71k86pEH5LS._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/71k86pEH5LS._SX679_.jpg`,
                title: "Oppo A54 (Starry Blue, 4GB RAM, 64GB Storage) with No Cost EMI & Additional Exchange Offers",
                rating: 4.4,
                descriptionOne: `6.51" Inch (16.5cm) HD+ Puch-hole Display with 1600x720 pixels. Larger screen to body ratio of 89.2%., Side Fingerprint Sensor.
                MediaTek Helio P35 GPU IMG GE8320 @ 680 MHz, Powerful 2.3 GHz Octa-core processor, support LPDDR4X memory`,

                descriptionTwo: `5000 mAh lithium polymer battery 13MP Quad Camera ( 13MP Main + 2MP Macro + 2MP Bokeh Lens), 16MP Front Camera.`,

                descriptionThree: `Handset, Adapter (5V/2A), USB Cable, SIM Card Tool, Important Info Booklet with Warranty Card, Quick Guide`
            }
        },
        {
            id: 'mob3',
            type: 'mobile',
            title: "Tecno Spark 8C ",
            description: 'Tecno Spark 8C Turquoise Cyan (3GB+64GB) | Upto 6GB RAM |90Hz Refresh Rate |6.6" HD+ Display | 5000mAh |13MP Dual Camera| IPX2 Splash Resistant',
            price: 8099,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81kFQpwRonL._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/71QPriGOOVL._SY741_.jpg`,
                title: `Tecno Spark 8C Turquoise Cyan (3GB+64GB) | Upto 6GB RAM |90Hz Refresh Rate |6.6" HD+ Display | 5000mAh |13MP Dual Camera| IPX2 Splash Resistant`,
                rating: 4.0,
                descriptionOne: `90Hz high refresh rate for smoother scrolling and visual experience | 6.6" HD+ Dot Notch display | 180Hz touch sampling rate for smooth touch response | No support for Africa's frequency bands
                Upto 6GB larger RAM (3GB LPDDR4x + 3GB Virtual RAM) with the help of memory fusion technology | Upto 45% improvement in launching apps, upto 15 apps support in background | 64GB eMMC 5.1 ROM extendable upto 256GB`,
                descriptionTwo: `13MP rear Dual Camera and Dual Flashlight | 8MP Selfie camera with front flash| Multiple AI modes like Portrait, HDR, Smile Shot, AI Scene Detection | Shoot good`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob4',
            type: 'mobile',
            title: "Redmi 9A Sport ",
            description: 'Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery',
            price: 6999,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/810KHyQ4WcL._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/81p+EkIvUUL._SX679_.jpg`,
                title: "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
                rating: 4.2,
                descriptionOne: `Processor: MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed
                Camera: 13 MP Rear camera with AI portrait| 5 MP front camera
                Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio
                Battery: 5000 mAH large battery with 10W wired`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob5',
            type: 'mobile',
            title: "Redmi Note 10S ",
            description: 'Redmi Note 10S (Deep Sea Blue, 6GB RAM, 64GB Storage) -Super Amoled Display',
            price: 14999,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81B0HJigO-L._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/81B0HJigO-L._SX679_.jpg`,
                title: "OPPO A35 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                rating: 4.5,
                descriptionOne: `Display: FHD+ (1080x2400) AMOLED Dot display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio
                Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera
                Processor: MediaTek Helio G95 Octa-core; 12nm process; Up to 2.05GHz clock speed
                Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity`,
                descriptionTwo: `Alexa Hands-Free capable: Download the Alexa app on to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, using just your voice, while on-the-go. Just ask and Alexa will respond instantly.`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob6',
            type: 'mobile',
            title: "realme narzo 50A ",
            description: 'realme narzo 50A (Oxygen Blue , 4GB RAM + 128 GB Storage) Helio G85 Processor | 50MP AI Triple Camera | 6000 mAh Battery',
            price: 12499,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71hgVYiuFXL._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/71hgVYiuFXL._SY741_.jpg`,
                title: "OPPO A37 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
                rating: 4.5,
                descriptionOne: `MediaTek Helio G85 Octa-core Processor
                4 GB RAM | 128 GB ROM | Expandable Upto 256 GB
                16.51 cm (6.5 inch) HD+ Display
                50MP+2MP+2MP Primary Camera | 8MP Front Camera
                6000 mAh Battery`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },
        {
            id: 'mob7',
            type: 'mobile',
            title: "Redmi 10 Prime",
            description: 'Redmi 10 Prime (Astral White 4GB RAM 64GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)',
            price: 12999,
            imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/71q297sVv3L._AC_UL160_SR160,160_.jpg',
            pageInfo: {
                imageUrl: `https://m.media-amazon.com/images/I/71Tvm7bM47L._SX679_.jpg`,
                title: "Redmi 10 Prime (Astral White 4GB RAM 64GB ROM |Helio G88 with extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)",
                rating: 4.1,
                descriptionOne: `Processor: MediaTek Helio G88 Octa-core processor with HyperEngine 2.0 ; Up to 2.0GHz clock speed;
                Battery: 6000mAh battery with 18W fast charging support. Upto 9W reverse charging. In box - 22.5W wired charger
                Display: 6.5 inch FHD+ (2400x1080) Dot display with 90Hz high refresh rate and adaptive refresh rate technology; ; 180Hz touch sampling,
                Memory, Storage : 4GB LPDDR4X RAM | 64GB Internal storage`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones`
            }
        },



        /// LAptops
        
        {
            id: 'lap1',
            type: 'laptop',
            title: "Lenovo Ideapad 3",
            description: 'Lenovo Ideapad 3 AMD Ryzen 5 5500U 15.6" FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Backlit Keyboard/2Yr Warranty/Arctic Grey/1.65Kg), 82KU017KIN',
            price: 48999,
            imageUrl: 'https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/61q6x-ll5FL._SX679_.jpg`,
                title: `Lenovo Ideapad 3 AMD Ryzen 5 5500U 15.6" FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/Backlit Keyboard/2Yr Warranty/Arctic Grey/1.65Kg), 82KU017KIN`,
                rating: 4.1,
                descriptionOne: `Processor: 5th Gen AMD Ryzen 5 5500U | Speed: 2.1 GHz (Base) - 4.0 GHz (Max) | 6 Cores | 3MB L2 & 8MB L3 Cache
                OS: Pre-Loaded Windows 11 Home with Lifetime Validity
                Pre-Installed: MS Office Home and Student 2021
                Memory and Storage: 8GB RAM DDR4, Upgradable up to 12GB | 512 GB SSD
                Display: 15.6" FHD (1920x1080) | Brightness : 250nits | Anti-Glare`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },
        {
            id: 'lap2',
            type: 'laptop',
            title: "2020 Apple MacBook Air Laptop",
            description: '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey',
            price: 84999,
            imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg`,
                title: `2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey`,
                rating: 4.8,
                descriptionOne: `All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
                Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
                Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
                Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
                descriptionTwo: `Easy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },
        {
            id: 'lap3',
            type: 'laptop',
            title: "Lenovo IdeaPad Slim 3",
            description: 'Lenovo IdeaPad Slim 3 10th Gen Intel Core i3 15.6 HD Thin and Light Laptop (8GB/1TB HDD/Windows 11/MS Office 2021/2Yr Warranty/Platinum Grey/1.7Kg), 81WB01E9IN',
            price: 35999,
            imageUrl: 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg`,
                title: `Lenovo IdeaPad Slim 3 10th Gen Intel Core i3 15.6 HD Thin and Light Laptop (8GB/1TB HDD/Windows 11/MS Office 2021/2Yr Warranty/Platinum Grey/1.7Kg), 81WB01E9IN`,
                rating: 4.5,
                descriptionOne: `Processor: 10th Gen Intel Core i3-10110U | Speed: 2.1 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 4MB Cache
                OS: Pre-Loaded Windows 11 Home with Lifetime Validity
                Pre-Installed: MS Office Home and Student 2021
                Memory and Storage: 8GB RAM DDR4-2666, Upgradable to 12GB | 1 TB HDD
                Graphics: Intel UHD Integrated Graphics
                Display: 15.6" HD (1366x768) | Brightness: 220 nits | Anti-Glare
                Design: 1.99 cm Thin and 1.7 kg Light`,
                descriptionTwo: `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },

        {
            id: 'lap4',
            type: 'laptop',
            title: "HP 14s,",
            description: 'HP 14s, AMD Ryzen 5-5500U 14 inches FHD, IPS, Micro-Edge Display Laptop (8GB RAM/512GB SSD /Radeon Graphics/Windows 11/Alexa/Backlit Keyboard/MS Office/1.46kg, 14s-fq1092au)',
            price: 48999,
            imageUrl: 'https://m.media-amazon.com/images/I/81mjdQjyR6L._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/81mjdQjyR6L._SX679_.jpg`,
                title: `HP 14s, AMD Ryzen 5-5500U 14 inches FHD, IPS, Micro-Edge Display Laptop (8GB RAM/512GB SSD /Radeon Graphics/Windows 11/Alexa/Backlit Keyboard/MS Office/1.46kg, 14s-fq1092au)`,
                rating: 4.5,
                descriptionOne: `Processor: AMD Ryzen 5 5500U (up to 4.0 GHz max boost clock(2i),8 MB L3 cache, 6 cores, 12 threads)| Memory & Storage: 8GB (1x8GB) DDR4 3200,Upto 16 GB DDR4-3200 SDRAM (2 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD
                Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2019 |McAfee LiveSafe
                Display & Graphics: 35.6 cm (14") diagonal, FHD, IPS, micro-edge,250 nits, 157 ppi, 45%NTSC |Graphics: AMD Radeon Graphics`,
                descriptionTwo: `Features: Camera: HP True Vision 720p HD camera with integrated dual array digital microphones| Audio: Dual Speakers| Keyboard: Full-size, backlit, natural silver keyboard | Alexa Built In | Battery: 3-cell, 41 Wh Li-ion, Support battery fast charge| Networking: Realtek RTL8821CE-M 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo,MU-MIMO supported, Miracast compatible`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },

        {
            id: 'lap5',
            type: 'laptop',
            title: "ASUS VivoBook 15",
            description: 'ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W',
            price: 24999,
            imageUrl: 'https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/71S8U9VzLTL._SX679_.jpg`,
                title: `ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W`,
                rating: 4.8,
                descriptionOne: `Processor: Intel Celeron N4020, 1.1 GHz base speed, Up to 2.8 GHz Turbo Speed, 2 cores, 2 Threads, 4MB Cache
                Memory & Storage: 4GB SO-DIMM DDR4 2400MHz RAM, Support up to 8GB using 1x SO-DIMM Slot with | Storage: 256GB M.2 NVMe PCIe SSD
                Display: 15.6-inch (39.62 cms), LED-Backlit LCD, HD (1366 x 768) 16:9, 220nits, NanoEdge bezel, Anti-Glare Plane with 45% NTSC, 82% Screen-To-Body Ratio
                Operating System: Pre-loaded Windows 11 Home with lifetime validity`,
                descriptionTwo: `Design & battery: Up to 19.9mm Thin | NanoEdge Bezels | Thin and Light Laptop | Laptop weight: 1.8 kg | 37WHrs, 2-cell Li-ion battery | Up to 6 hours battery life ;Note: Battery life depends on conditions of usage`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },

        {
            id: 'lap6',
            type: 'laptop',
            title: "MSI Modern 14",
            description: 'MSI Modern 14, Intel i5-10210U, 14" FHD IPS-Level 60Hz Panel Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Intel UHD Graphics/Carbon Grey/1.3Kg), B10MW-639IN',
            price: 49999,
            imageUrl: 'https://m.media-amazon.com/images/I/71Tl6AMSBwL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/71Tl6AMSBwL._SX679_.jpg`,
                title: `MSI Modern 14, Intel i5-10210U, 14" FHD IPS-Level 60Hz Panel Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Intel UHD Graphics/Carbon Grey/1.3Kg), B10MW-639IN`,
                rating: 4.8,
                descriptionOne: `Processor: Intel 10th Gen i5-10210U Up To 4.2GHz
                Operating System: Pre-loaded Windows 10 Home with lifetime validity. Free Upgrade to Windows 11* when available |Preinstalled Software: MSI BurnRecovery, MSI Battery Calibration, MSI Help Desk, Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free), Nahimic 3, MSI Center, | In the box: Laptop, adapter.
                Display: 14" FHD (1920x1080), 60Hz 45%NTSC IPS-Level panel`,
                descriptionTwo: `Memory & Storage: 8GB DDR4 | Storage: 512GB NVMe PCIe Gen3x4 SSD.
                Intel UHD Graphics`,
                descriptionThree: `Ultra Thin and light design | Laptop weight: 1.3kg
                Keyboard: White Backlit Keyboard`
            }
        },

        {
            id: 'lap7',
            type: 'laptop',
            title: "Lenovo Ideapad Gaming 3",
            description: 'Lenovo Ideapad Gaming 3 AMD Ryzen 7 5800H 15.6" FHD IPS 250Nits Laptop (16GB/512GB SSD/RTX 3050 4GB GDDR6/120Hz Refresh Rate/Windows 11/Office 2021/Backlit Keyboard/Shadow Black /2.25Kg),82K201RQIN',
            price: 74999,
            imageUrl: 'https://m.media-amazon.com/images/I/71--IQUHVwL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/71--IQUHVwL._SX679_.jpg`,
                title: `2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey`,
                rating: 4.8,
                descriptionOne: `Processor: AMD Ryzen 7 5800H | Speed: 3.2 GHz (Base) - 4.4 GHz (Max) | 8 Cores | 16 Threads | 16MB Cache
                Display: 15.6" FHD (1920x1080) | IPS Technology | 120 Hz Refresh Rate | 250Nits Brightness | Anti-glare
                Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 Dedicated Graphics with max TGP 85W | Boost Clock 1500/1635MHz
                Memory and Storage: 16GB RAM DDR4-3200 | 512GB SSD`,
                descriptionTwo: `Military Grade : MIL-STD-810G Qualified Design| Qualified for various Military Specification Tests like Low & High Temp (-25 to 63°C for 4 hrs)| Temp Shock (-25 to 63°C one way temp Shock)| Shock (122cm+ Drop Test)| Vibration (4-32Hz over 2 hrs)`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },
        {
            id: 'lap8',
            type: 'laptop',
            title: "MSI Gaming Bravo 15",
            description: 'MSI Gaming Bravo 15 AMD Ryzen 7-4800H, 40cm FHD IPS-Level 144Hz Panel Laptop(8GB/512GB/Windows 10 Home/AMD RX5500M/4GB GDDR6/Black/1.86kg), A4DDR-212IN',
            price: 83999,
            imageUrl: 'https://m.media-amazon.com/images/I/71b46EnIzBL._AC_UL320_.jpg',
            pageInfo: {
                imageUrl : `https://m.media-amazon.com/images/I/71b46EnIzBL._SY450_.jpg`,
                title: `MSI Gaming Bravo 15 AMD Ryzen 7-4800H, 40cm FHD IPS-Level 144Hz Panel Laptop(8GB/512GB/Windows 10 Home/AMD RX5500M/4GB GDDR6/Black/1.86kg), A4DDR-212IN`,
                rating: 5.0,
                descriptionOne: `AMD Ryzen7-4800H processor, upto 4.2 GHz
                Pre-loaded Windows 10, Home, 64Bit operating system with lifetime validity
                Display: 40cm FHD (1920*1080), IPS-Level 144Hz Thin Bezel Display
                Memory: 8*2 GB DDR4 RAM, 3200Mhz with Radeon RX5500M 4GB Graphics | Storage: 512GB NVMe M.2 SSD
                Light Design Gaming laptop with Backlight Keyboard (Red)
                This genuine MSI laptop comes with 1 year Carry-in warranty from MSI covering manufacturing defects and not covering physical damage. For more details, see Warranty section`,
                descriptionTwo: `MSI System Control ManagerMSI BurnRecovery MSI Battery Calibration MSI Help Desk Norton Internet Security (trail 60days) Norton Studio (Metro) (permanent free) Nvidia GeForce Experience Nahimic 3 Dragon Center Gaming Mode MSI App player`,
                descriptionThree: `Battery Life: 3-Cell 45Wh | Upto 7 Hours | Rapid Charge (Up to 80% in 1 Hour)`
            }
        },



    ]
}


export { products as allProduct };