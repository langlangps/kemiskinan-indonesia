var map = L.map('map').setView([-2.23093, 118, 86888], 5);

        L.tileLayer(
            'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                ' <a href = "https://creativecommons.org/licenses/by-sa/2.0/">CC - BY - SA</a>, ' +
                'Imagery ©<a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
        }).addTo(map)

        // control untuk menampilkan data

        var info = L.control();

        info.onAdd = function (map) {

            this._div = L.DomUtil.create('div', 'info');

            this.update();

            return this._div;

        };

        info.update = function (props) {

            this._div.innerHTML = '<h4>Kondisi Kemiskinan per Provinsi</h4>' + (props ? '<b><u>' + props.PROVINSI +
                '</u></b><br /> <b>Jumlah Penduduk Miskin: </b>' + props.jumlah_miskin + ' ribu jiwa' +
                '</b><br /><b>Persentase Penduduk Miskin: </b>' + props.persen_miskin + '%' +
                '</b><br /><b>Garis Kemiskinan: </b>' + props.garis_kemiskinan + 
                '</b><br /><b>Indeks Kedalaman Kemiskinan: </b>' + props.indeks_kedalaman + 
                '</b><br /><b>Indeks Keparahan Kemiskinan: </b>' + props.indeks_keparahan : 'sorot provinsi untuk mengetahui kondisi per provinsi');

        };

        info.addTo(map);
        //Tambahkan warna
        function getColor(w) {
            return w > 25 ? '#BD0026' :
                    w > 20 ? '#E31A1C' :
                        w > 15 ? '#FC4E2A' :
                            w > 10 ? '#F98E1D' :
                                w > 5 ? '#FEDC56' :
                                    '#FFEDA0';
        }

        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.jumlah_miskin)
            };
        }
        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.persen_miskin)
            };
        }

        function highlightFeature(e) {
            var layer = e.target;
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.2
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
            info.update(layer.feature.properties);
        }
        var geojson;

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }
        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }
        geojson = L.geoJson(statesData, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);
        map.attributionControl.addAttribution(
            ' Kompilasi Data Kemiskinan Indonesia &copy; <a href="http://bps.go.id/">Badan Pusat Statistik</a>');
        var legend = L.control({ position: 'bottomright' });
        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 5, 10, 15, 20, 25],
                labels = ['Persentase Kemiskinan (%)'],
                from, to;
            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];
                labels.push(
                    '<i style="background:' + getColor(from + 1) + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }
            div.innerHTML = labels.join('<br>');
            return div;
        };
        legend.addTo(map);