import os
from psycopg_pool import ConnectionPool


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

cabins = [
    {
        "cabin_name": "Maple",
        "max_occupants": 4,
        "description": """Perched on the edge of a serene lake, this small
        moder lakeside house offers a harmonious blend of contemporary design
        and natural beauty. With expansive windows framing breathtaking views,
        the sleek exterior seamlessly integrates wood, stone, and glass.
        Inside, an open-concept living space with minimalist aesthetics and
        abundant natural light awaits. Two cozy bedrooms with picturesque
        vistas provide a tranquil escape. Step outside to a deck extending
        towards the water, where relaxation and connection with nature await.
        This idyllic retreat offers a peaceful lakeside lifestyle in a compact,
        modern setting.""",
        "on_lake": True,
        "rating": 4.8,
        "day_rate": 35000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/4zhx7opb9lr8jbg/exterior-with-lake.webp",
            "https://dl.dropboxusercontent.com/s/ub7pgw8b83bc5jw/living-room.webp",
            "https://dl.dropboxusercontent.com/s/yvo4vq512amwn84/bedroom.webp",
            "https://dl.dropboxusercontent.com/s/1ri9wsvzxwyxinc/bathroom.webp"
        ]
    },
    {
        "cabin_name": "Oak",
        "max_occupants": 2,
        "description": """Introducing our exquisite luxury A-frame cabin—a
        small retreat that seamlessly blends charm and comfort. This
        thoughtfully designed haven features a loft bed, a compact kitchenette,
        and captivating views of nature. Step into this enchanting space and
        be greeted by the allure of the A-frame architecture. Inside, the
        well-appointed kitchenette awaits, allowing you to effortlessly
        prepare meals. Enjoy intimate dining moments in the cozy designated
        area, savoring each bite while immersed in the tranquil atmosphere.
        Ascend to the loft bed, accessed via a ladder or staircase, and
        discover a serene oasis beneath the sloping roof. Sink into luxurious
        linens and indulge in a peaceful night's sleep, cocooned in the snug
        yet stylish ambiance of the loft. Large windows showcase breathtaking
        vistas, seamlessly connecting you with the beauty of the surroundings.
        The rustic charm of natural wood finishes, warm lighting, and tasteful
        decor enhance the inviting atmosphere of the cabin. Outside, a petite
        patio or deck beckons you to embrace the fresh air and captivating
        scenery. Relax on outdoor seating or immerse yourself in the soothing
        waters of a private hot tub, allowing nature's tranquility to wash
        over you. Our small luxury A-frame cabin with a loft bed and
        kitchenette is the epitome of refined comfort. Immerse yourself in its
        intimate charm and relish the splendor of nature in this thoughtfully
        crafted sanctuary.""",
        "on_lake": False,
        "rating": 4.7,
        "day_rate": 21000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/ry133ngsssf5o9d/denoutdoorsdotcom_MODERN_ALPINE_CABIN_005_1800x1800.jpg",
            "https://dl.dropboxusercontent.com/s/qbilouc8eaoxrc7/denoutdoorsdotcom_MODERN_ALPINE_CABIN_007_1800x1800.jpg",
            "https://dl.dropboxusercontent.com/s/zwf53ulhhd2es6b/denoutdoorsdotcom_MODERN_ALPINE_CABIN_008_1800x1800.jpg",
            "https://dl.dropboxusercontent.com/s/nmd18vgzcsllfab/denoutdoorsdotcom_MODERN_ALPINE_CABIN_009_1800x1800.jpg",
            "https://dl.dropboxusercontent.com/s/vqa9m5jbdboz6xo/denoutdoorsdotcom_MODERN_ALPINE_CABIN_010_1800x1800.jpg",
            "https://dl.dropboxusercontent.com/s/uyc51pzl4qydpbh/denoutdoorsdotcom_MODERN_ALPINE_CABIN_011_1800x1800.jpg"
        ]
    },
    {
        "cabin_name": "Cedar",
        "max_occupants": 5,
        "description": """Welcome to our charming 2-bedroom cabin, a
            delightful retreat nestled in nature's embrace. This cozy abode
            features two decks, providing ample space for relaxation and
            breathtaking views. The main floor deck offers a perfect spot to
            unwind, sip your morning coffee, and bask in the beauty of the
            surroundings. Upstairs, the primary bedroom boasts its own private
            deck, where you can soak in the serenity and enjoy intimate moments
            under the open sky. And when it's time to truly unwind, indulge in the
            soothing waters of the hot tub, enveloped by the tranquility of the
            natural landscape. Discover comfort, tranquility, and rejuvenation in
            this inviting cabin with its two decks and a blissful hot tub.""",
        "on_lake": False,
        "rating": 4.7,
        "day_rate": 36000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/o805vvelfjwe9an/8511.jpg",
            "https://dl.dropboxusercontent.com/s/eotnfzd7ko3nsbw/6456.jpg",
            "https://dl.dropboxusercontent.com/s/w71hqhgapjyoxq5/9148.jpg",
            "https://dl.dropboxusercontent.com/s/jtejzq8n0seoqrg/9156.jpg",
            "https://dl.dropboxusercontent.com/s/rihogh2xtafhwvo/9164.jpg",
            "https://dl.dropboxusercontent.com/s/9wjhpfnoeecdw96/6449.jpg"
        ]
    },
    {
        "cabin_name": "Juniper",
        "max_occupants": 10,
        "description": """
            Introducing our breathtaking Forest Haven an enchanting cabin that blends contemporary luxury with the untouched
            beauty of the surrounding wilderness. Nestled among towering
            trees in a serene forest setting, this retreat offers a tranquil
            escape from everyday life.
            Step inside and be captivated by the inviting interior, exuding warmth and sophistication. The open
            concept living space
            boasts vaulted ceilings adorned with wooden
            beams, fusing rustic charm and modern elegance. Gather around the grand
            stone fireplace, its flickering flames casting a mesmerizing glow, inviting relaxation.
            The fully
            equipped gourmet kitchen delights chefs with high
            end appliances, sleek countertops,
            and ample space for
            culinary creations. Sunlight streams through large windows, offering panoramic views of the lush forest, inspiring your
            culinary endeavors.
            Retreat to the main floor's master suite
            a sanctuary of tranquility and comfort. Sink into the p
            lush king sized bed,
            adorned with luxurious linens, and let nature's sounds lull you to sleep. The en
            suite bathroom provides a spalike retreat,
            with a deep soaking tub and rain shower for rejuvenation.
            Upstairs, the loft area offers cozy sleeping quarter
            s and a haven for guests or personal reflection. Breathtaking forest views
            through large windows connect you with nature's beauty.
            Outside, a sprawling deck beckons, inviting you to embrace the serene ambiance. Lounge in comfortable outdoor seating,
            breathe in the crisp air, and unwind in the private hot tub, surrounded by nature's tranquility.
            Every detail of this Forest Haven exudes luxury and refinement. Carefully selected materials and curated decor create an
            atmosphere of elegance and comfort. Whether
            seeking relaxation or outdoor adventures, this extraordinary cabin offers an
            unparalleled experience amidst nature's grandeur.
            Escape to this exquisite Forest Haven, immerse yourself in captivating charm, and create lasting memories in this
            sanctuary nestl
            ed amidst the awe-inspiring beauty of the forest.
            """,
        "on_lake": False,
        "rating": 4.5,
        "day_rate": 40000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/681bxdo1nlvp7nz/exterior.jpeg",
            "https://dl.dropboxusercontent.com/s/qjrfk9tei2e6epq/livingroom.jpeg",
            "https://dl.dropboxusercontent.com/s/zrayal36g2hvkc8/bedroom.jpeg",
            "https://dl.dropboxusercontent.com/s/u8ahwwbvdzb1kqm/covered-deck.jpeg",
            "https://dl.dropboxusercontent.com/s/x7r2xlr8s5223rd/hottub.jpeg",
        ]
    },
    {
        "cabin_name": "Cypress",
        "max_occupants": 10,
        "description": """
            Introducing our remarkable Lakeside Retreat
            an enchanting cabin that flawlessly combines contemporary luxury with
            the pristine allure of the surrounding lake. Indulge
            in an exquisite respite from the relentless demands of daily existence.
            As you step inside, you'll be instantly captivated by the inviting interior, exuding warmth and sophistication. The open
            concept living space features high ceilings adorned with expose
            d wooden beams, seamlessly merging rustic charm with
            modern elegance. Gather around the impressive stone fireplace, as its flickering flames cast a mesmerizing glow, inviting
            you to unwind and relax.
            The fully
            equipped gourmet kitchen is a chef's dream, bo
            asting high
            end appliances, sleek countertops, and ample space
            for culinary creations. Sunlight streams through large windows, providing panoramic views of the tranquil lake, inspiring
            your culinary endeavors.
            Retreat to the master suite on the main floor
            a sanctuary of tranquility and comfort. Sink into the plush king
            sized bed,
            adorned with luxurious linens, and let the gentle sounds of nature lull you into a restful slumber. The ensuite bathroom
            offers a spa-like escape, featuring a deep soaking tub and
            a refreshing rain shower.
            Venture upstairs to the loft area, where additional sleeping quarters await. Adorned with cozy furnishings and soft textiles,
            this versatile space offers a haven for guests or a quiet spot for reflection. Immerse yourself in brea
            thtaking views of the
            surrounding lake through the large windows, connecting you with the natural beauty just beyond.
            Outside, a sprawling deck beckons you to embrace the serene ambiance of the lake. Lounge in comfortable outdoor
            seating, breathe in the fr
            esh air, and enjoy exhilarating rides on the jet skis provided for your enjoyment. Unwind in the
            privacy of the outdoor hot tub, enveloped by the tranquility of nature. Gather around the crackling outdoor campfire,
            creating cherished memories under the sta
            rlit sky.
            Every detail of this Lakeside Retreat embodies luxury and refinement. Carefully selected materials and thoughtfully
            curated decor create an atmosphere of elegance and comfort. Whether you seek a peaceful sanctuary for relaxation or an
            exciting ad
            venture on the lake with jet skis, this extraordinary cabin offers an unparalleled experience amidst nature's
            grandeur.
            Escape to this exquisite Lakeside Retreat, immerse yourself in captivating charm, and create lasting memories in this
            extraordinary sanc
            tuary nestled along the mesmerizing shores of the lake.

        """,
        "on_lake": True,
        "rating": 4.8,
        "day_rate": 45000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/9hfhkiz9fcyo3ok/exterior.jpeg",
            "https://dl.dropboxusercontent.com/s/nmeuiuaq3c1j5ha/kitchen.jpeg",
            "https://dl.dropboxusercontent.com/s/uwgxnxnzbeavc1z/livingroom.jpeg",
            "https://dl.dropboxusercontent.com/s/vzemjc1vbjk7jti/bedroom.jpeg",
            "https://dl.dropboxusercontent.com/s/xwf583xfdruvbiu/firepit.jpeg",
        ]
    },
    {
        "cabin_name": "Ponderosa",
        "max_occupants": 4,
        "description": """
            Experience the tranquility of our intimate Woodland Retreat, a small cabin nestled amidst nature's embrace. Perfect for up
            to four people, this peaceful haven offers a
            serene escape without the distractions of a lakeside location. Inside, enjoy a
            range of entertainment options, from engaging games to a pool table, ensuring endless amusement for all.Step into the
            cozy interior, where rustic charm meets contemporary comfor
            t. Vaulted ceilings and wooden accents create a warm and
            inviting atmosphere. Retreat to the master bedroom, offering a plush haven for rejuvenation. Additional sleeping quarters
            ensure ample space for everyone. Immerse yourself in the peacefulness of the
            forest, waking up refreshed and ready for
            new adventures.Outside, a private deck beckons, offering a tranquil setting to soak in nature's wonders. Breathe in the
            fresh air, listen to the sounds of the forest, and embrace the serenity that envelops you.Wood
            land Retreat delivers a perfect
            blend of peaceful seclusion and indoor entertainment. Unwind, play, and create cherished memories in this idyllic
            hideaway amidst nature's splendor.
            """,
        "on_lake": False,
        "rating": 4.4,
        "day_rate": 30000,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/m2eruglzamki4vu/exterior.jpg",
            "https://dl.dropboxusercontent.com/s/3ewkszrnnvayycz/livingroom.jpg",
            "https://dl.dropboxusercontent.com/s/7n940vxttqz2b1b/pooltable.jpg",
            "https://dl.dropboxusercontent.com/s/vy56e97w5tmsyaa/bedroom.jpg",
            "https://dl.dropboxusercontent.com/s/6i5smb6pyhycm6u/hottub.jpg",
        ]
    }
]


def create_cabin(cabin):

    with pool.connection() as conn:
        with conn.cursor() as db:
            db.execute(
                """
                INSERT INTO cabins
                    (cabin_name
                    , max_occupants
                    , description
                    , on_lake
                    , rating
                    , day_rate
                    , cabin_images)
                VALUES
                    (%s, %s, %s, %s, %s, %s, %s)
                RETURNING id;
                """,
                [cabin["cabin_name"],
                    cabin["max_occupants"],
                    cabin["description"],
                    cabin["on_lake"],
                    cabin["rating"],
                    cabin["day_rate"],
                    cabin["cabin_images"]]
            )
    return True


def get_all_cabins():
    with pool.connection() as conn:
        with conn.cursor() as db:
            db.execute(
                """
                SELECT cabin_name
                FROM cabins
                """
            )
            results = []
            for row in db.fetchall():
                cabin = {}
                for i, col in enumerate(db.description):
                    cabin = row[i]
                results.append(cabin)
            return results


all_cabins = get_all_cabins()
print(all_cabins)

for cabin in cabins:
    if cabin["cabin_name"] not in all_cabins:
        response = create_cabin(cabin)

# if "Maple" not in test:
#     cabin = {
#         "cabin_name": "Maple",
#         "max_occupants": 4,
#         "description": """Perched on the edge of a serene lake, this small
#         moder lakeside house offers a harmonious blend of contemporary design
#         and natural beauty. With expansive windows framing breathtaking views,
#         the sleek exterior seamlessly integrates wood, stone, and glass.
#         Inside, an open-concept living space with minimalist aesthetics and
#         abundant natural light awaits. Two cozy bedrooms with picturesque
#         vistas provide a tranquil escape. Step outside to a deck extending
#         towards the water, where relaxation and connection with nature await.
#         This idyllic retreat offers a peaceful lakeside lifestyle in a compact,
#         modern setting.""",
#         "on_lake": True,
#         "rating": 4.8,
#         "day_rate": 35000,
#         "cabin_images": [
#             "https://dl.dropboxusercontent.com/s/4zhx7opb9lr8jbg/exterior-with-lake.webp",
#             "https://dl.dropboxusercontent.com/s/ub7pgw8b83bc5jw/living-room.webp",
#             "https://dl.dropboxusercontent.com/s/yvo4vq512amwn84/bedroom.webp",
#             "https://dl.dropboxusercontent.com/s/1ri9wsvzxwyxinc/bathroom.webp"
#         ]
#     }

#     response = create_cabin(cabin)
# if "Oak" not in test:

#     cabin = {
#         "cabin_name": "Oak",
#         "max_occupants": 2,
#         "description": """Introducing our exquisite luxury A-frame cabin—a
#         small retreat that seamlessly blends charm and comfort. This
#         thoughtfully designed haven features a loft bed, a compact kitchenette,
#         and captivating views of nature. Step into this enchanting space and
#         be greeted by the allure of the A-frame architecture. Inside, the
#         well-appointed kitchenette awaits, allowing you to effortlessly
#         prepare meals. Enjoy intimate dining moments in the cozy designated
#         area, savoring each bite while immersed in the tranquil atmosphere.
#         Ascend to the loft bed, accessed via a ladder or staircase, and
#         discover a serene oasis beneath the sloping roof. Sink into luxurious
#         linens and indulge in a peaceful night's sleep, cocooned in the snug
#         yet stylish ambiance of the loft. Large windows showcase breathtaking
#         vistas, seamlessly connecting you with the beauty of the surroundings.
#         The rustic charm of natural wood finishes, warm lighting, and tasteful
#         decor enhance the inviting atmosphere of the cabin. Outside, a petite
#         patio or deck beckons you to embrace the fresh air and captivating
#         scenery. Relax on outdoor seating or immerse yourself in the soothing
#         waters of a private hot tub, allowing nature's tranquility to wash
#         over you. Our small luxury A-frame cabin with a loft bed and
#         kitchenette is the epitome of refined comfort. Immerse yourself in its
#         intimate charm and relish the splendor of nature in this thoughtfully
#         crafted sanctuary.""",
#         "on_lake": False,
#         "rating": 4.7,
#         "day_rate": 21000,
#         "cabin_images": [
#             "https://dl.dropboxusercontent.com/s/ry133ngsssf5o9d/denoutdoorsdotcom_MODERN_ALPINE_CABIN_005_1800x1800.jpg",
#             "https://dl.dropboxusercontent.com/s/qbilouc8eaoxrc7/denoutdoorsdotcom_MODERN_ALPINE_CABIN_007_1800x1800.jpg",
#             "https://dl.dropboxusercontent.com/s/zwf53ulhhd2es6b/denoutdoorsdotcom_MODERN_ALPINE_CABIN_008_1800x1800.jpg",
#             "https://dl.dropboxusercontent.com/s/nmd18vgzcsllfab/denoutdoorsdotcom_MODERN_ALPINE_CABIN_009_1800x1800.jpg",
#             "https://dl.dropboxusercontent.com/s/vqa9m5jbdboz6xo/denoutdoorsdotcom_MODERN_ALPINE_CABIN_010_1800x1800.jpg",
#             "https://dl.dropboxusercontent.com/s/uyc51pzl4qydpbh/denoutdoorsdotcom_MODERN_ALPINE_CABIN_011_1800x1800.jpg"
#         ]
#     }

#     response = create_cabin(cabin)
# if "Cedar" not in test:

#     cabin = {
#         "cabin_name": "Cedar",
#         "max_occupants": 5,
#         "description": """Welcome to our charming 2-bedroom cabin, a
#         delightful retreat nestled in nature's embrace. This cozy abode
#         features two decks, providing ample space for relaxation and
#         breathtaking views. The main floor deck offers a perfect spot to
#         unwind, sip your morning coffee, and bask in the beauty of the
#         surroundings. Upstairs, the primary bedroom boasts its own private
#         deck, where you can soak in the serenity and enjoy intimate moments
#         under the open sky. And when it's time to truly unwind, indulge in the
#         soothing waters of the hot tub, enveloped by the tranquility of the
#         natural landscape. Discover comfort, tranquility, and rejuvenation in
#         this inviting cabin with its two decks and a blissful hot tub.""",
#         "on_lake": False,
#         "rating": 4.7,
#         "day_rate": 36000,
#         "cabin_images": [
#             "https://dl.dropboxusercontent.com/s/o805vvelfjwe9an/8511.jpg",
#             "https://dl.dropboxusercontent.com/s/eotnfzd7ko3nsbw/6456.jpg",
#             "https://dl.dropboxusercontent.com/s/w71hqhgapjyoxq5/9148.jpg",
#             "https://dl.dropboxusercontent.com/s/jtejzq8n0seoqrg/9156.jpg",
#             "https://dl.dropboxusercontent.com/s/rihogh2xtafhwvo/9164.jpg",
#             "https://dl.dropboxusercontent.com/s/9wjhpfnoeecdw96/6449.jpg"
#         ]
#     }

#     response = create_cabin(cabin)
