db.events.insert([
    {
        "name": "Event 1",
        "guests": [
            {
                _id: new ObjectId(),
                name: "Huguinho",
                formatted_name: "huguinho",
                present: true,
            },
            {
                _id: new ObjectId(),
                name: "Zézinho",
                formatted_name: "zezinho",
                present: false,
            },
            {
                _id: new ObjectId(),
                name: "Luizinho",
                formatted_name: "luizinho",
                present: true,
            },
        ]
    },
    {
        "name": "Event 2",
        "guests": [
            {
                _id: new ObjectId(),
                name: "Du",
                formatted_name: "du",
                present: true,
            },
            {
                _id: new ObjectId(),
                name: "Dudu",
                formatted_name: "dudu",
                present: false,
            },
            {
                _id: new ObjectId(),
                name: "Edu",
                formatted_name: "edu",
                present: true,
            },
        ]
    }
]);

db.guests.insert([{"name":"Ryleigh Ritchie","formatted_name":"ryleigh ritchie","present":true},{"name":"Guillermo Gaylord","formatted_name":"guillermo gaylord","present":true},{"name":"Jovanny Howell","formatted_name":"jovanny howell","present":false},{"name":"Mertie Kuvalis","formatted_name":"mertie kuvalis","present":false},{"name":"Kiarra Hansen","formatted_name":"kiarra hansen","present":false},{"name":"Annetta Buckridge","formatted_name":"annetta buckridge","present":true},{"name":"Christop Lubowitz","formatted_name":"christop lubowitz","present":true},{"name":"Mollie Blanda","formatted_name":"mollie blanda","present":false},{"name":"Mason Dickinson Jr.","formatted_name":"mason dickinson jr.","present":true},{"name":"Zola Bruen","formatted_name":"zola bruen","present":true},{"name":"Leta MacGyver","formatted_name":"leta macgyver","present":false},{"name":"Emie Jaskolski","formatted_name":"emie jaskolski","present":true},{"name":"Mrs. Cassandra Satterfield","formatted_name":"mrs. cassandra satterfield","present":false},{"name":"Gina Schimmel","formatted_name":"gina schimmel","present":false},{"name":"Eldon Morar","formatted_name":"eldon morar","present":true},{"name":"Arlie Renner","formatted_name":"arlie renner","present":false},{"name":"Janet Braun","formatted_name":"janet braun","present":true},{"name":"Kayleigh Simonis I","formatted_name":"kayleigh simonis i","present":true},{"name":"Vincenzo Schoen","formatted_name":"vincenzo schoen","present":false},{"name":"Dusty Kemmer","formatted_name":"dusty kemmer","present":true},{"name":"Greta Okuneva","formatted_name":"greta okuneva","present":true},{"name":"Yasmin Sawayn","formatted_name":"yasmin sawayn","present":false},{"name":"Bradford Hackett","formatted_name":"bradford hackett","present":false},{"name":"Kennith Kuphal PhD","formatted_name":"kennith kuphal phd","present":true},{"name":"Mr. Audrey Collier","formatted_name":"mr. audrey collier","present":true},{"name":"Miss Patrick Watsica","formatted_name":"miss patrick watsica","present":true},{"name":"Elroy O'Keefe","formatted_name":"elroy o'keefe","present":true},{"name":"Arvid Konopelski","formatted_name":"arvid konopelski","present":false},{"name":"Joy Kovacek Sr.","formatted_name":"joy kovacek sr.","present":false},{"name":"Savanah Rutherford","formatted_name":"savanah rutherford","present":false},{"name":"Meta Homenick","formatted_name":"meta homenick","present":true},{"name":"Cameron Terry","formatted_name":"cameron terry","present":false},{"name":"Dr. Randy Armstrong","formatted_name":"dr. randy armstrong","present":false},{"name":"Alta Schneider","formatted_name":"alta schneider","present":false},{"name":"Bryce Kuhic","formatted_name":"bryce kuhic","present":true},{"name":"Bradley Schumm","formatted_name":"bradley schumm","present":true},{"name":"Alyson Runolfsson","formatted_name":"alyson runolfsson","present":true},{"name":"Dr. Hank Stamm","formatted_name":"dr. hank stamm","present":true},{"name":"Hank DuBuque","formatted_name":"hank dubuque","present":false},{"name":"Luigi Barrows","formatted_name":"luigi barrows","present":true},{"name":"Myra Daniel","formatted_name":"myra daniel","present":true},{"name":"Germaine Renner DDS","formatted_name":"germaine renner dds","present":false},{"name":"Isabell Bruen","formatted_name":"isabell bruen","present":false},{"name":"Gisselle Kerluke","formatted_name":"gisselle kerluke","present":false},{"name":"Tyson Christiansen","formatted_name":"tyson christiansen","present":true},{"name":"Dale Kuhic","formatted_name":"dale kuhic","present":false},{"name":"Cody Ondricka","formatted_name":"cody ondricka","present":true},{"name":"Ona Block","formatted_name":"ona block","present":false},{"name":"Jennings Ankunding","formatted_name":"jennings ankunding","present":true},{"name":"Chase Wintheiser","formatted_name":"chase wintheiser","present":false}]);

db.guests.insert([{"name":"Joanne Collier","formatted_name":"joanne collier","present":true},{"name":"Rodrick O'Connell","formatted_name":"rodrick o'connell","present":false},{"name":"Miss Wyman Murazik","formatted_name":"miss wyman murazik","present":false},{"name":"Dasia Harvey","formatted_name":"dasia harvey","present":false},{"name":"Ramiro Lubowitz","formatted_name":"ramiro lubowitz","present":true},{"name":"Imani Wolff","formatted_name":"imani wolff","present":false},{"name":"Leonard Schultz","formatted_name":"leonard schultz","present":false},{"name":"Dr. Ariane Dietrich","formatted_name":"dr. ariane dietrich","present":true},{"name":"Audra Lemke","formatted_name":"audra lemke","present":true},{"name":"Minnie Doyle","formatted_name":"minnie doyle","present":false},{"name":"Yazmin Kilback III","formatted_name":"yazmin kilback iii","present":false},{"name":"Kira Smitham","formatted_name":"kira smitham","present":false},{"name":"Lizzie Mraz PhD","formatted_name":"lizzie mraz phd","present":false},{"name":"Luz Hickle","formatted_name":"luz hickle","present":true},{"name":"Henriette Hammes","formatted_name":"henriette hammes","present":true},{"name":"Burdette Schroeder","formatted_name":"burdette schroeder","present":true},{"name":"Dr. Coty Schumm","formatted_name":"dr. coty schumm","present":false},{"name":"Glenna Vandervort","formatted_name":"glenna vandervort","present":true},{"name":"Ms. Lenny Ortiz","formatted_name":"ms. lenny ortiz","present":true},{"name":"Mckayla Friesen","formatted_name":"mckayla friesen","present":true},{"name":"Isobel Effertz","formatted_name":"isobel effertz","present":true},{"name":"Thad Ryan","formatted_name":"thad ryan","present":true},{"name":"Ashlynn Balistreri V","formatted_name":"ashlynn balistreri v","present":true},{"name":"Marcella Waelchi","formatted_name":"marcella waelchi","present":false},{"name":"Destini Champlin","formatted_name":"destini champlin","present":true},{"name":"Maci Aufderhar","formatted_name":"maci aufderhar","present":true},{"name":"Gretchen O'Reilly","formatted_name":"gretchen o'reilly","present":true},{"name":"Misael O'Kon","formatted_name":"misael o'kon","present":false},{"name":"Rogelio Bartoletti","formatted_name":"rogelio bartoletti","present":false},{"name":"Lenna Abbott","formatted_name":"lenna abbott","present":true},{"name":"Eveline O'Hara","formatted_name":"eveline o'hara","present":true},{"name":"Nathan Kozey","formatted_name":"nathan kozey","present":true},{"name":"Manuela Russel","formatted_name":"manuela russel","present":true},{"name":"Mr. Greyson Mayert","formatted_name":"mr. greyson mayert","present":false},{"name":"Lawson Bayer","formatted_name":"lawson bayer","present":false},{"name":"Cara Welch","formatted_name":"cara welch","present":true},{"name":"Ramiro Quigley Sr.","formatted_name":"ramiro quigley sr.","present":true},{"name":"Miss Dell Haag","formatted_name":"miss dell haag","present":true},{"name":"Gerry Harvey","formatted_name":"gerry harvey","present":true},{"name":"Antonina Prohaska PhD","formatted_name":"antonina prohaska phd","present":true},{"name":"Tommie Stracke V","formatted_name":"tommie stracke v","present":false},{"name":"Price Mitchell","formatted_name":"price mitchell","present":true},{"name":"Geraldine Harber","formatted_name":"geraldine harber","present":false},{"name":"Hardy Davis","formatted_name":"hardy davis","present":false},{"name":"Sammie Rutherford","formatted_name":"sammie rutherford","present":true},{"name":"Nichole Luettgen PhD","formatted_name":"nichole luettgen phd","present":false},{"name":"Sunny Zboncak","formatted_name":"sunny zboncak","present":false},{"name":"Greyson Kutch","formatted_name":"greyson kutch","present":true},{"name":"Emily Leuschke","formatted_name":"emily leuschke","present":true},{"name":"Orie Bernhard","formatted_name":"orie bernhard","present":false}]);