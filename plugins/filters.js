import Vue from 'vue'

import moment from 'moment'

import { mapValues } from 'lodash'

 

Vue.filter('formatDate', function(value) {

    if (value) {

        return moment(String(value)).format('MMM DD, YYYY - h:mm a')

    }

})

 

Vue.filter('formatDateBell', function(value) {

    if (value) {

        return moment(String(value)).format('MMM DD YYYY, h:mma')

    }

})

 

Vue.filter('MonthformatDate', function(value) {

    if (value) {

        return value.toLocaleString('default', { month: 'long' });

    }

})

 

Vue.filter('YearformatDate', function(value) {

    if (value) {

        var d = new Date(value);

        return d.getFullYear();    

    }

})

 

Vue.filter('formatDateWithoutTime', function(value) {

    if (value) {

        return moment(String(value)).format('MMM DD, YYYY')

    }

})

 

Vue.filter('dateFormatter', function(value) {

    if (value) {

        return moment(String(value), 'DD/MM/YYYY').format('MMM DD, YYYY')

    }

})

 

Vue.filter('ticketingDateFormatter', function(value) {

    if (value) {

        return moment(String(value)).format('MMM DD, YYYY')

    }

})

 

Vue.filter('nocDateFormatter', function(value) {

    if (value) {

        return moment(String(value), 'YYYY/MM/DD').format('DD MMM, YYYY')

    }

})

 

Vue.filter('nocDateFormatterNew', function(value) {

    if (value) {

        return moment(String(value), 'DD/MM/YYYY').format('DD MMM, YYYY')

    }

})

 

Vue.filter('PayslipDateFormatter', function(value) {

    if (value) {

        return moment(String(value), 'YYYY/MM').format('MMM, YYYY')

    }

})

 

// Regex for Rewards page content which is present in html

 

Vue.filter('HTMLFormatter', function(value) {

    if (value) {

        return value.replace(/<\/?[^>]+(>|$)/g, "").replace('&nbsp;', '').replace('&amp;', '&');

    }

})

 

Vue.filter('ArrayFormatter', function(value) {

    if (value) {

        return value.toString().replace('&amp;', '&');

    }

})

 

//date formatter

 

Vue.filter('DaysFinder', function(value) {

    if (value) {

        let year = value.split('-')

        return new Date(year[0], year[1], 0).getDate();

    }

})

 

// (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

 

Vue.filter('amountFormatter', function(value) {

    if (value) {

        if (value == '' || value == null || value == 0) {

            value = 0.00

            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        } else {

            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        }

    }

 

})