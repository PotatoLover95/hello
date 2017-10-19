$(document).ready(function() {
    if (o.user.logged_in === true) {
        document.getElementById("name").innerHTML = o.user.name(o.user.logged_user);
    }
});
