window.EXAMS = [
  {
    "id": "2022-tavasz",
    "year": 2022,
    "season": "Tavaszi",
    "date": "2022-05-17",
    "title": "2022 tavaszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2022-tavasz-1",
        "number": 1,
        "question": "Egy fejlesztő dev40 nevű új ágat hoz létre az aktuális branch alapján, kódot módosít, commitol, majd feltölti a változtatásokat a központi repositoryba. Melyik parancssorozat megfelelő?",
        "points": 2,
        "type": "choice",
        "options": [
          "git create branch dev40\ngit switch dev40\ngit add .\ngit commit\ngit pull",
          "git checkout dev40\ngit switch dev40\ngit add .\ngit commit --title \"dev40 phase1\"\ngit upload",
          "git checkout -b dev40\ngit add --all\ngit commit -m \"dev40 phase1\"\ngit push --set-upstream origin dev40",
          "git create -b dev40\ngit branch checkout dev40\ngit add --all\ngit commit -m \"dev40 phase1\"\ngit push -s -u dev40",
          "git checkout -b --local dev40\ngit add --all\ngit commit -m \"dev40 phase1\"\ngit checkout -b --remote dev40\ngit push"
        ],
        "correct": [
          2
        ]
      },
      {
        "id": "2022-tavasz-2",
        "number": 2,
        "question": "Melyek a helyes állítások az e-mailben történő kommunikációról? Két választ jelöljön!",
        "points": 2,
        "type": "choice",
        "options": [
          "Hivatalos e-mailek fejlécében kötelező az ügyfél postai levelezési címét feltüntetni.",
          "Ha egymást nem ismerő címzetteknek küldünk csoportos e-mailt, a címeket a Bcc (titkos másolat) mezőbe helyezzük.",
          "Ügyfeleknek küldött hírlevélben leiratkozási hivatkozást kell elhelyezni.",
          "Nagy fájl esetén kötelező a LA (Large Attachment) mezőt választani.",
          "Irodán kívül biztonsági okból privát levelezőből kell küldeni a céges leveleket."
        ],
        "correct": [
          1,
          2
        ]
      },
      {
        "id": "2022-tavasz-3",
        "number": 3,
        "question": "Egy hálózati eszköz frissítése utáni hibára keresve túl sok irreleváns Google-találatot kap. A keresőkifejezés változtatása nélkül hogyan szűkítheti az eredményeket? Két választ jelöljön!",
        "points": 2,
        "type": "choice",
        "options": [
          "Az Eszközök beállításainál a hibaüzenet szó szerinti keresését használja.",
          "Csak magyar nyelvű oldalakat kér.",
          "Csak videós találatokat kér.",
          "Külön hálózatinformatika témakört választ.",
          "Az Eszközöknél az elmúlt héten frissített oldalakra szűr."
        ],
        "correct": [
          0,
          4
        ],
        "note": "A Google keresőfelülete az eredeti 2022-es vizsgához képest változhatott; az eredeti javítókulcs szerinti gyakorlat."
      },
      {
        "id": "2022-tavasz-4",
        "number": 4,
        "question": "Az adatbázisban a Termekek(ID, Nev, NettoAr, AFAKulcs, KategoriaID) és Kategoriak(ID, Nev) táblák vannak. Melyik SQL-lekérdezés listázza az „Ital” kategóriába tartozó termékek nevét és nettó árát?",
        "points": 2,
        "type": "choice",
        "options": [
          "SELECT Termekek.Nev, Termekek.NettoAr\nFROM Kategoriak, Termekek\nWHERE Kategoriak.ID = Termekek.KategoriaID AND Kategoriak.Nev=\"Ital\";",
          "SELECT Nev, NettoAr FROM Kategoriak, Termekek WHERE Kategoriak.Nev=\"Ital\";",
          "SELECT Termek.Nev, NettoAr FROM Termekek WHERE Kategoria.ID=Termekek.KategoriaID AND Kategoriak.Nev=\"Ital\";",
          "SELECT Termek.Nev, NettoAr FROM Termekek INNER JOIN Kategoriak ON Termekek.ID=Kategoriak.ID WHERE Kategoriak.Nev=\"Ital\";"
        ],
        "correct": [
          0
        ]
      },
      {
        "id": "2022-tavasz-5",
        "number": 5,
        "question": "Melyik állítás NEM igaz a REST API technológiára?",
        "points": 2,
        "type": "choice",
        "options": [
          "A REST API technológia a REST protokollt használó hálózati hibakeresési eljárás.",
          "Kliens és szerver közötti kommunikáció megvalósítására használható.",
          "Egy erőforrás kérése történhet GET metódussal.",
          "Sikeres végrehajtásról HTTP 200-as kóddal is tájékoztatható a kliens."
        ],
        "correct": [
          0
        ]
      },
      {
        "id": "2022-tavasz-6",
        "number": 6,
        "question": "Egy céges mobiltelefon tárterülete betelt, ezért új alkalmazás nem telepíthető. Melyik két megoldás segít?",
        "points": 2,
        "type": "choice",
        "options": [
          "A RAM és ROM memóriák egyszerű cseréje nagyobb méretűre.",
          "Nem használt alkalmazások eltávolítása.",
          "Futó alkalmazások bezárása, a RAM felszabadítása.",
          "Fényképek és videók egy részének törlése."
        ],
        "correct": [
          1,
          3
        ]
      },
      {
        "id": "2022-tavasz-7",
        "number": 7,
        "question": "Melyik biztonsági mentésről szól a leírás? Teljes mentés után csak az előző mentés óta változott adatokat mentik; helyreállításkor a teljes és az azt követő valamennyi változásmentést fel kell dolgozni.",
        "points": 2,
        "type": "choice",
        "options": [
          "Strukturálatlan",
          "Rendszerképképzés",
          "Inkrementális",
          "Dekrementális",
          "Integráns",
          "Differenciális"
        ],
        "correct": [
          2
        ]
      },
      {
        "id": "2022-tavasz-8",
        "number": 8,
        "question": "Írja fel a lehető legtömörebb formátumban a következő IPv6-címet: 2001:0db8:0000:f000:1ed0:0000:0000:00af",
        "points": 2,
        "type": "textmulti",
        "answers": [
          "2001:db8:0:f000:1ed0::af"
        ]
      },
      {
        "id": "2022-tavasz-9",
        "number": 9,
        "question": "Cisco 2960 switch Telnet-konfiguráció: management VLAN 1 címe 192.168.1.10/24, a routeren keresztül csatlakozó PC címe 192.168.2.100/24, a line vty 0 15 alatt „password cisco1” beállítás van. A kapcsolat nem működik. Melyik két ok lehetséges?",
        "points": 2,
        "type": "choice",
        "options": [
          "Hiányzik a login parancs a VTY-vonal konfigurációjából.",
          "A felügyeleti interfész eltérő IP-alhálózatban van, mint a PC.",
          "Hiányzik az alapértelmezett átjáró beállítása a switchen.",
          "Túl rövid a Telnet-jelszó."
        ],
        "correct": [
          0,
          2
        ],
        "note": "A 2022-es hivatalos javítókulcs szerint a login és az alapértelmezett átjáró beállítása is hiányzik. A switch és a PC eltérő IP-hálózatban van, de közöttük router látható."
      },
      {
        "id": "2022-tavasz-10",
        "number": 10,
        "question": "Tegye sorrendbe az STP konvergálásának lépéseit!",
        "points": 2,
        "type": "order",
        "items": [
          "Szegmensenként egy kijelölt switch kiválasztása",
          "Gyökérponti híd kiválasztása",
          "A nem kijelölt, illetve gyökérportok lezárása",
          "Gyökérportok kiválasztása a nem gyökérponti switcheken"
        ],
        "order": [
          1,
          3,
          0,
          2
        ]
      },
      {
        "id": "2022-tavasz-11",
        "number": 11,
        "question": "Cisco switchen korábban létrehozták a 10-es és 11-es VLAN-t. Az erase startup-config és újraindítás után létrehozzák a 100-as és 200-as VLAN-t. Mit mutat a show vlan brief?",
        "points": 2,
        "type": "choice",
        "options": [
          "Csak a két új VLAN-t.",
          "Mind a négy létrehozott VLAN-t és az alapértelmezett VLAN-okat.",
          "Csak az alapértelmezett VLAN-okat.",
          "Csak a 100-as és 200-as VLAN-t, valamint az alapértelmezetteket."
        ],
        "correct": [
          1
        ]
      },
      {
        "id": "2022-tavasz-12",
        "number": 12,
        "question": "Melyik fogalom NEM társítható a HSRP protokollhoz?",
        "points": 2,
        "type": "choice",
        "options": [
          "Virtuális MAC-cím",
          "Virtuális IP-cím",
          "Hídprioritás",
          "Hello időzítő"
        ],
        "correct": [
          2
        ]
      },
      {
        "id": "2022-tavasz-13",
        "number": 13,
        "question": "Melyik WLAN-technológia alkalmazható a sávszélesség növelésére?",
        "points": 2,
        "type": "choice",
        "options": [
          "ISM",
          "MIMO",
          "EAP",
          "WDS"
        ],
        "correct": [
          1
        ]
      },
      {
        "id": "2022-tavasz-14",
        "number": 14,
        "question": "Mi a hasonlóság a Telnet és az SSH távoli elérésre történő konfigurálásában Cisco routeren?",
        "points": 2,
        "type": "choice",
        "options": [
          "Mindkettőnél kötelező a login parancs a vonali konfigurációban.",
          "Mindkettőhöz kötelező a teljes domainnév.",
          "Mindkettőhöz virtuális terminálon kell engedélyezni a bejövő kapcsolatot.",
          "Mindkettőhöz titkosító kulcsot kell létrehozni."
        ],
        "correct": [
          2
        ]
      },
      {
        "id": "2022-tavasz-15",
        "number": 15,
        "question": "Privát IP-című webszervernek csak a HTTPS és SSH szolgáltatását szeretnénk az internetről elérhetővé tenni. Melyik technológia megfelelő?",
        "points": 2,
        "type": "choice",
        "options": [
          "Statikus NAT",
          "Porttovábbítás",
          "PAT",
          "Dinamikus NAT"
        ],
        "correct": [
          1
        ]
      },
      {
        "id": "2022-tavasz-16",
        "number": 16,
        "question": "Melyik hitelesítési eljárás WAN-kapcsolatoknál jellemző, három lépésből áll, és nemcsak a kapcsolat felépítésekor hitelesít?",
        "points": 2,
        "type": "choice",
        "options": [
          "PAP",
          "EAP",
          "CHAP",
          "WEP"
        ],
        "correct": [
          2
        ]
      },
      {
        "id": "2022-tavasz-17",
        "number": 17,
        "question": "Melyek a kettes típusú, gazda operációs rendszerben futó hypervisorok? Két választ jelöljön!",
        "points": 2,
        "type": "choice",
        "options": [
          "VMware ESXi",
          "VMware Workstation",
          "Oracle VM",
          "Oracle VM VirtualBox",
          "Microsoft Hyper-V",
          "KVM"
        ],
        "correct": [
          1,
          3
        ]
      },
      {
        "id": "2022-tavasz-18",
        "number": 18,
        "question": "Windows Server megosztásnál a Marketing csoportnak az NTFS-jogosultsága csak Read / List / Read & execute, míg a megosztásban az Everyone Change jogú. A csoport tagja nem tud fájlt létrehozni. Mi segít?",
        "points": 2,
        "type": "choice",
        "options": [
          "Gipsz Jakabnak csak a Write attributes és Write extended attributes jogosultságok beállítása.",
          "A Security lapon a Marketing csoport Modify NTFS-jogosultságának engedélyezése.",
          "A megosztásban a Marketingnek a Change jog megadása (NTFS-változtatás nélkül).",
          "Everyone jogainak törlése és Marketing Read megosztási engedély létrehozása."
        ],
        "correct": [
          1
        ],
        "note": "Az eredeti PDF 8. oldalának jogosultságbeállítási ábrájából átírva."
      },
      {
        "id": "2022-tavasz-19",
        "number": 19,
        "question": "Melyik SNMP-üzenetet küldi a felügyelt eszköz, ha az egyik interfésze hiba miatt leáll?",
        "points": 2,
        "type": "choice",
        "options": [
          "Critical",
          "Trap",
          "Notification",
          "Warning"
        ],
        "correct": [
          1
        ]
      },
      {
        "id": "2022-tavasz-20",
        "number": 20,
        "question": "A „collapsed core” hálózati modellben mely rétegeket vonjuk össze?",
        "points": 2,
        "type": "choice",
        "options": [
          "Központi és hozzáférési",
          "Központi és hálózati",
          "Központi és elosztási",
          "Központi és hálózatelérési"
        ],
        "correct": [
          2
        ]
      }
    ],
    "source": "Szkennelt hivatalos javító-értékelő PDF; az eredeti kérdések tartalmából digitalizálva."
  },
  {
    "id": "2023-tavasz",
    "year": 2023,
    "season": "Tavaszi",
    "date": "2023-05-24",
    "title": "2023 tavaszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2023-tavasz-1",
        "number": 1,
        "question": "Jelölje meg az alábbiak közül melyik állítás NEM HELYES!",
        "options": [
          "A git checkout -b fix/homepage-styling parancs létrehoz egy új branch-et fix/homepage néven az aktuális branch alapján, és egyúttal át is vált az új branch-re.",
          "Ha ad: \\dev\\react-course\\react-starting mappában egy Git repository van, és ebben a mappában kiadjuk a git clone . . . \\react-starting-2 parancsot, akkor a d: \\dev\\react-course\\react-starting-2 mappában létrejön egy másolata a meglévő repositorynak.",
          "A helyi módosításokat a git push paranccsal tölthetjük fel a központi repoba.",
          "A Git verziókezelő használatához mindenképpen szükség van a GitHub-ra vagy egy másik hasonló internetes szolgáltatásra."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "note": "Az eredeti kérdés hibás: a GitHub-kötelezettségről szóló állítás is hamis. Mindkét megoldást elfogadjuk.",
        "acceptedSingles": [
          0,
          3
        ]
      },
      {
        "id": "2023-tavasz-2",
        "number": 2,
        "question": "A felsorolt állítások egy vállalaton belüli e-mail kommunikációra vonatkoznak.",
        "options": [
          "Az üzemeltető csapaton belüli kommunikációban az összes üzenetet a csapatvezetőnek kell küldeni, aki eldönti, hogy kinek továbbítja az üzenetet.",
          "Az egyes munkacsoportok számára a kommunikációt megkönnyítő csoportos címeket vagy levelezőlistákat célszerű létrehozni, amire küldött üzeneteket csak az adott csoport tagjai kapnak meg.",
          "A vállalati kommunikációban minden küldött e-mail üzenet végére érdemes elhelyezni a figyelmeztetést, hogy az e-mailt ne nyomtassa ki a fogadó fél.",
          "A titkárság által az összes munkatársnak szóló email üzenetben a munkatársak e-mali címét a CC (Carbon Copy) mezőben kell elhelyezni."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-3",
        "number": 3,
        "question": "A Google keresőjében az alábbi állítások közül melyik felel meg a jelenlegi pontos keresési szabályoknak?",
        "options": [
          "Ha a keresőkifejezésben szerepel a prot:https, akkor csak a https protokollt használó, tanúsítvánnyal rendelkező webhelyek találatai jelennek meg a találati listában.",
          "Ha egy keresőkifejezésben szerepel a site: devprofessional. io, akkor csak olyan találatok jelennek meg, amelyen hiperhivatkozás található a devprofessional.io oldalra.",
          "A plusz (+) operátor segítségével olyan túlzottan gyakori szót (pl. ,,vagy\") is bevonhatunk a keresésbe, amit normál módon a kereső figyelmen kívül hagyna.",
          "Ha azt szeretnénk, hogy a találati listában csak olyan oldalak jelenjenek meg, amiben pontosan szerepel egy kifejezés, akkor ezt a kifejezést idézőjelek között kell megadni a keresésben."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2,
        "note": "A forrás két helyes választ jelöl, de a Google + operátora ma már nem támogatott. Pontozás: idézőjeles pontos keresés."
      },
      {
        "id": "2023-tavasz-4",
        "number": 4,
        "question": "A mellékelt állítások a mesterséges intelligenciáról (Ml) szólnak. Válassza ki az igaz állítást!",
        "options": [
          "A mesterséges intelligencia (Ml) a gépek emberhez hasonló képességeit jelenti, mint például az érvelés, a tanulás, a tervezés és a kreativitás.",
          "A virtuális asszisztensek egyelőre nem használják a mesterséges intelligenciát (Ml), mert ha használnák, akkor a válaszaik kiszámíthatatlanok, nagyon sok esetben hibásak lennének.",
          "Az orvostudomány talán az egyetlen terület, ahol a mesterséges Intelligenciának nincs létjogosultsága, mert a betegségek felismerésében, diagnosztizálásában a gépek nem tudnak segíteni.",
          "A mesterséges intelligencia (Ml) informatikai eszközökkel utánozza le az emberi agyban lejátszódó kémiai folyamatokat, ezáltal a gondolkozást, az emberi intelligenciát."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-5",
        "number": 5,
        "question": "Az ábrán egy adatbázis táblái és azok kapcsolatai láthatóak.\nA felsorolt SQL utasítások közül melyik határozza meg azokat a kategóriákat, amelyekben van olyan áru, amely drágább, mint 5000 Ft? Minden kategória csak egyszer szerepelhet az eredményben!\n(Jelölje meg a helyes választ)",
        "options": [
          "SELECT DISTINCT kategoriaNev\nFROM aru, kategoria\nWHERE (kategoriaID = kategoria.ID) AND\n(kategoria.ID in (SELECT kategoriaID\nFROM aru\nWHERE ar>5000));",
          "SELECT DISTINCT kategoria.Nev\nFROM kategoria\nWHERE kategoriaID = kategoria.ID AND ar>5000;",
          "SELECT kategoriaNev\nFROM aru, kategoria\nWHERE kategoriaID = kategoria.ID AND ar>5000;",
          "SELECT DISTINCT kategoriaNev\nFROM aru, kategoria\nWHERE ar>5000;"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "image": "assets/2023-adatbazis.png",
        "note": "Az SQL-ben az OCR/karakterfelismerési elírásokat javítottuk (0/O, ID). A feladat ábrája az eredeti dokumentumból származik."
      },
      {
        "id": "2023-tavasz-6",
        "number": 6,
        "question": "A felsorolt állítások a Windows Update szolgáltatással kapcsolatosak. (Válassza ki az igaz állítást!)",
        "options": [
          "Vállalati környezetben szabályozható, hogy mely frissítések kerüljenek fel a munkaállomásokra, és melyek nem.",
          "Vállalati környezetben a nagyobb üzembiztonság érdekében a Windows frissítések a megjelenés napján, vagy az ahhoz legközelebbi bekapcsoláskor automatikusan települnek.",
          "A Windows Update a Windows for Students változatban nem konfigurálható, mindig automatikusan elvégzi a frissítéseket.",
          "A Windows Update biztonsági okok miatt csak azokon a gépeken futtatható, ahol az összes partíció NTFS."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-7",
        "number": 7,
        "question": "Az alkalmazásfejlesztő csapat új webalkalmazás-verziót készített. Melyik kiadási módszer felel meg a modern alkalmazásüzemeltetés elvárásainak?",
        "options": [
          "A fejlesztőcsapat a GitHub-ra commitolja a végső változatot. A GitHub automatikusan létrehozza az üzemeltetési konténert és új URL-en elérhetővé teszi.",
          "Az üzemeltető csapat új konténert hoz létre, a kódot beimportálja, majd a konténert feltölti a webszerverre.",
          "Az alkalmazásüzemeltető adathordozón átveszi a szoftvert és kézzel másolja fel a kiszolgálóra.",
          "A fejlesztő csapat frissíti a központi Git repositoryt, amely a felügyelt CI/CD rendszerben automatikus ellenőrzést, buildet és webkiszolgáló-frissítést indít."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2,
        "note": "Az eredeti, két bekezdésre tördelt válasz szövegét összevontuk, a jelentés megőrzésével."
      },
      {
        "id": "2023-tavasz-8",
        "number": 8,
        "question": "Mi annak hálózatnak a szórási címe, amin a 192.168.100.155/28 IP-cím található?",
        "options": [
          "192.168.100.255",
          "192.168.100.156",
          "192.168.100.191",
          "192.168.100.159"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-9",
        "number": 9,
        "question": "Gateway of last resort is not sec\n10.0.0.0/24 is subnetted, 2 subnecs\nD 10.0.0.0 [90/2172416] via 172.17.1.1, 00:00:01, Serial0/0/0\nD 10.1.0.0 [90/2172416] via 172.17.1.1, 00:00:01, Serial0/0/0\n172.16.0.0/29 is subnetted, 1 subnets\nC 172.16.0.0 is directly connected, FastEthernet0/0\n172.17.0.0/30 is subnetted, 2 subnets\nC 172.17.1.0 is directly connecced, serial0/0/0\nC 172.17.1.4 is directly connecced, Serial0/0/1\n192.0.0.0/30 is subnetced, 1 subnecs\nD 192.0.0.0 [90/2172416] via 172.17.1.6, 00:00:01, Serial0/0/1\n211.1.1.0/30 is subnetted, subnets\n211.1.1.0 [90/2172416] via 172.17.1.6, 00:00:01, serial0/0/1\nAdott az itt látható irányítótábla.\nMelyik interfészen küldi ki a router a 172.17.1.2 célcímre tartó csomagot?\n(Jelölje meg a helyes választ!)",
        "options": [
          "Serial0/0/1",
          "Fast Ethernet0/0",
          "Nem tudja kézbesíteni, mivel nincs alapértelmezett útvonala.",
          "Serial0/0/0"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-10",
        "number": 10,
        "question": "Egy PVST + protokollt futtató switch egyik portja 3 másodperccel ezelőtt váltott tanuló állapotba. Mennyi idő múlva várható, hogy felhasználói forgalmat tud majd továbbítani?",
        "options": [
          "12mp",
          "Már most is tud továbbítani.",
          "15mp",
          "27mp"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-11",
        "number": 11,
        "question": "Melyik állítás igaz a normál VLAN-okra?",
        "options": [
          "A nevüknek és sorszámuknak minden swítch-en egyezni kell.",
          "Minden esetben megjelennek az adataik a futó konfigurációban is.",
          "Konfiguráláskor mindenképpen el kell neveznünk őket.",
          "Öt közülük már eleve definiálva van egy Cisco switch-en."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-12",
        "number": 12,
        "question": "Egy HSRP router kiesett az aktív szerepkörből egy áramszünet miatt, ami 2 percig tartott. Visszakapcsolás után sem lesz belőle újra aktív, csak tartalék. Mi lehet ennek a legfőbb oka?",
        "options": [
          "Ha 40 másodpercnél tovább nem küld hello-kat. a tartalék router véglegesen aktíwá válik.",
          "Kisebb az IP-címe, mint a másik routernek.",
          "Túl kicsi a prioritása, legalább 90.nek kell lennie.",
          "Hiányzik róla a 'preempt' beállítás, nem tudja visszavenni az aktív szerepkört."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-13",
        "number": 13,
        "question": "Melyik közeghozzáférés-vezérlési módszer jellemző a vezeték nélküli LAN-okra?",
        "options": [
          "CSMA/CD",
          "Determinisztikus",
          "CSMA/CA",
          "Versengéses"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-14",
        "number": 14,
        "question": "Egy rendszergazda észreveszi, hogy néhány munkaállomás más IP-címzési adatokat kapott induláskor, mint a többi. Mire gyanakodhat, és hogyan védekezzen ellene?",
        "options": [
          "DoS támadás történt (portbiztonság).",
          "Cím-kiéheztetéses támadás történt(DHCP starvation).",
          "Kalóz DHCP-szerver van a hálózaton (DHCP snooping).",
          "IP cím hamisítás történt (ARP inspection)."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-15",
        "number": 15,
        "question": "Egy EIGRP-t futtató routeren kiadjuk a show ip protocols parancsot, és többek között ezt látjuk: EIGRP metric weight K1=1, K2=0, K3=0, K4=0, KS=0 Mi állapítható meg a kimenetből?",
        "options": [
          "A sávszélességet nem vesszük figyelembe a költségszámításnál.",
          "Az alapértelmezett K tényezőkkel működik a router.",
          "A késleltetést nem vesszük figyelembe a költségszámításnál.",
          "Sem a sávszélességet, sem a késleltetést nem vesszük figyelembe a költségszámításnál."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-16",
        "number": 16,
        "question": "A felsoroltak közül melyik szolgáltatást NEM tudja nyújtani a PPP?",
        "options": [
          "Hitelesítés",
          "Sávszélesség-szabályozás",
          "Terheléselosztás",
          "Tömörítés"
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-17",
        "number": 17,
        "question": "A felsoroltak közül melyik állítás igaz a 2-es típusú hypervisorra?",
        "options": [
          "A Microsoft Hyper-V-nek a Windows 10/11 Pro alatt elérhető változata ezt a virtualizációs típust valósítja meg.",
          "A host operációs rendszer késleltetéséből adódóan lassabb, mint az 1-es típusú.",
          "Az 1-es típusú hypervisorhoz képest gyorsabb. mert ez már a második generációs virtualizációs technikákra épít.",
          "Közvetlenül a hardveren fut."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-18",
        "number": 18,
        "question": "Egy Linux szerverre adatbázis-szervert kell telepítenie. A felsoroltak közül melyik NEM használható Linux alatt adatbázisszervernek? (Jelölje meg a helyes választ!)",
        "options": [
          "MariaDB",
          "MySQL",
          "PostgreSQL",
          "UbunSQL"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-19",
        "number": 19,
        "question": "A felsoroltak közül melyik állítás NEM igaz a rendszernaplózásra?",
        "options": [
          "Az eszköz helyi pufferébe Is lehet küldeni a napló üzeneteket.",
          "Távoli szerverre történő naplózásnál az alapértelmezett szállítási protokoll az UDP.",
          "A legmagasabb fontossági szintű üzenetek számkódja a 0-ás.",
          "A konzolra történő naplózás nem kapcsolható ki."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-tavasz-20",
        "number": 20,
        "question": "A 3 rétegű tervezési modell melyik rétegéhez tartoznak a switch-ek és a vezeték nélküli AP-k?",
        "options": [
          "elosztási",
          "adatkapcsolati",
          "központi",
          "hozzáférési"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      }
    ]
  },
  {
    "id": "2023-osz",
    "year": 2023,
    "season": "Őszi",
    "date": "2023-11-10",
    "title": "2023 őszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2023-osz-1",
        "number": 1,
        "question": "Jelölje meg az felsorolt szoftverek közül azt, amelyik NEM csoportmunkaeszköz!",
        "options": [
          "Microsoft Teams",
          "Webex Teams",
          "lpSec",
          "GitHub"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-2",
        "number": 2,
        "question": "Tegyük fel, hogy Ön hálózatüzemeltető technikusként dolgozik egy nagy nemzetközi telekommunikációs vállalatnál. A felsoroltak közül mely kommunikációs szabályok követése várható el Öntől? Egyéni betűtípusokat és beágyazott képeket tartalmazó HTML formátumú levelek küldése az ügyfeleknek.",
        "options": [
          "Kizárólag angol nyelvű üzenetek küldése még abban az esetben is, ha csak magyar anyanyelvű ügyfelekkel kommunikál.",
          "A címzettek számára releváns tárgy megadása az emailekben.",
          "A személyes adataink megosztása minden kommunikáció során.",
          "Az e-mail üzenetek végén minden fontos publikus kapcsolattartási adatot tartalmazó aláírás használata."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-3",
        "number": 3,
        "question": "Melyek tartoznak a hatékony internetes keresés alapelvei közé? Csak az első oldalon található eredmények használata, mert a többi nem releváns.",
        "options": [
          "Különböző keresőmotorok használata, és csak az egyező válaszok figyelembevétele.",
          "Az eredmények kritikus értékelése, különös tekintettel a forrás hitelességére.",
          "Az első találat mindig a legjobb.",
          "A keresőmotorok specifikus funkcióinak használata (pl. idézőjelek, mínuszjel stb.)."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-4",
        "number": 4,
        "question": "Melyik állítás igaz az loT (Internet of Things) technológiára?",
        "options": [
          "Az loT eszközök a begyűjtött adatok hatékony feldolgozása érdekében nagy teljesítményű és nagy energiaigényű hardvert tartalmaznak.",
          "Az loT eszközök a IP protokoll speciális változatát, az IOTP-t használják az egymás közötti kommunikációra.",
          "Az loT eszközök csak központi felhőszolgáltatáson keresztül tudnak kommunikálni.",
          "Az loT technológia lehetővé teszi a különböző eszközök interneten vagy más kommunikációs hálózaton keresztül történő összekapcsolását és adatcseréjét."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-5",
        "number": 5,
        "question": "Melyik állítás igaz a relációs adatbázisok tervezésére vonatkozóan?",
        "options": [
          "A tiszta szerkezetű adatbázisban a nem kulcs attribútumok teljesen függenek az elsődleges kulcstól.",
          "A redundancia növeli az adatbázis teljesítményét és megbízhatóságát.",
          "Az adatbázis tervezésekor törekedni kell a minél nagyobb redundancia kialakítására a véletlen adatvesztés elkerülése érdekében.",
          "A tiszta szerkezetű adatbázisban a reláció minden attribútuma egyszerű, nem összetett adat."
        ],
        "correct": [
          0,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-6",
        "number": 6,
        "question": "Párosítsa a Windows operációs rendszer telepítésével kapcsolatos kifejezéseket a megfelelő leírásokkal!",
        "type": "match",
        "pairs": [
          [
            "BIOS",
            "Egy olyan program, mely tartalmazza az alapvető konfigurációs beállításokat és végrehajtja a diagnosztikai ellenőrzéseket."
          ],
          [
            "bootolható USB",
            "Egy olyan eszköz, amely például a Windows telepítőfájljait tartalmazza, és amelyről elindítható a telepítés."
          ],
          [
            "partíció",
            "A merevlemez önálló logikai egysége."
          ],
          [
            "formázás",
            "A partíción az adattároláshoz szükséges struktúra kialakítása."
          ],
          [
            "aktiválás",
            "A Windows használati jogosultságának igazolása termékkulccsal vagy digitális licenccel."
          ]
        ],
        "points": 2
      },
      {
        "id": "2023-osz-7",
        "number": 7,
        "question": "Melyik állítás igaz az L1-es és L2-es hibaelhárítás szintjeire?",
        "options": [
          "Az L1-es szinten a hardveres és hálózati problémákat oldják meg, az L2-es szinten pedig a szoftveres és biztonsági problémákat kezelik.",
          "Az L1-es szinten a rendszer működését ellenőrzik és monitorozzák, az L2-es szinten pedig a rendszer fejlesztését és frissítését végzik.",
          "Az L1-es szinten a HelpDesk ügyintézők a felhasználók által bejelentett egyszerűbb problémákat oldják meg, az L2-es szinten pedig szakemberek foglalkoznak a bonyolultabb és speciálisabb problémákkal.",
          "Az L1-es szinten a belső felhasználók problémáit oldják meg, az L2-es szinten pedig a külső ügyfelek problémáit kezelik."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-8",
        "number": 8,
        "question": "Melyik link-local cím a felsoroltak közül?",
        "options": [
          "FE80::2",
          "FF01::1",
          "FF:FE::1",
          "FC:1 ::1"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-9",
        "number": 9,
        "question": "Az alábbi fogalmak közül melyek kapcsolódnak a forgalomirányítóhoz?",
        "options": [
          "MAC-tábla",
          "irányítótábla",
          "alapértelmezett átjáró",
          "Ethernet keret"
        ],
        "correct": [
          1,
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-10",
        "number": 10,
        "question": "Jelölje meg, hogy melyik felsorolt elem NEM része egy konvergált feszítőfának!",
        "options": [
          "gyökérport",
          "gyökérponti híd",
          "irányítótábla",
          "kijelölt port"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-11",
        "number": 11,
        "question": "Miért nem látszik egy Cisco switch statikusan létrehozott trönk portja a privilegizált módban kiadott show vlan brief parancs kimenetében?",
        "options": [
          "Mert a trönk port minden VLAN-nak tagja, és nem sorolódik fel mindenhol.",
          "Mert ez a parancs csak a dinamikusan létrejött trönk portokat mutatja.",
          "Mert a brief opció nélkül kell kiadni.",
          "Mert a parancsot konfigurációs módban kellett volna kiadni."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-12",
        "number": 12,
        "question": "Harmadik rétegbeli redundáns routerek alkalmazásakor milyen IP címet kell beállítani a hálózatban alapértelmezett átjárónak?",
        "options": [
          "Az aktív router fizikai IP címét.",
          "A standby router fizikai IP címét.",
          "A virtuális router virtuális IP címét.",
          "A virtuális router fizikai IP címét."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-13",
        "number": 13,
        "question": "Melyik állítás igaz a vezeték nélküli hálózatokra?",
        "options": [
          "A WEP titkosítás megbízható, ha a 2.4 GHz-es tartományban használjuk.",
          "A 802.11n szabvány két frekvenciasávban is képes működni.",
          "Az SSID elrejtése a fizikai címszűréssel kombinálva megbízható védelmet ad.",
          "Infrastruktúra mód kiépítésekor mindenképpen szükség van külső hitelesítő szerverre is."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-14",
        "number": 14,
        "question": "Egészítse ki a mondatot! Egy támadó hamisított ____ üzenetet küldve képes két másik gép forgalmát lehallgatni kapcsolt hálózatban is. Ezt ____ típusú támadásnak nevezzük.",
        "type": "textmulti",
        "answers": [
          "ARP",
          "ARP spoofing"
        ],
        "points": 2
      },
      {
        "id": "2023-osz-15",
        "number": 15,
        "question": "Mit kell tennünk, ha azt szeretnénk, hogy minden OSPF router egységesen és automatikusan azonnal 1-nek vegye minden 10 GB Ethernet interfész költségét?",
        "options": [
          "Ki kell adni az auto-cost reference-bandwidth 10000 parancsot mindegyik routeren.",
          "Be kell állítanunk az ip ospf cost 1 paranccsal router konfigurációs módban.",
          "Ki kell adni az auto-cost reference-bandwidth 10000 parancsot az egyik routeren.",
          "Be kell állítanunk az ip ospf cost 1 paranccsal interfész konfigurációs módokban."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-16",
        "number": 16,
        "question": "Jelölje meg, hogy melyik protokoll NEM része az IPSec keretrendszernek!",
        "options": [
          "ESP",
          "AH",
          "SSL",
          "IKE"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-17",
        "number": 17,
        "question": "Mi a konténerizáció?",
        "options": [
          "A konténerizáció olyan technológia, amely lehetővé teszi a szoftverek tömörítését és csomagolását a különböző platformokon való megosztáshoz.",
          "A konténerizáció olyan technológia, amely lehetővé teszi a szoftverek izolált és hordozható futtatását a különböző környezetekben.",
          "A konténerizáció olyan technológia, amely lehetővé teszi a szoftverek automatikus frissítését és karbantartását a különböző verziók között.",
          "A konténerizáció olyan technológia, amely lehetővé teszi a szoftverek virtuális gépeken való futtatását a különböző operációs rendszereken."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-18",
        "number": 18,
        "question": "Mi a célja a /etc/hosts fájlnak a Linux operációs rendszerben?",
        "options": [
          "Tárolja a hálózati eszközök neveit és az azokhoz tartozó IP-címeket.",
          "Tárolja a hálózati szolgáltatások listáját.",
          "Tárolja a hálózati protokollok paramétereit.",
          "Tárolja a hálózati interfészek konfigurációját."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-19",
        "number": 19,
        "question": "Melyik SNMP üzenettípussal jelzi egy felügyelt eszköz, ha nem várt eseményt észlel?",
        "options": [
          "Set",
          "Get-response",
          "Trap",
          "Get-request"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2023-osz-20",
        "number": 20,
        "question": "Kiterjesztett ACL-ekkel akarjuk szűrni egy hálózatban a VLAN-ok közti forgalmat. A 3 rétegű tervezési modell melyik rétegét érinti ez a feladat?",
        "options": [
          "elosztási",
          "központi",
          "hozzáférési",
          "hálózati"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      }
    ]
  },
  {
    "id": "2024-osz",
    "year": 2024,
    "season": "Őszi",
    "date": "2024-11-05",
    "title": "2024 őszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2024-osz-1",
        "number": 1,
        "question": "Válassza ki a felsoroltak közül a két csoportmunka eszközt!",
        "options": [
          "Trello",
          "ChatGPT",
          "CoPilot",
          "Git"
        ],
        "correct": [
          0,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-2",
        "number": 2,
        "question": "Munkahelyén azt kérik Öntől, hogy minden céges elektronikus levelét küldje el másolatban a felettesének úgy, hogy erről az eredeti címzett ne tudjon. Válassza ki, hogy melyik állítás igaz a fenti helyzetre!",
        "options": [
          "Az emailről másolatot csak kinyomtatva tud eljuttatni a feletteséhez.",
          "A címzett mellé fel tudja venni másik címzettnek a felettesét is, más megoldás nincs a feladatra.",
          "Ezt email esetében nem lehet megoldani.",
          "Beállítja, hogy titkos másolatként kapja meg az emailt a felettese."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-3",
        "number": 3,
        "question": "Egy szövegre szeretne a weben rákeresni úgy, hogy (karakterre pontos) helyes találatokat kapjon. Válassza ki, hogy hogyan oldaná meg!",
        "options": [
          "idézőjelek közé tenné a szöveget",
          "plusz jelek közé tenné a szöveget",
          "mínusz jelek közé tenné a szöveget",
          "zárójelbe tenné a szöveget"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-4",
        "number": 4,
        "question": "Egy loT eszköz biztosan rendelkezik a felsoroltak közül az egyikkel.",
        "options": [
          "IP cím",
          "Mesterséges intelligencia hozzáférés",
          "Infraszenzor",
          "Hőszenzor"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-5",
        "number": 5,
        "question": "Válassza ki, hogy mi a különbség az egyedelőfordulás\" és az egyedtípus\" között!",
        "options": [
          "Az egyedelőfordulás a kapcsolat az egyedtípusok között.",
          "Nincs különbség.",
          "Az egyedelőfordulás a valóság egy eleme, amit modellezünk, az egyedtípus pedig az azonos tulajdonságtípusokkal rendelkező egyedek absztrakciója.",
          "Az egyedtípus a valóság egy eleme, amit modellezünk, az egyedelőfordulás pedig a vizsgált jellemző."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-6",
        "number": 6,
        "question": "Számítógépén azt tapasztalja, hogy minden bekapcsoláskor elfelejti a dátum és idő beállításokat és a boot sorrendet is. Válassza ki, hogy mi lehet a baj!",
        "options": [
          "Virustámadás érte a számítógépét.",
          "Tönkrement a hálózati vezérlőkártya.",
          "Frissítenie kell az operációs rendszerét, mert elavult.",
          "Lemerült a CMOS elem, cserélni szükséges."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-7",
        "number": 7,
        "question": "A munkahelyén használt programmal mentett állományokat, egy másik számítógépen ugyanazzal a programmal nem tudja megnyitni. Válassza ki, hogy melyik két eset lehet ennek az oka!",
        "options": [
          "A két számítógépen nem ugyanaz a felhasználói fiók felhasználói neve, ez okozza a gondot.",
          "Sérült a mentett állomány.",
          "Régebbi szoftververzióban készült a mentés, ezt az új nem tudja megnyitni.",
          "Újabb szoftververzióban készült a mentés, ezt a régi nem tudja megnyitni."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-8",
        "number": 8,
        "question": "Olyan hálózatot kell terveznie, amiben 256 darab számítógépet kell IPv4-es címmel ellátnia. Válassza ki, hogy milyen prefixű maszkot kell használnia!",
        "options": [
          "/23",
          "/22",
          "/25",
          "/24"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-9",
        "number": 9,
        "question": "Forgalomirányítóján az egyik interfészhez kapcsolódó hálózat nem jelenik meg a forgalomirányító táblában. Válassza ki a három lehetséges okot!",
        "options": [
          "Újra kell indítani a forgalomirányítót, hogy megjelenjen a bejegyzés a forgalomirányító táblában",
          "Az interfészen a protokoll állapota DOWN. (az interfészhez nem csatlakozik kábel)",
          "Az interfésznek nincs beállítva IP cim.",
          "Az interfész nincs felkapcsolva."
        ],
        "correct": [
          1,
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-10",
        "number": 10,
        "question": "Válassza ki, hogy feszítőfa protokoll (STP) használatakor melyik állítás NEM helytálló!",
        "options": [
          "A gyökérponti hídnak (root bridge) lesz legalább egy alternativ szerepkörű portja.",
          "Egy STP szegmensen csak egy gyökérponti híd (root bridge) lehet.",
          "A gyökérponti hídnak (root bridge) nem lesz gyökér (root) szerepkörű portja.",
          "A gyökérponti hídnak minden portja kijelölt (designated) szerepkörű."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-11",
        "number": 11,
        "question": "Válassza ki, hogy a felsoroltak közül milyen két hátránya lehet annak, ha egy sok végberendezést tartalmazó, nagy hálózatban nem használ VLAN-okat!",
        "options": [
          "Kevesebb felhasználói fiók lesz létrehozható.",
          "Kevesebb IPv6-os cím lesz használható.",
          "Nehezebb a hálózatfelügyelet megvalósítása a szegmensen.",
          "A szórásos forgalom megnövekedhet."
        ],
        "correct": [
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-12",
        "number": 12,
        "question": "A munkahelyi hálózata két internetkapcsolattal rendelkezik, hogy redundáns átjárót tudjon biztosítani a számítógépeinek. Válassza ki, hogy milyen típusú redundancia ez!",
        "options": [
          "második rétegbeli (L2)",
          "ez nem redundancia",
          "alkalmazási rétegbeli",
          "harmadik rétegbeli (L3)"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-13",
        "number": 13,
        "question": "Válassza ki, hogy milyen technológia segítségével kommunikálnak a WIFI-s eszközök!",
        "options": [
          "mikrohullámokkal",
          "optikai szálas technológiával",
          "RFID technológiával",
          "rádiófrekvenciákkal"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-14",
        "number": 14,
        "question": "Válassza ki, hogy Social Engineering (adathalászat) használatával honnan próbálnak a támadók adatokat megszerezni!",
        "options": [
          "adattárházaktól",
          "forgalomirányítóktól",
          "személyektől",
          "weblapokról"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-15",
        "number": 15,
        "question": "Válassza ki, hogy melyik igaz a lebegő statikus útvonalra, ha dinamikus forgalomirányító protokoll alkalmazása mellett használjuk!",
        "options": [
          "Ilyen útvonal csak IPv6-nál létezik.",
          "Az adminisztratív távolsága nagyobb, mint egy dinamikus forgalomirányító protokoll adminisztratív távolsága.",
          "Az adminisztratív távolsága kisebb, mint egy dinamikus forgalomirányító protokoll adminisztratív távolsága.",
          "Az adminisztratív távolsága pontosan akkora, mint egy dinamikus forgalomirányító protokoll adminisztratív távolsága."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-16",
        "number": 16,
        "question": "Válassza ki, hogy a PPP az OSI modell mely rétegéhez köthető protokoll!",
        "options": [
          "szállítási",
          "fizikai",
          "hálózati",
          "adatkapcsolati"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-17",
        "number": 17,
        "question": "A felsorolásból válassza ki a három felhőszolgáltatási szintet!",
        "options": [
          "laas",
          "GaaS",
          "Saas",
          "Paas"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-18",
        "number": 18,
        "question": "Válassza ki, hogy melyik szerepkör NEM telepíthető Windows szerveren!",
        "options": [
          "webkiszolgáló",
          "távelérés",
          "AD tartományi szolgáltatás",
          "AD adatbázis szolgáltatás"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-19",
        "number": 19,
        "question": "Válassza ki, hogy mire szolgál a SYSLOG!",
        "options": [
          "A napló üzenetek központi gyűjtésére.",
          "A hálózati logikai működésének modellezésére.",
          "A napló üzenetek decentralizált tárolására.",
          "A hálózati forgalom titkosítására."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2024-osz-20",
        "number": 20,
        "question": "Válassza ki, hogy a háromrétegű hálózattervezési modellben mi a szerepe a központi (core) rétegnek!",
        "options": [
          "Összeköttetést biztosít a hálózati állomások és a végberendezések számára.",
          "Összeköttetést biztosít az elosztási (distribution) rétegbeli eszközök között.",
          "Nincs ilyen réteg ebben a modellben.",
          "Összeköttetést biztosít a kisebb, helyi hálózatok között."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      }
    ]
  },
  {
    "id": "2025-tavasz",
    "year": 2025,
    "season": "Tavaszi",
    "date": "2025-05-28",
    "title": "2025 tavaszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2025-tavasz-1",
        "number": 1,
        "question": "Lehetséges-e egy Git repositoryt megosztani másokkal?",
        "options": [
          "Igen, de csak olvasásra.",
          "Igen, lehetséges, de csak munkahelyen belül.",
          "Igen, lehetséges, bármelyik Git felhasználóval.",
          "Nem lehetséges."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-2",
        "number": 2,
        "question": "Munkahelyén gyakran táblázatokat kell kitöltenie és visszaküldenie. A felsoroltak közül melyik az optimális és korszerű megoldás erre a feladatra?",
        "options": [
          "Az Excel táblázatot kinyomtatjuk, majd szkennelve visszaküldjük emailben.",
          "A táblázatokat nyomtatva kell továbbítani.",
          "Excel állományok küldése emailben oda-vissza.",
          "Online táblázatok használata."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-3",
        "number": 3,
        "question": "Lehetséges-e interneten egy képre vagy egy képrészletre rákeresni, hogy hasonló találatokat kapjunk?",
        "options": [
          "Igen, de csak weben talált képre lehet.",
          "Nem lehet.",
          "Igen, bármilyen kép esetén lehet.",
          "A feladat csak telefonon oldható meg, számítógépen nem."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-4",
        "number": 4,
        "question": "Mely megállapítások igazak a REST API technológiára?",
        "options": [
          "text/css adatformátumot használ.",
          "application/json adatformátumot használ.",
          "FTP kérésekkel kommunikál.",
          "HTTP kérésekkel kommunikál."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-5",
        "number": 5,
        "question": "Az ER (entity-relationship) modellben melyik lehet tulajdonságtípus?",
        "options": [
          "származtatott",
          "összetett",
          "egyszerű (atomi)",
          "táblás"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-6",
        "number": 6,
        "question": "Számítógépére email kliens alkalmazást telepített. Mit kell beállítania a levelező kliensben, hogy rendeltetésszerűen tudja használni?",
        "options": [
          "POP3 vagy IMAP szervert kell beállítani.",
          "DNS szervert kell beállítani.",
          "SMTP szervert kell beállítani.",
          "DHCP szervert kell beállítani."
        ],
        "correct": [
          0,
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-7",
        "number": 7,
        "question": "A munkahelyen használt számítógépen sérült a felhasználói program konfigurációs állománya (amiben a beállításait tárolja a program). Hogyan oldaná meg a problémát?",
        "options": [
          "Újra telepítené a programot, hogy a sérült állomány cseréje megtörténjen.",
          "Interneten keresne egy alkalmas konfigurációs állományt.",
          "Másik gépről szerezne egy hibátlan konfigurációs állományt.",
          "Más programot vásárolna a cégnek, mert máshogy nem oldható meg a probléma."
        ],
        "correct": [
          0,
          2
        ],
        "type": "choice",
        "points": 2,
        "note": "Az újratelepítés nem minden programnál cseréli a sérült felhasználói konfigurációt. A forrás két megoldását fogadjuk el."
      },
      {
        "id": "2025-tavasz-8",
        "number": 8,
        "question": "Forgalomirányítójának két interfészén is az FE80::1-es cím van beállítva. Mely állítások igazak ebben az esetben?",
        "options": [
          "Meg kell változtatnia az egyik címet a helyes működéshez.",
          "A két cím használható forgalomirányításra is.",
          "A két cím nem zavarja egymást, mert link local címek, más hálózatban vannak.",
          "Mindkét cím prefixe /64."
        ],
        "correct": [
          2,
          3
        ],
        "type": "choice",
        "points": 2,
        "note": "A link-local címtartomány és az interfész prefixhossza nem teljesen azonos fogalom; a feladatot a forrás szerinti értelemben pontozzuk."
      },
      {
        "id": "2025-tavasz-9",
        "number": 9,
        "question": "Mit jelent az, hogy a kapcsoló portsűrűsége nyolc?",
        "options": [
          "Nyolc VLAN-t tud kezelni.",
          "A kapcsolónak nyolc portja van.",
          "Nyolc keretet tud egyszerre kezelni, bufferelni.",
          "A kapcsolónak csak nyolc portját lehet EtherChannelhez rendelni."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-10",
        "number": 10,
        "question": "Kapcsolt hálózatán az eddigi gyökérponti híd helyett másik kapcsolót szeretne gyökérponti hídként kijelölni. Mit kell tennie?",
        "options": [
          "A kijelölendő eszközön a legkisebbre kell állítani a prioritást.",
          "Extended system ID-t kell használnia az eszközön, ami nagyobb a többinél.",
          "A kijelölendő eszközön a legkisebbre kell állítani a prioritást.",
          "Extended system ID-t kell használnia az eszközön, ami kisebb a többinėl."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "note": "Az eredetiben a helyes válasz szó szerint kétszer fordul elő. A két azonos szöveget egyenértékűnek fogadjuk el.",
        "acceptedSingles": [
          0,
          2
        ]
      },
      {
        "id": "2025-tavasz-11",
        "number": 11,
        "question": "A felsoroltak közül melyik protokoll kapcsolódik a VLAN-okhoz?",
        "options": [
          "IEEE 802.3",
          "A fentiek közül egyik sem.",
          "IEEE 802.11",
          "IEEE 802.1q"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-12",
        "number": 12,
        "question": "A felsorolt protokollok közül melyik NEM FHRP megoldás?",
        "options": [
          "Ethernet",
          "GLBP",
          "HSRP",
          "VRRP"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-13",
        "number": 13,
        "question": "A felsoroltak közül melyik képes a legjobban akadályozni egy WIFI jel terjedését?",
        "options": [
          "papírlap",
          "gipszkarton",
          "betonfal",
          "fatábla"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-14",
        "number": 14,
        "question": "Melyik kártevő teszi lehetővé, hogy a számítógép billentyűzetén minden leütés naplózásra kerüljön?",
        "options": [
          "hardware",
          "ransomware",
          "trójai",
          "keylogger"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-15",
        "number": 15,
        "question": "Többterületű OSPF alkalmazása esetén hogyan tudja megvalósítani a területek közötti (inter-area) forgalomirányítást?",
        "options": [
          "Mindegyik területet közvetlenül a 0-s területhez csatlakoztatja.",
          "Mindegyik területet közvetlenül vagy virtuálisan a 0-s területhez csatlakoztatja.",
          "Mindegyik területet közvetlenül az 1-es területhez csatlakoztatja.",
          "A területeket tetszőlegesen csatlakoztatja egymáshoz."
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-16",
        "number": 16,
        "question": "A felsoroltak közül melyek VPN megoldások?",
        "options": [
          "Remote Access (Távoli hozzáférésű)",
          "Site-to-site (Telephelyek közötti)",
          "PPPoE (Pont-pont Etherneten)",
          "Unsecured Connection (Nem biztonságos kapcsolat)"
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-17",
        "number": 17,
        "question": "Melyik állítás NEM igaz a SaaS (Software as a Sevice) felhőszolgáltatási szintre?",
        "options": [
          "A felhasználók az interneten keresztül kapcsolódnak az alkalmazásokhoz.",
          "Az SaaS esetében a felhasználó informatikai struktúrát bérelhet használatalapú díjfizetéssel.",
          "A szolgáltatott szoftverek révén szoftveralkalmazások tehetők elérhetővé az interneten.",
          "Az Saas esetében a felhőszolgáltatók üzemeltetik és kezelik az alkalmazásokat, valamint a háttér-struktúrát."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-18",
        "number": 18,
        "question": "A felsoroltak közül mely szolgáltatások állíthatók be LINUX szerveren?",
        "options": [
          "FTP",
          "DNS",
          "STP",
          "DHCP"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-tavasz-19",
        "number": 19,
        "question": "Ha a hálózatunk tervezésénél redundáns megoldásokat alkalmazunk, akkor miket fog ez biztosítani a hálózat működésében?",
        "options": [
          "sávszélesség növelése",
          "titkosítás",
          "alagút technológia",
          "nagyobb rendelkezésre állás"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2,
        "note": "A redundancia általánosan nagyobb rendelkezésre állást biztosít. A sávszélesség növekedése nem automatikus; egy helyes választ kérünk."
      },
      {
        "id": "2025-tavasz-20",
        "number": 20,
        "question": "Melyik protokollhoz köthető az MIB (Management Information Base)?",
        "options": [
          "SNMP",
          "SMTP",
          "LLDP",
          "SYSLOG"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      }
    ]
  },
  {
    "id": "2025-osz",
    "year": 2025,
    "season": "Őszi",
    "date": "2025-11-04",
    "title": "2025 őszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2025-osz-1",
        "number": 1,
        "question": "Milyen célra használható a felsoroltak közül a Git és a Trello?",
        "options": [
          "Hálózatmenedzsmentre",
          "Csoportmunkára",
          "Univerzális fordításra",
          "Mesterséges intelligencia platformként"
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-2",
        "number": 2,
        "question": "A munkahelyén csapatépítő tréningről kap emailt. A küldő kéri, hogy jelezzenek vissza a címzettek, hogy részt tudnak-e venni a tréningen. Mi a teendője Önnek, mint az email címzettjének?",
        "options": [
          "Visszajelzek, hogy ott leszek-e vagy nem.",
          "Nem jelzek vissza, inkább felhívom a szervezőt.",
          "Visszajelzek, hogy vegán vagyok.",
          "Nem jelzek vissza, mert nem szoktam."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-3",
        "number": 3,
        "question": "Hálózati eszközt szemrevételezve azt látja, hogy az egyik használatban lévő porthoz tartozó LED nem világít. Milyen hibára gyanakszik?",
        "options": [
          "IP cím probléma lehet.",
          "Protokoll beágyazási probléma lehet.",
          "Fizikai probléma lehet.",
          "Forgalmirányítási probléma lehet."
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2,
        "note": "A nem világító port-LED alapján elsődlegesen fizikai problémára lehet következtetni; a kérdés eredetileg két választ kér, de csak egy egyértelmű."
      },
      {
        "id": "2025-osz-4",
        "number": 4,
        "question": "Az alábbi JSON formátumban milyen hibákat talál? {\"mezo1\": null, \"mezo2\": true, \"mezo3\": \"false\", \"mezo4\": \"null\"}",
        "options": [
          "A null és true értéknek idézőjelben kellene lennie.",
          "A null értékhez nem kell az idézőjel.",
          "A mezo1-hez és mezo2-höz nem kell az idézőjel.",
          "A false értékhez nem kell az idézőjel.",
          "A mezo3-hoz és mezo4-hez kell idézőjel."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2,
        "note": "A bemutatott JSON érvényes: a \"false\" és \"null\" idézőjelek között szöveges érték, nem szintaktikai hiba. A feladat ezért automatikusan 2 pontot ér.",
        "autoCredit": true
      },
      {
        "id": "2025-osz-5",
        "number": 5,
        "question": "Relációsémát használva, melyek az igaz állítások?",
        "options": [
          "A kulcs a kulcsjelöltek részhalmaza.",
          "A relációsémának mindig rendelkeznie kell elsődleges kulccsal.",
          "A kulcs csak szám típusú lehet (ID).",
          "Az idegen kulcs és az elsődleges kulcs az ugyanaz."
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2,
        "note": "Az elsődleges kulcsra vonatkozó kijelentés technikailag nem minden SQL-táblára igaz; forrás szerinti válaszok."
      },
      {
        "id": "2025-osz-6",
        "number": 6,
        "question": "Melyek az igaz állítások az SSD háttértárra vonatkozóan?",
        "options": [
          "Mágneses elven működik.",
          "Gyorsabb adatelérést biztosít mind a HDD.",
          "Tartalma kikapcsolás esetén elvész.",
          "Nem tartalmaz mozgó alkatrészt."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-7",
        "number": 7,
        "question": "Milyen típusai vannak a biztonsági mentésnek?",
        "options": [
          "teljes",
          "növekményes",
          "különbségi",
          "ütemezett"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-8",
        "number": 8,
        "question": "Milyen alapértelmezett maszk tartozik a D osztályú IPv4-es címekhez?",
        "options": [
          "255.255.255.0",
          "255.0.0.0",
          "Nem tartozik hozzá alapértelmezett maszk.",
          "255.255.0.0",
          "255.255.255.255"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-9",
        "number": 9,
        "question": "Forgalomirányítón mely mezők jelennek meg a forgalomirányító táblában?",
        "options": [
          "Kimenő interface.",
          "Célhálózati IP címek.",
          "Szomszéd eszköz elérésének költségértéke.",
          "Cél IP címek (csomóponti címek)."
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-10",
        "number": 10,
        "question": "Mely protokollok képesek második rétegbeli port-aggregációt létrehozni?",
        "options": [
          "LACP",
          "PAgP",
          "HSRP",
          "STP"
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-11",
        "number": 11,
        "question": "Fejezze be a mondatot! VLAN-ok kialakítása során a router-on-a-stick megoldás esetén a forgalomirányító...",
        "options": [
          "egy fizikai interface-t használ, a VLAN-ok szuperhálózatából származó IP címmel.",
          "egy fizikai interface-t használ, de több alinterface-t hoz létre.",
          "minden VLAN-hoz külön interface-t használ.",
          "a VTP segítségével kezeli az interface-ek IP beállításait."
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-12",
        "number": 12,
        "question": "Harmadik rétegbeli redundancia esetén melyek az igaz állítások?",
        "options": [
          "Az átjáró MAC címe egy véletlenszerű MAC cím lesz.",
          "Az átjáró MAC címét ARP protokoll segítségével kérik le a kliensek.",
          "A kliensek MAC címe lesz az átjáró MAC címe.",
          "Az átjáró MAC címe egy virtuális MAC cím lesz."
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-13",
        "number": 13,
        "question": "Mely frekvenciákon működhetnek a vezeték nélküli helyi hálózatok?",
        "options": [
          "5 GHz",
          "3 GHz",
          "2 GHz",
          "6 GHz",
          "2,4 GHz"
        ],
        "correct": [
          0,
          3,
          4
        ],
        "type": "choice",
        "points": 2,
        "note": "A forrásban kézzel is jelezve: három frekvenciasáv helyes, nem kettő (2,4 / 5 / 6 GHz)."
      },
      {
        "id": "2025-osz-14",
        "number": 14,
        "question": "Melyik az igaz állítás a DHCP kiéheztetés támadásra vonatkozóan?",
        "options": [
          "A DHCP kiéheztetés ellehetetleníti, hogy a kliensek IP címet kapjanak.",
          "A DHCP kiéheztetés ellehetetleníti, hogy a kliensek PoE-n keresztül kapjanak áramot.",
          "A DHCP kiéheztetés ellehetetleníti, hogy a kliensek MAC címet kapjanak.",
          "A DHCP kiéheztetés ellehetetleníti a DHCP kiszolgáló elérését."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-15",
        "number": 15,
        "question": "A statikus útvonalnak melyik típusa határozza meg a kimeneti interface-t vagy a következő ugrás IP címét arra az esetre, amikor a forgalomirányító tábla nem tartalmaz útvonalat a célhálózat felé?",
        "options": [
          "teljesen definiált statikus útvonal",
          "rekurzív statikus útvonal",
          "klasszikus statikus útvonal",
          "alapértelmezett útvonal"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-16",
        "number": 16,
        "question": "Válassza ki, hogy mely állítás NEM igaz a VPN-re!",
        "options": [
          "Titkosított adatátvitelt biztosít.",
          "Alagút technikát használ.",
          "Lehet telephelyek közötti, távoli hozzáférésű és SSL VPN is.",
          "Csak UDP datagramok továbbítására használjuk."
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-17",
        "number": 17,
        "question": "Google Drive használatakor milyen típusú felhőszolgáltatást használ?",
        "options": [
          "FaaS",
          "PaaS",
          "SaaS",
          "IaaS"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-18",
        "number": 18,
        "question": "Válassza ki, hogy Linux használata esetén az /etc/passwd állomány milyen felhasználói adatot NEM tartalmaz! felhasználói azonosító szám (uid)",
        "options": [
          "felhasználói azonosító szám (uid)",
          "belépés időpontja",
          "felhasználó home könyvtárának abszolút elérési útja",
          "csoportazonosító szám (gid)",
          "felhasználói név"
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-19",
        "number": 19,
        "question": "A felsoroltak közül melyek használhatóak a hálózat, hálózati eszközök monitorozására?",
        "options": [
          "SMTP",
          "Follow the Flow",
          "SNMP",
          "NETFLOW"
        ],
        "correct": [
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2025-osz-20",
        "number": 20,
        "question": "Hálózatát új szegmenssel bővítenie. Mely szempontokat veszi figyelembe a tervezés során?",
        "options": [
          "Az új hálózati eszközöket is elzárt, védett helyre kell telepíteni.",
          "Az új hálózati eszközök portsűrűsége legyen 10-15%-kal több, mint a tervezett csatlakoztatott eszközök száma.",
          "Az új hálózati eszközök portsebessége nem fontos, elég, ha van kapcsolat a csomópontok között.",
          "A csomópontok kábelezésénél elég lengőkábelt használni, így csökkenthetők a költségek."
        ],
        "correct": [
          0,
          1
        ],
        "type": "choice",
        "points": 2
      }
    ]
  },
  {
    "id": "2026-tavasz",
    "year": 2026,
    "season": "Tavaszi",
    "date": "2026-05-28",
    "title": "2026 tavaszi teszt",
    "minutes": 45,
    "questions": [
      {
        "id": "2026-tavasz-1",
        "number": 1,
        "question": "A Gitben a pillanatképek (commit-ok) mennyi idő után törlődnek?",
        "options": [
          "automatikusan nem törlődnek",
          "egy év után",
          "egy hét után",
          "egy hónap után"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-2",
        "number": 2,
        "question": "Munkahelyén a minőségirányítási csoportot vezeti. Munkája során az egyik kollégájával nem egyezik a véleményük. Hogyan oldaná meg a helyzetet?",
        "options": [
          "jelentené a felettesének, hogy a kolléga ellentmondott Önnek",
          "négyszemközt, erőteljes hangon, kemény stílusban bizonygatná az igazát",
          "mindenki előtt, erőteljes hangon bizonygatná az igazát",
          "négyszemközt nyugodt, konstruktív beszélgetést folytatna kollégájával"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-3",
        "number": 3,
        "question": "Hálózatán konfigurációs hibára gyanakszik. Az egyik eszközön hibaüzenetet talál. Hol próbálna meg utána nézni, hogy mit jelenthet?",
        "options": [
          "a gyakorikerdesek.hu oldalon",
          "a Google fordítót hívná segítségül",
          "az eszköz gyártójának weboldalán, fórumain",
          "VPN kapcsolattal a Darkweb-en"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-4",
        "number": 4,
        "question": "Milyen felhasználási módja NEM lehetséges ma a mesterséges intelligenciának?",
        "options": [
          "kérdésekre adott válasz alapján bárki hatékonyan gyógyíthatja komoly betegségét",
          "rövid leírás alapján történetet tud írni",
          "minta alapján tesztadatokat tud generáltatni",
          "szöveges leírás után képeket tud generálni"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-5",
        "number": 5,
        "question": "Adatbázis témakörben, relációs sémában mit jelent a kulcsmegszorítás?",
        "options": [
          "egy relációsémának mindig rendelkeznie kell elsődleges kulccsal",
          "egy relációsémában nem lehet semmiféle kulcs",
          "egy relációsémában nem lehet elsődleges kulcs, csak idegen kulcs",
          "nincs ilyen megszorítás a relációs adatmodellben"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "note": "A kulcsmegszorítás meghatározása leegyszerűsített; a dokumentum szerinti válasz használatos."
      },
      {
        "id": "2026-tavasz-6",
        "number": 6,
        "question": "Számítógépén a PATH környezeti változóban megtalálható az XY elérési út. Mit jelent ez?",
        "options": [
          "az XY elérési út helyén található futtatható állományok futtatása globálisan tiltott",
          "az XY elérési út helyén található futtatható állományok bárhonnan elérhetőek, futtathatók",
          "az XY elérési út helyén található az összes meghajtó a számítógéphez csatolva",
          "az XY elérési út helyére kerülnek elmentésre az új állományok a számítógépen"
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-7",
        "number": 7,
        "question": "Mi a különbség a hálózatmonitorozás és a hálózatfelügyelet között?",
        "options": [
          "Monitorozás: megfigyelés, Felügyelet: aktív beavatkozás",
          "Monitorozás: adatmentés, Felügyelet: archiválás",
          "Monitorozás: felhasználói oktatás, Felügyelet: hardver karbantartás",
          "Nincs különbség"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-8",
        "number": 8,
        "question": "Milyen maszkot célszerű választanunk IPv6 címzés esetén, ha az interfészazonosítót az EUI-64 módszer szerint szeretnénk generálni?",
        "options": [
          "/65",
          "/96",
          "/64",
          "/128"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-9",
        "number": 9,
        "question": "Mi a forgalomirányító (router) feladata?",
        "options": [
          "logikai hálózatokat köt össze egymással a harmadik rétegbeli címzés segítségével",
          "beérkező fizikai kereteket továbbít minden portjára, kivéve, ahonnan érkezett",
          "címtár szolgáltatást nyújt kisvállalatok részére",
          "logikai hálózatokat köt össze egymással a második rétegbeli címzés segítségével"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-10",
        "number": 10,
        "question": "Egy feszítőfa protokollt (STP) használó kapcsolt hálózati szegmensen hány kijelölt (designed) kapcsoló (switch) lehet?",
        "options": [
          "eggyel kevesebb lesz belőle, mint ahány kapcsoló (switch) van a szegmensben",
          "csak egy lehet belőle",
          "ilyen kapcsoló (switch) nincs a feszítőfa protokoll (STP) kapcsán",
          "minden kapcsoló (switch) kijelölt lesz"
        ],
        "correct": [
          1
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-11",
        "number": 11,
        "question": "Mi jellemzi a hang VLAN-t (voice VLAN)?",
        "options": [
          "alacsony QoS prioritás",
          "magas QoS prioritás",
          "nagy késleltetés",
          "kis késleltetés"
        ],
        "correct": [
          1,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-12",
        "number": 12,
        "question": "Mit biztosítanak a harmadik rétegbeli redundáns megoldások egy hálózatban?",
        "options": [
          "virtuális átjárót a klienseknek",
          "nagyobb sávszélességet a kapcsolók között",
          "vírusvédelmet",
          "redundáns kapcsolatot a kapcsolók között"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-13",
        "number": 13,
        "question": "Melyek az igaz állítások a 802.11 szabványokra?",
        "options": [
          "rádiófrekvenciát használnak a kommunikációhoz",
          "Bluetooth néven is szokták emlegetni ezeket",
          "leggyakrabban 2,4 és 5 GHz-en működnek",
          "MIMO technológiát is használhatnak"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-14",
        "number": 14,
        "question": "A felsoroltak közül melyik NEM lehet konfigurációs probléma a hálózaton?",
        "options": [
          "Jelszó komplexitási probléma",
          "hálózati protokoll hibája",
          "webes szolgáltatás probléma (pl.: javascript engedélyezés)",
          "nem biztonságos kapcsolaton keresztüli adattovábbítás"
        ],
        "correct": [
          2
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-15",
        "number": 15,
        "question": "Munkahelyén OSPF forgalomirányító protokollt használnak. Melyek a helyes állítások a felsoroltak közül?",
        "options": [
          "az OSPF útválasztó folyamatban a sávszélességnek nagy szerepe van",
          "Passzív interfészen nem küld HELLO üzeneteket az OSPF",
          "az OSPF alapértelmezett adminisztratív távolsága 110",
          "az OSPF maximális ugrásszáma 15"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "type": "choice",
        "points": 2,
        "note": "A feladat megfogalmazása vitatható: a JavaScript engedélyezése szintén konfigurációs kérdés lehet."
      },
      {
        "id": "2026-tavasz-16",
        "number": 16,
        "question": "Válassza ki, hogy mely állítások igazak a WAN típusú hálózatokra!",
        "options": [
          "Az Internet egy WAN típusú hálózat.",
          "A WAN típusú hálózat sebessége alacsonyabb, mint a LAN hálózat sebessége.",
          "A WAN típusú hálózat általában kisebb földrajzi területet fed le, míg a LAN típusú hálózat nagyobb területet.",
          "A WAN típusú hálózat szinte mindig Ethernet és Wi-Fi megoldásokra épül."
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "note": "A forrás 2 választ kér, de a WAN sebessége nem feltétlenül alacsonyabb a LAN sebességénél, ezért egy választ kérünk."
      },
      {
        "id": "2026-tavasz-17",
        "number": 17,
        "question": "Melyik tulajdonság NEM tartozik a virtualizálás előnyei közé?",
        "options": [
          "korlátozott kompatibilitás",
          "jobb erőforrás kihasználás",
          "költségmegtakarítás",
          "skálázhatóság"
        ],
        "correct": [
          0
        ],
        "type": "choice",
        "points": 2,
        "note": "A WAN nem minden esetben lassabb a LAN-nál. A feladat eredetileg két választ kér, de csak az internetes állítás általánosan igaz."
      },
      {
        "id": "2026-tavasz-18",
        "number": 18,
        "question": "A felsoroltak közül melyek valósíthatóak meg közvetlenül csoportházirenddel?",
        "options": [
          "Particionálás",
          "Meghajtók csatlakoztatása",
          "Tiltások",
          "Jelszó létrehozására vonatkozó szabályok beállítása"
        ],
        "correct": [
          1,
          2,
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-19",
        "number": 19,
        "question": "Mire szolgál egy syslog szerver?",
        "options": [
          "Az operációs rendszer telepítésére",
          "A hálózati kábelek tesztelésére",
          "A felhasználók jelszavainak mentésére",
          "Hálózati eszközök naplóinak (működés során kiadott parancsok és rendszerüzenetek) központi gyűjtésére és elemzésére"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      },
      {
        "id": "2026-tavasz-20",
        "number": 20,
        "question": "Mi a háromrétegű hálózattervezési modell hozzáférési rétegének feladata?",
        "options": [
          "Routing",
          "Házirendek alkalmazása",
          "Kapcsolás",
          "Hálózatelérés"
        ],
        "correct": [
          3
        ],
        "type": "choice",
        "points": 2
      }
    ]
  }
];
