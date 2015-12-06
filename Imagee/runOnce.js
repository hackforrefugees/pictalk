var files = JSON.parse(Assets.getText("komHit.json"));
files.forEach(function (file, index, array) {
    Files.insert(file);
});
var categories = JSON.parse(Assets.getText("categories.json"));
categories.forEach(function (category, index, array) {
    Categories.insert(category);
});
