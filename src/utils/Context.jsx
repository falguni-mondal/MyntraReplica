import React, { createContext, useState } from 'react'

export const DataContext = createContext();
const Context = (props) => {
    const [nav, setNav] = useState([
        {
            id: "men_nav",
            title: "men",
            path: "/shop/men",
            border: "border-b-[#ee5f73]",
            new: false,
            isActive: false,
            category: [
                {
                    color:"text-[#ee5f73]"
                },
                [
                    {
                        cate_title: "Topwear",
                        cate_path: "/men-topwear",
                        subCategory: [
                            {
                                subc_title: "T-shirts",
                                subc_path: "/men-tshirts"
                            },
                            {
                                subc_title: "Casual Shirts",
                                subc_path: "/men-casual-shirts"
                            },
                            {
                                subc_title: "Formal Shirts",
                                subc_path: "/men-formal-shirts"
                            },
                            {
                                subc_title: "Sweat Shirts",
                                subc_path: "/men-sweat-shirts"
                            },
                            {
                                subc_title: "Sweaters",
                                subc_path: "/men-sweaters"
                            },
                            {
                                subc_title: "Jackets",
                                subc_path: "/men-jackets"
                            },
                            {
                                subc_title: "Blazer & Coats",
                                subc_path: "/men-blazers-coats"
                            },
                            {
                                subc_title: "Suits",
                                subc_path: "/men-suits"
                            },
                            {
                                subc_title: "Rain Jackets",
                                subc_path: "/men-rain-jackets"
                            }
                        ]
                    },
                    {
                        cate_title: "Indian & Festive Wear",
                        cate_path: "/men-ethnic-wear",
                        subCategory: [
                            {
                                subc_title: "Kurtas & Kurta Set",
                                subc_path: "/men-kurtas"
                            },
                            {
                                subc_title: "Sherwanis",
                                subc_path: "/sherwanis"
                            },
                            {
                                subc_title: "Nehru Jackets",
                                subc_path: "/nehru-jackets"
                            },
                            {
                                subc_title: "Dhotis",
                                subc_path: "/dhotis"
                            }
                        ]
                    },
                    {
                        cate_title: "Bottomwear",
                        cate_path: "/men-bottomwear",
                        subCategory: [
                            {
                                subc_title: "Jeans",
                                subc_path: "/men-jeans"
                            },
                            {
                                subc_title: "Casual Trousers",
                                subc_path: "/men-casual-trousers"
                            },
                            {
                                subc_title: "Formal Trousers",
                                subc_path: "/men-formal-trousers"
                            },
                            {
                                subc_title: "Shorts",
                                subc_path: "/men-shorts"
                            },
                            {
                                subc_title: "Track Pants & Joggers",
                                subc_path: "/men-trackpants"
                            }
                        ]
                    },
                    {
                        cate_title: "Innerwear & Sleepwer",
                        cate_path: "/men-innerwer",
                        subCategory: [
                            {
                                subc_title: "Briefs & Truncks",
                                subc_path: "/men-briefs-and-truncks"
                            },
                            {
                                subc_title: "Boxers",
                                subc_path: "/men-boxers"
                            },
                            {
                                subc_title: "Vests",
                                subc_path: "/men-vests"
                            },
                            {
                                subc_title: "Sleepwear & Loungewear",
                                subc_path: "/men-nightwear"
                            },
                            {
                                subc_title: "Thermals",
                                subc_path: "/men-thermals"
                            }
                        ]
                    },
                    {
                        cate_title: "Plus Size",
                        cate_path: "/men-plus-size",
                        subCategory: false
                    },
                    {
                        cate_title: "Footwear",
                        cate_path: "/men-footwear",
                        subCategory: [
                            {
                                subc_title: "Casual Shoes",
                                subc_path: "/men-casual-shoes"
                            },
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Formal Shoes",
                                subc_path: "/men-formal-shoes"
                            },
                            {
                                subc_title: "Sneakers",
                                subc_path: "/men-sneakers"
                            },
                            {
                                subc_title: "Sandals & Floaters",
                                subc_path: "/men-sandals"
                            },
                            {
                                subc_title: "Flip Flops",
                                subc_path: "/men-flip-flops"
                            },
                            {
                                subc_title: "Socks",
                                subc_path: "/men-socks"
                            },
                        ]
                    },
                    {
                        cate_title: "Personal Care & Grooming",
                        cate_path: "/men-personal-care",
                        subCategory: false
                    },
                    {
                        cate_title: "Sunglasses & Frames",
                        cate_path: "/men-sunglasses",
                        subCategory: false
                    },
                    {
                        cate_title: "Watches",
                        cate_path: "/men-watches",
                        subCategory: false
                    },
                    {
                        cate_title: "Sports & Active Wear",
                        cate_path: "/men-sports-wear",
                        subCategory: [
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Sports Sandals",
                                subc_path: "/men-sports-sandals"
                            },
                            {
                                subc_title: "Active T-shirts",
                                subc_path: "/men-sports-wear-tshirts"
                            },
                            {
                                subc_title: "Track Pants & Shorts",
                                subc_path: "/men-trackpants-shorts"
                            },
                            {
                                subc_title: "Tracksuits",
                                subc_path: "/men-tracksuits"
                            },
                            {
                                subc_title: "Jackets & Sweatshirts",
                                subc_path: "/men-sports-jackets"
                            },
                            {
                                subc_title: "Sports Accessories",
                                subc_path: "/men-sports-accessories"
                            },
                            {
                                subc_title: "Swimwear",
                                subc_path: "/men-swimwear"
                            }
                        ]
                    },
                    {
                        cate_title: "Gadgets",
                        cate_path: "/gadgets",
                        subCategory: [
                            {
                                subc_title: "Smart Wearables",
                                subc_path: "/smart-wearables"
                            },
                            {
                                subc_title: "Fitness Gadgets",
                                subc_path: "/fitness-gadgets"
                            },
                            {
                                subc_title: "Headphones",
                                subc_path: "/headphones"
                            },
                            {
                                subc_title: "Speakers",
                                subc_path: "/speakers"
                            }
                        ]
                    },
                    {
                        cate_title: "Fashion Accessories",
                        cate_path: "/men-accessories",
                        subCategory: [
                            {
                                subc_title: "Wallets",
                                subc_path: "/men-wallets"
                            },
                            {
                                subc_title: "Belts",
                                subc_path: "/men-belts"
                            },
                            {
                                subc_title: "Perfumes & Body Mists",
                                subc_path: "/perfumes"
                            },
                            {
                                subc_title: "Trimmers",
                                subc_path: "/trimmer"
                            },
                            {
                                subc_title: "Deodrants",
                                subc_path: "/deodrant"
                            },
                            {
                                subc_title: "Ties, Cufflinks & Pocket Squares",
                                subc_path: "/men-belts-ties"
                            },
                            {
                                subc_title: "Accessory Gift Sets",
                                subc_path: "/men-accessory-gift-sets"
                            },
                            {
                                subc_title: "Caps & Hats",
                                subc_path: "/men-caps"
                            },
                            {
                                subc_title: "Mufflers, Scarves & Gloves",
                                subc_path: "/men-mufflers-scarves-gloves"
                            },
                            {
                                subc_title: "Phone Cases",
                                subc_path: "/phone-cases"
                            },
                            {
                                subc_title: "Rings & Wristwear",
                                subc_path: "/men-jewellery"
                            },
                            {
                                subc_title: "Helmets",
                                subc_path: "/helmets"
                            },
                        ]
                    },
                    {
                        cate_title: "Bags & Bagpack",
                        cate_path: "/men-bags-bagpacks",
                        subCategory: false
                    },
                    {
                        cate_title: "Luggages & Trolleys",
                        cate_path: "/trolley-bags",
                        subCategory: false
                    }
                ]
            ]
        },
        {
            id: "women_nav",
            title: "women",
            path: "/shop/women",
            border: "border-b-[#fb56c1]",
            new: false,
            isActive: false,
            category: [
                {
                    color:"text-[#fb56c1]"
                },
                [
                    {
                        cate_title: "Topwear",
                        cate_path: "/men-topwear",
                        subCategory: [
                            {
                                subc_title: "T-shirts",
                                subc_path: "/men-tshirts"
                            },
                            {
                                subc_title: "Casual Shirts",
                                subc_path: "/men-casual-shirts"
                            },
                            {
                                subc_title: "Formal Shirts",
                                subc_path: "/men-formal-shirts"
                            },
                            {
                                subc_title: "Sweat Shirts",
                                subc_path: "/men-sweat-shirts"
                            },
                            {
                                subc_title: "Sweaters",
                                subc_path: "/men-sweaters"
                            },
                            {
                                subc_title: "Jackets",
                                subc_path: "/men-jackets"
                            },
                            {
                                subc_title: "Blazer & Coats",
                                subc_path: "/men-blazers-coats"
                            },
                            {
                                subc_title: "Suits",
                                subc_path: "/men-suits"
                            },
                            {
                                subc_title: "Rain Jackets",
                                subc_path: "/men-rain-jackets"
                            }
                        ]
                    },
                    {
                        cate_title: "Indian & Festive Wear",
                        cate_path: "/men-ethnic-wear",
                        subCategory: [
                            {
                                subc_title: "Kurtas & Kurta Set",
                                subc_path: "/men-kurtas"
                            },
                            {
                                subc_title: "Sherwanis",
                                subc_path: "/sherwanis"
                            },
                            {
                                subc_title: "Nehru Jackets",
                                subc_path: "/nehru-jackets"
                            },
                            {
                                subc_title: "Dhotis",
                                subc_path: "/dhotis"
                            }
                        ]
                    },
                    {
                        cate_title: "Bottomwear",
                        cate_path: "/men-bottomwear",
                        subCategory: [
                            {
                                subc_title: "Jeans",
                                subc_path: "/men-jeans"
                            },
                            {
                                subc_title: "Casual Trousers",
                                subc_path: "/men-casual-trousers"
                            },
                            {
                                subc_title: "Formal Trousers",
                                subc_path: "/men-formal-trousers"
                            },
                            {
                                subc_title: "Shorts",
                                subc_path: "/men-shorts"
                            },
                            {
                                subc_title: "Track Pants & Joggers",
                                subc_path: "/men-trackpants"
                            }
                        ]
                    },
                    {
                        cate_title: "Innerwear & Sleepwer",
                        cate_path: "/men-innerwer",
                        subCategory: [
                            {
                                subc_title: "Briefs & Truncks",
                                subc_path: "/men-briefs-and-truncks"
                            },
                            {
                                subc_title: "Boxers",
                                subc_path: "/men-boxers"
                            },
                            {
                                subc_title: "Vests",
                                subc_path: "/men-vests"
                            },
                            {
                                subc_title: "Sleepwear & Loungewear",
                                subc_path: "/men-nightwear"
                            },
                            {
                                subc_title: "Thermals",
                                subc_path: "/men-thermals"
                            }
                        ]
                    },
                    {
                        cate_title: "Plus Size",
                        cate_path: "/men-plus-size",
                        subCategory: false
                    },
                    {
                        cate_title: "Footwear",
                        cate_path: "/men-footwear",
                        subCategory: [
                            {
                                subc_title: "Casual Shoes",
                                subc_path: "/men-casual-shoes"
                            },
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Formal Shoes",
                                subc_path: "/men-formal-shoes"
                            },
                            {
                                subc_title: "Sneakers",
                                subc_path: "/men-sneakers"
                            },
                            {
                                subc_title: "Sandals & Floaters",
                                subc_path: "/men-sandals"
                            },
                            {
                                subc_title: "Flip Flops",
                                subc_path: "/men-flip-flops"
                            },
                            {
                                subc_title: "Socks",
                                subc_path: "/men-socks"
                            },
                        ]
                    },
                    {
                        cate_title: "Personal Care & Grooming",
                        cate_path: "/men-personal-care",
                        subCategory: false
                    },
                    {
                        cate_title: "Sunglasses & Frames",
                        cate_path: "/men-sunglasses",
                        subCategory: false
                    },
                    {
                        cate_title: "Watches",
                        cate_path: "/men-watches",
                        subCategory: false
                    },
                    {
                        cate_title: "Sports & Active Wear",
                        cate_path: "/men-sports-wear",
                        subCategory: [
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Sports Sandals",
                                subc_path: "/men-sports-sandals"
                            },
                            {
                                subc_title: "Active T-shirts",
                                subc_path: "/men-sports-wear-tshirts"
                            },
                            {
                                subc_title: "Track Pants & Shorts",
                                subc_path: "/men-trackpants-shorts"
                            },
                            {
                                subc_title: "Tracksuits",
                                subc_path: "/men-tracksuits"
                            },
                            {
                                subc_title: "Jackets & Sweatshirts",
                                subc_path: "/men-sports-jackets"
                            },
                            {
                                subc_title: "Sports Accessories",
                                subc_path: "/men-sports-accessories"
                            },
                            {
                                subc_title: "Swimwear",
                                subc_path: "/men-swimwear"
                            }
                        ]
                    },
                    {
                        cate_title: "Gadgets",
                        cate_path: "/gadgets",
                        subCategory: [
                            {
                                subc_title: "Smart Wearables",
                                subc_path: "/smart-wearables"
                            },
                            {
                                subc_title: "Fitness Gadgets",
                                subc_path: "/fitness-gadgets"
                            },
                            {
                                subc_title: "Headphones",
                                subc_path: "/headphones"
                            },
                            {
                                subc_title: "Speakers",
                                subc_path: "/speakers"
                            }
                        ]
                    },
                    {
                        cate_title: "Fashion Accessories",
                        cate_path: "/men-accessories",
                        subCategory: [
                            {
                                subc_title: "Wallets",
                                subc_path: "/men-wallets"
                            },
                            {
                                subc_title: "Belts",
                                subc_path: "/men-belts"
                            },
                            {
                                subc_title: "Perfumes & Body Mists",
                                subc_path: "/perfumes"
                            },
                            {
                                subc_title: "Trimmers",
                                subc_path: "/trimmer"
                            },
                            {
                                subc_title: "Deodrants",
                                subc_path: "/deodrant"
                            },
                            {
                                subc_title: "Ties, Cufflinks & Pocket Squares",
                                subc_path: "/men-belts-ties"
                            },
                            {
                                subc_title: "Accessory Gift Sets",
                                subc_path: "/men-accessory-gift-sets"
                            },
                            {
                                subc_title: "Caps & Hats",
                                subc_path: "/men-caps"
                            },
                            {
                                subc_title: "Mufflers, Scarves & Gloves",
                                subc_path: "/men-mufflers-scarves-gloves"
                            },
                            {
                                subc_title: "Phone Cases",
                                subc_path: "/phone-cases"
                            },
                            {
                                subc_title: "Rings & Wristwear",
                                subc_path: "/men-jewellery"
                            },
                            {
                                subc_title: "Helmets",
                                subc_path: "/helmets"
                            },
                        ]
                    },
                    {
                        cate_title: "Bags & Bagpack",
                        cate_path: "/men-bags-bagpacks",
                        subCategory: false
                    },
                    {
                        cate_title: "Luggages & Trolleys",
                        cate_path: "/trolley-bags",
                        subCategory: false
                    }
                ]
            ]
        },
        {
            id: "kids_nav",
            title: "kids",
            path: "/shop/kids",
            border: "border-b-[#f26a10]",
            new: false,
            isActive: false,
            category: [
                {
                    color:"text-[#f26a10]"
                },
                [
                    {
                        cate_title: "Topwear",
                        cate_path: "/men-topwear",
                        subCategory: [
                            {
                                subc_title: "T-shirts",
                                subc_path: "/men-tshirts"
                            },
                            {
                                subc_title: "Casual Shirts",
                                subc_path: "/men-casual-shirts"
                            },
                            {
                                subc_title: "Formal Shirts",
                                subc_path: "/men-formal-shirts"
                            },
                            {
                                subc_title: "Sweat Shirts",
                                subc_path: "/men-sweat-shirts"
                            },
                            {
                                subc_title: "Sweaters",
                                subc_path: "/men-sweaters"
                            },
                            {
                                subc_title: "Jackets",
                                subc_path: "/men-jackets"
                            },
                            {
                                subc_title: "Blazer & Coats",
                                subc_path: "/men-blazers-coats"
                            },
                            {
                                subc_title: "Suits",
                                subc_path: "/men-suits"
                            },
                            {
                                subc_title: "Rain Jackets",
                                subc_path: "/men-rain-jackets"
                            }
                        ]
                    },
                    {
                        cate_title: "Indian & Festive Wear",
                        cate_path: "/men-ethnic-wear",
                        subCategory: [
                            {
                                subc_title: "Kurtas & Kurta Set",
                                subc_path: "/men-kurtas"
                            },
                            {
                                subc_title: "Sherwanis",
                                subc_path: "/sherwanis"
                            },
                            {
                                subc_title: "Nehru Jackets",
                                subc_path: "/nehru-jackets"
                            },
                            {
                                subc_title: "Dhotis",
                                subc_path: "/dhotis"
                            }
                        ]
                    },
                    {
                        cate_title: "Bottomwear",
                        cate_path: "/men-bottomwear",
                        subCategory: [
                            {
                                subc_title: "Jeans",
                                subc_path: "/men-jeans"
                            },
                            {
                                subc_title: "Casual Trousers",
                                subc_path: "/men-casual-trousers"
                            },
                            {
                                subc_title: "Formal Trousers",
                                subc_path: "/men-formal-trousers"
                            },
                            {
                                subc_title: "Shorts",
                                subc_path: "/men-shorts"
                            },
                            {
                                subc_title: "Track Pants & Joggers",
                                subc_path: "/men-trackpants"
                            }
                        ]
                    },
                    {
                        cate_title: "Innerwear & Sleepwer",
                        cate_path: "/men-innerwer",
                        subCategory: [
                            {
                                subc_title: "Briefs & Truncks",
                                subc_path: "/men-briefs-and-truncks"
                            },
                            {
                                subc_title: "Boxers",
                                subc_path: "/men-boxers"
                            },
                            {
                                subc_title: "Vests",
                                subc_path: "/men-vests"
                            },
                            {
                                subc_title: "Sleepwear & Loungewear",
                                subc_path: "/men-nightwear"
                            },
                            {
                                subc_title: "Thermals",
                                subc_path: "/men-thermals"
                            }
                        ]
                    },
                    {
                        cate_title: "Plus Size",
                        cate_path: "/men-plus-size",
                        subCategory: false
                    },
                    {
                        cate_title: "Footwear",
                        cate_path: "/men-footwear",
                        subCategory: [
                            {
                                subc_title: "Casual Shoes",
                                subc_path: "/men-casual-shoes"
                            },
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Formal Shoes",
                                subc_path: "/men-formal-shoes"
                            },
                            {
                                subc_title: "Sneakers",
                                subc_path: "/men-sneakers"
                            },
                            {
                                subc_title: "Sandals & Floaters",
                                subc_path: "/men-sandals"
                            },
                            {
                                subc_title: "Flip Flops",
                                subc_path: "/men-flip-flops"
                            },
                            {
                                subc_title: "Socks",
                                subc_path: "/men-socks"
                            },
                        ]
                    },
                    {
                        cate_title: "Personal Care & Grooming",
                        cate_path: "/men-personal-care",
                        subCategory: false
                    },
                    {
                        cate_title: "Sunglasses & Frames",
                        cate_path: "/men-sunglasses",
                        subCategory: false
                    },
                    {
                        cate_title: "Watches",
                        cate_path: "/men-watches",
                        subCategory: false
                    },
                    {
                        cate_title: "Sports & Active Wear",
                        cate_path: "/men-sports-wear",
                        subCategory: [
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Sports Sandals",
                                subc_path: "/men-sports-sandals"
                            },
                            {
                                subc_title: "Active T-shirts",
                                subc_path: "/men-sports-wear-tshirts"
                            },
                            {
                                subc_title: "Track Pants & Shorts",
                                subc_path: "/men-trackpants-shorts"
                            },
                            {
                                subc_title: "Tracksuits",
                                subc_path: "/men-tracksuits"
                            },
                            {
                                subc_title: "Jackets & Sweatshirts",
                                subc_path: "/men-sports-jackets"
                            },
                            {
                                subc_title: "Sports Accessories",
                                subc_path: "/men-sports-accessories"
                            },
                            {
                                subc_title: "Swimwear",
                                subc_path: "/men-swimwear"
                            }
                        ]
                    },
                    {
                        cate_title: "Gadgets",
                        cate_path: "/gadgets",
                        subCategory: [
                            {
                                subc_title: "Smart Wearables",
                                subc_path: "/smart-wearables"
                            },
                            {
                                subc_title: "Fitness Gadgets",
                                subc_path: "/fitness-gadgets"
                            },
                            {
                                subc_title: "Headphones",
                                subc_path: "/headphones"
                            },
                            {
                                subc_title: "Speakers",
                                subc_path: "/speakers"
                            }
                        ]
                    },
                    {
                        cate_title: "Fashion Accessories",
                        cate_path: "/men-accessories",
                        subCategory: [
                            {
                                subc_title: "Wallets",
                                subc_path: "/men-wallets"
                            },
                            {
                                subc_title: "Belts",
                                subc_path: "/men-belts"
                            },
                            {
                                subc_title: "Perfumes & Body Mists",
                                subc_path: "/perfumes"
                            },
                            {
                                subc_title: "Trimmers",
                                subc_path: "/trimmer"
                            },
                            {
                                subc_title: "Deodrants",
                                subc_path: "/deodrant"
                            },
                            {
                                subc_title: "Ties, Cufflinks & Pocket Squares",
                                subc_path: "/men-belts-ties"
                            },
                            {
                                subc_title: "Accessory Gift Sets",
                                subc_path: "/men-accessory-gift-sets"
                            },
                            {
                                subc_title: "Caps & Hats",
                                subc_path: "/men-caps"
                            },
                            {
                                subc_title: "Mufflers, Scarves & Gloves",
                                subc_path: "/men-mufflers-scarves-gloves"
                            },
                            {
                                subc_title: "Phone Cases",
                                subc_path: "/phone-cases"
                            },
                            {
                                subc_title: "Rings & Wristwear",
                                subc_path: "/men-jewellery"
                            },
                            {
                                subc_title: "Helmets",
                                subc_path: "/helmets"
                            },
                        ]
                    },
                    {
                        cate_title: "Bags & Bagpack",
                        cate_path: "/men-bags-bagpacks",
                        subCategory: false
                    },
                    {
                        cate_title: "Luggages & Trolleys",
                        cate_path: "/trolley-bags",
                        subCategory: false
                    }
                ]
            ]
        },
        {
            id: "home&living_nav",
            title: "home & living",
            path: "/shop/home&living",
            border: "border-b-[#f2c210]",
            new: false,
            isActive: false,
            category: [
                {
                    color:"text-[#f2c210]"
                },
                [
                    {
                        cate_title: "Topwear",
                        cate_path: "/men-topwear",
                        subCategory: [
                            {
                                subc_title: "T-shirts",
                                subc_path: "/men-tshirts"
                            },
                            {
                                subc_title: "Casual Shirts",
                                subc_path: "/men-casual-shirts"
                            },
                            {
                                subc_title: "Formal Shirts",
                                subc_path: "/men-formal-shirts"
                            },
                            {
                                subc_title: "Sweat Shirts",
                                subc_path: "/men-sweat-shirts"
                            },
                            {
                                subc_title: "Sweaters",
                                subc_path: "/men-sweaters"
                            },
                            {
                                subc_title: "Jackets",
                                subc_path: "/men-jackets"
                            },
                            {
                                subc_title: "Blazer & Coats",
                                subc_path: "/men-blazers-coats"
                            },
                            {
                                subc_title: "Suits",
                                subc_path: "/men-suits"
                            },
                            {
                                subc_title: "Rain Jackets",
                                subc_path: "/men-rain-jackets"
                            }
                        ]
                    },
                    {
                        cate_title: "Indian & Festive Wear",
                        cate_path: "/men-ethnic-wear",
                        subCategory: [
                            {
                                subc_title: "Kurtas & Kurta Set",
                                subc_path: "/men-kurtas"
                            },
                            {
                                subc_title: "Sherwanis",
                                subc_path: "/sherwanis"
                            },
                            {
                                subc_title: "Nehru Jackets",
                                subc_path: "/nehru-jackets"
                            },
                            {
                                subc_title: "Dhotis",
                                subc_path: "/dhotis"
                            }
                        ]
                    },
                    {
                        cate_title: "Bottomwear",
                        cate_path: "/men-bottomwear",
                        subCategory: [
                            {
                                subc_title: "Jeans",
                                subc_path: "/men-jeans"
                            },
                            {
                                subc_title: "Casual Trousers",
                                subc_path: "/men-casual-trousers"
                            },
                            {
                                subc_title: "Formal Trousers",
                                subc_path: "/men-formal-trousers"
                            },
                            {
                                subc_title: "Shorts",
                                subc_path: "/men-shorts"
                            },
                            {
                                subc_title: "Track Pants & Joggers",
                                subc_path: "/men-trackpants"
                            }
                        ]
                    },
                    {
                        cate_title: "Innerwear & Sleepwer",
                        cate_path: "/men-innerwer",
                        subCategory: [
                            {
                                subc_title: "Briefs & Truncks",
                                subc_path: "/men-briefs-and-truncks"
                            },
                            {
                                subc_title: "Boxers",
                                subc_path: "/men-boxers"
                            },
                            {
                                subc_title: "Vests",
                                subc_path: "/men-vests"
                            },
                            {
                                subc_title: "Sleepwear & Loungewear",
                                subc_path: "/men-nightwear"
                            },
                            {
                                subc_title: "Thermals",
                                subc_path: "/men-thermals"
                            }
                        ]
                    },
                    {
                        cate_title: "Plus Size",
                        cate_path: "/men-plus-size",
                        subCategory: false
                    },
                    {
                        cate_title: "Footwear",
                        cate_path: "/men-footwear",
                        subCategory: [
                            {
                                subc_title: "Casual Shoes",
                                subc_path: "/men-casual-shoes"
                            },
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Formal Shoes",
                                subc_path: "/men-formal-shoes"
                            },
                            {
                                subc_title: "Sneakers",
                                subc_path: "/men-sneakers"
                            },
                            {
                                subc_title: "Sandals & Floaters",
                                subc_path: "/men-sandals"
                            },
                            {
                                subc_title: "Flip Flops",
                                subc_path: "/men-flip-flops"
                            },
                            {
                                subc_title: "Socks",
                                subc_path: "/men-socks"
                            },
                        ]
                    },
                    {
                        cate_title: "Personal Care & Grooming",
                        cate_path: "/men-personal-care",
                        subCategory: false
                    },
                    {
                        cate_title: "Sunglasses & Frames",
                        cate_path: "/men-sunglasses",
                        subCategory: false
                    },
                    {
                        cate_title: "Watches",
                        cate_path: "/men-watches",
                        subCategory: false
                    },
                    {
                        cate_title: "Sports & Active Wear",
                        cate_path: "/men-sports-wear",
                        subCategory: [
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Sports Sandals",
                                subc_path: "/men-sports-sandals"
                            },
                            {
                                subc_title: "Active T-shirts",
                                subc_path: "/men-sports-wear-tshirts"
                            },
                            {
                                subc_title: "Track Pants & Shorts",
                                subc_path: "/men-trackpants-shorts"
                            },
                            {
                                subc_title: "Tracksuits",
                                subc_path: "/men-tracksuits"
                            },
                            {
                                subc_title: "Jackets & Sweatshirts",
                                subc_path: "/men-sports-jackets"
                            },
                            {
                                subc_title: "Sports Accessories",
                                subc_path: "/men-sports-accessories"
                            },
                            {
                                subc_title: "Swimwear",
                                subc_path: "/men-swimwear"
                            }
                        ]
                    },
                    {
                        cate_title: "Gadgets",
                        cate_path: "/gadgets",
                        subCategory: [
                            {
                                subc_title: "Smart Wearables",
                                subc_path: "/smart-wearables"
                            },
                            {
                                subc_title: "Fitness Gadgets",
                                subc_path: "/fitness-gadgets"
                            },
                            {
                                subc_title: "Headphones",
                                subc_path: "/headphones"
                            },
                            {
                                subc_title: "Speakers",
                                subc_path: "/speakers"
                            }
                        ]
                    },
                    {
                        cate_title: "Fashion Accessories",
                        cate_path: "/men-accessories",
                        subCategory: [
                            {
                                subc_title: "Wallets",
                                subc_path: "/men-wallets"
                            },
                            {
                                subc_title: "Belts",
                                subc_path: "/men-belts"
                            },
                            {
                                subc_title: "Perfumes & Body Mists",
                                subc_path: "/perfumes"
                            },
                            {
                                subc_title: "Trimmers",
                                subc_path: "/trimmer"
                            },
                            {
                                subc_title: "Deodrants",
                                subc_path: "/deodrant"
                            },
                            {
                                subc_title: "Ties, Cufflinks & Pocket Squares",
                                subc_path: "/men-belts-ties"
                            },
                            {
                                subc_title: "Accessory Gift Sets",
                                subc_path: "/men-accessory-gift-sets"
                            },
                            {
                                subc_title: "Caps & Hats",
                                subc_path: "/men-caps"
                            },
                            {
                                subc_title: "Mufflers, Scarves & Gloves",
                                subc_path: "/men-mufflers-scarves-gloves"
                            },
                            {
                                subc_title: "Phone Cases",
                                subc_path: "/phone-cases"
                            },
                            {
                                subc_title: "Rings & Wristwear",
                                subc_path: "/men-jewellery"
                            },
                            {
                                subc_title: "Helmets",
                                subc_path: "/helmets"
                            },
                        ]
                    },
                    {
                        cate_title: "Bags & Bagpack",
                        cate_path: "/men-bags-bagpacks",
                        subCategory: false
                    },
                    {
                        cate_title: "Luggages & Trolleys",
                        cate_path: "/trolley-bags",
                        subCategory: false
                    }
                ]
            ]
        },
        {
            id: "beauty_nav",
            title: "beauty",
            path: "/shop/beauty",
            border: "border-b-[#0db7af]",
            new: false,
            isActive: false,
            category: [
                {
                    color:"text-[#0db7af]"
                },
                [
                    {
                        cate_title: "Topwear",
                        cate_path: "/men-topwear",
                        subCategory: [
                            {
                                subc_title: "T-shirts",
                                subc_path: "/men-tshirts"
                            },
                            {
                                subc_title: "Casual Shirts",
                                subc_path: "/men-casual-shirts"
                            },
                            {
                                subc_title: "Formal Shirts",
                                subc_path: "/men-formal-shirts"
                            },
                            {
                                subc_title: "Sweat Shirts",
                                subc_path: "/men-sweat-shirts"
                            },
                            {
                                subc_title: "Sweaters",
                                subc_path: "/men-sweaters"
                            },
                            {
                                subc_title: "Jackets",
                                subc_path: "/men-jackets"
                            },
                            {
                                subc_title: "Blazer & Coats",
                                subc_path: "/men-blazers-coats"
                            },
                            {
                                subc_title: "Suits",
                                subc_path: "/men-suits"
                            },
                            {
                                subc_title: "Rain Jackets",
                                subc_path: "/men-rain-jackets"
                            }
                        ]
                    },
                    {
                        cate_title: "Indian & Festive Wear",
                        cate_path: "/men-ethnic-wear",
                        subCategory: [
                            {
                                subc_title: "Kurtas & Kurta Set",
                                subc_path: "/men-kurtas"
                            },
                            {
                                subc_title: "Sherwanis",
                                subc_path: "/sherwanis"
                            },
                            {
                                subc_title: "Nehru Jackets",
                                subc_path: "/nehru-jackets"
                            },
                            {
                                subc_title: "Dhotis",
                                subc_path: "/dhotis"
                            }
                        ]
                    },
                    {
                        cate_title: "Bottomwear",
                        cate_path: "/men-bottomwear",
                        subCategory: [
                            {
                                subc_title: "Jeans",
                                subc_path: "/men-jeans"
                            },
                            {
                                subc_title: "Casual Trousers",
                                subc_path: "/men-casual-trousers"
                            },
                            {
                                subc_title: "Formal Trousers",
                                subc_path: "/men-formal-trousers"
                            },
                            {
                                subc_title: "Shorts",
                                subc_path: "/men-shorts"
                            },
                            {
                                subc_title: "Track Pants & Joggers",
                                subc_path: "/men-trackpants"
                            }
                        ]
                    },
                    {
                        cate_title: "Innerwear & Sleepwer",
                        cate_path: "/men-innerwer",
                        subCategory: [
                            {
                                subc_title: "Briefs & Truncks",
                                subc_path: "/men-briefs-and-truncks"
                            },
                            {
                                subc_title: "Boxers",
                                subc_path: "/men-boxers"
                            },
                            {
                                subc_title: "Vests",
                                subc_path: "/men-vests"
                            },
                            {
                                subc_title: "Sleepwear & Loungewear",
                                subc_path: "/men-nightwear"
                            },
                            {
                                subc_title: "Thermals",
                                subc_path: "/men-thermals"
                            }
                        ]
                    },
                    {
                        cate_title: "Plus Size",
                        cate_path: "/men-plus-size",
                        subCategory: false
                    },
                    {
                        cate_title: "Footwear",
                        cate_path: "/men-footwear",
                        subCategory: [
                            {
                                subc_title: "Casual Shoes",
                                subc_path: "/men-casual-shoes"
                            },
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Formal Shoes",
                                subc_path: "/men-formal-shoes"
                            },
                            {
                                subc_title: "Sneakers",
                                subc_path: "/men-sneakers"
                            },
                            {
                                subc_title: "Sandals & Floaters",
                                subc_path: "/men-sandals"
                            },
                            {
                                subc_title: "Flip Flops",
                                subc_path: "/men-flip-flops"
                            },
                            {
                                subc_title: "Socks",
                                subc_path: "/men-socks"
                            },
                        ]
                    },
                    {
                        cate_title: "Personal Care & Grooming",
                        cate_path: "/men-personal-care",
                        subCategory: false
                    },
                    {
                        cate_title: "Sunglasses & Frames",
                        cate_path: "/men-sunglasses",
                        subCategory: false
                    },
                    {
                        cate_title: "Watches",
                        cate_path: "/men-watches",
                        subCategory: false
                    },
                    {
                        cate_title: "Sports & Active Wear",
                        cate_path: "/men-sports-wear",
                        subCategory: [
                            {
                                subc_title: "Sports Shoes",
                                subc_path: "/men-sports-shoes"
                            },
                            {
                                subc_title: "Sports Sandals",
                                subc_path: "/men-sports-sandals"
                            },
                            {
                                subc_title: "Active T-shirts",
                                subc_path: "/men-sports-wear-tshirts"
                            },
                            {
                                subc_title: "Track Pants & Shorts",
                                subc_path: "/men-trackpants-shorts"
                            },
                            {
                                subc_title: "Tracksuits",
                                subc_path: "/men-tracksuits"
                            },
                            {
                                subc_title: "Jackets & Sweatshirts",
                                subc_path: "/men-sports-jackets"
                            },
                            {
                                subc_title: "Sports Accessories",
                                subc_path: "/men-sports-accessories"
                            },
                            {
                                subc_title: "Swimwear",
                                subc_path: "/men-swimwear"
                            }
                        ]
                    },
                    {
                        cate_title: "Gadgets",
                        cate_path: "/gadgets",
                        subCategory: [
                            {
                                subc_title: "Smart Wearables",
                                subc_path: "/smart-wearables"
                            },
                            {
                                subc_title: "Fitness Gadgets",
                                subc_path: "/fitness-gadgets"
                            },
                            {
                                subc_title: "Headphones",
                                subc_path: "/headphones"
                            },
                            {
                                subc_title: "Speakers",
                                subc_path: "/speakers"
                            }
                        ]
                    },
                    {
                        cate_title: "Fashion Accessories",
                        cate_path: "/men-accessories",
                        subCategory: [
                            {
                                subc_title: "Wallets",
                                subc_path: "/men-wallets"
                            },
                            {
                                subc_title: "Belts",
                                subc_path: "/men-belts"
                            },
                            {
                                subc_title: "Perfumes & Body Mists",
                                subc_path: "/perfumes"
                            },
                            {
                                subc_title: "Trimmers",
                                subc_path: "/trimmer"
                            },
                            {
                                subc_title: "Deodrants",
                                subc_path: "/deodrant"
                            },
                            {
                                subc_title: "Ties, Cufflinks & Pocket Squares",
                                subc_path: "/men-belts-ties"
                            },
                            {
                                subc_title: "Accessory Gift Sets",
                                subc_path: "/men-accessory-gift-sets"
                            },
                            {
                                subc_title: "Caps & Hats",
                                subc_path: "/men-caps"
                            },
                            {
                                subc_title: "Mufflers, Scarves & Gloves",
                                subc_path: "/men-mufflers-scarves-gloves"
                            },
                            {
                                subc_title: "Phone Cases",
                                subc_path: "/phone-cases"
                            },
                            {
                                subc_title: "Rings & Wristwear",
                                subc_path: "/men-jewellery"
                            },
                            {
                                subc_title: "Helmets",
                                subc_path: "/helmets"
                            },
                        ]
                    },
                    {
                        cate_title: "Bags & Bagpack",
                        cate_path: "/men-bags-bagpacks",
                        subCategory: false
                    },
                    {
                        cate_title: "Luggages & Trolleys",
                        cate_path: "/trolley-bags",
                        subCategory: false
                    }
                ]
            ]
        },
        {
            id: "studio_nav",
            title: "studio",
            path: "/studio",
            border: "border-b-[#ff3f6c]",
            new: true,
            isActive: false
        }
    ])
    return (
        <DataContext.Provider value={[nav, setNav]}>{props.children}</DataContext.Provider>
    )
}

export default Context