export const state = () => ({
    scrollPosition: 0,
})

export const getters = {
    getScrollPosition: (state) => {
        return state.scrollPosition;
    },
}

export const mutations = {
    SET_SCROLL_POSITION: (state, position) => {
        state.scrollPosition = position;
    },
}