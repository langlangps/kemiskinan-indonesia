var data = {
    labels : ["Aceh", "Bali", "Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta", "Gorontalo", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara", "Kep. Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Papua Barat", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara"],
    garis_kemiskinan : [529174.0, 429475.0, 503291.5, 543204.0, 446248.0, 341669.5, 374825.5, 503626.0, 414020.5, 398333.5, 417399.5, 481484.5, 502283.5, 488916.0, 665734.0, 686619.5, 726655.0, 608680.0, 470718.5, 575279.0, 477141.5, 408212.0, 436718.5, 592379.0, 618914.5, 550795.5, 354618.0, 363127.0, 485722.5, 371981.0, 397660.0, 547602.0, 447584.5, 503585.5],
    indeks_kedalaman : [1.61, 0.55, 0.98, 2.49, 1.98, 0.67, 0.43, 1.77, 1.18, 1.61, 1.37, 0.81, 0.76, 0.91, 0.68, 0.6, 0.64, 1.16, 1.3, 0.94, 0.65, 2.85, 1.28, 0.82, 1.15, 1.02, 2, 0.81, 1.83, 1.66, 0.9, 0.8, 2.38, 1.54],
    indeks_keparahan : [0.38, 0.11, 0.3, 0.59, 0.47, 0.15, 0.09, 0.46, 0.26, 0.39, 0.37, 0.21, 0.19, 0.24, 0.17, 0.13, 0.16, 0.41, 0.29, 0.21, 0.11, 0.71, 0.28, 0.17, 0.35, 0.27, 0.6, 0.18, 0.43, 0.61, 0.2, 0.24, 0.72, 0.39],
    persentase_miskin : [15.43, 4.45, 6.63, 15.3, 12.8, 4.69, 15.59, 7.97, 8.43, 11.84, 11.46, 7.24, 4.83, 5.26, 6.64, 7.41, 4.89, 6.13, 12.76, 17.99, 6.97, 14.23, 21.21, 26.8, 21.7, 7.04, 11.5, 8.99, 13.06, 11.69, 7.78, 6.56, 12.98, 9.14],
    jumlah_miskin : [833.91, 196.92, 857.64, 306, 503.14, 496.84, 185.31, 288.1, 4188.52, 4119.93, 4585.97, 370.71, 206.92, 141.78, 243.99, 52.7, 72.05, 142.61, 1091.14, 322.4, 87.52, 746.04, 1173.53, 912.23, 215.22, 491.22, 159.05, 800.24, 403.74, 317.32, 195.85, 364.79, 1119.65, 1356.72] 
};
$(document).ready(function() {   
    var ctx = $("#provinsi");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: [],
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            },
            maintainAspectRatio: false
        }
    });
    var ctx = $("#garis-kemiskinan");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.garis_kemiskinan,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#indeks-kedalaman");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.indeks_kedalaman,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#indeks-keparahan");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.indeks_keparahan,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#persentase-miskin");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.persentase_miskin,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#jumlah-miskin");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.jumlah_miskin,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
});
var keys;
function sorting(){
    // if (document.getElementById("sort_by").value == "provinsi") {
    //     keys = Array.from(data.labels.keys()).sort((a, b) => data.labels[b] - data.labels[a])
    // };
    if (document.getElementById("sort_by").value == "persentase_miskin") {
        keys = Array.from(data.persentase_miskin.keys()).sort((a, b) => data.persentase_miskin[b] - data.persentase_miskin[a])
    };
    if (document.getElementById("sort_by").value == "garis_kemiskinan") {
        keys = Array.from(data.garis_kemiskinan.keys()).sort((a, b) => data.garis_kemiskinan[b] - data.garis_kemiskinan[a])
    };
    if (document.getElementById("sort_by").value == "indeks_kedalaman") {
        keys = Array.from(data.indeks_kedalaman.keys()).sort((a, b) => data.indeks_kedalaman[b] - data.indeks_kedalaman[a])
    };
    if (document.getElementById("sort_by").value == "indeks_keparahan") {
        keys = Array.from(data.indeks_keparahan.keys()).sort((a, b) => data.indeks_keparahan[b] - data.indeks_keparahan[a])
    };
    if(document.getElementById("sort_by").value == "jumlah_miskin") {
        keys = Array.from(data.jumlah_miskin.keys()).sort((a, b) => data.jumlah_miskin[b] - data.jumlah_miskin[a])
    };
    data.labels = keys.map(i => data.labels[i]);
    data.garis_kemiskinan = keys.map(i => data.garis_kemiskinan[i]);
    data.indeks_kedalaman = keys.map(i => data.indeks_kedalaman[i]);
    data.indeks_keparahan = keys.map(i => data.indeks_keparahan[i]);
    data.persentase_miskin = keys.map(i => data.persentase_miskin[i]);
    data.jumlah_miskin = keys.map(i => data.jumlah_miskin[i]); 
$(document).ready(function() {   
    var ctx = $("#provinsi");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: [],
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            },
            maintainAspectRatio: false
        }
    });
    var ctx = $("#garis-kemiskinan");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.garis_kemiskinan,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#indeks-kedalaman");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.indeks_kedalaman,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#indeks-keparahan");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.indeks_keparahan,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#persentase-miskin");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.persentase_miskin,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
    var ctx = $("#jumlah-miskin");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.jumlah_miskin,
                borderColor: "#52575D",
                backgroundColor: '#52575D',
                fill: true
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales:{
                yAxes: [{
                    display: false
                }]
            }
        }
    });
});
if (document.getElementById("sort_by").value == "garis_kemiskinan") {
    document.getElementById("demo").innerHTML = "Tiga provinsi dengan angka garis kemiskinan tertinggi pada tahun 2020 adalah Provinsi Kepulauan Bangka Belitung sebesar 726655, Provinsi Kalimantan Utara sebesar 686619.5, dan Provinsi Kalimantan Timur sebesar 665734.</br></br>Untuk melihat kondisi masing-masing provinsi di tahun 2020 dapat dilihat pada peta di bawah ini.";
};
if (document.getElementById("sort_by").value == "indeks_kedalaman") {
    document.getElementById("demo").innerHTML = "Tiga provinsi dengan indeks kedalaman kemiskinan tertinggi pada tahun 2020 adalah Provinsi Nusa Tenggara  Barat sebesar 2.85, Provinsi Bengkulu sebesar 2.49, dan Provinsi Sumatera Selatan sebesar 2.38.</br></br>Untuk melihat kondisi masing-masing provinsi di tahun 2020 dapat dilihat pada peta di bawah ini.";
};
if (document.getElementById("sort_by").value == "indeks_keparahan") {
    document.getElementById("demo").innerHTML = "Tiga provinsi dengan indeks keparahan kemiskinan tertinggi pada tahun 2020 adalah Provinsi Sumatera Selatan sebesar 0.72, Provinsi Nusa Tenggara Barat sebesar 0.71, dan Provinsi Sulawesi Tenggara sebesar 0.61.</br></br>Untuk melihat kondisi masing-masing provinsi di tahun 2020 dapat dilihat pada peta di bawah ini.";
};
if (document.getElementById("sort_by").value == "persentase_miskin") {
    document.getElementById("demo").innerHTML = "Tiga provinsi dengan persentase penduduk miskin tertinggi pada tahun 2020 adalah Provinsi Papua sebesar 26.8%, Provinsi Papua Barat sebesar 21.7%, dan Provinsi Nusa Tenggara Timur sebesar 21.21%.</br></br>Untuk melihat kondisi masing-masing provinsi di tahun 2020 dapat dilihat pada peta di bawah ini.";
};
if(document.getElementById("sort_by").value == "jumlah_miskin") {
    document.getElementById("demo").innerHTML = "Tiga provinsi dengan jumlah penduduk miskin tertinggi pada tahun 2020 adalah Provinsi Jawa Timur sebesar 4585.97 ribu jiwa, Provinsi Jawa Barat sebesar 4188.52 ribu jiwa, dan Provinsi Jawa Tengah sebesar 4119.93 ribu jiwa.</br></br>Untuk melihat kondisi masing-masing provinsi di tahun 2020 dapat dilihat pada peta di bawah ini.";
};
};
