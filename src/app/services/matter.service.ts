import { Injectable } from '@angular/core';
import MatterInfo from '../../assets/MatterInfo.json';

@Injectable()
export class MatterService {

	private matterInfo: any;
	constructor(){
		this.matterInfo = MatterInfo;
		let i = 1;
		this.matterInfo.forEach((matter) => {
			matter.id = i;
			i++;
		});
	}

	getMatterInfo() {
		return this.matterInfo;
	}

	getFilteredMatterInfo(searchFilter: string){
		return this.matterInfo.filter( x => x['matter'].toLowerCase().includes(searchFilter.toLowerCase()));
	}

	getMatterSpecificInfo(matterId: string){
		return this.matterInfo.filter( x => x['id'] === parseInt(matterId,10))[0];
	}
}
