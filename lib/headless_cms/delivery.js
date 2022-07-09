import contentClient from "./client";

export class Delivery {
    constructor(client) {
        this._client = client;
        this._errors = [];
    }
    error(e) {
        this._errors.push(e);
        return e;
    }
    errors() { return this._errors; }

    client() { return this._client || null ; }

    async endpoints(contentType) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";

            const data = await this.client().getEntries({
                "sys.contentType.sys.id": contentType,
            });
    
            return data.items.map(entry => {
                return entry.fields.slug;
            });
        } catch (e) {
            return this.error(e);
        }
    }

    async entries(contentType) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";
            
            const entries = await contentClient.getEntries({
                content_type: contentType,
            });
    
            if (!entries.total) throw "Failed to get entries";
            
            return {
                count: entries.total,
                items: entries?.items || [],
            };

        } catch (e) {
            return this.error(e)
        }
    }

    async entry(contentType, key, value) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";
            if (!key) throw "No search key specified";
    
            const objectKey = `fields.${key}`;
    
            const searchParams = {
                content_type: contentType,
            };
    
            searchParams[objectKey] = value;
    
            const entries = await contentClient.getEntries(searchParams);
    
            if (!entries.total) throw "Failed to get entries";
    
            if (entries.total > 0) {
                return entries?.items[0] || null;
            } else {
                return null;
            }
        } catch (e) {
            return this.error(e);
        }
    }
} /* END - Delivery Class */

const deliveryClient = new Delivery(contentClient);
export default deliveryClient;