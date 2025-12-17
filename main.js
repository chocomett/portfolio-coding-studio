function toggleDetail(e) {
    const target = $(e.target)
    const item = $(target).parents(".exp-item")
    const detail = $(item).children(".exp-item-detail")

    $(detail).slideToggle()
    
}