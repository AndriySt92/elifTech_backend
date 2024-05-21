import mongoose from 'mongoose'
import EventModel from '../models/eventModel.js'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // const events = await EventModel.find()
    // if (true) {
    //   await EventModel.insertMany(
    //     [
    //       {
    //         "title": "sint consectetur",
    //         "organizer": "Codax",
    //         "description": "Laboris deserunt cillum fugiat qui aute occaecat reprehenderit est aliqua laborum officia sit. Et cupidatat laboris qui ad consectetur dolore occaecat qui nulla. Esse non aliqua veniam sit occaecat do laboris qui esse laborum elit. Aliqua esse id in proident velit do aliquip ex elit occaecat est eiusmod. Sint sit magna quis do eiusmod fugiat magna. Deserunt ad ex officia eiusmod reprehenderit ipsum aliquip cillum ipsum officia est esse cupidatat.\r\n",
    //         "event_date": "19-06-2024",
    //         "participants": [
    //           {
    //             "email": "dorthynash@codax.com",
    //             "fullName": "Valentine Huff",
    //             "birth_date": "01-04-2009",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "adipisicing cupidatat",
    //         "organizer": "Qaboos",
    //         "description": "Laborum minim nostrud anim do voluptate aliquip nisi cillum ex occaecat enim consequat. Irure ut non ut laboris. Irure ad Lorem pariatur Lorem enim nulla dolor culpa tempor. Id mollit cupidatat cupidatat exercitation ipsum commodo eiusmod aliqua ut ipsum incididunt aliqua.\r\n",
    //         "event_date": "01-02-2025",
    //         "participants": [
    //           {
    //             "email": "valentinehuff@qaboos.com",
    //             "fullName": "Atkins Ochoa",
    //             "birth_date": "16-10-2009",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "atkinsochoa@qaboos.com",
    //             "fullName": "Mendoza Fitzpatrick",
    //             "birth_date": "10-11-1974",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "eiusmod incididunt",
    //         "organizer": "Farmage",
    //         "description": "Labore labore id aliqua exercitation dolor consequat incididunt excepteur nisi aute proident fugiat. Aute voluptate aliquip labore Lorem fugiat. Occaecat consectetur non minim commodo nisi irure mollit voluptate eiusmod eu culpa elit. Anim mollit aliqua in commodo mollit culpa aliqua eiusmod. Lorem ipsum mollit reprehenderit dolore ut ullamco nostrud enim ad culpa.\r\n",
    //         "event_date": "07-10-2024",
    //         "participants": [
    //           {
    //             "email": "mendozafitzpatrick@farmage.com",
    //             "fullName": "Maureen Woodard",
    //             "birth_date": "07-01-1995",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "maureenwoodard@farmage.com",
    //             "fullName": "Rene Mcclure",
    //             "birth_date": "16-02-2001",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "renemcclure@farmage.com",
    //             "fullName": "Travis Blevins",
    //             "birth_date": "11-10-1995",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "enim Lorem",
    //         "organizer": "Minga",
    //         "description": "Laboris aliquip adipisicing nisi et occaecat sit duis mollit elit incididunt reprehenderit nostrud est et. Minim et aute exercitation eu est elit elit aute qui deserunt cillum. Sunt cillum eiusmod non dolore. Eu voluptate ipsum exercitation aliqua cillum dolor duis fugiat. Exercitation in velit irure adipisicing reprehenderit in culpa. Eiusmod incididunt officia reprehenderit fugiat eu magna pariatur tempor.\r\n",
    //         "event_date": "13-02-2025",
    //         "participants": [
    //           {
    //             "email": "travisblevins@minga.com",
    //             "fullName": "Vincent Chandler",
    //             "birth_date": "30-04-1979",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "vincentchandler@minga.com",
    //             "fullName": "Jennings Pennington",
    //             "birth_date": "27-11-2001",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "deserunt laborum",
    //         "organizer": "Mangelica",
    //         "description": "Consectetur voluptate mollit non aliquip. Consectetur magna ut commodo dolor. Aliquip laboris consequat sint reprehenderit cillum deserunt sunt ea aliqua consequat mollit. Amet non dolore ad cupidatat ullamco labore velit irure eu ipsum non laboris Lorem qui. Cupidatat do consequat consectetur anim cupidatat deserunt nulla sint. Do anim laborum laborum adipisicing consequat non. Proident officia veniam eu labore sint laborum dolor.\r\n",
    //         "event_date": "25-10-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "consectetur ullamco",
    //         "organizer": "Uplinx",
    //         "description": "In officia cupidatat proident minim. Sunt do ea officia occaecat officia velit duis amet dolor culpa qui ex nostrud tempor. Consectetur non culpa qui est deserunt quis minim labore. Dolore excepteur nulla exercitation nisi Lorem labore sint. Quis consequat esse mollit elit et adipisicing minim dolore eiusmod consectetur veniam.\r\n",
    //         "event_date": "24-01-2025",
    //         "participants": [
    //           {
    //             "email": "jenningspennington@uplinx.com",
    //             "fullName": "Little Pollard",
    //             "birth_date": "06-05-1979",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "littlepollard@uplinx.com",
    //             "fullName": "Louise Bartlett",
    //             "birth_date": "04-01-1972",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "louisebartlett@uplinx.com",
    //             "fullName": "Saundra Lambert",
    //             "birth_date": "15-02-1981",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "incididunt ullamco",
    //         "organizer": "Zyple",
    //         "description": "Voluptate do magna Lorem reprehenderit adipisicing aliqua non incididunt velit reprehenderit et. Proident Lorem nostrud voluptate ea pariatur adipisicing. Cupidatat proident minim cillum pariatur aliquip. Nisi voluptate incididunt sunt est nostrud id sunt sunt mollit magna tempor voluptate. Et magna consequat officia quis cillum. Dolor eiusmod minim nisi dolor eu. Aliqua quis aliquip nostrud magna deserunt mollit do ut.\r\n",
    //         "event_date": "04-03-2025",
    //         "participants": [
    //           {
    //             "email": "saundralambert@zyple.com",
    //             "fullName": "Lorraine Osborne",
    //             "birth_date": "04-05-1972",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "lorraineosborne@zyple.com",
    //             "fullName": "Roseann Jimenez",
    //             "birth_date": "02-05-1971",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "sit est",
    //         "organizer": "Voratak",
    //         "description": "Ut cillum amet velit culpa minim ullamco adipisicing est cupidatat eu commodo dolor ipsum amet. Amet non deserunt veniam est nostrud tempor magna qui consectetur adipisicing. Officia in cillum adipisicing reprehenderit anim nulla culpa ad qui sunt est. Enim fugiat in dolore qui tempor non dolore in veniam quis sunt officia eiusmod. Id tempor tempor excepteur pariatur anim commodo.\r\n",
    //         "event_date": "15-06-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "nulla proident",
    //         "organizer": "Helixo",
    //         "description": "Officia fugiat reprehenderit sunt irure amet ex minim voluptate enim sit deserunt veniam ipsum consequat. Qui duis minim excepteur aliquip est culpa exercitation veniam nulla deserunt ullamco reprehenderit. Do cupidatat ut veniam exercitation amet non consequat. Consequat aliqua fugiat eiusmod reprehenderit magna sint fugiat amet in qui amet amet do. Fugiat et duis do incididunt irure. Et proident ut ipsum laboris ad labore quis incididunt est sit aute mollit.\r\n",
    //         "event_date": "12-12-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "velit occaecat",
    //         "organizer": "Mobildata",
    //         "description": "Tempor ipsum amet incididunt magna adipisicing reprehenderit Lorem est labore sunt labore deserunt eu. Esse duis id aute sit excepteur irure esse do sit officia cupidatat deserunt anim. Qui consectetur exercitation consectetur aliqua officia occaecat Lorem. Excepteur amet ea magna nostrud aliquip eu id nisi non aute.\r\n",
    //         "event_date": "20-10-2024",
    //         "participants": [
    //           {
    //             "email": "roseannjimenez@mobildata.com",
    //             "fullName": "Marilyn Hampton",
    //             "birth_date": "16-01-1974",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "non dolor",
    //         "organizer": "Snips",
    //         "description": "Ad consequat ea laboris sit culpa sit qui laboris aliqua do sit. Non deserunt ipsum deserunt anim irure cupidatat in est incididunt ea pariatur ex. Pariatur amet do ex duis enim non magna ea incididunt sunt veniam anim. Est reprehenderit esse laborum magna voluptate anim ullamco labore anim. Sunt id enim ipsum ad magna do ad est non incididunt proident amet qui mollit. Ea laborum enim in consectetur.\r\n",
    //         "event_date": "13-08-2024",
    //         "participants": [
    //           {
    //             "email": "marilynhampton@snips.com",
    //             "fullName": "Leon Carrillo",
    //             "birth_date": "18-12-2010",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "sint tempor",
    //         "organizer": "Geekko",
    //         "description": "Nisi et fugiat ipsum commodo deserunt veniam. Et est aliquip do reprehenderit culpa. Proident labore officia cillum consequat id id in enim proident duis cillum nulla labore quis. Cupidatat mollit voluptate duis quis amet sit cupidatat velit voluptate consectetur anim exercitation veniam commodo.\r\n",
    //         "event_date": "31-07-2024",
    //         "participants": [
    //           {
    //             "email": "leoncarrillo@geekko.com",
    //             "fullName": "Hansen Robertson",
    //             "birth_date": "06-08-1985",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "hansenrobertson@geekko.com",
    //             "fullName": "Janell Carlson",
    //             "birth_date": "13-02-1992",
    //             "source": "Friends"
    //           },
    //           {
    //             "email": "janellcarlson@geekko.com",
    //             "fullName": "Dejesus Olsen",
    //             "birth_date": "27-08-1999",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "ullamco esse",
    //         "organizer": "Portalis",
    //         "description": "Officia quis ullamco quis aliqua occaecat. Aliqua et veniam proident et qui aliquip non sit laborum sint nostrud ea. Magna adipisicing anim cillum Lorem excepteur excepteur magna velit. Pariatur ullamco duis nulla commodo in est. Laborum cupidatat et eiusmod nostrud culpa do. Esse laborum Lorem occaecat ut Lorem et id nostrud Lorem. Sit laborum minim eiusmod et culpa quis consectetur ipsum qui sunt proident et.\r\n",
    //         "event_date": "16-07-2024",
    //         "participants": [
    //           {
    //             "email": "dejesusolsen@portalis.com",
    //             "fullName": "Pace Medina",
    //             "birth_date": "19-11-1978",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "pacemedina@portalis.com",
    //             "fullName": "Bonnie Tyson",
    //             "birth_date": "19-08-1993",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "bonnietyson@portalis.com",
    //             "fullName": "Marcy Chan",
    //             "birth_date": "12-04-1978",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "aliquip consectetur",
    //         "organizer": "Eplode",
    //         "description": "Id fugiat duis minim cillum sit cupidatat culpa commodo eiusmod id. Dolore id ipsum anim tempor fugiat pariatur voluptate et. Ut Lorem Lorem velit consectetur dolor officia. Aute ut aliquip occaecat duis.\r\n",
    //         "event_date": "09-06-2024",
    //         "participants": [
    //           {
    //             "email": "marcychan@eplode.com",
    //             "fullName": "Helene Martin",
    //             "birth_date": "08-02-1972",
    //             "source": "Friends"
    //           },
    //           {
    //             "email": "helenemartin@eplode.com",
    //             "fullName": "Leola Baird",
    //             "birth_date": "10-08-1992",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "leolabaird@eplode.com",
    //             "fullName": "Karen Burton",
    //             "birth_date": "10-05-1987",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "labore quis",
    //         "organizer": "Bolax",
    //         "description": "Proident aliqua proident officia proident anim exercitation commodo consequat duis. Ex cillum eu pariatur ex velit cillum nostrud voluptate velit nisi enim exercitation mollit. Anim cillum amet tempor ex ad ut aute exercitation occaecat in. Proident consectetur aliquip veniam pariatur cillum cupidatat. Minim commodo exercitation labore aute.\r\n",
    //         "event_date": "14-01-2025",
    //         "participants": [
    //           {
    //             "email": "karenburton@bolax.com",
    //             "fullName": "Frances Herrera",
    //             "birth_date": "10-02-1994",
    //             "source": "Friends"
    //           },
    //           {
    //             "email": "francesherrera@bolax.com",
    //             "fullName": "Esmeralda Battle",
    //             "birth_date": "24-12-2014",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "esmeraldabattle@bolax.com",
    //             "fullName": "Dorothea Oneill",
    //             "birth_date": "13-05-2011",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "cupidatat enim",
    //         "organizer": "Naxdis",
    //         "description": "Tempor nulla deserunt dolor qui consectetur non consequat magna qui anim. Ipsum laboris sunt adipisicing do non ut sint officia et eu eiusmod minim sint et. Fugiat aliqua ut ipsum et. Nulla est magna cillum mollit velit sit cupidatat qui. Sit aliqua nulla laborum consectetur excepteur Lorem esse eu in laboris non. Aliqua qui sunt ullamco magna exercitation veniam labore et quis do velit duis occaecat.\r\n",
    //         "event_date": "01-11-2024",
    //         "participants": [
    //           {
    //             "email": "dorotheaoneill@naxdis.com",
    //             "fullName": "Long Weber",
    //             "birth_date": "24-05-1996",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "laborum nisi",
    //         "organizer": "Vicon",
    //         "description": "Deserunt dolore ut fugiat tempor ex. Ipsum officia reprehenderit est exercitation. Cupidatat sint laboris sit aute aute exercitation sunt cillum velit deserunt deserunt et nisi. Non occaecat nulla cupidatat sint non ea dolor labore consectetur quis enim est. Dolor irure cillum ex sint. Incididunt cillum cupidatat sunt dolore nostrud nisi id excepteur eu eiusmod nisi ad commodo.\r\n",
    //         "event_date": "18-06-2024",
    //         "participants": [
    //           {
    //             "email": "longweber@vicon.com",
    //             "fullName": "Yolanda Hodges",
    //             "birth_date": "19-07-1974",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "yolandahodges@vicon.com",
    //             "fullName": "Clark Adams",
    //             "birth_date": "12-01-1997",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "id sint",
    //         "organizer": "Namebox",
    //         "description": "Sunt consectetur est tempor sint deserunt minim aute do enim cupidatat non non. Deserunt incididunt commodo reprehenderit deserunt ex labore ad culpa. Veniam dolore voluptate voluptate incididunt incididunt officia culpa. Cillum exercitation in non officia voluptate incididunt voluptate minim incididunt pariatur exercitation ad. Officia amet exercitation dolor cupidatat laboris commodo ea cillum sunt consectetur enim magna ullamco. Aute nostrud excepteur elit aliqua et sint elit velit consequat. Proident deserunt Lorem laboris voluptate dolor commodo ex Lorem dolor.\r\n",
    //         "event_date": "08-01-2025",
    //         "participants": [
    //           {
    //             "email": "clarkadams@namebox.com",
    //             "fullName": "Shepard Carson",
    //             "birth_date": "19-11-2000",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "non ex",
    //         "organizer": "Remold",
    //         "description": "Pariatur eu ex in elit cillum anim irure dolore eu Lorem magna laborum eu officia. Qui tempor enim enim do veniam veniam mollit labore deserunt nisi commodo laborum laborum dolore. Nulla eu deserunt deserunt consectetur elit Lorem occaecat. Do quis labore id mollit minim incididunt magna incididunt. Culpa dolor tempor ut voluptate mollit.\r\n",
    //         "event_date": "13-02-2025",
    //         "participants": []
    //       },
    //       {
    //         "title": "amet enim",
    //         "organizer": "Ecraze",
    //         "description": "Consectetur qui officia tempor consectetur aliquip ut ipsum. Consequat deserunt fugiat Lorem pariatur. Tempor eu deserunt voluptate consectetur elit.\r\n",
    //         "event_date": "31-08-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "ad officia",
    //         "organizer": "Vixo",
    //         "description": "Duis quis ullamco est veniam. Magna mollit veniam incididunt quis aliqua sunt. Voluptate elit pariatur dolor voluptate sunt. Velit cupidatat eu labore cupidatat aliquip pariatur ullamco dolor ipsum nulla sunt aute labore. Minim culpa cupidatat esse consequat.\r\n",
    //         "event_date": "24-11-2024",
    //         "participants": [
    //           {
    //             "email": "shepardcarson@vixo.com",
    //             "fullName": "Liza Clayton",
    //             "birth_date": "25-11-1994",
    //             "source": "Friends"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "duis voluptate",
    //         "organizer": "Bleendot",
    //         "description": "Proident sunt velit Lorem proident voluptate do culpa ea. Elit velit excepteur eiusmod exercitation consectetur. Incididunt in et qui ad magna ipsum laborum irure nulla qui sunt pariatur. Laborum laborum ad officia proident.\r\n",
    //         "event_date": "21-06-2024",
    //         "participants": [
    //           {
    //             "email": "lizaclayton@bleendot.com",
    //             "fullName": "Leila Wilkins",
    //             "birth_date": "22-05-1973",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "occaecat officia",
    //         "organizer": "Frenex",
    //         "description": "Consectetur cupidatat et commodo deserunt veniam. Culpa labore veniam elit cupidatat ex est eu Lorem in duis ipsum veniam labore ipsum. Magna sunt mollit incididunt magna officia excepteur minim. Ut dolor non tempor consequat anim reprehenderit nisi.\r\n",
    //         "event_date": "02-11-2024",
    //         "participants": [
    //           {
    //             "email": "leilawilkins@frenex.com",
    //             "fullName": "Jaime Mann",
    //             "birth_date": "18-07-1975",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "jaimemann@frenex.com",
    //             "fullName": "Dana Acosta",
    //             "birth_date": "08-05-2004",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "danaacosta@frenex.com",
    //             "fullName": "Burke Trevino",
    //             "birth_date": "11-01-2008",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "cillum et",
    //         "organizer": "Comvex",
    //         "description": "Officia culpa consequat commodo fugiat. Proident ad officia pariatur duis. Nostrud commodo laborum enim aliqua cupidatat excepteur nisi minim elit aliqua officia officia. Ad aliquip amet reprehenderit irure non minim est laboris culpa nulla duis ea proident. Proident laborum excepteur nisi ea sunt. Labore ullamco velit in consequat excepteur duis incididunt sunt ea. Esse enim nostrud sint sint enim sint aute eiusmod ut culpa sint deserunt dolore.\r\n",
    //         "event_date": "12-05-2025",
    //         "participants": [
    //           {
    //             "email": "burketrevino@comvex.com",
    //             "fullName": "Aileen Kemp",
    //             "birth_date": "27-08-1973",
    //             "source": "Found myself"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "enim irure",
    //         "organizer": "Limage",
    //         "description": "Duis laboris incididunt cillum est esse adipisicing magna id consequat. Pariatur veniam in deserunt aute incididunt nulla dolor reprehenderit id fugiat. Laborum cillum magna sunt ut officia eiusmod mollit aliquip cupidatat voluptate irure. Cupidatat exercitation culpa velit minim Lorem officia consequat exercitation dolor anim excepteur enim voluptate.\r\n",
    //         "event_date": "28-07-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "sit nisi",
    //         "organizer": "Hatology",
    //         "description": "Dolore consectetur aute occaecat laboris enim pariatur ad mollit proident officia esse occaecat. Reprehenderit labore excepteur veniam pariatur amet aliqua sunt aliqua labore do dolore occaecat qui. Excepteur eiusmod id amet sunt tempor.\r\n",
    //         "event_date": "30-06-2024",
    //         "participants": [
    //           {
    //             "email": "aileenkemp@hatology.com",
    //             "fullName": "Augusta Henderson",
    //             "birth_date": "26-04-1991",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "augustahenderson@hatology.com",
    //             "fullName": "Adkins Christian",
    //             "birth_date": "28-01-1970",
    //             "source": "Friends"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "ipsum commodo",
    //         "organizer": "Powernet",
    //         "description": "Ea ullamco ipsum officia non labore laboris deserunt proident occaecat dolore ea duis eu. Pariatur irure consectetur consectetur anim velit velit occaecat commodo officia. Culpa Lorem proident et mollit tempor enim enim eiusmod do consectetur non cupidatat. Quis non est reprehenderit velit nulla. Ad irure adipisicing tempor pariatur occaecat pariatur aliqua ad cupidatat velit officia mollit proident. Anim nulla dolore magna laboris. Nulla cupidatat deserunt occaecat anim aliqua officia qui ea.\r\n",
    //         "event_date": "01-09-2024",
    //         "participants": [
    //           {
    //             "email": "adkinschristian@powernet.com",
    //             "fullName": "Gould Dorsey",
    //             "birth_date": "16-05-1984",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "goulddorsey@powernet.com",
    //             "fullName": "Maldonado Ramos",
    //             "birth_date": "29-03-1991",
    //             "source": "Friends"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "aliqua excepteur",
    //         "organizer": "Zilla",
    //         "description": "Dolor culpa occaecat sit nulla ipsum commodo ea exercitation minim mollit adipisicing sint qui ea. Anim laborum nulla magna non consequat proident. Reprehenderit id eu excepteur occaecat deserunt nulla excepteur non. Minim reprehenderit incididunt esse ea ea excepteur anim labore cupidatat. Ex consequat eiusmod ad quis excepteur commodo fugiat excepteur. Aliqua culpa ullamco adipisicing anim id ullamco.\r\n",
    //         "event_date": "17-11-2024",
    //         "participants": []
    //       },
    //       {
    //         "title": "do ullamco",
    //         "organizer": "Skybold",
    //         "description": "Non pariatur consequat consequat non mollit veniam reprehenderit tempor minim amet pariatur fugiat duis. Ea sit dolor pariatur id veniam laboris est sit elit. Proident ipsum ea sit reprehenderit officia ipsum minim nisi in nostrud amet culpa mollit.\r\n",
    //         "event_date": "24-02-2025",
    //         "participants": [
    //           {
    //             "email": "maldonadoramos@skybold.com",
    //             "fullName": "Charlene Blair",
    //             "birth_date": "21-08-1971",
    //             "source": "Social media"
    //           }
    //         ]
    //       },
    //       {
    //         "title": "commodo pariatur",
    //         "organizer": "Gleamink",
    //         "description": "Aliqua ex irure pariatur aute enim sint. Dolor occaecat in sit cupidatat ullamco velit excepteur magna ad incididunt nisi. Occaecat et mollit est quis duis ea. Deserunt quis do reprehenderit labore exercitation mollit nulla exercitation labore. Consequat proident culpa aliqua ut adipisicing qui reprehenderit et id aute culpa aute.\r\n",
    //         "event_date": "09-09-2024",
    //         "participants": [
    //           {
    //             "email": "charleneblair@gleamink.com",
    //             "fullName": "Gilliam Murphy",
    //             "birth_date": "11-12-1999",
    //             "source": "Found myself"
    //           },
    //           {
    //             "email": "gilliammurphy@gleamink.com",
    //             "fullName": "Buchanan Wiley",
    //             "birth_date": "07-04-1976",
    //             "source": "Social media"
    //           },
    //           {
    //             "email": "buchananwiley@gleamink.com",
    //             "fullName": "Casey Allen",
    //             "birth_date": "17-05-2007",
    //             "source": "Friends"
    //           }
    //         ]
    //       }
    //     ],
    //     { w: 'majority', wtimeout: 100 },
    //   )
    // }

    console.log('MongoDB connected')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
