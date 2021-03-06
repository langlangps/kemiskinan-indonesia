import dash_core_components as dcc
import dash_html_components as html
import plotly.io as pio
from dash.dependencies import Input, Output
from django_plotly_dash import DjangoDash
from .var_and_func import jumlah_penduduk_miskin, garis_kemiskinan, kedalaman_kemiskinan, keparahan_kemiskinan, presentase_penduduk_miskin, pulau_list, datasets, get_figure, create_figure, description

pio.templates.default = 'plotly_white'

app = DjangoDash('LineChart')

app.layout = html.Div([
    html.H1(),
    html.Div([
        html.Div([
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
                    7: {'label':'7 Tahun'},
                },
                value = 3,
            ),
        ], style = {'padding-top':'3vh'}),
    ], style = {'grid-area':'slider',}),
    html.Div([
        dcc.Dropdown(
            id = 'dropdown-indicator',
            options=[
                {'label': 'Keparahan Kemiskinan', 'value': 'keparahan_kemiskinan'},
                {'label': 'Kedalaman Kemiskinan', 'value': 'kedalaman_kemiskinan'},
                {'label': 'Persentase Penduduk Miskin', 'value': 'presentase_penduduk_miskin'},
                {'label': 'Jumlah Penduduk Miskin', 'value': 'jumlah_penduduk_miskin'},
                {'label': 'Garis Kemiskinan', 'value': 'garis_kemiskinan'},
            ],
            searchable = False,
            value = 'kedalaman_kemiskinan'
        ),
        
        dcc.Dropdown(
            id = 'choose-pulau',
            multi=True,
            options=[
                {'label':value, 'value':key} for key, value in pulau_list.items()
            ],
            value = list(pulau_list.keys())
        ),
    ], style = {
        'grid-area':'control',
    }),
    html.Div(
        id = "plot-description",
        style = {'grid-area':'description'}
    ),
    html.Div([
        dcc.Graph(id = 'line-chart-kemiskinan-indonesia'),
    ], style = {
        'grid-area': 'plot'
    })
], style = {
    'display' : 'grid',
    'grid-template' : '''
        [row1-start] "slider slider" 10vh [row1-end]
        [row2-start] "plot control" 16vh [row2-end] 
        [row3-start] "plot description" 70vh [row3-end] 
        / 65vw 30vw
    ''',
    'background-color':'white'
})


@app.callback(
    Output('line-chart-kemiskinan-indonesia', 'figure'),
    Output('plot-description', 'children'),
    Input('dropdown-indicator', 'value'),
    Input('choose-pulau', 'value'),
    Input('year-slider', 'value')
)

def update_figure(indicator,choose_value,year_value):
    from_year = 2020-year_value

    fig = create_figure(
        datasets[indicator]['data'],
        indicator,
        datasets[indicator]['y'],
        datasets[indicator]['htmlTitle'],
        from_year,
        datasets[indicator]['hovertemplate'],
        pulau = [pulau_list[key] for key in pulau_list if key in choose_value]
    )


    return fig, description[indicator]