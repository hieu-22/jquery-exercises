// search bar effect
const searchBar = document.querySelector('.icon_searchBar')
const searchIcon = document.querySelector('.icon-search')

searchBar.addEventListener('focusin', () => {
    searchBar.style.cssText = "outline: none;animation: to-left .3s forwards;"
    searchIcon.style.cssText = "animation: hide-search-icon .3s forwards;"
})  

searchBar.addEventListener('focusout', () => {
    searchBar.style.cssText = "animation: to-left-off .3s forwards"
    searchIcon.style.cssText = "animation: show-search-icon-back .3s forwards"
})

// ------------------------
