import { Injectable } from '@angular/core';
import ClientBillables from '../../assets/ClientBillables.json';

@Injectable()
export class ClientService {

	private clientInfo: any;
	constructor(){
		this.clientInfo = ClientBillables;
		let i = 1;
		this.clientInfo.forEach((client) => {
			client.id = i;
			i++;
		});
	}

	getClientBillables() {
		return this.clientInfo;
	}

	getFilteredClientBillables(searchFilter: string){
		return this.clientInfo.filter( x => x['client'].toLowerCase().includes(searchFilter.toLowerCase()));
	}

	getClientName(clientId: string){
		return this.clientInfo.filter( x => x['id'] === parseInt(clientId,10))[0]['client'];
	}
	getClientBillingInfo(clientId: string){
		let client = this.clientInfo.filter( x => x['id'] === parseInt(clientId,10))[0];
		return [
			{ "category": "Total Collected ("+ client.totalCollected + ")", "value": this.convertMoneyToDecimal(client.totalCollected) },
			{ "category": "Unbilled Inventory ("+ client.unbilledInventory + ")", "value": this.convertMoneyToDecimal(client.unbilledInventory) },
			{ "category": "Unpaid Inventory ("+ client.unpaidInventory + ")", "value": this.convertMoneyToDecimal(client.unpaidInventory) }
		];
	}

	private convertMoneyToDecimal(dollars: string){
		return Number(dollars.replace(/[^0-9.-]+/g,""));
	}

}
