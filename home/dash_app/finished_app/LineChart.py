import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
from dash.dependencies import Input, Output
from django_plotly_dash import DjangoDash
import pandas as pd

kedalaman_kemiskinan = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/Indeks_Kedalaman_Kemiskinan_Per_Provinsi_2012_2020.xlsx')
keparahan_kemiskinan = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/Indeks_Keparahan_Kemiskinan_Per_Provinsi_2012-2020.xlsx')
presentase_miskin = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/Presentase_Penduduk_Miskin_Per_Provinsi_2012_2020.xlsx')
# penduduk_miskin = pd.read_excel('https://raw.githubusercontent.com/langlangps/datasets/main/Proyek%20Visdat/Jumlah_Penduduk_Miskin_Per_KabKot_2015_2020.xlsx')

kedalaman_kemiskinan = kedalaman_kemiskinan[kedalaman_kemiskinan.Provinsi != 'INDONESIA']
keparahan_kemiskinan = keparahan_kemiskinan[keparahan_kemiskinan.Provinsi != 'INDONESIA']
presentase_miskin = presentase_miskin[presentase_miskin.Provinsi != 'INDONESIA']

kedalaman_kemiskinan['Tahun'] = kedalaman_kemiskinan['Tahun'].dt.year
keparahan_kemiskinan['Tahun'] = keparahan_kemiskinan['Tahun'].dt.year
presentase_miskin['Tahun'] = presentase_miskin['Tanggal'].dt.year
presentase_miskin.drop('Tanggal',inplace = True, axis = 1)

sumatera = ('Sumatera Utara', 'Aceh', 'Lampung', 'Riau', 'Sumatera Selatan', 'Kep. Riau', 'Sumatera Barat', 'Jambi', 'Bengkulu', 'Kep. Bangka Belitung')
jawa_bali_nusa = ('DKI Jakarta', 'DI Yogyakarta', 'Banten', 'Jawa Tengah', 'Nusa Tenggara Timur','Nusa Tenggara Barat', 'Jawa Barat', 'Jawa Timur', 'Bali')
sulawesi = ('Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Tengah')
papua_maluku = ('Maluku', 'Papua', 'Maluku Utara', 'Papua Barat')
kalimantan = ('Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Barat', 'Kalimantan Timur', 'Kalimantan Utara')
pulau = {
    'SUMATERA':sumatera, 
    'JAWA, BALI, DAN NUSA TENGGARA':jawa_bali_nusa, 
    'KALIMANTAN':kalimantan,
    'SULAWESI':sulawesi,
    'MALUKU DAN PAPUA':papua_maluku
}

def get_pulau(provinsi):
  if provinsi in [a.upper() for a in sumatera]:
    return 'Sumatera'
  elif provinsi in [a.upper() for a in jawa_bali_nusa]:
    return 'Jawa, Bali dan Nusa Tenggara'
  elif provinsi in [a.upper() for a in sulawesi]:
    return 'Sulawesi'
  elif provinsi in [a.upper() for a in papua_maluku]:
    return 'Papua dan Maluku'
  elif provinsi in [a.upper() for a in kalimantan]:
    return 'Kalimantan'
  else:
    return 'Tidak masuk'

kedalaman_kemiskinan['Pulau'] = kedalaman_kemiskinan.Provinsi.apply(get_pulau)
keparahan_kemiskinan['Pulau'] = keparahan_kemiskinan.Provinsi.apply(get_pulau)
presentase_miskin['Pulau'] = presentase_miskin.Provinsi.apply(get_pulau)

app = DjangoDash('LineChart')

app.layout = html.Div([
    html.H1(),
    dcc.Dropdown(
        id = 'dropdown-figure-type',
        options=[
            {'label': 'Keparahan Kemiskinan', 'value': 'keparahan_kemiskinan'},
            {'label': 'Kedalaman Kemiskinan', 'value': 'kedalaman_kemiskinan'},
            {'label': 'Persentase Penduduk Miskin', 'value': 'persentase_penduduk_miskin'},
        ],
        searchable = False,
        value = 'kedalaman_kemiskinan'
    ),
    html.Div(
        [dcc.Dropdown(
            id = 'show-type',
            options = [
                {'label':'Pulau', 'value':'by_pulau'},
                {'label':'Provinsi','value':'by_provinsi'},
            ],
            value='by_province'
        )],
        style = {'width':'48%', 'display':'inline-block'}
    ),
    html.Div(
        [dcc.Dropdown(
            id = 'variabel1-show',
            multi=True
        )],
        style = {'width':'48%', 'display':'inline-block'}
    ),
    html.Div(
        [dcc.Dropdown(
            id = 'variabel2-show',
            multi=True
        )],
        style = {'width':'48%', 'display':'inline-block'}
    ),
    dcc.Slider(
        id = 'year-slider',
        min = 1,
        max = 7,
        marks = {
            1: {'label':'1 Tahun'},
            2: {'label':'2 Tahun'},
            3: {'label':'3 Tahun'},
            4: {'label':'4 Tahun'},
            5: {'label':'5 Tahun'},
            6: {'label':'6 Tahun'},
        },
        value = 3,
    ),
    dcc.Graph(id = 'line-chart-kemiskinan-indonesia'),
])


@app.callback(
    Output('line-chart-kemiskinan-indonesia', 'figure'),
    Input('dropdown-figure-type', 'value'),
    Input('year-slider', 'value'),
    Input('show-type','value')
)

def update_figure(figure_type,year_value,province_selector):
    fig = None
    from_year = 2020-year_value

    if figure_type == 'keparahan_kemiskinan':
    
        fig = px.line(
            keparahan_kemiskinan.loc[
                (keparahan_kemiskinan.Semester == 'Semester 2 (September)') & 
                (keparahan_kemiskinan.Wilayah == 'Jumlah') &
                (keparahan_kemiskinan.Tahun >= from_year)
            ],
            y = 'Indeks Keparahan Kemiskinan',
            x = 'Tahun',
            color = 'Provinsi',
            facet_col = 'Pulau',
            facet_col_wrap = 2
        )

        fig.update_traces(line_width = 3)
        fig.update_yaxes(matches = None)
        fig.update_layout(height = 900)

    elif figure_type == 'kedalaman_kemiskinan':
        
        fig = px.line(
            kedalaman_kemiskinan.loc[
                (kedalaman_kemiskinan.Semester == 'Semester 2 (September)') & 
                (kedalaman_kemiskinan.Wilayah == 'Jumlah') &
                (kedalaman_kemiskinan.Tahun >= from_year)
            ],
            y = 'Indkes Kedalaman Kemiskinan',
            x = 'Tahun',
            color = 'Provinsi',
            facet_col = 'Pulau',
            facet_col_wrap = 2,
            title = 'Kedalaman Kemiskinan Masing-masing Provinsi'
        )

        fig.update_traces(line_width = 3)
        fig.update_yaxes(matches = None)
        fig.update_layout(height = 900)
    
    elif figure_type == 'persentase_penduduk_miskin':

        fig = px.line(
            presentase_miskin.loc[
                (presentase_miskin.Semester == 'Semester 2 (September)') & 
                (presentase_miskin.Wilayah == 'Jumlah') &
                (presentase_miskin.Tahun > from_year)
            ],
            y = 'Presentase',
            x = 'Tahun',
            color = 'Provinsi',
            facet_col = 'Pulau',
            facet_col_wrap = 2
        )

        fig.update_traces(line_width = 3)
        fig.update_yaxes(matches = None)
        fig.update_layout(height = 900)

    return fig

@app.callback(
    Output('variabel1-show', 'options'),
    Output('variabel2-show', 'options'),
    Input('show-type', 'value')
)

def set_variabel1_show(show_type):
    if show_type == 'by_pulau':
        return ([{'label':a,'value':a} for a in pulau.keys()], None)
    if show_type == 'by_province':
        return ([{'label':a,'value':a} for a in kedalaman_kemiskinan.Provinsi.unique()], None)

@app.callback(
    Output('variabel2-show', 'options'),
    Input('variabel1-show', 'value'),
    Input('show-type', 'value')
)

def set_variabel2_show(variabel1_show,show_type):
    if show_type== 'by_province':
        return None
    elif show_type == 'by_pulau':
        return sorted([a for a in pulau[variabel1_show]])

@app.callback(
    Output('variabel1-show','value'),
    Output('variabel2-show','value'),
    Input('show-type','value')
)

def set_variabel_value(show_type):
    if show_type == 'by_pulau':
        return [a for a in pulau.keys()], [a for a in kedalaman_kemiskinan.Provinsi.unique()]
    elif show_type == 'by_province':
        return [a for a in kedalaman_kemiskinan.Provinsi.unique()], None