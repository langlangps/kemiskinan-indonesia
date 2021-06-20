# Dashboard Informasi Kemiskinan Indonesia

Sebuah *website informational dashboard* yang memberikan informasi mengenai indikator-indikator kemiskinan Indonesia. 

## Tim Pengembang Website

* M. Baital Salsabil (Politeknik Statistika STIS)
* Nur Ulum Rahmanulloh (Politeknik Statistika STIS)
* Paulina Siallagan (Politeknik Statistika STIS)
* Sabriella Hafifah
* Tubagus Langlang Purwasasmita (Politeknik Statistika STIS)

## Fitur

Untuk tampilan akhir dari website ini, bisa di cek di [Kemiskinan Indonesia](https://kemiskinan-indonesia.herokuapp.com). 

Dibawah ini merupakan fitur yang diberikan di website ini terhitung **2 Juni 2021**

### Tentang

Dengan tentang, pengguna situs dapat melihat konsep dan definisi mengenai kemiskinan yang diharapkan dapat membantu memahami visualisasi yang diberikan

![Tentang](https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/pict/about.png)

### Line Facet Chart

Pengguna dapat melihat perkembangan indikator-indikator kemiskinan Indonesia dari 2013-2020 melalui chart berikut. Selain itu, pembagian facet didasarkan pada pulau pulau besar di Indonesia. Terdapat 2 Dropdown, yaitu :
* Dropdown untuk memilih indikator kemiskinan
* Dropdown untuk memilih pulau

![Line Facet Chart](https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/pict/line-facet-chart.png)

### Table Lens

Setelah melihat perkembangan kemiskinan per tahun, pengguna dapat membandingkan indikator-indikator kemiskinan tersebut antar Provinsi di Indonesia. Terhitung **2 Juni 2021**, kami menggunakan indikator-indikator kemiskinan pada tahun 2020 saja agar dapat menyesuaikan dengan tema penelitian kami : Pengaruh covid 19 terhadap kemiskinan. 


![Table Lens](https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/pict/table-lens.png)


### Cloropeth Map

Dengan visualisasi geospasial, pengguna situs dapat dengan mudah mencari ringkasan/*summary* dari indikator-indikator kemiskinan di Indonesia untuk masing-masing provinsi. Cloropeth map yang kami berikan di situs tersebut menggambarkan indikator persentase penduduk miskin dengan warna masing masing provinsi, serta indikator lainnya dengan cara *hover* terhadap peta

![Cloropeth Map](https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/pict/cloropeth-map.png)

## Teknologi yang digunakan

* Python (Django)
Python sebagai pondasi utama pembuatan website. Lebih spesifik lagi, menggunakan Django sebagai framework website. 

* HTML, CSS, Javascript
Kerangka utama dalam *user interface*. 

* Plotly, Chart.js
Teknologi yang digunakan untuk pembuatan visualisasi

* Heroku
Web server yang digunakan pada situs [Kemiskinan Indonesia](https://kemiskinan-indonesia.herokuapp.com/). 

## Requirements

Untuk **keperluan *developing***, terdapat beberapa *requirement* agar mendukung aktivitas pengembangan proyek ini. Semua sudah terlampir di *requirements.txt* :

```
    dj-database-url==0.5.0
    gunicorn==20.1.0
    psycopg2-binary==2.8.6
    whitenoise==5.2.0
    django-plotly-dash==1.6.3
    redis==3.5.3
    channels-redis==3.2.0
    daphne==3.0.2
    django-redis==4.12.1
    channels-redis==3.2.0
    pandas==1.2.4
    openpyxl==3.0.7
```

Untuk memulai run di local server, perhatikan `DEBUG` pada kemiskinan_indonesia/settings.py. Pastikan nilai `DEBUG = True`

Selanjutnya, arahkan direktori terminal menuju `root directory`, kemudian jalankan command berikut (Windows) :

```
python manage.py runserver
```

## Kontribusi 

Kami sangat menerima request dari developer. Silakan *open an issue* untuk memulai diskusi terhadap perubahan mayor yang ingin diberikan. Kami sangat mengharapkan *pull request*

