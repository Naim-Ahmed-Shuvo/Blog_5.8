//momentjs
import moment from "moment";
import Vue from "vue";
Vue.filter("time_format", function(value) {
    return moment(value).format("MMM Do YYYY");
});

Vue.filter("sortlenght", function(text, length, suffix) {
    return text.substring(0, length) + suffix;
});
