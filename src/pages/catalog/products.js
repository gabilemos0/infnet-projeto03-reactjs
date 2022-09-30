const { modalUnstyledClasses } = require('@mui/material')

const products = {
  1: {
    name: 'Par de Brincos Serpente',
    description:
      'Esse brinco é de parar o trânsito e que todas as suas amigas vão comentar! Um acessório apaixonante, diferenciado e mega estiloso, que inspira poder, mistério e encanto, atraindo muitos olhares.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto10-888x1216.webp',
    price: '153,72',
    promoPrice: '109,80'
  },
  2: {
    name: 'Pulseira Portuguesa Com Coração',
    description:
      'As pulseiras com pingente de coração são puro charme! Os acessórios de coração são românticos e requintados! Essa linda pulseira dourada com elos e pingente de coração, irá transformar seus looks!',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-coracao-grande-3-580x795.webp',
    price: '145,32',
    promoPrice: '103,80'
  },
  3: {
    name: 'Par de Brincos Ear Hook',
    description:
      'O Ear Hook ou "Gancho de Orelha" é um modelo de brinco em que o acessório aparenta estar "pendurado", pois ele se encaixa no lóbulo da orelha.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto17-888x1216.webp',
    price: '115,08',
    promoPrice: '82,20'
  },
  4: {
    name: 'Colar Jack 3 Corações',
    description:
      'Esse colar de coração, tem um lindo acabamento pedra de zircônia. Os acessórios com detalhes em forma de coração são lindos e delicados, representam o amor de uma forma singular e elegante, dando um toque todo especial ao look. Esse acessório pode ser usado nas mais diversas ocasiões.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/colar-color-lux-2-580x795.webp',
    price: '140,28',
    promoPrice: '100,20'
  },
  5: {
    name: 'Pulseira gratidão corrente',
    description:
      'Essa pulseira perfeita possui um delicado acabamento e é uma otima opção para quem quer demonstrar o quão grato é pela vida através de um acessório.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto52-580x795.webp',
    price: '94,92',
    promoPrice: '67,80'
  },
  6: {
    name: 'Par de Brincos Ear Chain',
    description:
      'Esse é para chegar chegando, esbanjando estilo! A corrente super delicada é presa no topo da orelha através de um piercing fake (não precisa ter furo!) Os brincos Ear Chain são super tendência, de sutileza e beleza inigualáveis.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/brinco-corrente-3-888x1216.webp',
    price: '78,12',
    promoPrice: '55,80'
  },
  7: {
    name: 'Colar com pingente N. Senhora',
    description:
      'Esse colar vem com um lindo pingente cravejado de zircônias, design vibrante e autêntico de Nossa Senhora Aparecida. Para quem quer sentir-se protegida e energizada, todos os dias, mas, sem sair da moda!',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/nsenhora-2-2-888x1216.webp',
    price: '98,28',
    promoPrice: '70,20'
  },
  8: {
    name: 'Tornozeleira 3 Venezianas',
    description:
      'Essa linda Tornozeleira é composta por três voltas e vem acompanhada de um lindo pingente que dá mais delicadeza e sofisticação a peça.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/torno-trio-2-580x795.webp',
    price: '103,32',
    promoPrice: '73,80'
  },
  9: {
    name: 'Par de Brincos Pingente Pena',
    description:
      'Esse brinco é lindo, com um belíssimo e delicado design de pena. A pena, além de ser um símbolo super em alta e muito utilizado na moda, simboliza pureza, esperança, liberdade e positividade, podendo atuar como proteção de energias ruins.',
    image:
      'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/folha-2-888x1216.webp',
    price: '94,92',
    promoPrice: '67,80'
  }
}

module.exports = {
  products
}
