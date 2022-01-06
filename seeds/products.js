const products = [
  {
    _id: '61d501b1fc13ae33fc0000001',
    brand: 'Abin',
    name: 'Meja Sisi - Putih',
    image:
      'https://images.unsplash.com/photo-1616464598261-2e345113fa3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMDkwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Menggunakan meja sisi dapat menambah fungsi ruangan, sekaligus meningkatkan unsur dekorasi. Untuk ruangan dengan konsep scandinavian, Abin Meja Sisi dapat menjadi pelengkap sempurna. Letakkan di sudut ruangan, atau samping sofa untuk menyediakan tempat tambahan untuk memajang hiasan atau menaruh perlengkapan.',
    category: 'Meja',
    price: '599500',
    countInStock: 15,
    rating: 4.65,
    numberOfReviews: 12,
  },
  {
    _id: '61d501b1fc13ae33fc0000002',
    brand: 'Nordia',
    name: 'Bertil Kursi Aksen Berlengan - Krem',
    image:
      'https://images.unsplash.com/photo-1602990721338-9cbb5b983c4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMDk0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Penempatan sofa di dalam ruangan tidak hanya berfungsi sebagai tempat duduk, namun juga dapat menciptakan aksen khusus pada dekorasi interior. Nordia Bertil Kursi Aksen Berlengan memiliki desain modern yang cocok untuk ruangan bergaya kontemporer atau ekletik. Dudukan empuk dan sandaran punggung yang tinggi dapat menopang tubuh Anda dengan nyaman dan rileks. Lengkapi area ruang tamu dan ruang keluarga Anda dengan Nordia Bertil Kursi Aksen Berlengan.',
    category: 'Sofa',
    price: '5099000',
    countInStock: 19,
    rating: 4.55,
    numberOfReviews: 21,
  },
  {
    _id: '61d501b1fc13ae33fc0000003',
    brand: 'Malrow',
    name: 'Kursi Berlengan - Cokelat',
    image:
      'https://images.unsplash.com/photo-1616628076117-ce59d3c1c537?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMTAzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Menggunakan meja sisi dapat menambah fungsi ruangan, sekaligus meningkatkan unsur dekorasi. Untuk ruangan dengan konsep scandinavian, Abin Meja Sisi dapat menjadi pelengkap sempurna. Letakkan di sudut ruangan, atau samping sofa untuk menyediakan tempat tambahan untuk memajang hiasan atau menaruh perlengkapan.',
    category: 'Kursi',
    price: '899000',
    countInStock: 18,
    rating: 4.35,
    numberOfReviews: 15,
  },
  {
    _id: '61d501b1fc13ae33fc0000004',
    brand: 'Lexxy',
    name: 'Sofa Kulit 1 Dudukan',
    image:
      'https://images.unsplash.com/photo-1526827826797-7b05204a22ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMTEyOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Lengkapi ruang tamu Anda dengan Lexxy Sofa 1 Dudukan ini. Sofa satu dudukan ini terbuat dari rangka kayu solid dilapisi dengan busa yang empuk dan nyaman, dan dibalut dengan lapisan kulit sintetis berwarna hitam. Hadir dengan desain minimalis, sofa ini cocok untuk ruangan bergaya modern. Lexxy Sofa 1 Dudukan ini dilengkapi dengan bantal sofa berwarna merah. Dapatkan segera produk ini dengan penawaran spesial dari Ruparupa.',
    category: 'Sofa',
    price: '999500',
    countInStock: 14,
    rating: 4.28,
    numberOfReviews: 17,
  },
  {
    _id: '61d501b1fc13ae33fc0000005',
    brand: 'Liberty',
    name: 'Sofa Tidur Fabric - Cokelat',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMTM5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Bersantai di ruang tamu atau ruang keluarga dapat terwujud dengan memiliki sofa bed Liberty persembahan dari Informa ini. Sofa ini memiliki desain yang ergonomis, karena dapat digunakan untuk duduk sekaligus untuk berbaring. Anda tinggal mengubah bentuknya sesuai kebutuhan. Terbuat dari material yang berkualitas, membuat sofa bed ini kokoh sehingga lebih awet dan tahan lama.',
    category: 'Sofa',
    price: '3499000',
    countInStock: 9,
    rating: 4.8,
    numberOfReviews: 3,
  },
  {
    _id: '61d501b1fc13ae33fc0000006',
    brand: 'Cordova',
    name: 'Meja Tamu - Silver',
    image:
      'https://images.unsplash.com/photo-1615471618985-97108e2ba478?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnVybml0dXJlfHx8fHx8MTY0MTQzMTIyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
    description:
      'Cordova meja tamu dengan aksen dekorasi yang berkilauan ini sangat ideal untuk menciptakan kesan mewah pada ruangan Anda. Hadir dengan warna silver dan material kaca membuat tampilan meja ini semakin bernuansa modern. Cocok digunakan di ruang tamu rumah, lobi hotel atau perkantoran.',
    category: 'Meja',
    price: '7199100',
    countInStock: 9,
    rating: 4.79,
    numberOfReviews: 5,
  },
];

export default products;
