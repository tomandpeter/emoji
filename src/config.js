module.exports = [
  {
    // 文件路径，heo 从 src/image/heo 目录下寻找文件
    path: 'heo',
    // 生成json时的前缀
    prefix: 'heo-',
    // 图片基路径
    baseUrl: 'https://emoji.kelseychen.net/heo/image',
    twikoo: {
      // twikoo 生成的tab栏名称
      name: `<img src="${'https://emoji.kelseychen.net/heo/image'}/害羞.png" style="width: 30px;top: 4px;position: relative;" title="Heo">`
    },
    artalk: {
      // artalk 生成的tab栏名称
      name: `Heo`
    },
    waline: {
      name: 'Heo',
      icon: '害羞.png'
    },
    discuss: {
      name: `Heo`
    }
  },
  {
    path: 'aru',
    prefix: 'aru-',
    baseUrl: 'https://emoji.kelseychen.net//aru/image',
    twikoo: {
      name: `kelsey`
    },
    artalk: {
      name: `kelsey`
    },
    waline: {
      name: 'kelsey',
      icon: '001.gif'
    },
    discuss: {
      name: `kelsey`
    }
  },
  {
    path: 'kcoin',
    prefix: 'kcoin-',
    baseUrl: 'https://emoji.kelseychen.net/kcoin/image',
    twikoo: {
      name: `酷币`
    },
    artalk: {
      name: `酷币`
    },
    waline: {
      name: '酷币',
      icon: 'coolb1.png'
    },
    discuss: {
      name: `酷币`
    }
  },
  {
    path: 'bili_tv',
    prefix: 'btv-',
    baseUrl: 'https://emoji.kelseychen.net/bili_tv/image',
    twikoo: {
      name: `哔哩TV`
    },
    artalk: {
      name: `哔哩TV`
    },
    waline: {
      name: '哔哩TV',
      icon: '点赞.gif'
    },
    discuss: {
      name: `哔哩TV`
    }
  },
  {
    path: 'huaji',
    prefix: 'huaji-',
    baseUrl: 'https://emoji.kelseychen.net/huaji/image',
    twikoo: {
      name: `滑稽`
    },
    artalk: {
      name: `滑稽`
    },
    waline: {
      name: '滑稽',
      icon: '啊哈哈.jpg'
    },
    discuss: {
      name: `滑稽`
    }
  },
  {
    path: 'parrot',
    prefix: 'parrot-',
    baseUrl: 'https://emoji.kelseychen.net/parrot/image',
    twikoo: {
      name: `小鹦鹉`
    },
    artalk: {
      name: `小鹦鹉`
    },
    waline: {
      name: '小鹦鹉',
      icon: '摇椅.gif'
    },
    discuss: {
      name: `小鹦鹉`
    }
  },
  {
    path: 'other',
    prefix: 'other-',
    baseUrl: 'https://emoji.kelseychen.net/other/image',
    twikoo: {
      name: `其他`
    },
    artalk: {
      name: `其他`
    },
    waline: {
      name: '其他',
      icon: '00015.jpg'
    },
    discuss: {
      name: `其他`
    }
  },
  {
    path: 'blob',
    prefix: 'blob-',
    baseUrl: 'https://emoji.kelseychen.net/blob/image',
    twikoo: {
      name: `Blob`
    },
    artalk: {
      name: `Blob`
    },
    waline: {
      name: 'Blob',
      icon: 'blob.png'
    },
    discuss: {
      name: `Blob`
    }
  }
]
