import isString from 'lodash.isstring'
export const state = () => ({
  pageType: '',
  title: 'MVPCOOL เว็บพนันออนไลน์เว็บตรง ของดีฝากไม่มีขั้นต่ำไม่ผ่านเอเย่นต์',
  subtitle: 'สมัครเล่น เว็บพนันออนไลน์เว็บตรง กับเราที่ดีที่สุด ทำรายการผ่านวอเลท มีโปรดีให้เลือกต้องที่นี่เลย',
  featureImage: 'https://i.postimg.cc/5NTw9yX5/01.jpg',
  content: 'MVPCOOL เว็บพนันออนไลน์เว็บตรง ของดีฝากไม่มีขั้นต่ำไม่ผ่านเอเย่นต์',
  author: 'Southblade',
  date: '7-12-2022'
})
export const mutations = {
  set(state, data) {
    state = Object.assign(state, data)
  }
}
export const actions = {
  nuxtServerInit(store, context) {
    this.$cms = context.store.$cms
  },
  set({ commit }, { resource, slug }) {
    if (!resource) {
      setOtherPageData(commit, this.$siteConfig)
    } else {
      const theResource = isString(resource) ? this.$cms[resource] : resource
      const data = Object.assign(theResource.getOne(slug), {
        pageType: theResource.slug
      })
      data.slug = slug
      commit('set', data)
    }
  }
}

function setOtherPageData(commit, siteConfig) {
  commit('set', {
    title: siteConfig.siteName,
    subtitle: siteConfig.tagline,
    featureImage: siteConfig.featureImage
  })
}
