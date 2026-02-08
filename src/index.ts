import type { PlatsName } from "./plats/type";
import * as Plats from "./plats"


export class InspirationPlats {
    private store: Record<PlatsName, any>
    constructor(){
        this.store={
            "Douyin":Plats.Douyin,
            "Facebook":Plats.Facebook,
            "Tiktok":Plats.Tiktok,
            "Youtube":Plats.Youtube
        }
        
    }
    build(supplier: PlatsName) {
        return new this.store[supplier]()
    }
}

