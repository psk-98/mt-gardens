export const chooseBackgroundImage = (images, pageName) => {
  console.log(images)
  for (var i = 0; i < images?.length; i++) {
    if (images[i].pageName === pageName) return images[i].ImageUrl
  }
}
