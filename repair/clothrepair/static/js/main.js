// script.js

const translations = {
    en: {
        // Navbar
        page_title: "Фея | Door-To-Door Clothing Alterations and Repairs",
        nav_mission: "Mission",
        nav_how_it_works: "How it works",
        nav_contact: "Contact",
        nav_fix_item_btn: "Fix an item",
        nav_partner_with_us_btn: "Partner with us",
        navbar_brand: "Pixie",

        // Hero Section
        hero_title: "Your partner in change",
        hero_description: "Fixing the fashion industry by powering online tailoring and repairs.",
        hero_fix_item_btn: "Fix an item",
        hero_partner_with_us_btn: "Partner with us",

        // About Us Section
        about_us_small_heading: "About us",
        about_us_main_heading: "We are on a mission to fix the fashion industry",
        about_us_description: "We live in a world where \"make-use-waste\" is the default. Фея is here to change that. We are on a mission to reduce the negative impact of fashion by making clothing repairs mainstream and redefining what it means to value our clothes.",
        stat_1_text: "items are sent to landfill every week in Ukraine.",
        stat_1_source: "Oxfam",
        stat_2_text: "of clothing returns are due to poor fit.",
        stat_2_source: "Harris Poll",
        stat_3_text: "worth of clothing is discarded prematurely worldwide",
        stat_3_source: "EOS intelligence",
        about_us_learn_more_btn: "Learn more",

        // Fix an Item Section
        fix_item_small_heading: "Fix an item",
        fix_item_main_heading: "Have an item that needs fixing?",
        fix_item_description: "Book online to get fixed without having to leave your home, or come and get tailored in person at our Selfridges concession.",
        fix_item_btn: "Fix an item",

        // How It Works Section
        how_it_works_main_heading: "How It Works",
        how_it_works_quote_title: "Get Your Quote",
        how_it_works_quote_description: "Connect with a trusted Maker and get a clear quote for your service.",
        how_it_works_quote_link: "See our Price Guide here",
        how_it_works_dropoff_title: "Choose Drop-Off",
        how_it_works_dropoff_description: "Drop items at a local Maker or choose your preferred postal service. (Ukraine wide)",
        how_it_works_ready_title: "Ready to Wear",
        how_it_works_ready_description: "Items returned in days, restored and ready to wear again and again.",
        how_it_works_ready_link: "Explore Instagram for inspiration",
        dropoff_coming_soon: "Coming Soon",

        // Testimonials Section
        testimonials_main_heading: "What Customers Say",
        testimonial_1_text: "\"I’ve now used Фея twice to repair items of clothing...absolutely delighted with their work that has made the items look like new again!\"",
        testimonial_1_author: "LISA B",
        testimonial_1_date: "April 2025",
        testimonial_2_text: "\"The craftsmanship was absolutely impeccable - you can barely see any signs of the repairs, and my coat looks as good as new!\"",
        testimonial_2_author: "TINNY C",
        testimonial_2_date: "September 2024",
        testimonial_3_text: "\"Anne S did a fantastic job shortening a couple of pairs of trousers. Super helpful and fast. As a short person it’s so fab to have a great local tailoring service!\"",
        testimonial_3_author: "REBECCA F",
        testimonial_3_date: "August 2024",
        testimonials_read_more_btn: "Read More Reviews",

        // Footer Section
        footer_book_now_btn: "Book Now",
        footer_about_us_heading: "About Us",
        footer_for_business: "For Business",
        footer_for_makers: "For Makers",
        footer_press: "Press",
        footer_contact_us: "Contact Us",
        footer_for_customers_heading: "For Customers",
        footer_pricing_guide: "Pricing Guide",
        footer_get_quote: "Get a Quote in 48h",
        footer_faqs: "FAQs",
        footer_care_studies_heading: "Care Studies",
        footer_knitwear_repair: "Invisible knitwear repair",
        footer_leather_repair: "Leather footwear repair",
        footer_handbag_restoration: "Handbag restoration",
        footer_legal_heading: "Legal",
        footer_terms: "Terms",
        footer_privacy: "Privacy",
        footer_the_seam_logo: "Feya",

        // Booking Modal
        booking_modal_title: "Book a Repair",
        booking_date_label: "Select Date",
        booking_time_label: "Select Time",
        booking_select_date_first: "Please select a date first.",
        booking_name_label: "Your Name",
        booking_phone_label: "Phone Number",
        booking_description_label: "What needs to be done?",
        booking_submit_btn: "Confirm Booking",
        booking_success_title: "Booking Confirmed!",
        booking_done_btn: "Done",

        // Review Modal
        testimonials_add_review_btn: "Add Review",
        review_modal_title: "Write a Review",
        review_rating_label: "Your Rating",
        review_name_label: "Your Name",
        review_comment_label: "Your Review",
        review_submit_btn: "Submit Review",
        review_success_title: "Thank You!",
        review_success_message: "Your review has been submitted successfully.",
        review_done_btn: "Done",

        // Contact Section
        contact_section_title: "Contact Us",
        contact_phone_title: "Phone",
        contact_email_title: "Email",
        contact_hours_title: "Working Hours",
        contact_hours_weekdays: "Mon - Fri: 10:00 - 19:00",
        contact_hours_saturday: "Sat: 10:00 - 17:00",
        contact_hours_sunday: "Sunday: Closed",
        contact_social_title: "Social Media",

        // Services Section
        services_section_title: "Our Services",
        service_1_title: "Clothing Repair",
        service_1_desc: "Quality repair of any complexity.",
        service_2_title: "Alterations",
        service_2_desc: "Taking in, shortening, and hemming items.",
        service_3_title: "Fur & Leather",
        service_3_desc: "Repair of fur, leather, and fur products.",
        service_4_title: "Hardware Replacement",
        service_4_desc: "Installing snaps, replacing zippers and hooks.",

        // FAQ Section
        faq_section_title: "Frequently Asked Questions",
        faq_q1: "How long does it take?",
        faq_a1: "Usually repairs take 1-3 days depending on complexity.",
        faq_q2: "Do you work with leather and fur?",
        faq_a2: "Yes, we have specialized equipment and experts for leather and fur.",
        faq_q3: "How is the price determined?",
        faq_a3: "Price depends on complexity and materials. You can get an estimate online.",
        faq_q4: "Can I bring my own fittings?",
        faq_a4: "Yes, absolutely. You can bring your own buttons, zippers, or fabric.",

        // Price List Modal
        price_list_modal_title: "Price List",
        price_item_1: "Shortening jeans/trousers",
        price_item_2: "Zipper replacement (jacket)",
        price_item_3: "Darning jeans",
        price_item_4: "Lining replacement (coat)",
        price_item_5: "Shortening sleeves",
        price_list_note: "* Prices are approximate and may vary depending on complexity.",
        price_list_close_btn: "Close",

        // Quote Modal
        contact_get_quote_btn: "Get a Quote",
        quote_modal_title: "Get a Quote",
        quote_name_label: "Your Name",
        quote_contact_label: "Phone or Email",
        quote_description_label: "Problem Description",
        quote_image_label: "Photo (Optional)",
        quote_submit_btn: "Get Quote",
        quote_success_title: "Request Sent!",
        quote_success_message: "We will contact you within 48 hours.",
        quote_done_btn: "Done"
    },
    uk: {
        // Navbar
        page_title: "Фея | Пошиття та ремонт одягу з доставкою",
        nav_mission: "Місія",
        nav_how_it_works: "Як це працює",
        nav_contact: "Контакти",
        nav_fix_item_btn: "Замовити ремонт",
        nav_partner_with_us_btn: "Співпраця",
        navbar_brand: "Фея",

        // Hero Section
        hero_title: "Ваш партнер у змінах",
        hero_description: "Вирішуємо проблеми модної індустрії, забезпечуючи онлайн пошиття та ремонт.",
        hero_fix_item_btn: "Відремонтувати",
        hero_partner_with_us_btn: "Співпраця",

        // About Us Section
        about_us_small_heading: "Про нас",
        about_us_main_heading: "Наша місія — змінити індустрію моди",
        about_us_description: "Ми живемо у світі, де \"виробництво-використання-відходи\" є нормою. Фея тут, щоб змінити це. Наша місія — зменшити негативний вплив моди, зробивши ремонт одягу мейнстрімом та переосмисливши цінність нашого одягу.",
        stat_1_text: "предметів одягу викидається на звалище щотижня в Україні.",
        stat_1_source: "Oxfam",
        stat_2_text: "повернень одягу пов'язані з поганою посадкою.",
        stat_2_source: "Harris Poll",
        stat_3_text: "вартості одягу викидається передчасно по всьому світу",
        stat_3_source: "EOS intelligence",
        about_us_learn_more_btn: "Дізнатися більше",

        // Fix an Item Section
        fix_item_small_heading: "Відремонтувати",
        fix_item_main_heading: "Маєте річ, яка потребує ремонту?",
        fix_item_description: "Замовляйте ремонт онлайн, не виходячи з дому, або приходьте особисто до нашої концесії Selfridges.",
        fix_item_btn: "Відремонтувати",

        // How It Works Section
        how_it_works_main_heading: "Як це працює",
        how_it_works_quote_title: "Отримайте оцінку",
        how_it_works_quote_description: "Зв'яжіться з надійним майстром та отримайте чітку оцінку послуги.",
        how_it_works_quote_link: "Переглянути прайс-лист",
        how_it_works_dropoff_title: "Виберіть місце здачі",
        how_it_works_dropoff_description: "Здайте речі місцевому майстру або виберіть бажану поштову службу. (По всій Україні)",
        how_it_works_ready_title: "Готово до носіння",
        how_it_works_ready_description: "Речі повертаються за кілька днів, відреставровані та готові до багаторазового використання.",
        how_it_works_ready_link: "Переглянути Instagram для натхнення",
        dropoff_coming_soon: "Скоро",

        // Testimonials Section
        testimonials_main_heading: "Що кажуть клієнти",
        testimonial_1_text: "\"Я вже двічі користувалася послугами Фея для ремонту одягу... абсолютно в захваті від їхньої роботи, яка зробила речі як нові!\"",
        testimonial_1_author: "ЛІЗА Б.",
        testimonial_1_date: "Квітень 2025",
        testimonial_2_text: "\"Майстерність була абсолютно бездоганною – ви майже не помітите жодних слідів ремонту, і моє пальто виглядає як нове!\"",
        testimonial_2_author: "ТІННІ К.",
        testimonial_2_date: "Вересень 2024",
        testimonial_3_text: "\"Анна С. чудово вкоротила кілька пар штанів. Дуже допомогла і швидко. Для невисокої людини це так чудово мати місцевий сервіс пошиття!\"",
        testimonial_3_author: "РЕБЕККА Ф.",
        testimonial_3_date: "Серпень 2024",
        testimonials_read_more_btn: "Читати більше відгуків",

        // Footer Section
        footer_book_now_btn: "Замовити",
        footer_about_us_heading: "Про нас",
        footer_for_business: "Для бізнесу",
        footer_for_makers: "Для майстрів",
        footer_press: "Преса",
        footer_contact_us: "Зв'язатися з нами",
        footer_for_customers_heading: "Для клієнтів",
        footer_pricing_guide: "Прайс-лист",
        footer_get_quote: "Отримати оцінку за 48 год",
        footer_faqs: "Часті запитання",
        footer_care_studies_heading: "Кейси",
        footer_knitwear_repair: "Невидимий ремонт трикотажу",
        footer_leather_repair: "Ремонт шкіряного взуття",
        footer_handbag_restoration: "Реставрація сумок",
        footer_legal_heading: "Правові питання",
        footer_terms: "Умови",
        footer_privacy: "Конфіденційність",
        footer_the_seam_logo: "Фея",

        // Booking Modal
        booking_modal_title: "Замовити ремонт",
        booking_date_label: "Оберіть дату",
        booking_time_label: "Оберіть час",
        booking_select_date_first: "Будь ласка, спочатку оберіть дату.",
        booking_name_label: "Ваше ім'я",
        booking_phone_label: "Номер телефону",
        booking_description_label: "Що потрібно зробити?",
        booking_submit_btn: "Підтвердити бронювання",
        booking_success_title: "Бронювання підтверджено!",
        booking_done_btn: "Готово",

        // Review Modal
        testimonials_add_review_btn: "Додати відгук",
        review_modal_title: "Написати відгук",
        review_rating_label: "Ваша оцінка",
        review_name_label: "Ваше ім'я",
        review_comment_label: "Ваш відгук",
        review_submit_btn: "Надіслати відгук",
        review_success_title: "Дякуємо!",
        review_success_message: "Ваш відгук успішно надіслано.",
        review_done_btn: "Готово",

        // Contact Section
        contact_section_title: "Зв'язатися з нами",
        contact_phone_title: "Телефон",
        contact_email_title: "Email",
        contact_hours_title: "Графік роботи",
        contact_hours_weekdays: "Пн - Пт: 10:00 - 19:00",
        contact_hours_saturday: "Сб: 10:00 - 17:00",
        contact_hours_sunday: "Неділя: Вихідний",
        contact_social_title: "Соцмережі",

        // Services Section
        services_section_title: "Наші послуги",
        service_1_title: "Ремонт одягу",
        service_1_desc: "Якісний ремонт будь-якої складності.",
        service_2_title: "Підгін по фігурі",
        service_2_desc: "Ушивка, укорочування виробу.",
        service_3_title: "Хутро та шкіра",
        service_3_desc: "Ремонт хутра, шкіри та хутряних виробів.",
        service_4_title: "Заміна фурнітури",
        service_4_desc: "Встановлення кнопок, заміна блискавок та гачків.",

        // FAQ Section
        faq_section_title: "Часті запитання",
        faq_q1: "Скільки часу займає ремонт?",
        faq_a1: "Зазвичай ремонт займає від 1 до 3 днів, залежно від складності.",
        faq_q2: "Ви працюєте зі шкірою та хутром?",
        faq_a2: "Так, ми маємо спеціалізоване обладнання та майстрів для роботи зі шкірою та хутром.",
        faq_q3: "Як формується ціна?",
        faq_a3: "Ціна залежить від складності роботи та необхідних матеріалів. Ви можете отримати попередню оцінку онлайн.",
        faq_q4: "Чи можу я принести свою фурнітуру?",
        faq_a4: "Так, звичайно. Ви можете принести свої гудзики, блискавки або тканину, або ми підберемо їх для вас.",

        // Price List Modal
        price_list_modal_title: "Прайс-лист",
        price_item_1: "Укорочування джинсів/брюк",
        price_item_2: "Заміна блискавки (куртка)",
        price_item_3: "Штопка джинсів",
        price_item_4: "Заміна підкладки (пальто)",
        price_item_5: "Укоротити рукава",
        price_list_note: "* Ціни є орієнтовними і можуть змінюватися залежно від складності.",
        price_list_close_btn: "Закрити",

        // Quote Modal
        contact_get_quote_btn: "Отримати оцінку",
        quote_modal_title: "Отримати оцінку",
        quote_name_label: "Ваше ім'я",
        quote_contact_label: "Телефон або Email",
        quote_description_label: "Опис проблеми",
        quote_image_label: "Фото (необов'язково)",
        quote_submit_btn: "Отримати оцінку",
        quote_success_title: "Запит надіслано!",
        quote_success_message: "Ми зв'яжемося з вами протягом 48 годин.",
        quote_done_btn: "Готово"
    },
    ru: {
        // Navbar
        page_title: "Фея | Пошив и ремонт одежды с доставкой",
        nav_mission: "Миссия",
        nav_how_it_works: "Как это работает",
        nav_contact: "Контакты",
        nav_fix_item_btn: "Заказать ремонт",
        nav_partner_with_us_btn: "Сотрудничество",
        navbar_brand: "Фея",

        // Hero Section
        hero_title: "Ваш партнер в изменениях",
        hero_description: "Исправляем модную индустрию, предлагая онлайн-пошив и ремонт.",
        hero_fix_item_btn: "Отремонтировать",
        hero_partner_with_us_btn: "Сотрудничество",

        // About Us Section
        about_us_small_heading: "О нас",
        about_us_main_heading: "Наша миссия — изменить индустрию моды",
        about_us_description: "Мы живем в мире, где \"производство-использование-отходы\" является нормой. Фея здесь, чтобы изменить это. Наша миссия — уменьшить негативное влияние моды, сделав ремонт одежды мейнстримом и переосмыслив ценность нашей одежды.",
        stat_1_text: "предметов одежды отправляются на свалку каждую неделю в Украине.",
        stat_1_source: "Oxfam",
        stat_2_text: "возвратов одежды связаны с плохой посадкой.",
        stat_2_source: "Harris Poll",
        stat_3_text: "стоимости одежды выбрасывается преждевременно по всему миру",
        stat_3_source: "EOS intelligence",
        about_us_learn_more_btn: "Узнать больше",

        // Fix an Item Section
        fix_item_small_heading: "Отремонтировать",
        fix_item_main_heading: "Есть вещь, которая нуждается в ремонте?",
        fix_item_description: "Закажите ремонт онлайн, не выходя из дома, или приходите лично в нашу концессию Selfridges.",
        fix_item_btn: "Отремонтировать",

        // How It Works Section
        how_it_works_main_heading: "Как это работает",
        how_it_works_quote_title: "Получите оценку",
        how_it_works_quote_description: "Свяжитесь с надежным мастером и получите четкую оценку услуги.",
        how_it_works_quote_link: "Посмотреть прайс-лист здесь",
        how_it_works_dropoff_title: "Выберите место сдачи",
        how_it_works_dropoff_description: "Сдайте вещи местному мастеру или выберите предпочтительную почтовую службу. (По всей Украине)",
        how_it_works_ready_title: "Готово к носке",
        how_it_works_ready_description: "Вещи возвращаются через несколько дней, отреставрированные и готовые к многократному использованию.",
        how_it_works_ready_link: "Посмотреть Instagram для вдохновения",
        dropoff_coming_soon: "Скоро",

        // Testimonials Section
        testimonials_main_heading: "Что говорят клиенты",
        testimonial_1_text: "\"Я уже дважды пользовалась услугами Фея для ремонта одежды... абсолютно в восторге от их работы, которая сделала вещи как новые!\"",
        testimonial_1_author: "ЛИЗА Б.",
        testimonial_1_date: "Апрель 2025",
        testimonial_2_text: "\"Мастерство было абсолютно безупречным – вы едва заметите какие-либо следы ремонта, и мое пальто выглядит как новое!\"",
        testimonial_2_author: "ТИННИ К.",
        testimonial_2_date: "Сентябрь 2024",
        testimonial_3_text: "\"Анна С. отлично справилась с укорачиванием пары брюк. Очень полезно и быстро. Для невысокого человека это так здорово иметь местный сервис пошива!\"",
        testimonial_3_author: "РЕБЕККА Ф.",
        testimonial_3_date: "Август 2024",
        testimonials_read_more_btn: "Читать больше отзывов",

        // Footer Section
        footer_book_now_btn: "Забронировать",
        footer_about_us_heading: "О нас",
        footer_for_business: "Для бизнеса",
        footer_for_makers: "Для мастеров",
        footer_press: "Пресса",
        footer_contact_us: "Связаться с нами",
        footer_for_customers_heading: "Для клиентов",
        footer_pricing_guide: "Прайс-лист",
        footer_get_quote: "Получить оценку за 48 ч",
        footer_faqs: "Часто задаваемые вопросы",
        footer_care_studies_heading: "Кейсы",
        footer_knitwear_repair: "Невидимый ремонт трикотажа",
        footer_leather_repair: "Ремонт кожаной обуви",
        footer_handbag_restoration: "Реставрация сумок",
        footer_legal_heading: "Юридические вопросы",
        footer_terms: "Условия",
        footer_privacy: "Конфиденциальность",
        footer_the_seam_logo: "Фея",

        // Booking Modal
        booking_modal_title: "Заказать ремонт",
        booking_date_label: "Выберите дату",
        booking_time_label: "Выберите время",
        booking_select_date_first: "Пожалуйста, сначала выберите дату.",
        booking_name_label: "Ваше имя",
        booking_phone_label: "Номер телефона",
        booking_description_label: "Что нужно сделать?",
        booking_submit_btn: "Подтвердить бронирование",
        booking_success_title: "Бронирование подтверждено!",
        booking_done_btn: "Готово",

        // Review Modal
        testimonials_add_review_btn: "Добавить отзыв",
        review_modal_title: "Написать отзыв",
        review_rating_label: "Ваша оценка",
        review_name_label: "Ваше имя",
        review_comment_label: "Ваш отзыв",
        review_submit_btn: "Отправить отзыв",
        review_success_title: "Спасибо!",
        review_success_message: "Ваш отзыв успешно отправлен.",
        review_done_btn: "Готово",

        // Contact Section
        contact_section_title: "Связаться с нами",
        contact_phone_title: "Телефон",
        contact_email_title: "Email",
        contact_hours_title: "График работы",
        contact_hours_weekdays: "Пн - Пт: 10:00 - 19:00",
        contact_hours_saturday: "Сб: 10:00 - 17:00",
        contact_hours_sunday: "Воскресенье: Выходной",
        contact_social_title: "Соцсети",

        // Services Section
        services_section_title: "Наши услуги",
        service_1_title: "Ремонт одежды",
        service_1_desc: "Качественный ремонт любой сложности.",
        service_2_title: "Подгонка по фигуре",
        service_2_desc: "Ушивка, укорачивание изделия.",
        service_3_title: "Мех и кожа",
        service_3_desc: "Ремонт меха, кожи и меховых изделий.",
        service_4_title: "Замена фурнитуры",
        service_4_desc: "Установка кнопок, замена молний и крючков.",

        // FAQ Section
        faq_section_title: "Частые вопросы",
        faq_q1: "Сколько времени занимает ремонт?",
        faq_a1: "Обычно ремонт занимает от 1 до 3 дней, в зависимости от сложности.",
        faq_q2: "Вы работаете с кожей и мехом?",
        faq_a2: "Да, у нас есть специализированное оборудование и мастера для работы с кожей и мехом.",
        faq_q3: "Как формируется цена?",
        faq_a3: "Цена зависит от сложности работы и необходимых материалов. Вы можете получить предварительную оценку онлайн.",
        faq_q4: "Могу ли я принести свою фурнитуру?",
        faq_a4: "Да, конечно. Вы можете принести свои пуговицы, молнии или ткань, или мы подберем их для вас.",

        // Price List Modal
        price_list_modal_title: "Прайс-лист",
        price_item_1: "Укорачивание джинсов/брюк",
        price_item_2: "Замена молнии (куртка)",
        price_item_3: "Штопка джинсов",
        price_item_4: "Замена подкладки (пальто)",
        price_item_5: "Укоротить рукава",
        price_list_note: "* Цены ориентировочные и могут меняться в зависимости от сложности.",
        price_list_close_btn: "Закрыть",

        // Quote Modal
        contact_get_quote_btn: "Получить оценку",
        quote_modal_title: "Получить оценку",
        quote_name_label: "Ваше имя",
        quote_contact_label: "Телефон или Email",
        quote_description_label: "Описание проблемы",
        quote_image_label: "Фото (необязательно)",
        quote_submit_btn: "Получить оценку",
        quote_success_title: "Запрос отправлен!",
        quote_success_message: "Мы свяжемся с вами в течение 48 часов.",
        quote_done_btn: "Готово"
    }
};

const elementsToTranslate = document.querySelectorAll('[data-key]');
const languageSwitchers = document.querySelectorAll('.language-switcher');
const currentLanguageDisplay = document.getElementById('current-language-display');
const currentLanguageDisplayMobile = document.getElementById('current-language-display-mobile');

// Function to translate content
function translatePage(lang) {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Special handling for button text or specific elements if needed
            if (element.tagName === 'A' && element.classList.contains('btn') && element.getAttribute('data-key').includes('_btn')) {
                // For buttons, set text content directly
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'SMALL' && element.getAttribute('data-key').includes('_source')) {
                // For source text like Oxfam, just update text content
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'STRONG' && element.getAttribute('data-key').includes('_author')) {
                // For author names
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'TITLE') {
                // For the page title in the head
                document.title = translations[lang][key];
            }
            else {
                // Default: update text content for most elements
                element.textContent = translations[lang][key];
            }
        }
    });
    // Update the displayed current language in the navbar
    if (currentLanguageDisplay) currentLanguageDisplay.textContent = lang.toUpperCase();
    if (currentLanguageDisplayMobile) currentLanguageDisplayMobile.textContent = lang.toUpperCase();
    // Save preferred language to localStorage
    localStorage.setItem('siteLanguage', lang);
}

// Event listeners for language switcher
languageSwitchers.forEach(switcher => {
    switcher.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const lang = event.target.getAttribute('data-lang');
        translatePage(lang);
    });
});

// Load preferred language on page load
const savedLanguage = localStorage.getItem('siteLanguage') || 'uk';
document.addEventListener('DOMContentLoaded', () => {
    translatePage(savedLanguage);
});

// Booking Logic
document.addEventListener('DOMContentLoaded', () => {
    const bookingDateInput = document.getElementById('bookingDate');
    const timeSlotsContainer = document.getElementById('timeSlotsContainer');
    const selectedTimeSlotInput = document.getElementById('selectedTimeSlot');
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.setAttribute('min', today);

    bookingDateInput.addEventListener('change', () => {
        const selectedDate = new Date(bookingDateInput.value);
        generateTimeSlots(selectedDate);
    });

    function generateTimeSlots(date) {
        timeSlotsContainer.innerHTML = ''; // Clear existing slots
        selectedTimeSlotInput.value = ''; // Clear selected slot

        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ...
        let startHour, endHour;

        if (dayOfWeek === 0) { // Sunday
            timeSlotsContainer.innerHTML = '<p class="text-danger small w-100">Sorry, we are closed on Sundays.</p>';
            return;
        } else if (dayOfWeek === 6) { // Saturday
            startHour = 10;
            endHour = 17;
        } else { // Monday - Friday
            startHour = 10;
            endHour = 19;
        }

        const startTime = new Date(date);
        startTime.setHours(startHour, 0, 0, 0);

        const endTime = new Date(date);
        endTime.setHours(endHour, 0, 0, 0);

        while (startTime < endTime) {
            const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const slotInput = document.createElement('input');
            slotInput.type = 'radio';
            slotInput.class = 'btn-check';
            slotInput.name = 'timeSlotOptions';
            slotInput.id = `slot-${timeString}`;
            slotInput.autocomplete = 'off';
            slotInput.value = timeString;
            slotInput.className = 'btn-check';

            const slotLabel = document.createElement('label');
            slotLabel.className = 'btn btn-outline-dark';
            slotLabel.setAttribute('for', `slot-${timeString}`);
            slotLabel.textContent = timeString;

            slotInput.addEventListener('change', (e) => {
                selectedTimeSlotInput.value = e.target.value;
            });

            timeSlotsContainer.appendChild(slotInput);
            timeSlotsContainer.appendChild(slotLabel);

            // Increment by 15 minutes
            startTime.setMinutes(startTime.getMinutes() + 15);
        }
    }

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const date = bookingDateInput.value;
        const time = selectedTimeSlotInput.value;
        const name = document.getElementById('customerName').value;
        const phone = document.getElementById('customerPhone').value;
        const description = document.getElementById('customerDescription').value;

        if (!date || !time || !name || !phone || !description) {
            alert('Please fill in all fields.');
            return;
        }

        // Send data to backend
        fetch('/book-repair/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                date: date,
                time: time,
                description: description
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Show Success View
                    document.getElementById('summaryName').textContent = name;
                    document.getElementById('summaryDate').textContent = date;
                    document.getElementById('summaryTime').textContent = time;
                    document.getElementById('summaryPhone').textContent = phone;
                    document.getElementById('summaryDescription').textContent = description;

                    bookingForm.classList.add('d-none');
                    document.getElementById('bookingSuccess').classList.remove('d-none');
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while processing your request.');
            });

        // Reset form when modal is closed or Done is clicked
        const resetBooking = () => {
            bookingForm.reset();
            timeSlotsContainer.innerHTML = '<p class="text-muted small">Please select a date first.</p>';
            bookingForm.classList.remove('d-none');
            document.getElementById('bookingSuccess').classList.add('d-none');
        };

        const doneBtn = document.querySelector('[data-key="booking_done_btn"]');
        doneBtn.addEventListener('click', resetBooking, { once: true });

        document.getElementById('bookingModal').addEventListener('hidden.bs.modal', resetBooking, { once: true });
    });

    // Review Form Submission
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('reviewName').value;
        const comment = document.getElementById('reviewComment').value;
        const ratingInput = document.querySelector('input[name="rating"]:checked');
        const rating = ratingInput ? ratingInput.value : 0;

        if (!name || !comment || rating === 0) {
            alert('Please fill in all fields and select a rating.');
            return;
        }

        // Send data to backend
        fetch('/submit-review/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                rating: rating,
                comment: comment
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Show Success View
                    reviewForm.classList.add('d-none');
                    document.getElementById('reviewSuccess').classList.remove('d-none');
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while processing your request.');
            });

        // Reset form when modal is closed or Done is clicked
        const resetReview = () => {
            reviewForm.reset();
            reviewForm.classList.remove('d-none');
            document.getElementById('reviewSuccess').classList.add('d-none');
        };

        const doneBtn = document.querySelector('[data-key="review_done_btn"]');
        doneBtn.addEventListener('click', resetReview, { once: true });

        document.getElementById('reviewModal').addEventListener('hidden.bs.modal', resetReview, { once: true });
    });

    // Quote Form Submission
    const quoteForm = document.getElementById('quoteForm');
    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('quoteName').value;
        const contact = document.getElementById('quoteContact').value;
        const description = document.getElementById('quoteDescription').value;
        const imageInput = document.getElementById('quoteImage');

        if (!name || !contact || !description) {
            alert('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('contact', contact);
        formData.append('description', description);
        if (imageInput.files.length > 0) {
            formData.append('image', imageInput.files[0]);
        }

        // Send data to backend
        fetch('/submit-quote/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Show Success View
                    quoteForm.classList.add('d-none');
                    document.getElementById('quoteSuccess').classList.remove('d-none');
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while processing your request.');
            });

        // Reset form when modal is closed or Done is clicked
        const resetQuote = () => {
            quoteForm.reset();
            quoteForm.classList.remove('d-none');
            document.getElementById('quoteSuccess').classList.add('d-none');
        };

        const doneBtn = document.querySelector('[data-key="quote_done_btn"]');
        doneBtn.addEventListener('click', resetQuote, { once: true });

        document.getElementById('quoteModal').addEventListener('hidden.bs.modal', resetQuote, { once: true });
    });
});