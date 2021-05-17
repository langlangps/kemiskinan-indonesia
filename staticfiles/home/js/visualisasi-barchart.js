var data = {
    labels : ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta", "Gorontalo", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Papua Barat", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara"],
    garis_kemiskinan : [522126, 429834,721455,508091,527031,463479,680401,368990,483542,410988,395407,416001,471200,497262,485635,662302,681035,614727,453733,555197,462639,404941,403005,562992,610888,544057,350743,350264,474627,356444,391197,544315,439041,502904],
    indeks_kedalaman : [2.72, 0.52, 0.6, 1, 2.4, 1.94, 0.59, 2.67, 1.1, 1.13, 1.72, 1.82, 1.01, 0.7, 0.8, 1.02, 0.84, 1.11, 1.9, 3.47, 0.94, 2.58, 4.02, 6.16, 5.79, 1.14, 1.89, 1.53, 2.58, 2.04, 1.14, 0.92, 2.08, 1.51],
    indeks_keparahan : [0.71, 0.1, 0.13, 0.23, 0.56, 0.46, 0.11, 0.65, 0.25, 0.23, 0.34, 0.43, 0.23, 0.116, 0.2, 0.24, 0.17, 0.29, 0.41, 1.01, 0.21, 0.61, 1.05, 2.08, 2.06, 0.28, 0.49, 0.39, 0.77, 0.53, 0.25, 0.2, 0.48, 0.39],
    persentase_miskin : [14.99, 3.78, 4.53, 5.92, 15.03, 12.28, 4.53, 15.22, 7.58, 7.88, 11.41, 11.09, 7.17, 4.38, 4.82, 6.1, 6.8, 5.92, 12.34, 17.44, 6.78, 13.97, 20.9, 26.64, 21.37, 6.82, 10.87, 8.72, 12.92, 11, 7.62, 6.28, 12.66, 8.75],
    jumlah_miskin : [814.91,165.19,68.4,775.99,302.58,475.72,480.86,185.02,277.8,3920.23,3980.9,4419.1,366.77,187.87,132.94,230.27,51.79,131.97,1049.32,318.19,86.37,713.89,1153.76,911.37,208.58,483.39,152.02,776.83,398.73,301.82,192.37,344.23,1081.59,1283.29] 
};
$(document).ready(function() {   
    var ctx = $("#provinsi");
    var myLineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.labels,
            datasets: [{
                data: [],
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
                borderColor: "#458af7",
                backgroundColor: '#458af7',
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
};
