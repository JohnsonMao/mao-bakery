const headerNavList = [
  {
    title: '首頁',
    path: '/home',
  },
  {
    title: '關於',
    path: '/about',
  },
  {
    title: '活動',
    path: '/news',
    children: [
      {
        title: '廚藝課程',
        path: '/news/course',
      },
      {
        title: '知識分享',
        path: '/news/knowledge',
      },
      {
        title: '好康優惠',
        path: '/news/promotion',
      },
    ]
  },
  {
    title: '商品',
    path: '/shop',
  },
  {
    title: '登入',
    path: '/login',
  },
  {
    title: <i className="fas fa-shopping-cart"></i>,
    path: '/shopping_cart',
    className: 'd-none d-md-block',
  },
]

export default headerNavList