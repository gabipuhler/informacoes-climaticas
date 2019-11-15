function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=4fe19e3bfc088181931f82bd2ef26695',
        dataType: 'json',
        success: function (data) {

            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempFormatada + "°");


            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);

            umidade = data.main.humidity;
            $('#umidade').html(umidade + "%");

            pressao = data.main.pressure;
            $('#pressao').html(pressao + "hPa");

            tempMax = data.main.temp_max;
            $('#tempMax').html(tempMax + "º");

            tempMin = data.main.temp_min;
            $('#tempMin').html(tempMin + "º");

            velocidade = data.wind.speed;
            $('#velocidade').html(velocidade + "Km/h");

            var dataNascer = new Date(data.sys.sunrise * 1000);
            var descDataNascer = dataNascer.getHours() + ':'+ dataNascer.getMinutes();
            $('#nascer').html(descDataNascer);

            var dataPor = new Date(data.sys.sunset * 1000);
            var descDataPor = dataPor.getHours() + ':'+ dataPor.getMinutes();
            $('#por').html(descDataPor);
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
         
        },

        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}


function traduzirDescricao(descricao) {

    descricaoTraduzida = "";

    if (descricao == "clear sky") {
        descricaoTraduzida = "Céu limpo";
    } else if (descricao == "few clouds") {
        descricaoTraduzida = "Poucas Nuvens";
    } else if (descricao == "scattered clouds") {
        descricaoTraduzida = "Nuvens Dispersas";
    } else if (descricao == "broken clouds") {
        descricaoTraduzida = "Nuvens Quebradas";
    } else if (descricao == "shower rain") {
        descricaoTraduzida = "Chuva de Banho";
    } else if (descricao == "rain") {
        descricaoTraduzida = "Chuva";
    } else if (descricao == "thunderstorm") {
        descricaoTraduzida = "Trovoada";
    } else if (descricao == "snow") {
        descricaoTraduzida = "Neve";
    } else if (descricao == "mist") {
        descricaoTraduzida = "Névoa";
    }

    return descricaoTraduzida;
}

window.onload = function () {
    getClima();
};


