import pandas as pd
import plotly.express as px

description = {
    'keparahan_kemiskinan' : '''
        Provinsi dengan indeks keparahan tertinggi di tiap pulau cenderung mengalami kenaikan di tahun 2020. Provinsi Aceh di Pulau Sumatera Utara, Provinsi NTT di Pulau Jawa dan sekitarnya, Provinsi Sulawesi Tengah di Pulau Sulawesi merupakan provinsi dengan nilai indeks tertinggi di tiap pulau dan mengalami kenaikan indeks di tahun 2020. Sedangkan untuk provinsi dengan nilai tertinggi di tiap pulau yang mengalami penurunan nilai di tahun 2020 adalah Provinsi Kalimantan Utara di Pulau Kalimantan dan Provinsi Papua di Pulau Papua.
    ''', 
    'jumlah_penduduk_miskin': '''
        Provinsi dengan jumlah penduduk miskin terbanyak di tiap pulau yaitu Provinsi Sumatera Utara di Pulau Sumatera, Provinsi Jawa Timur di Pulau Jawa dan sekitarnya, Provinsi Kalimantan Barat di Pulau Kalimantan, Provinsi Sulawesi Selatan di Pulau Sulawesi dan Provinsi Provinsi Papua dan Maluku di Pulau Papua. Secara keseluruhan terlihat jumlah penduduk miskin mengalami penurunan di tahun 2019 kemudian mengalami kenaikan di tahun 2020. Pulau Jawa dan Bali merupakan pulau dengan peningkatan jumlah penduduk miskin yang relatif tinggi.
    ''',
    'garis_kemiskinan' : '''
        Garis kemiskinan di tiap provinsi di Indonesia mengalami kenaikan dari tahun 2018 hingga 2020. Provinsi dengan nilai garis kemiskinan tertinggi tiap pulau di tahun yang sama yaitu Provinsi Bangka Belitung di Pulau Sumatera, Provinsi DKI Jakarta di Pulau Jawa dan sekitarnya, Provinsi Kalimantan Utara di Pualu Kalimantan, Provinsi Sulawesi Tengah di Pulau Sulawesi, dan Provinsi Papua Barat d Pulau Papua.
    ''',
    'kedalaman_kemiskinan' : '''
        Nilai indeks kedalaman kemiskinan tertinggi di Indonesia pada tahun 2020 berada di Pulau Papua tepatnya Provinsi Papua. Kemudian diikuti dengan nilai indeks kedalaman kemiskinan tertinggi tahun 2020 di tiap pulau yaitu Provinsi Nusa Tenggara Timur di Pulau Jawa dan sekitarnya, Provinsi Aceh di Pulau Sumatera Utara, Provinsi Gorontalo di Pulau Sulawesi, dan Provinsi Kalimantan Timur di Pulau Kalimantan.
    ''',
    'presentase_penduduk_miskin' : '''
        Persentase penduduk miskin yang tinggi didominasi provinsi yang berada di Pulau Papua dengan Provinsi Papua dengan persentase penduduk miskin tertinggi di pulau tersebut. Pulau dengan persentase penduduk miskin yang cukup rendah didominasi di Pulau Kalimantan dan Pulau Sulawesi. Persentase penduduk miskin tertinggi di Pulau Kalimantan berada di Provinsi Kalimantan Barat dan di Pulau Sulawesi yaitu Provinsi Gorontalo. Pulau Sumatera dan Pulau Jawa mendominasi provinsi dengan persentase penduduk miskin yang berada di antara nilai tertinggi dan terendah. Persentase penduduk miskin tertinggi untuk tiap pulau berada di Provinsi Bengkulu untuk Pulau Sumatera dan Provinsi NTT untuk Pulau Jawa dan sekitarnya.
    '''
}

# Nama-nama provinsi di masing-masing pulau
sumatera = ('Sumatera Utara', 'Aceh', 'Lampung', 'Riau', 'Sumatera Selatan', 'Kepulauan Riau', 'Sumatera Barat', 'Jambi', 'Bengkulu', 'Kep. Bangka Belitung')
jawa_bali_nusa = ('DKI Jakarta', 'DI Yogyakarta', 'Banten', 'Jawa Tengah', 'Nusa Tenggara Timur','Nusa Tenggara Barat', 'Jawa Barat', 'Jawa Timur', 'Bali')
sulawesi = ('Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Tengah')
papua_maluku = ('Maluku', 'Papua', 'Maluku Utara', 'Papua Barat')
kalimantan = ('Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Barat', 'Kalimantan Timur', 'Kalimantan Utara')

def get_pulau(provinsi):
  if provinsi in sumatera:
    return 'Sumatera'
  elif provinsi in jawa_bali_nusa:
    return 'Jawa, Bali dan Nusa Tenggara'
  elif provinsi in sulawesi:
    return 'Sulawesi'
  elif provinsi in papua_maluku:
    return 'Papua dan Maluku'
  elif provinsi in kalimantan:
    return 'Kalimantan'
  else:
    return 'Tidak masuk'

# Loading data
jumlah_penduduk_miskin = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/udah%20di%20filter/Jumlah_Penduduk_Miskin_Per_Provinsi_2013_2020.xlsx')
garis_kemiskinan = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/udah%20di%20filter/Garis_Kemiskinan_Menurut_Provinsi_2013_2020.xlsx')
kedalaman_kemiskinan = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/udah%20di%20filter/Indeks_Kedalaman_Kemiskinan_Per_Provinsi_2013_2020.xlsx')
keparahan_kemiskinan = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/udah%20di%20filter/Indeks_Keparahan_Kemiskinan_Per_Provinsi_2013-2020.xlsx')
presentase_penduduk_miskin = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/udah%20di%20filter/Presentase_Penduduk_Miskin_Per_Provinsi_2013_2020.xlsx')

# Mengubah nilai dari variabel Tahun, dari Date menjadi Year
garis_kemiskinan['Tahun'] = garis_kemiskinan['Tahun'].dt.year
kedalaman_kemiskinan['Tahun'] = kedalaman_kemiskinan['Tahun'].dt.year
keparahan_kemiskinan['Tahun'] = keparahan_kemiskinan['Tahun'].dt.year
presentase_penduduk_miskin['Tahun'] = presentase_penduduk_miskin['Tahun'].dt.year

# Mapping value menjadi variabel pulau
jumlah_penduduk_miskin['Pulau'] = jumlah_penduduk_miskin.Provinsi.apply(get_pulau)
garis_kemiskinan['Pulau'] = garis_kemiskinan.Provinsi.apply(get_pulau)
kedalaman_kemiskinan['Pulau'] = kedalaman_kemiskinan.Provinsi.apply(get_pulau)
keparahan_kemiskinan['Pulau'] = keparahan_kemiskinan.Provinsi.apply(get_pulau)
presentase_penduduk_miskin['Pulau'] = presentase_penduduk_miskin.Provinsi.apply(get_pulau)

def get_facet_col_wrap(choose_pulau):
    if len(choose_pulau) <= 2:
        return 1
    elif len(choose_pulau) <=4:
        return 2
    elif len(choose_pulau) <=6:
        return 3
    else:
        return 3


pulau = {
    'SUMATERA':sumatera, 
    'JAWA, BALI, DAN NUSA TENGGARA':jawa_bali_nusa, 
    'KALIMANTAN':kalimantan,
    'SULAWESI':sulawesi,
    'MALUKU DAN PAPUA':papua_maluku
}

pulau_list = {
    'sumatera':'Sumatera',
    'jawa_bali_nusa':'Jawa, Bali dan Nusa Tenggara',
    'sulawesi' : 'Sulawesi',
    'kalimantan' : 'Kalimantan',
    'papua_maluku' : 'Papua dan Maluku'
}

datasets = {
    'kedalaman_kemiskinan': {
        'data'  : kedalaman_kemiskinan,
        'y'     : 'Indeks Kedalaman Kemiskinan',
        'title' : 'Indeks Kedalaman Kemiskinan berdasarkan Provinsi di Indonesia',
        'htmlTitle' : '''
            <b style = "padding:0;">
              <span style = "font-size:25px;">
                Indeks Kedalaman Kemiskinan
              </span>
            </b>
            <br>
            <span style = "font-size:16px">
              berdasarkan Provinsi di Indonesia
            </span>
            <br>
        ''',
        'hovertemplate' : '<br>'.join([
          '<b>%{customdata[0]}</b> (%{x})',
          '<br>',
          'Indeks Kedalaman Kemiskinan: <b>%{y:.2f}</b>'
        ]),
    },
    'keparahan_kemiskinan' : {
        'data'  : keparahan_kemiskinan,
        'y'     : 'Indeks Keparahan Kemiskinan',
        'title' : 'Indeks Keparahan Kemiskinan berdasarkan Provinsi di Indonesia',
        'htmlTitle' : '''
            <b style = "padding:0;">
              <span style = "font-size:25px;">
                Indeks Keparahan Kemiskinan
              </span>
            </b>
            <br>
            <span style = "font-size:16px">
              berdasarkan Provinsi di Indonesia
            </span>
            <br>
        ''',
        'hovertemplate' : '<br>'.join([
          '<b>%{customdata[0]}</b> (%{x})',
          '<br>',
          'Indeks Keparahan Kemiskinan: <b>%{y:.2f}</b>'
        ]),
    },
    'jumlah_penduduk_miskin' : {
        'data'  : jumlah_penduduk_miskin,
        'y'     : 'Jumlah Penduduk Miskin (Ribu)',
        'title' : "Jumlah Penduduk Miskin berdasarkan Provinsi di Indonesia",
        'htmlTitle' : '''
            <b style = "padding:0;">
              <span style = "font-size:25px;">
                Jumlah Penduduk Miskin
              </span>
            </b>
            <br>
            <span style = "font-size:16px">
              berdasarkan Provinsi di Indonesia
            </span>
            <br>
        ''',
        'hovertemplate' : '<br>'.join([
          '<b>%{customdata[0]}</b> (%{x})',
          '<br>',
          '<b>%{y}</b> ribu penduduk miskin'
        ]),
    },
    'garis_kemiskinan' : {
        'data'  : garis_kemiskinan,
        'y'     : "Garis Kemiskinan (Ribu)",
        'title' : 'Garis Kemiskinan berdasarkan Provinsi di Indonesia',
        'htmlTitle' : '''
            <b style = "padding:0;">
              <span style = "font-size:25px;">
                Garis Kemiskinan
              </span>
            </b>
            <br>
            <span style = "font-size:16px">
              berdasarkan Provinsi di Indonesia
            </span>
            <br>
        ''',
        'hovertemplate' : '<br>'.join([
          '<b>%{customdata[0]}</b> (%{x})',
          '<br>',
          '<b>%{customdata[1]:.2f}</b> Juta Rupiah'
        ])
    }, 
    'presentase_penduduk_miskin' : {
        'data'  : presentase_penduduk_miskin,
        'y'     : 'Presentase',
        'title' : 'Persentase Penduduk Miskin berdasarkan Provinsi di Indonesia',
        'htmlTitle' : '''
            <b style = "padding:0;">
              <span style = "font-size:25px;">
                Persentase Penduduk Miskin
              </span>
            </b>
            <br>
            <span style = "font-size:16px">
              berdasarkan Provinsi di Indonesia
            </span>
            <br>
        ''',
        'hovertemplate' : '<br>'.join([
          '<b>%{customdata[0]}</b> (%{x})',
          '<br>',
          '<b>%{y:.2f}%</b> Penduduk Miskin'
        ]),
    }
}


def get_facet_col_wrap(choose_value):
  if len(choose_value) <= 2:
    return 1
  elif len(choose_value) <= 4:
    return 2
  elif len(choose_value) <= 6:
    return 3

def get_figure(data, y, title, from_year, pulau = []):

    if pulau:
        data = data[data.Pulau.apply(lambda x: x in pulau)]
    
    data = data[data.Tahun >= from_year]
    
    
    fig = px.line(data, 
            x="Tahun", 
            y=y,
            color="Provinsi", 
            title=title,
            facet_col = 'Pulau',
            facet_col_wrap = get_facet_col_wrap(pulau)
    )

    # fig.update_layout(height=900)
    fig.update_yaxes(matches=None)
    
    return fig

def create_figure(data, indicator, y, title, from_year, hovertemplate, pulau = []):
  
  if pulau:
    data = data[data.Pulau.apply(lambda x: x in pulau)]
    
  data = data[data.Tahun >= from_year]
  
  fig = px.line(data, 
          x="Tahun", 
          y=y,
          color="Provinsi", 
          title=title,
          facet_col = 'Pulau',
          facet_col_wrap = get_facet_col_wrap(pulau),
          facet_row_spacing = 0.12,
          facet_col_spacing = 0.06,
          custom_data = ['Provinsi'] if indicator != 'garis_kemiskinan' else ['Provinsi', data['Garis Kemiskinan (Ribu)']/1000]
  )

  fig.update_layout(
      height=700,
      font_family = 'Arial',
      title_font_size = 30,
      title_x = 0.5,
      title_y = 0.9,
      showlegend = False,
      hoverlabel=dict(
          bgcolor="white",
          font_size=16,
          font_family="Arial"
      ),
      margin = {
          't':150
      }
  )

  fig.update_traces(
      hovertemplate = hovertemplate,
      mode = 'markers+lines'
  )

  fig.update_yaxes(matches=None)
  fig.update_xaxes(matches=None)
  fig.for_each_xaxis(
      lambda xaxis:xaxis.update(
          showticklabels = True,
          showgrid = False
      )
  )
  fig.for_each_yaxis(
      lambda yaxis:yaxis.update(
          showticklabels = True,
          showline = True,
          showgrid = False,
          linewidth = 2,
          linecolor = 'rgba(200,200,220,0.8)',
          ticks = 'inside'
      )
  )

  return fig