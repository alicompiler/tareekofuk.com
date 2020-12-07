import { AppDescriptor } from "./AppDescriptor";

export interface AppDescriptorRepository {
    fetch(): Promise<AppDescriptor>;
}


export class DefaultAppDescriptorRepository implements AppDescriptorRepository {

    private readonly URL: string = "";

    async fetch(): Promise<AppDescriptor> {
        const response = await fetch(this.URL);
        const data: AppDescriptor = await response.json();
        return data;
    }

}
