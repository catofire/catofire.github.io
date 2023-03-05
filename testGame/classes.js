class cell {
    constructor(baseData) {
        this.color = [...baseData.color];
        this.target = [...baseData.target];
        this.getTarget = baseData.getTarget
        this.minMax = {
            "color" : [0,255],
            "mutation" : [0,300]
        }
        this.mutation = {...baseData.mutation}
        for (let mutagen in this.mutation) {
            for(let mutagenID in this[mutagen]) {
                this[mutagen][mutagenID] += this.mutation[mutagen]*Math.random()-this.mutation[mutagen]/2
                if (this.minMax[mutagen]){
                    if (this[mutagen][mutagenID]>this.minMax[mutagen][1]) {this[mutagen][mutagenID]=this.minMax[mutagen][1]}
                    else if (this[mutagen][mutagenID]<this.minMax[mutagen][0]) {this[mutagen][mutagenID]=this.minMax[mutagen][0]};
                };
            };
        }
    }
}