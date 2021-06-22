export const state = () => ({
    menuState: false,
    scrollPosition: 0,
    toggle: false,
    imageModal: false,
    productImg: null

})

export const getters = {
    getMenuState: (state) => {
        return state.menuState
    },
    getScrollPosition: (state) => {
        return state.scrollPosition;
    },
    getImageModal: (state) => {
        return state.imageModal
    }
}

export const mutations = {
    toggleMenuState(state) {
        state.menuState = !state.menuState
    },
    SET_SCROLL_POSITION: (state, position) => {
        state.scrollPosition = position;
    },
    toggleImageModal(state) {
        state.imageModal = !state.imageModal
    },
    SET_IMAGE(state, src) {
        state.productImg = src
    }
}