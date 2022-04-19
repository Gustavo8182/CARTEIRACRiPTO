import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CryptoPriceService {


constructor(private httpClient: HttpClient ) { }
options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

cryptos:String = "USD-BRL,ETH-BRL,BTC-BRL"

getPriceAll() {
  return this.httpClient.get(`https://economia.awesomeapi.com.br/last/${this.cryptos}`,this.options)
}

getPrice(crypto:String) {
  let date =  Date.now();
  return this.httpClient.get(`https://www.mercadobitcoin.net/api/${crypto}/day-summary/${date}`)
  console.log(date);
}

/*
callback_todas_cotacoes = function(erro,res,body){
  let json = JSON.parse(body);
  console.log(json);
}*/

}
